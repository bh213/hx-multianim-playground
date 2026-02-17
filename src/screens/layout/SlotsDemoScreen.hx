package screens.layout;

import bh.ui.UIElement;
import bh.ui.*;
import bh.multianim.MultiAnimBuilder;
import bh.base.FontManager;

class SlotsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var slotsResult:Null<BuilderResult>;

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

	override public function load():Void {
		setupDemo("Slots", "Clickable slot containers with auto-fill items and auto-clear");

		demoBuilder = screenManager.buildFromResourceName("demos/layout/slots.manim", false);

		slotsResult = demoBuilder.buildWithParameters("slotsShowcase", []);
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

			// Set empty bag icon as initial slot content
			getSlotByIndex(i).setContent(createEmptySlotGraphic());

			// Status text under each slot
			final text = new h2d.Text(font);
			text.text = "empty";
			text.textColor = 0x888888;
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
	}

	function createEmptySlotGraphic():h2d.Object {
		var g = new h2d.Graphics();

		// Slot border
		g.lineStyle(1, 0x556677);
		g.drawRect(5, 15, 60, 40);

		// Bag body
		g.beginFill(0x3a3a4a);
		g.moveTo(20, 28);
		g.lineTo(16, 48);
		g.lineTo(48, 48);
		g.lineTo(44, 28);
		g.endFill();

		// Bag outline
		g.lineStyle(1, 0x667788);
		g.moveTo(20, 28);
		g.lineTo(16, 48);
		g.lineTo(48, 48);
		g.lineTo(44, 28);
		g.lineTo(20, 28);

		// Bag opening
		g.lineStyle(1, 0x778899);
		g.moveTo(20, 28);
		g.lineTo(44, 28);

		// Handle
		g.lineStyle(1, 0x667788);
		g.moveTo(26, 28);
		g.lineTo(26, 22);
		g.lineTo(38, 22);
		g.lineTo(38, 28);

		return g;
	}

	function getSlotByIndex(index:Int):SlotHandle {
		if (index < COLS) return slotsResult.getSlot("slot", index);
		return slotsResult.getSlot("slot2", index - COLS);
	}

	function onSlotClick(index:Int):Void {
		if (slotsResult == null || demoBuilder == null) return;
		if (clearDelay >= 0) return;
		if (slotItems[index] != null) return;
		fillSlot(index);
		setLog('Clicked slot $index');
		checkAllFull();
	}

	function fillSlot(index:Int):Void {
		if (slotsResult == null || demoBuilder == null) return;

		final itemType = ITEM_TYPES[Std.int(Math.random() * ITEM_TYPES.length)];
		final itemResult = demoBuilder.buildWithParameters("slotItem", ["itemType" => itemType]);
		itemResult.object.setPosition(5, 15);

		getSlotByIndex(index).setContent(itemResult.object);
		slotItems[index] = itemType;

		statusTexts[index].text = "occupied";
		statusTexts[index].textColor = 0x44cc44;

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
		for (i in 0...TOTAL_SLOTS) {
			if (slotItems[i] == null) return;
		}
		clearDelay = 1.0;
		setLog("All slots full! Clearing in 1s...");
	}

	function clearAllSlots():Void {
		if (slotsResult == null) return;

		for (i in 0...TOTAL_SLOTS) {
			getSlotByIndex(i).setContent(createEmptySlotGraphic());
			slotItems[i] = null;
			statusTexts[i].text = "empty";
			statusTexts[i].textColor = 0x888888;
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

	override public function update(dt:Float):Void {
		super.update(dt);

		if (clearDelay >= 0) {
			clearDelay -= dt;
			if (clearDelay < 0) {
				clearAllSlots();
			}
			return;
		}

		autoFillTimer += dt;
		if (autoFillTimer >= 1.0) {
			autoFillTimer -= 1.0;
			autoFillRandomSlot();
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
		slotItems = null;
		statusTexts = null;
		autoFillTimer = 0;
	}
}
