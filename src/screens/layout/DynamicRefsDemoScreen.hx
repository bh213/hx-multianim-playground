package screens.layout;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class DynamicRefsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var slider:Null<UIStandardMultiAnimSlider>;

	override public function load():Void {
		setupDemo("Dynamic Refs", "dynamicRef($ref) with runtime setParameter() updates via slider");

		demoBuilder = screenManager.buildFromResourceName("demos/layout/dynamic-refs.manim", false);

		// Use macroBuildWithParameters — the preferred way to add UI elements to manim-created UI.
		// It wires placeholder slots from the .manim file to UIElement factory calls,
		// keeping layout in the .manim and behavior in Haxe.
		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "dynamicRefsShowcase", ["barValue" => 50], [
			slider => addSlider(stdBuilder, 50),
		], true);

		demoResult = ui.builderResults;
		slider = ui.slider;
		addBuilderResult(demoResult);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIChangeValue(value):
				if (source == slider && demoResult != null) {
					demoResult.setParameter("barValue", value);
					final updatable = demoResult.getUpdatable("sliderValue");
					if (updatable != null) {
						updatable.updateText('$value');
					}
				}
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		slider = null;
	}
}
