package screens.ui;

import bh.ui.UIElement;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class SlidersDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;

	var slider1:Null<UIStandardMultiAnimSlider>;
	var slider2:Null<UIStandardMultiAnimSlider>;
	var slider3:Null<UIStandardMultiAnimSlider>;

	var sliderScale2:Null<UIStandardMultiAnimSlider>;
	var sliderScale05:Null<UIStandardMultiAnimSlider>;

	var sliderStep1:Null<UIStandardMultiAnimSlider>;
	var sliderRange1:Null<UIStandardMultiAnimSlider>;
	var sliderStep100:Null<UIStandardMultiAnimSlider>;
	var sliderStep25:Null<UIStandardMultiAnimSlider>;

	var disableCheckbox:Null<UIStandardMultiCheckbox>;
	var allSliders:Array<UIStandardMultiAnimSlider> = [];

	override public function load():Void {
		setupDemo("Sliders", "Sliders: sizes, scales, and min/max/step combinations");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/sliders.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "slidersDemo", [], [
			slider1 => addSlider(stdBuilder, 0),
			slider2 => addSlider(stdBuilder, 0),
			slider3 => addSlider(stdBuilder, 0),
			sliderScale2 => addSlider(stdBuilder, 0),
			sliderScale05 => addSlider(stdBuilder, 0),
			sliderStep1 => addSlider(stdBuilder, 0),
			sliderRange1 => addSlider(stdBuilder, 0),
			sliderStep100 => addSlider(stdBuilder, 0),
			sliderStep25 => addSlider(stdBuilder, 0),
			disableCheckbox => addCheckbox(stdBuilder, false),
		]);

		demoResult = ui.builderResults;
		slider1 = ui.slider1;
		slider2 = ui.slider2;
		slider3 = ui.slider3;
		sliderScale2 = ui.sliderScale2;
		sliderScale05 = ui.sliderScale05;
		sliderStep1 = ui.sliderStep1;
		sliderRange1 = ui.sliderRange1;
		sliderStep100 = ui.sliderStep100;
		sliderStep25 = ui.sliderStep25;
		disableCheckbox = ui.disableCheckbox;
		allSliders = [
			ui.slider1, ui.slider2, ui.slider3,
			ui.sliderScale2, ui.sliderScale05,
			ui.sliderStep1, ui.sliderRange1, ui.sliderStep100, ui.sliderStep25,
		];

		sliderScale2.getObject().scaleX = 2;
		sliderScale2.getObject().scaleY = 2;
		sliderScale05.getObject().scaleX = 0.5;
		sliderScale05.getObject().scaleY = 0.5;

		sliderStep1.min = 0;
		sliderStep1.max = 10;
		sliderStep1.step = 1;
		sliderRange1.min = -50;
		sliderRange1.max = 50;
		sliderStep100.min = 0;
		sliderStep100.max = 1000;
		sliderStep100.step = 100;
		sliderStep25.min = 0;
		sliderStep25.max = 100;
		sliderStep25.step = 25;

		addBuilderResult(demoResult);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIChangeValue(value):
				if (source == slider1) updateValueDisplay("value1", value);
				else if (source == slider2) updateValueDisplay("value2", value);
				else if (source == slider3) updateValueDisplay("value3", value);
				else if (source == sliderScale2) updateValueDisplay("valueScale2", value);
				else if (source == sliderScale05) updateValueDisplay("valueScale05", value);
				else if (source == sliderStep1) updateValueDisplay("valueStep1", value);
				else if (source == sliderRange1) updateValueDisplay("valueRange1", value);
				else if (source == sliderStep100) updateValueDisplay("valueStep100", value);
				else if (source == sliderStep25) updateValueDisplay("valueStep25", value);
			case UIToggle(pressed):
				if (source == disableCheckbox) {
					for (s in allSliders)
						s.disabled = pressed;
				}
			default:
		}
		super.onScreenEvent(event, source);
	}

	function updateValueDisplay(name:String, value:Int):Void {
		if (demoResult == null) return;
		final updatable = demoResult.getUpdatable(name);
		if (updatable != null) {
			updatable.updateText('$value');
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		slider1 = null;
		slider2 = null;
		slider3 = null;
		sliderScale2 = null;
		sliderScale05 = null;
		sliderStep1 = null;
		sliderRange1 = null;
		sliderStep100 = null;
		sliderStep25 = null;
		disableCheckbox = null;
		allSliders = [];
	}
}
