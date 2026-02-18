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
import h2d.col.Bounds;

class InventoryDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var resetButton:Null<UIStandardMultiAnimButton>;
	var draggables:Array<UIMultiAnimDraggable> = [];

	// Base position of the programmable
	static inline var BX = 30;
	static inline var BY = 70;

	// Grid layout
	static inline var GRID_COLS = 4;
	static inline var GRID_ROWS = 3;
	static inline var GRID_TOTAL = 12;
	static inline var CELL_STEP = 58;
	static inline var CELL_SIZE = 52;
	static inline var ITEM_PAD = 2;

	// Shop
	static inline var SHOP_COLS = 10;
	static inline var SHOP_STEP = 56;
	static inline var SHOP_X = 0;
	static inline var SHOP_Y = 30;

	// Inventory grid origin relative to programmable
	static inline var INV_X = 0;
	static inline var INV_Y = 155;
	static inline var ROW_STEP = 58;

	// Equipment area origin relative to programmable
	static inline var EQ_X = 310;
	static inline var EQ_Y = 155;

	static inline var MAX_WEIGHT = 60;
	static inline var START_GOLD = 600;
	static inline var MIN_ITEM_WEIGHT = 2;

	var gold:Int = START_GOLD;

	static final PLAYER_ROWS = ["p0", "p1", "p2"];

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

	// Equipment slot definitions: name matches manim slot, accepts = item equip type, dx/dy relative to EQ_X/EQ_Y
	static final EQUIP_DEFS:Array<{name:String, accepts:String, dx:Int, dy:Int}> = [
		{name: "eq_head", accepts: "head", dx: 58, dy: 0},
		{name: "eq_larm", accepts: "arm", dx: 0, dy: 66},
		{name: "eq_armor", accepts: "armor", dx: 58, dy: 66},
		{name: "eq_rarm", accepts: "arm", dx: 116, dy: 66},
		{name: "eq_legs", accepts: "legs", dx: 58, dy: 132},
	];

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

		for (eq in EQUIP_DEFS) {
			final s = demoResult.getSlot(eq.name);
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

	function getSlotByGrid(rows:Array<String>, idx:Int):SlotHandle {
		final row = Std.int(idx / GRID_COLS);
		final col = idx % GRID_COLS;
		return demoResult.getSlot(rows[row], col);
	}

	function playerSlot(idx:Int):SlotHandle {
		return getSlotByGrid(PLAYER_ROWS, idx);
	}

	function shopSlot(idx:Int):SlotHandle {
		return demoResult.getSlot("shop", idx);
	}

	function equipSlot(name:String):SlotHandle {
		return demoResult.getSlot(name);
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
		for (eq in EQUIP_DEFS) {
			final s = equipSlot(eq.name);
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
		for (eq in EQUIP_DEFS)
			if (equipSlot(eq.name).isOccupied()) n++;
		return n;
	}

	// ----- Pixel position helpers -----

	function invSlotScreenX(col:Int):Float {
		return BX + INV_X + col * CELL_STEP;
	}

	function invSlotScreenY(row:Int):Float {
		return BY + INV_Y + row * ROW_STEP;
	}

	function equipScreenX(eq:{name:String, accepts:String, dx:Int, dy:Int}):Float {
		return BX + EQ_X + eq.dx;
	}

	function equipScreenY(eq:{name:String, accepts:String, dx:Int, dy:Int}):Float {
		return BY + EQ_Y + eq.dy;
	}

	// ----- Zone helpers -----

	function isEquipZone(zoneId:String):Bool {
		return StringTools.startsWith(zoneId, "eq_");
	}

	function getInvZoneIdx(zoneId:String):Int {
		final parts = zoneId.split("_");
		return Std.parseInt(parts[1]);
	}

	function getEquipAccepts(slotName:String):String {
		for (eq in EQUIP_DEFS)
			if (eq.name == slotName) return eq.accepts;
		return "";
	}

	// ----- Draggable setup -----

	function rebuildAllDraggables():Void {
		for (d in draggables)
			removeElement(d);
		draggables = [];

		stockShop();
		for (i in 0...SHOP_COLS)
			setupShopDraggable(i);

		for (i in 0...GRID_TOTAL)
			if (playerSlot(i).isOccupied())
				setupInvDraggable(i);

		for (eqIdx in 0...EQUIP_DEFS.length)
			setupEquipDraggable(eqIdx);
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

	function addInvDropZones(drag:UIMultiAnimDraggable):Void {
		for (r in 0...GRID_ROWS) {
			for (c in 0...GRID_COLS) {
				final i = r * GRID_COLS + c;
				final slot = playerSlot(i);
				final x = invSlotScreenX(c);
				final y = invSlotScreenY(r);
				drag.addDropZone({
					id: 'p_${i}',
					bounds: Bounds.fromValues(x, y, CELL_SIZE, CELL_SIZE),
					snapX: x + ITEM_PAD,
					snapY: y + ITEM_PAD,
					slot: slot,
				});
			}
		}
	}

	function addEquipDropZones(drag:UIMultiAnimDraggable, itemKey:String):Void {
		final def = itemDef(itemKey);
		if (def == null || def.equip == "") return;

		for (eq in EQUIP_DEFS) {
			if (eq.accepts != def.equip) continue;
			final slot = equipSlot(eq.name);
			final x = equipScreenX(eq);
			final y = equipScreenY(eq);
			drag.addDropZone({
				id: eq.name,
				bounds: Bounds.fromValues(x, y, CELL_SIZE, CELL_SIZE),
				snapX: x + ITEM_PAD,
				snapY: y + ITEM_PAD,
				slot: slot,
			});
		}
	}

	function setupZoneHighlighting(drag:UIMultiAnimDraggable, itemKey:String):Void {
		drag.onDragStartHighlightZones = (zones) -> {
			// Highlight valid empty drop zones
			for (z in zones) {
				if (z.slot != null && z.slot.isEmpty())
					z.slot.setParameter("state", "highlight");
			}

			// Mark incompatible equipment slots as unavailable
			for (eq in EQUIP_DEFS) {
				var isValid = false;
				for (z in zones) {
					if (z.id == eq.name) {
						isValid = true;
						break;
					}
				}
				if (!isValid) {
					final s = equipSlot(eq.name);
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

		addInvDropZones(drag);
		addEquipDropZones(drag, itemKey);
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

		draggables.push(drag);
		addElementWithPos(drag, BX + SHOP_X + shopIdx * SHOP_STEP + ITEM_PAD, BY + SHOP_Y + ITEM_PAD, DefaultLayer);
	}

	function setupInvDraggable(slotIdx:Int):Void {
		final slot = playerSlot(slotIdx);
		if (slot.isEmpty()) return;
		final content = slot.getContent();
		if (content == null) return;

		final itemKey:String = slot.data;
		final drag = makeDraggable(content);

		addInvDropZones(drag);
		addEquipDropZones(drag, itemKey);
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
				final tgtIdx = getInvZoneIdx(result.zone.id);
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

		final col = slotIdx % GRID_COLS;
		final row = Std.int(slotIdx / GRID_COLS);
		draggables.push(drag);
		addElementWithPos(drag, invSlotScreenX(col) + ITEM_PAD, invSlotScreenY(row) + ITEM_PAD, DefaultLayer);
	}

	function setupEquipDraggable(eqIdx:Int):Void {
		final eq = EQUIP_DEFS[eqIdx];
		final slot = equipSlot(eq.name);
		if (slot.isEmpty()) return;
		final content = slot.getContent();
		if (content == null) return;

		final itemKey:String = slot.data;
		final drag = makeDraggable(content);

		addInvDropZones(drag);
		addEquipDropZones(drag, itemKey);
		setupZoneHighlighting(drag, itemKey);

		final srcName = eq.name;

		drag.onDragDrop = (result, wrapper) -> {
			if (result.zone == null) return false;
			final tgtSlot:SlotHandle = result.zone.slot;
			if (tgtSlot == null) return false;

			final def = itemDef(itemKey);
			if (def == null) return false;

			if (isEquipZone(result.zone.id)) {
				// Equipment → Equipment (e.g. L.Arm ↔ R.Arm)
				if (result.zone.id == srcName) return false;

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
					if (otherDef == null || otherDef.equip != eq.accepts) {
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

		draggables.push(drag);
		addElementWithPos(drag, equipScreenX(eq) + ITEM_PAD, equipScreenY(eq) + ITEM_PAD, DefaultLayer);
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
		demoResult.getUpdatable("playerCountText").updateText('Items: $ic / $GRID_TOTAL  Equipped: $ec / ${EQUIP_DEFS.length}');

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

		for (eq in EQUIP_DEFS) {
			final s = equipSlot(eq.name);
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
