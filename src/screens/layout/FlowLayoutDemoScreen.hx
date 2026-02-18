package screens.layout;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class FlowLayoutDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var controlsResult:Null<BuilderResult>;
	var showcaseResult:Null<BuilderResult>;
	var countSlider:Null<UIStandardMultiAnimSlider>;

	static inline final BASE_X = 40;
	static inline final BASE_Y = 80;
	static inline final SHOWCASE_Y = 130;

	override public function load():Void {
		setupDemo("Flow Layout", "Flow containers with vertical, horizontal, stack layouts and overflow modes");

		demoBuilder = screenManager.buildFromResourceName("demos/layout/flow-layout.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "flowControls", [], [
			countSlider => addSlider(stdBuilder, 3),
		]);

		controlsResult = ui.builderResults;
		countSlider = ui.countSlider;
		controlsResult.object.setPosition(BASE_X, BASE_Y);
		addBuilderResult(controlsResult);

		buildShowcase(3);
	}

	function buildShowcase(count:Int):Void {
		if (showcaseResult != null) showcaseResult.object.remove();
		showcaseResult = demoBuilder.buildWithParameters("flowLayoutShowcase", ["count" => count]);
		showcaseResult.object.setPosition(BASE_X, SHOWCASE_Y);
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
