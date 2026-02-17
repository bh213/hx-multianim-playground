package screens.ui;

import bh.ui.UIElement;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.multianim.MultiAnimBuilder;

class SlidersDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;

	// Size sliders
	var slider1:Null<UIStandardMultiAnimSlider>;
	var slider2:Null<UIStandardMultiAnimSlider>;
	var slider3:Null<UIStandardMultiAnimSlider>;

	// Scale sliders
	var sliderScale2:Null<UIStandardMultiAnimSlider>;
	var sliderScale05:Null<UIStandardMultiAnimSlider>;

	// Min/max/step sliders
	var sliderStep1:Null<UIStandardMultiAnimSlider>;
	var sliderRange1:Null<UIStandardMultiAnimSlider>;
	var sliderStep100:Null<UIStandardMultiAnimSlider>;
	var sliderStep25:Null<UIStandardMultiAnimSlider>;

	override public function load():Void {
		setupDemo("Sliders", "Sliders: sizes, scales, and min/max/step combinations");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/sliders.manim", false);

		// Size sliders
		slider1 = addSlider(stdBuilder, null, 0);
		addElement(slider1, null);
		slider2 = addSlider(stdBuilder, null, 0);
		addElement(slider2, null);
		slider3 = addSlider(stdBuilder, null, 0);
		addElement(slider3, null);

		// Scale x2
		sliderScale2 = addSlider(stdBuilder, null, 0);
		sliderScale2.getObject().scaleX = 2;
		sliderScale2.getObject().scaleY = 2;
		addElement(sliderScale2, null);

		// Scale x0.5
		sliderScale05 = addSlider(stdBuilder, null, 0);
		sliderScale05.getObject().scaleX = 0.5;
		sliderScale05.getObject().scaleY = 0.5;
		addElement(sliderScale05, null);

		// 0-10, step 1
		sliderStep1 = addSlider(stdBuilder, null, 0);
		sliderStep1.min = 0;
		sliderStep1.max = 10;
		sliderStep1.step = 1;
		addElement(sliderStep1, null);

		// -50 to 50
		sliderRange1 = addSlider(stdBuilder, null, 0);
		sliderRange1.min = -50;
		sliderRange1.max = 50;
		addElement(sliderRange1, null);

		// 0-1000, step 100
		sliderStep100 = addSlider(stdBuilder, null, 0);
		sliderStep100.min = 0;
		sliderStep100.max = 1000;
		sliderStep100.step = 100;
		addElement(sliderStep100, null);

		// 0-100, step 25
		sliderStep25 = addSlider(stdBuilder, null, 0);
		sliderStep25.min = 0;
		sliderStep25.max = 100;
		sliderStep25.step = 25;
		addElement(sliderStep25, null);

		demoResult = demoBuilder.buildWithParameters("slidersDemo", [], {
			placeholderObjects: [
				"slider1" => PVObject(slider1.getObject()),
				"slider2" => PVObject(slider2.getObject()),
				"slider3" => PVObject(slider3.getObject()),
				"sliderScale2" => PVObject(sliderScale2.getObject()),
				"sliderScale05" => PVObject(sliderScale05.getObject()),
				"sliderStep1" => PVObject(sliderStep1.getObject()),
				"sliderRange1" => PVObject(sliderRange1.getObject()),
				"sliderStep100" => PVObject(sliderStep100.getObject()),
				"sliderStep25" => PVObject(sliderStep25.getObject()),
			]
		});

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
	}
}
