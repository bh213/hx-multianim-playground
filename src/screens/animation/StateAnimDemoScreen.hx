package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;
import bh.base.FontManager;

class StateAnimDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var speedSlider:Null<UIStandardMultiAnimSlider>;
	var stateButtons:Array<UIStandardMultiAnimButton> = [];
	var animSpeed:Float = 1.0;
	var currentState:String = "idle";
	var statusText:Null<h2d.Text>;

	override public function load():Void {
		setupDemo("State Animations", "Load and display .anim state animations with state selection and speed control");

		demoBuilder = screenManager.buildFromResourceName("demos/animation/state-anim.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "stateAnimDemo", [], [
			speedSlider => addSlider(stdBuilder, 50),
			btnIdle => addButtonWithSingleBuilder(commonBuilder, "backButton", "idle"),
			btnWalk => addButtonWithSingleBuilder(commonBuilder, "backButton", "walk"),
			btnShooting => addButtonWithSingleBuilder(commonBuilder, "backButton", "shooting"),
			btnDead => addButtonWithSingleBuilder(commonBuilder, "backButton", "dead"),
		]);

		demoResult = ui.builderResults;
		speedSlider = ui.speedSlider;
		stateButtons = [ui.btnIdle, ui.btnWalk, ui.btnShooting, ui.btnDead];
		addBuilderResult(demoResult);

		final animResult = demoBuilder.buildWithParameters("animDisplay", []);
		animResult.object.setPosition(400, 300);
		addBuilderResult(animResult);

		statusText = new h2d.Text(FontManager.getFontByName("exo2_light_14"));
		statusText.text = 'State: $currentState | Speed: ${animSpeed}x';
		statusText.textColor = 0xCCCCCC;
		statusText.setPosition(50, 590);
		addObjectToLayer(statusText, DefaultLayer);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				for (i in 0...stateButtons.length) {
					if (source == stateButtons[i]) {
						final states = ["idle", "walk", "shooting", "dead"];
						currentState = states[i];
						updateStatusText();
						return;
					}
				}
			case UIChangeValue(val):
				if (source == speedSlider) {
					animSpeed = val / 50.0;
					updateStatusText();
				}
			default:
		}
	}

	function updateStatusText():Void {
		if (statusText != null) {
			statusText.text = 'State: $currentState | Speed: ${Math.round(animSpeed * 100) / 100}x';
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		speedSlider = null;
		stateButtons = [];
		statusText = null;
	}
}
