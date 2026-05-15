package screens.advanced;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class IncrementalDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var valueSlider:Null<UIStandardMultiAnimSlider>;

	override public function load():Void {
		setupDemo("Incremental Updates", "Build once, update live via setParameter() without full rebuild");

		demoBuilder = screenManager.buildFromResourceName("demos/advanced/incremental.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "incrementalDemo", ["value" => 50], [
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
