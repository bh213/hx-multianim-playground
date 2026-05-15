package screens.advanced;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class ConditionalsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var valueSlider:Null<UIStandardMultiAnimSlider>;

	override public function load():Void {
		setupDemo("Conditionals", "All conditional types: @(), @if(), @else, @default, @switch, range, comparison operators");

		demoBuilder = screenManager.buildFromResourceName("demos/advanced/conditionals.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "conditionalsDemo", ["value" => 50, "tier" => "mid"], [
			valueSlider => addSlider(stdBuilder, 50),
		], true);

		demoResult = ui.builderResults;
		valueSlider = ui.valueSlider;
		addBuilderResult(demoResult);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIChangeValue(val):
				if (source == valueSlider && demoResult != null) {
					demoResult.setParameter("value", val);
					demoResult.setParameter("tier", tierFor(val));
				}
			default:
		}
	}

	static function tierFor(value:Int):String {
		if (value <= 33) return "low";
		if (value <= 66) return "mid";
		return "high";
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		valueSlider = null;
	}
}
