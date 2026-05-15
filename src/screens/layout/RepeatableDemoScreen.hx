package screens.layout;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class RepeatableDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var controlsResult:Null<BuilderResult>;
	var showcaseResult:Null<BuilderResult>;
	var countSlider:Null<UIStandardMultiAnimSlider>;

	override public function load():Void {
		setupDemo("Repeatable", "Generated grids via repeatable() with step, range, indexed elements, and layout()");

		demoBuilder = screenManager.buildFromResourceName("demos/layout/repeatable.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "repeatableControls", [], [
			countSlider => addSlider(stdBuilder, 3),
		]);

		controlsResult = ui.builderResults;
		countSlider = ui.countSlider;
		addBuilderResult(controlsResult);

		buildShowcase(3);
	}

	function buildShowcase(count:Int):Void {
		if (showcaseResult != null) showcaseResult.object.remove();
		showcaseResult = demoBuilder.buildWithParameters("repeatableShowcase", ["count" => count]);
		addBuilderResult(showcaseResult);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIChangeValue(value):
				if (source == countSlider) {
					buildShowcase(value);
					if (controlsResult != null) {
						final upd = controlsResult.getUpdatable("countText");
						if (upd != null) upd.updateText('$value');
					}
				}
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		controlsResult = null;
		showcaseResult = null;
		countSlider = null;
	}
}
