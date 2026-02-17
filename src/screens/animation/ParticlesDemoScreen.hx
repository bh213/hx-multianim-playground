package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
import bh.base.FontManager;

class ParticlesDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var particleResults:Array<BuilderResult> = [];
	var presetButtons:Array<UIStandardMultiAnimButton> = [];
	var activePreset:Int = 0;
	var labelText:Null<h2d.Text>;

	override public function load():Void {
		setupDemo("Particles", "Particle effects defined in .manim using particles{} blocks");

		demoBuilder = screenManager.buildFromResourceName("demos/animation/particles.manim", false);

		// Build the main demo layout
		final demoResult = demoBuilder.buildWithParameters("particlesDemo", []);
		addBuilderResult(demoResult);

		// Build particle effect displays
		final presets = ["fire", "sparkles", "smoke"];
		for (i in 0...presets.length) {
			final result = demoBuilder.buildWithParameters(presets[i], []);
			result.object.setPosition(200 + i * 350, 350);
			addBuilderResult(result);
			particleResults.push(result);
		}

		// Preset selector buttons
		var xPos:Float = 50;
		for (preset in presets) {
			final btn = addButtonWithSingleBuilder(commonBuilder, "backButton", null, preset);
			btn.getObject().setPosition(xPos, 660);
			presetButtons.push(btn);
			xPos += 120;
		}

		// Label
		labelText = new h2d.Text(FontManager.getFontByName("exo2_light_14"));
		labelText.text = "Active: fire | Click preset to highlight";
		labelText.textColor = 0xCCCCCC;
		labelText.setPosition(50, 630);
		addObjectToLayer(labelText, DefaultLayer);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				for (i in 0...presetButtons.length) {
					if (source == presetButtons[i]) {
						activePreset = i;
						final presets = ["fire", "sparkles", "smoke"];
						if (labelText != null) {
							labelText.text = 'Active: ${presets[i]}';
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
		particleResults = [];
		presetButtons = [];
		labelText = null;
	}
}
