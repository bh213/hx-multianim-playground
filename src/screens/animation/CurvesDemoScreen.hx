package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;
import bh.base.FontManager;

class CurvesDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var curveButtons:Array<UIStandardMultiAnimButton> = [];
	var currentCurve:String = "linear";
	var statusText:Null<h2d.Text>;

	override public function load():Void {
		setupDemo("Curves", "1D curve visualization using curves{} definitions with easing functions");

		demoBuilder = screenManager.buildFromResourceName("demos/animation/curves.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "curvesDemo", [], [
			btnLinear => addButtonWithSingleBuilder(commonBuilder, "backButton", "linear"),
			btnEaseIn => addButtonWithSingleBuilder(commonBuilder, "backButton", "easeIn"),
			btnEaseOut => addButtonWithSingleBuilder(commonBuilder, "backButton", "easeOut"),
			btnBounce => addButtonWithSingleBuilder(commonBuilder, "backButton", "bounce"),
			btnElastic => addButtonWithSingleBuilder(commonBuilder, "backButton", "elastic"),
			btnCustom => addButtonWithSingleBuilder(commonBuilder, "backButton", "custom"),
		]);

		demoResult = ui.builderResults;
		curveButtons = [ui.btnLinear, ui.btnEaseIn, ui.btnEaseOut, ui.btnBounce, ui.btnElastic, ui.btnCustom];
		addBuilderResult(demoResult);

		statusText = new h2d.Text(FontManager.getFontByName("exo2_light_14"));
		statusText.text = 'Curve: $currentCurve';
		statusText.textColor = 0xCCCCCC;
		statusText.setPosition(50, 630);
		addObjectToLayer(statusText, DefaultLayer);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				for (i in 0...curveButtons.length) {
					if (source == curveButtons[i]) {
						final curveTypes = ["linear", "easeIn", "easeOut", "bounce", "elastic", "custom"];
						currentCurve = curveTypes[i];
						if (statusText != null) {
							statusText.text = 'Curve: $currentCurve';
						}
						return;
					}
				}
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		curveButtons = [];
		statusText = null;
	}
}
