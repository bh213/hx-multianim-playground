package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.ui.UIMultiAnimDraggable;
import bh.ui.UIMultiAnimDraggable.DropZone;
import bh.ui.UIMultiAnimDraggable.DragEvent;
import bh.multianim.MultiAnimBuilder;
import bh.multianim.MultiAnimBuilder.SlotHandle;
import bh.base.MacroUtils;
import h2d.col.Point;

class InventoryDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var resetButton:Null<UIStandardMultiAnimButton>;
	var draggables:Array<UIMultiAnimDraggable> = [];

	static inline var GRID_TOTAL = 12;
	static inline var ITEM_PAD = 2;
	static inline var MAX_WEIGHT = 60;
	static inline var START_GOLD = 600;
	static inline var MIN_ITEM_WEIGHT = 2;

	var gold:Int = START_GOLD;

	// Item catalog — equip: "" = inventory only, "head"/"arm"/"armor"/"legs" = equipment slot type
	static final ITEMS:Array<{key:String, name:String, cost:Int, weight:Int, equip:String}> = [
		{key: "hpot", name: "H.Pot", cost: 25, weight: 3, equip: ""},
		{key: "mpot", name: "M.Pot", cost: 20, weight: 3, equip: ""},
		{key: "lsword", name: "L.Sword", cost: 180, weight: 18, equip: "arm"},
		{key: "ssword", name: "S.Sword", cost: 80, weight: 8, equip: "arm"},
		{key: "shield", name: "Shield", cost: 100, weight: 18, equip: "arm"},
		{key: "ring", name: "Ring", cost: 200, weight: 2, equip: ""},
		{key: "boots", name: "Boots", cost: 80, weight: 8, equip: "legs"},
		{key: "scroll", name: "Scroll", cost: 50, weight: 5, equip: ""},
		{key: "helm", name: "Helm", cost: 90, weight: 12, equip: "head"},
		{key: "armor", name: "Armor", cost: 150, weight: 20, equip: "armor"},
	];

	// Equipment slot accepts types (indexed: 0=head, 1=larm, 2=armor, 3=rarm, 4=legs)
	static final EQUIP_ACCEPTS:Array<String> = ["head", "arm", "armor", "arm", "legs"];

	override public function load():Void {
		setupDemo("Inventory Grid", "Shop, inventory & equipment with drag-drop, gold & weight");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/inventory.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "inventoryDemo", [], [
			resetBtn => addButtonWithSingleBuilder(stdBuilder, "button", "Reset"),
		]);
		demoResult = ui.builderResults;
		resetButton = ui.resetBtn;
		addBuilderResult(demoResult);

		stockShop();
		rebuildAllDraggables();
		refreshUI();
	}

	function stockShop():Void {
		for (i in 0...ITEMS.length) {
			final slot = demoResult.getSlot("shop", i);
			slot.data = ITEMS[i].key;
			slot.setContent(buildItem(ITEMS[i].key));
		}
	}

	function resetAll():Void {
		if (demoResult == null) return;
		gold = START_GOLD;

		for (i in 0...GRID_TOTAL) {
			final ps = playerSlot(i);
			ps.data = null;
			ps.clear();
			ps.setParameter("state", "normal");
		}

		for (i in 0...EQUIP_ACCEPTS.length) {
			final s = equipSlot(i);
			s.data = null;
			s.clear();
			s.setParameter("state", "normal");
		}

		stockShop();
		rebuildAllDraggables();
		refreshUI();
		setLog('Reset! Gold: ${START_GOLD}g, all cleared.');
	}

	// ----- Item helpers -----

	function buildItem(itemKey:String):h2d.Object {
		final result = demoBuilder.buildWithParameters("invItem", ["itemType" => itemKey]);
		result.object.setPosition(ITEM_PAD, ITEM_PAD);
		return result.object;
	}

	function itemDef(key:String):Null<{key:String, name:String, cost:Int, weight:Int, equip:String}> {
		for (d in ITEMS)
			if (d.key == key) return d;
		return null;
	}

	// ----- Slot access -----

	function playerSlot(idx:Int):SlotHandle {
		return demoResult.getSlot("inv", idx);
	}

	function shopSlot(idx:Int):SlotHandle {
		return demoResult.getSlot("shop", idx);
	}

	function equipSlot(idx:Int):SlotHandle {
		return demoResult.getSlot("equip", idx);
	}

	// ----- Weight / count helpers -----

	function invWeight():Int {
		var w = 0;
		for (i in 0...GRID_TOTAL) {
			final s = playerSlot(i);
			if (s.isOccupied()) {
				final def = itemDef(s.data);
				if (def != null) w += def.weight;
			}
		}
		return w;
	}

	function equipWeight():Int {
		var w = 0;
		for (i in 0...EQUIP_ACCEPTS.length) {
			final s = equipSlot(i);
			if (s.isOccupied()) {
				final def = itemDef(s.data);
				if (def != null) w += def.weight;
			}
		}
		return w;
	}

	function totalWeight():Int {
		return invWeight() + equipWeight();
	}

	function invCount():Int {
		var n = 0;
		for (i in 0...GRID_TOTAL)
			if (playerSlot(i).isOccupied()) n++;
		return n;
	}

	function equipCount():Int {
		var n = 0;
		for (i in 0...EQUIP_ACCEPTS.length)
			if (equipSlot(i).isOccupied()) n++;
		return n;
	}

	// ----- Zone helpers -----

	function slotScreenPos(slot:SlotHandle):Point {
		return slot.container.localToGlobal(new Point(0, 0));
	}

	function isEquipZone(zoneId:String):Bool {
		return StringTools.startsWith(zoneId, "equip_");
	}

	function zoneIdx(zoneId:String):Int {
		return Std.parseInt(zoneId.split("_").pop());
	}

	// ----- Draggable setup -----

	function rebuildAllDraggables():Void {
		for (d in draggables)
			removeElement(d);
		draggables = [];

		stockShop();
		for (i in 0...ITEMS.length)
			setupShopDraggable(i);

		for (i in 0...GRID_TOTAL)
			if (playerSlot(i).isOccupied())
				setupInvDraggable(i);

		for (i in 0...EQUIP_ACCEPTS.length)
			setupEquipDraggable(i);
	}

	function makeDraggable(content:h2d.Object):UIMultiAnimDraggable {
		final drag = UIMultiAnimDraggable.create(content);
		drag.setReturnAnimPath(demoBuilder, "returnAnim");
		drag.setSnapAnimPath(demoBuilder, "snapAnim");
		drag.dragAlpha = 0.7;
		drag.zoneHighlightAlpha = 1.0;
		drag.returnToOrigin = true;
		return drag;
	}

	function addDropZones(drag:UIMultiAnimDraggable, itemKey:String):Void {
		drag.addDropZonesFromSlots("inv", demoResult);

		final def = itemDef(itemKey);
		if (def != null && def.equip != "") {
			drag.addDropZonesFromSlots("equip", demoResult, (d, zone) -> {
				final idx = zoneIdx(zone.id);
				return EQUIP_ACCEPTS[idx] == def.equip;
			});
		}
	}

	function setupZoneHighlighting(drag:UIMultiAnimDraggable, itemKey:String):Void {
		drag.onDragStartHighlightZones = (zones) -> {
			for (z in zones) {
				if (z.slot != null)
					z.slot.setParameter("state", "highlight");
			}

			// Mark incompatible equipment slots as unavailable
			final def = itemDef(itemKey);
			if (def != null) {
				for (i in 0...EQUIP_ACCEPTS.length) {
					if (EQUIP_ACCEPTS[i] == def.equip) continue;
					final s = equipSlot(i);
					if (s.isEmpty())
						s.setParameter("state", "unavailable");
				}
			}
		};

		drag.onDragEndHighlightZones = (zones) -> {
			refreshUI();
		};
	}

	function setupShopDraggable(shopIdx:Int):Void {
		final slot = shopSlot(shopIdx);
		if (slot.isEmpty()) return;
		final content = slot.getContent();
		if (content == null) return;

		final itemKey:String = slot.data;
		final def = itemDef(itemKey);
		if (def != null && (gold < def.cost || totalWeight() + def.weight > MAX_WEIGHT)) return;

		final drag = makeDraggable(content);

		addDropZones(drag, itemKey);
		setupZoneHighlighting(drag, itemKey);

		drag.onDragDrop = (result, wrapper) -> {
			if (result.zone == null) return false;
			final tgtSlot:SlotHandle = result.zone.slot;
			if (tgtSlot == null || tgtSlot.isOccupied()) return false;

			final def = itemDef(itemKey);
			if (def == null) return false;

			if (gold < def.cost) {
				setLog('Not enough gold! Need ${def.cost}g, have ${gold}g');
				return false;
			}
			if (totalWeight() + def.weight > MAX_WEIGHT) {
				setLog('Too heavy! ${def.name} weighs ${def.weight}kg');
				return false;
			}

			gold -= def.cost;
			tgtSlot.data = itemKey;
			tgtSlot.setContent(buildItem(itemKey));

			// Restock shop
			slot.setContent(buildItem(itemKey));

			setLog('Bought ${def.name} for ${def.cost}g (${def.weight}kg)');
			rebuildAllDraggables();
			refreshUI();
			return false;
		};

		drag.onDragEvent = (event, pos, wrapper) -> {
			switch event {
				case DragStart:
					final def = itemDef(itemKey);
					if (def != null) setLog('${def.name}: ${def.cost}g, ${def.weight}kg');
				default:
			}
		};

		final p = slotScreenPos(slot);
		draggables.push(drag);
		addElementWithPos(drag, p.x, p.y, DefaultLayer);
	}

	function setupInvDraggable(slotIdx:Int):Void {
		final slot = playerSlot(slotIdx);
		if (slot.isEmpty()) return;
		final content = slot.getContent();
		if (content == null) return;

		final itemKey:String = slot.data;
		final drag = makeDraggable(content);

		addDropZones(drag, itemKey);
		setupZoneHighlighting(drag, itemKey);

		drag.onDragDrop = (result, wrapper) -> {
			if (result.zone == null) return false;
			final tgtSlot:SlotHandle = result.zone.slot;
			if (tgtSlot == null) return false;

			final def = itemDef(itemKey);
			if (def == null) return false;

			if (isEquipZone(result.zone.id)) {
				// Inventory → Equipment
				if (tgtSlot.isOccupied()) {
					// Swap: unequip old, equip new
					final otherKey:String = tgtSlot.data;
					final otherDef = itemDef(otherKey);
					slot.data = otherKey;
					slot.setContent(buildItem(otherKey));
					tgtSlot.data = itemKey;
					tgtSlot.setContent(buildItem(itemKey));
					setLog('Equipped ${def.name}, unequipped ${otherDef != null ? otherDef.name : "?"}');
				} else {
					slot.data = null;
					slot.clear();
					tgtSlot.data = itemKey;
					tgtSlot.setContent(buildItem(itemKey));
					setLog('Equipped ${def.name}');
				}
			} else {
				// Inventory → Inventory
				final tgtIdx = zoneIdx(result.zone.id);
				if (tgtIdx == slotIdx) return false;

				if (tgtSlot.isOccupied()) {
					final otherKey:String = tgtSlot.data;
					final otherDef = itemDef(otherKey);
					slot.data = otherKey;
					slot.setContent(buildItem(otherKey));
					tgtSlot.data = itemKey;
					tgtSlot.setContent(buildItem(itemKey));
					setLog('Swapped ${def.name} <-> ${otherDef != null ? otherDef.name : "?"}');
				} else {
					slot.data = null;
					slot.clear();
					tgtSlot.data = itemKey;
					tgtSlot.setContent(buildItem(itemKey));
					setLog('Moved ${def.name}');
				}
			}

			rebuildAllDraggables();
			refreshUI();
			return false;
		};

		drag.onDragEvent = (event, pos, wrapper) -> {
			switch event {
				case DragStart:
					final def = itemDef(itemKey);
					if (def != null) setLog('${def.name}: ${def.weight}kg');
				default:
			}
		};

		final p = slotScreenPos(slot);
		draggables.push(drag);
		addElementWithPos(drag, p.x, p.y, DefaultLayer);
	}

	function setupEquipDraggable(eqIdx:Int):Void {
		final slot = equipSlot(eqIdx);
		if (slot.isEmpty()) return;
		final content = slot.getContent();
		if (content == null) return;

		final itemKey:String = slot.data;
		final drag = makeDraggable(content);

		addDropZones(drag, itemKey);
		setupZoneHighlighting(drag, itemKey);

		final srcZoneId = 'equip_$eqIdx';
		final srcAccepts = EQUIP_ACCEPTS[eqIdx];

		drag.onDragDrop = (result, wrapper) -> {
			if (result.zone == null) return false;
			final tgtSlot:SlotHandle = result.zone.slot;
			if (tgtSlot == null) return false;

			final def = itemDef(itemKey);
			if (def == null) return false;

			if (isEquipZone(result.zone.id)) {
				// Equipment → Equipment (e.g. L.Arm ↔ R.Arm)
				if (result.zone.id == srcZoneId) return false;

				if (tgtSlot.isOccupied()) {
					final otherKey:String = tgtSlot.data;
					final otherDef = itemDef(otherKey);
					slot.data = otherKey;
					slot.setContent(buildItem(otherKey));
					tgtSlot.data = itemKey;
					tgtSlot.setContent(buildItem(itemKey));
					setLog('Swapped ${def.name} <-> ${otherDef != null ? otherDef.name : "?"}');
				} else {
					slot.data = null;
					slot.clear();
					tgtSlot.data = itemKey;
					tgtSlot.setContent(buildItem(itemKey));
					setLog('Moved ${def.name}');
				}
			} else {
				// Equipment → Inventory (unequip)
				if (tgtSlot.isOccupied()) {
					// Swap: check if inventory item can equip here
					final otherKey:String = tgtSlot.data;
					final otherDef = itemDef(otherKey);
					if (otherDef == null || otherDef.equip != srcAccepts) {
						setLog('Can\'t swap: ${otherDef != null ? otherDef.name : "?"} can\'t be equipped here');
						return false;
					}
					slot.data = otherKey;
					slot.setContent(buildItem(otherKey));
					tgtSlot.data = itemKey;
					tgtSlot.setContent(buildItem(itemKey));
					setLog('Unequipped ${def.name}, equipped ${otherDef.name}');
				} else {
					slot.data = null;
					slot.clear();
					tgtSlot.data = itemKey;
					tgtSlot.setContent(buildItem(itemKey));
					setLog('Unequipped ${def.name}');
				}
			}

			rebuildAllDraggables();
			refreshUI();
			return false;
		};

		drag.onDragEvent = (event, pos, wrapper) -> {
			switch event {
				case DragStart:
					final def = itemDef(itemKey);
					if (def != null) setLog('${def.name}: ${def.weight}kg (equipped)');
				default:
			}
		};

		final p = slotScreenPos(slot);
		draggables.push(drag);
		addElementWithPos(drag, p.x, p.y, DefaultLayer);
	}

	// ----- UI refresh -----

	function refreshUI():Void {
		if (demoResult == null) return;

		final tw = totalWeight();
		final ic = invCount();
		final ec = equipCount();

		demoResult.getUpdatable("goldText").updateText('$gold');
		demoResult.getUpdatable("weightText").updateText('$tw / $MAX_WEIGHT kg');
		demoResult.getUpdatable("playerWeightText").updateText('Weight: $tw / $MAX_WEIGHT kg');
		demoResult.getUpdatable("playerCountText").updateText('Items: $ic / $GRID_TOTAL  Equipped: $ec / ${EQUIP_ACCEPTS.length}');

		updateSlotStates();
	}

	function updateSlotStates():Void {
		final tw = totalWeight();
		final weightFull = tw + MIN_ITEM_WEIGHT > MAX_WEIGHT;
		final cantAfford = gold < 20; // cheapest item costs 20g
		final disabled = weightFull || cantAfford;

		// Shop slots: mark unavailable if can't afford or too heavy
		for (i in 0...ITEMS.length) {
			final slot = shopSlot(i);
			final def = ITEMS[i];
			final unavail = gold < def.cost || tw + def.weight > MAX_WEIGHT;
			slot.setParameter("state", if (unavail) "unavailable" else "normal");
			final content = slot.getContent();
			if (content != null)
				content.visible = !unavail;
		}

		for (i in 0...GRID_TOTAL) {
			final slot = playerSlot(i);
			if (slot.isOccupied()) continue;
			slot.setParameter("state", if (disabled) "disabled" else "normal");
		}

		for (i in 0...EQUIP_ACCEPTS.length) {
			final s = equipSlot(i);
			if (s.isOccupied()) continue;
			s.setParameter("state", if (disabled) "disabled" else "normal");
		}
	}

	function setLog(text:String):Void {
		if (demoResult != null)
			demoResult.getUpdatable("logText").updateText(text);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == resetButton)
					resetAll();
			default:
		}
		super.onScreenEvent(event, source);
	}

	override public function onClear():Void {
		super.onClear();
		draggables = [];
		demoBuilder = null;
		demoResult = null;
		resetButton = null;
		gold = START_GOLD;
	}
}
