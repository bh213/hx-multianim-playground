package screens.layout;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;

class SlotsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var slotsResult:Null<BuilderResult>;
	var swapButton:Null<UIStandardMultiAnimButton>;
	var clearButton:Null<UIStandardMultiAnimButton>;
	var slotIndex:Int = 0;

	override public function load():Void {
		setupDemo("Slots", "Swappable slot containers with #name slot and #name[$i] slot");

		demoBuilder = screenManager.buildFromResourceName("demos/layout/slots.manim", false);

		slotsResult = demoBuilder.buildWithParameters("slotsShowcase", []);
		slotsResult.object.setPosition(40, 80);
		addBuilderResult(slotsResult);

		// Add swap and clear buttons
		swapButton = addButtonWithSingleBuilder(commonBuilder, "backButton", null, "Swap");
		swapButton.getObject().setPosition(500, 100);

		clearButton = addButtonWithSingleBuilder(commonBuilder, "backButton", null, "Clear");
		clearButton.getObject().setPosition(600, 100);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == backButton) {
					screenManager.updateScreenMode(Single(screenManager.getScreen("nav")));
				} else if (source == swapButton && slotsResult != null) {
					// Swap slot content by putting a colored bitmap into a slot
					var slot = slotsResult.getSlot("content", slotIndex % 3);
					var bmp = new h2d.Bitmap(h2d.Tile.fromColor(Std.int(Math.random() * 0xFFFFFF), 50, 50));
					slot.setContent(bmp);
					slotIndex++;
				} else if (source == clearButton && slotsResult != null) {
					// Clear all slots
					for (i in 0...3) {
						slotsResult.getSlot("content", i).clear();
					}
				}
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		slotsResult = null;
		swapButton = null;
		clearButton = null;
	}
}
