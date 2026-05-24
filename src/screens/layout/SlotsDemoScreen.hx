package screens.layout;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.multianim.MultiAnimBuilder;
import bh.multianim.MultiAnimBuilder.SlotHandle;
import bh.base.MacroUtils;
import bh.base.FontManager;

class SlotsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var slotsResult:Null<BuilderResult>;
	var autoAddCheckbox:Null<UIStandardMultiCheckbox>;

	static inline var TOTAL_SLOTS = 10;
	static inline var COLS = 5;
	static inline var SLOT_SPACING = 80;
	static inline var SLOT_SIZE = 70;
	static inline var ROW1_Y = 55;
	static inline var ROW2_Y = 145;

	static final ITEM_TYPES = ["hpot", "mpot", "lsword", "ssword", "shield", "ring", "boots", "scroll", "helm", "armor"];

	var slotItems:Array<Null<String>>;
	var statusTexts:Array<h2d.Text>;
	var slotInteractives:Array<h2d.Interactive>;
	var autoFillTimer:Float = 0;
	var clearDelay:Float = -1;
	var comboInteractives:Array<h2d.Interactive>;
	var comboItemCycleIdx:Int = 0;

	override public function load():Void {
		setupDemo("Slots", "Clickable slot containers with auto-fill items and auto-clear");

		demoBuilder = screenManager.buildFromResourceName("demos/layout/slots.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "slotsShowcase", [], [
			autoAddChk => addCheckbox(stdBuilder, true),
		], true);
		slotsResult = ui.builderResults;
		autoAddCheckbox = ui.autoAddChk;
		addBuilderResult(slotsResult);

		slotItems = [for (_ in 0...TOTAL_SLOTS) null];
		statusTexts = [];
		slotInteractives = [];

		final containerEl = slotsResult.getSingleItemByName("slotContainer");
		if (containerEl == null) return;
		final container = containerEl.object.toh2dObject();
		final font = FontManager.getFontByName("m6x11");

		for (i in 0...TOTAL_SLOTS) {
			final col = i % COLS;
			final row = Std.int(i / COLS);
			final x = col * SLOT_SPACING;
			final y = if (row == 0) ROW1_Y else ROW2_Y;

			// Set empty slot content from manim
			getSlotByIndex(i).setContent(buildSlotItem("empty"));

			// Status text under each slot (only visible when occupied)
			final text = new h2d.Text(font);
			text.textColor = 0xFF44cc44;
			text.textAlign = Center;
			text.maxWidth = SLOT_SIZE;
			text.setPosition(x, y + SLOT_SIZE + 2);
			container.addChild(text);
			statusTexts.push(text);

			// Click interactive over each slot
			final inter = new h2d.Interactive(SLOT_SIZE, SLOT_SIZE, container);
			inter.setPosition(x, y);
			final idx = i;
			inter.onClick = function(_) {
				onSlotClick(idx);
			};
			slotInteractives.push(inter);
		}

		updateCountText();

		// Set up combo slot section (enabled/disabled x none/cursed/blessed)
		comboInteractives = [];
		comboItemCycleIdx = 0;

		// Set states for each combo slot via parametrized slot API
		final enabledStates = ["en", "ec", "eb"];
		final disabledStates = ["dn", "dc", "db"];
		for (i in 0...3) {
			slotsResult.getSlot("cs_e", i).setParameter("state", enabledStates[i]);
			slotsResult.getSlot("cs_d", i).setParameter("state", disabledStates[i]);
		}

		// Click interactives for enabled combo slots only
		for (i in 0...3) {
			final inter = new h2d.Interactive(60, 60, container);
			inter.setPosition(100 + i * 80, 426);
			final colIdx = i;
			inter.onClick = function(_) {
				onComboSlotClick(colIdx);
			};
			comboInteractives.push(inter);
		}

		updateComboInfo();
	}

	function buildSlotItem(itemType:String):h2d.Object {
		final result = demoBuilder.buildWithParameters("slotItem", ["itemType" => itemType]);
		result.object.setPosition(11, 11);
		return result.object;
	}

	function getSlotByIndex(index:Int):SlotHandle {
		if (index < COLS) return slotsResult.getSlot("slot", index);
		return slotsResult.getSlot("slot2", index - COLS);
	}

	function onSlotClick(index:Int):Void {
		if (slotsResult == null || demoBuilder == null) return;
		if (clearDelay >= 0) return;
		if (slotItems[index] != null) {
			emptySlot(index);
			setLog('Emptied slot $index');
			return;
		}
		fillSlot(index);
		setLog('Clicked slot $index');
		checkAllFull();
	}

	function emptySlot(index:Int):Void {
		if (slotsResult == null || demoBuilder == null) return;
		getSlotByIndex(index).setContent(buildSlotItem("empty"));
		slotItems[index] = null;
		statusTexts[index].text = "";
		updateCountText();
	}

	function fillSlot(index:Int):Void {
		if (slotsResult == null || demoBuilder == null) return;

		final itemType = ITEM_TYPES[Std.int(Math.random() * ITEM_TYPES.length)];
		getSlotByIndex(index).setContent(buildSlotItem(itemType));
		slotItems[index] = itemType;
		statusTexts[index].text = "occupied";

		updateCountText();
	}

	function autoFillRandomSlot():Void {
		if (slotsResult == null || demoBuilder == null) return;

		var emptySlots:Array<Int> = [];
		for (i in 0...TOTAL_SLOTS) {
			if (slotItems[i] == null) emptySlots.push(i);
		}

		if (emptySlots.length == 0) return;

		final targetIndex = emptySlots[Std.int(Math.random() * emptySlots.length)];
		fillSlot(targetIndex);
		setLog('Auto-filled slot $targetIndex');
		checkAllFull();
	}

	function checkAllFull():Void {
		if (!isAutoAddEnabled()) return;
		for (i in 0...TOTAL_SLOTS) {
			if (slotItems[i] == null) return;
		}
		clearDelay = 1.0;
		setLog("All slots full! Clearing in 1s...");
	}

	function clearAllSlots():Void {
		if (slotsResult == null || demoBuilder == null) return;

		for (i in 0...TOTAL_SLOTS) {
			getSlotByIndex(i).setContent(buildSlotItem("empty"));
			slotItems[i] = null;
			statusTexts[i].text = "";
		}

		setLog("All slots full! Cleared.");
		updateCountText();
	}

	function updateCountText():Void {
		if (slotsResult == null) return;
		var count = 0;
		for (i in 0...TOTAL_SLOTS) {
			if (slotItems[i] != null) count++;
		}
		updateText("slotCountText", 'Slots: $count / $TOTAL_SLOTS occupied');
	}

	function setLog(text:String):Void {
		updateText("logText", text);
	}

	function updateText(fieldName:String, text:String):Void {
		if (slotsResult == null) return;
		final updatable = slotsResult.getUpdatable(fieldName);
		if (updatable != null) updatable.updateText(text);
	}

	function isAutoAddEnabled():Bool {
		return autoAddCheckbox != null && autoAddCheckbox.selected;
	}

	override public function update(dt:Float):Void {
		super.update(dt);

		if (clearDelay >= 0) {
			if (!isAutoAddEnabled()) {
				clearDelay = -1;
				return;
			}
			clearDelay -= dt;
			if (clearDelay < 0) {
				clearAllSlots();
			}
			return;
		}

		if (!isAutoAddEnabled()) return;

		autoFillTimer += dt;
		if (autoFillTimer >= 1.0) {
			autoFillTimer -= 1.0;
			autoFillRandomSlot();
		}
	}

	// ----- Combo slots (status x extra combinations) -----

	function onComboSlotClick(colIdx:Int):Void {
		if (slotsResult == null || demoBuilder == null) return;
		final slot = slotsResult.getSlot("cs_e", colIdx);

		if (slot.isOccupied()) {
			slot.clear();
			slot.data = null;
			setComboLog("Removed item. Overlays persist around empty slot.");
		} else {
			final itemType = ITEM_TYPES[comboItemCycleIdx % ITEM_TYPES.length];
			comboItemCycleIdx++;
			final result = demoBuilder.buildWithParameters("slotItem", ["itemType" => itemType]);
			result.object.setPosition(6, 6);
			// Apply glow filter to items inserted into blessed slots (col 2)
			if (colIdx == 2)
				result.object.filter = new h2d.filter.Glow(0xFFddaa44, 0.8, 4.0, 1.0, 1.0, true);
			slot.setContent(result.object);
			slot.data = itemType;
			setComboLog('Added $itemType. Overlays still visible around content.');
		}
		updateComboInfo();
	}

	function updateComboInfo():Void {
		if (slotsResult == null) return;
		var occupied = 0;
		for (i in 0...3) {
			if (slotsResult.getSlot("cs_e", i).isOccupied()) occupied++;
			if (slotsResult.getSlot("cs_d", i).isOccupied()) occupied++;
		}
		updateText("comboInfoText", 'Occupied: $occupied / 6  (only enabled slots accept clicks)');
	}

	function setComboLog(text:String):Void {
		updateText("comboStatusText", text);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {}

	override public function onClear():Void {
		super.onClear();
		if (slotInteractives != null) {
			for (inter in slotInteractives) inter.remove();
			slotInteractives = null;
		}
		if (comboInteractives != null) {
			for (inter in comboInteractives) inter.remove();
			comboInteractives = null;
		}
		demoBuilder = null;
		slotsResult = null;
		autoAddCheckbox = null;
		slotItems = null;
		statusTexts = null;
		autoFillTimer = 0;
		comboItemCycleIdx = 0;
	}
}
