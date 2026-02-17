package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
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

		// Build demo layout with curve visualization
		demoResult = demoBuilder.buildWithParameters("curvesDemo", []);
		addBuilderResult(demoResult);

		// Curve type selector buttons
		final curveTypes = ["linear", "easeIn", "easeOut", "bounce", "elastic", "custom"];
		var xPos:Float = 50;
		for (curve in curveTypes) {
			final btn = addButtonWithSingleBuilder(commonBuilder, "backButton", null, curve);
			btn.getObject().setPosition(xPos, 660);
			curveButtons.push(btn);
			xPos += 110;
		}

		// Status text
		statusText = new h2d.Text(FontManager.getFontByName("exo2_light_14"));
		statusText.text = 'Curve: $currentCurve';
		statusText.textColor = 0xCCCCCC;
		statusText.setPosition(50, 630);
		addObjectToLayer(statusText, DefaultLayer);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == backButton) {
					screenManager.updateScreenMode(Single(screenManager.getScreen("nav")));
					return;
				}
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
