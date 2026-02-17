package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
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

		// Build the demo UI layout
		demoResult = demoBuilder.buildWithParameters("stateAnimDemo", []);
		addBuilderResult(demoResult);

		// Load the marine anim and display it
		final animResult = demoBuilder.buildWithParameters("animDisplay", []);
		animResult.object.setPosition(400, 300);
		addBuilderResult(animResult);

		// Speed slider
		speedSlider = addSlider(stdBuilder, null, 50);
		addElement(speedSlider, DefaultLayer);
		speedSlider.getObject().setPosition(50, 620);

		// State buttons
		final states = ["idle", "walk", "shooting", "dead"];
		var xPos:Float = 50;
		for (state in states) {
			final btn = addButtonWithSingleBuilder(commonBuilder, "backButton", null, state);
			btn.getObject().setPosition(xPos, 660);
			stateButtons.push(btn);
			xPos += 100;
		}

		// Status text
		statusText = new h2d.Text(FontManager.getFontByName("exo2_light_14"));
		statusText.text = 'State: $currentState | Speed: ${animSpeed}x';
		statusText.textColor = 0xCCCCCC;
		statusText.setPosition(50, 590);
		addObjectToLayer(statusText, DefaultLayer);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == backButton) {
					screenManager.updateScreenMode(Single(screenManager.getScreen("nav")));
					return;
				}
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
