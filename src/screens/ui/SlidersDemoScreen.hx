package screens.ui;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;

class SlidersDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var slider1:Null<UIStandardMultiAnimSlider>;
	var slider2:Null<UIStandardMultiAnimSlider>;
	var slider3:Null<UIStandardMultiAnimSlider>;
	var sliderValues:Array<Int> = [0, 0, 0];

	override public function load():Void {
		setupDemo("Sliders", "Sliders in three sizes with live value display");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/sliders.manim", false);

		slider1 = addSlider(stdBuilder, null, 0);
		slider2 = addSlider(stdBuilder, null, 0);
		slider3 = addSlider(stdBuilder, null, 0);

		demoResult = demoBuilder.buildWithParameters("slidersDemo", [], {
			placeholderObjects: [
				"slider1" => PVObject(slider1.getObject()),
				"slider2" => PVObject(slider2.getObject()),
				"slider3" => PVObject(slider3.getObject()),
			]
		});

		addBuilderResult(demoResult);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIChangeValue(value):
				if (source == slider1) {
					sliderValues[0] = value;
					updateValueDisplay(0, value);
				} else if (source == slider2) {
					sliderValues[1] = value;
					updateValueDisplay(1, value);
				} else if (source == slider3) {
					sliderValues[2] = value;
					updateValueDisplay(2, value);
				}
				updateSummary();
			default:
		}
		super.onScreenEvent(event, source);
	}

	function updateValueDisplay(index:Int, value:Int):Void {
		if (demoResult == null) return;
		final names = ["value1", "value2", "value3"];
		final updatable = demoResult.getUpdatable(names[index]);
		if (updatable != null) {
			updatable.updateText('$value');
		}
	}

	function updateSummary():Void {
		if (demoResult == null) return;
		final updatable = demoResult.getUpdatable("summaryText");
		if (updatable != null) {
			updatable.updateText('Small: ${sliderValues[0]}  |  Medium: ${sliderValues[1]}  |  Large: ${sliderValues[2]}');
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		slider1 = null;
		slider2 = null;
		slider3 = null;
		sliderValues = [0, 0, 0];
	}
}
