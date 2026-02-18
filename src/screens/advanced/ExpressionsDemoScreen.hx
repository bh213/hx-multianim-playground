package screens.advanced;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class ExpressionsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var valueSlider:Null<UIStandardMultiAnimSlider>;

	override public function load():Void {
		setupDemo("Expressions", "Arithmetic, ternary, and string interpolation with $param references");

		demoBuilder = screenManager.buildFromResourceName("demos/advanced/expressions.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "expressionsDemo", [], [
			valueSlider => addSlider(stdBuilder, 25),
		], true);

		demoResult = ui.builderResults;
		valueSlider = ui.valueSlider;
		addBuilderResult(demoResult);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIChangeValue(val):
				if (source == valueSlider) {
					if (demoResult != null) {
						demoResult.setParameter("value", val);
					}
				}
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		valueSlider = null;
	}
}
