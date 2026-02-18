package screens.layout;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.multianim.MultiAnimBuilder;
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

	static final ITEM_TYPES = ["sword", "shield", "potion", "ring", "scroll"];

	var slotItems:Array<Null<String>>;
	var statusTexts:Array<h2d.Text>;
	var slotInteractives:Array<h2d.Interactive>;
	var autoFillTimer:Float = 0;
	var clearDelay:Float = -1;
	var paramSlotTimer:Float = 0;

	override public function load():Void {
		setupDemo("Slots", "Clickable slot containers with auto-fill items and auto-clear");

		demoBuilder = screenManager.buildFromResourceName("demos/layout/slots.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "slotsShowcase", [], [
			autoAddChk => addCheckbox(stdBuilder, true),
		]);
		slotsResult = ui.builderResults;
		autoAddCheckbox = ui.autoAddChk;
		addBuilderResult(slotsResult);

		slotItems = [for (_ in 0...TOTAL_SLOTS) null];
		statusTexts = [];
		slotInteractives = [];

		final container = slotsResult.getSingleItemByName("slotContainer").object.toh2dObject();
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
			text.textColor = 0x44cc44;
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

		// Initialize parameterized slots with diverse states to showcase
		paramSlotTimer = 0;
		final paramStates = ["empty", "filled", "highlight", "error"];
		for (i in 0...4) {
			slotsResult.getSlot("paramSlot", i).setParameter("state", paramStates[i]);
		}
	}

	function buildSlotItem(itemType:String):h2d.Object {
		final result = demoBuilder.buildWithParameters("slotItem", ["itemType" => itemType]);
		result.object.setPosition(5, 15);
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
		slotsResult.getUpdatable("slotCountText").updateText('Slots: $count / $TOTAL_SLOTS occupied');
	}

	function setLog(text:String):Void {
		if (slotsResult != null) {
			slotsResult.getUpdatable("logText").updateText(text);
		}
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

		// Cycle parameterized slot states
		if (slotsResult != null) {
			paramSlotTimer += dt;
			if (paramSlotTimer >= 1.5) {
				paramSlotTimer -= 1.5;
				final states = ["empty", "filled", "highlight", "error"];
				for (i in 0...4) {
					final newState = states[Std.int(Math.random() * states.length)];
					slotsResult.getSlot("paramSlot", i).setParameter("state", newState);
				}
			}
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {}

	override public function onClear():Void {
		super.onClear();
		if (slotInteractives != null) {
			for (inter in slotInteractives) inter.remove();
			slotInteractives = null;
		}
		demoBuilder = null;
		slotsResult = null;
		autoAddCheckbox = null;
		slotItems = null;
		statusTexts = null;
		autoFillTimer = 0;
		paramSlotTimer = 0;
	}
}
