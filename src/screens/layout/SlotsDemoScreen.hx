package screens.layout;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class SlotsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var slotsResult:Null<BuilderResult>;
	var swapButton:Null<UIStandardMultiAnimButton>;
	var clearButton:Null<UIStandardMultiAnimButton>;
	var slotIndex:Int = 0;

	override public function load():Void {
		setupDemo("Slots", "Swappable slot containers with #name slot and #name[$i] slot");

		demoBuilder = screenManager.buildFromResourceName("demos/layout/slots.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "slotsShowcase", [], [
			swapButton => addButtonWithSingleBuilder(commonBuilder, "backButton", "Swap"),
			clearButton => addButtonWithSingleBuilder(commonBuilder, "backButton", "Clear"),
		]);

		slotsResult = ui.builderResults;
		swapButton = ui.swapButton;
		clearButton = ui.clearButton;
		addBuilderResult(slotsResult);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == swapButton && slotsResult != null) {
					var slot = slotsResult.getSlot("content", slotIndex % 3);
					var bmp = new h2d.Bitmap(h2d.Tile.fromColor(Std.int(Math.random() * 0xFFFFFF), 50, 50));
					slot.setContent(bmp);
					slotIndex++;
				} else if (source == clearButton && slotsResult != null) {
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
