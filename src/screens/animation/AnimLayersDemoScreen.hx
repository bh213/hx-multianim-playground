package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

/**
 * Layers in .anim (demos/animation/anim-layers.manim, marineLayers.anim): a body, a hat and a glow
 * drawn as one clip each on one clock. The buttons change the programmable's parameters, which the
 * stateanim's selectors name, so the running machine changes state in place (AnimationSM.setState).
 */
class AnimLayersDemoScreen extends DemoScreenBase {
	var builder:Null<MultiAnimBuilder>;
	var buttonsBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var hatButton:Null<UIStandardMultiAnimButton>;
	var glowButton:Null<UIStandardMultiAnimButton>;
	var dirButton:Null<UIStandardMultiAnimButton>;
	var animButton:Null<UIStandardMultiAnimButton>;

	var hat:String = "none";
	var glow:String = "off";
	var dir:String = "l";
	var anim:String = "walk";

	override public function load():Void {
		setupDemo("Layers in .anim", "One clip per layer on one clock: a hat and a glow that cannot drift from the body; a state changed mid-walk keeps the frame");

		builder = screenManager.buildFromResourceName("demos/animation/anim-layers.manim", false);
		buttonsBuilder = screenManager.buildFromResourceName("buttons.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(builder, "animLayersDemo", [], [
			hatBtn => addButtonWithSingleBuilder(buttonsBuilder, "main", "Hat: none"),
			glowBtn => addButtonWithSingleBuilder(buttonsBuilder, "main", "Glow: off"),
			dirBtn => addButtonWithSingleBuilder(buttonsBuilder, "main", "Facing: left"),
			animBtn => addButtonWithSingleBuilder(buttonsBuilder, "main", "Anim: walk"),
		]);
		demoResult = ui.builderResults;
		hatButton = ui.hatBtn;
		glowButton = ui.glowBtn;
		dirButton = ui.dirBtn;
		animButton = ui.animBtn;
		addBuilderResult(demoResult);
		updateStatus();
	}

	function apply():Void {
		if (demoResult == null)
			return;
		// one batch: the state machine is reloaded for the new states once, keeping its frame
		demoResult.beginUpdate();
		demoResult.setParameter("hat", hat);
		demoResult.setParameter("glow", glow);
		demoResult.setParameter("dir", dir);
		demoResult.setParameter("anim", anim);
		demoResult.endUpdate();
		if (hatButton != null) hatButton.setText('Hat: $hat');
		if (glowButton != null) glowButton.setText('Glow: $glow');
		if (dirButton != null) dirButton.setText('Facing: ${dir == "l" ? "left" : "right"}');
		if (animButton != null) animButton.setText('Anim: $anim');
		updateStatus();
	}

	function updateStatus():Void {
		if (demoResult == null)
			return;
		final updatable = demoResult.getUpdatable("statusText");
		if (updatable != null)
			updatable.updateText('setParameter on a selector calls AnimationSM.setState: the walk goes on from the same frame');
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == hatButton)
					hat = hat == "none" ? "cap" : "none";
				else if (source == glowButton)
					glow = glow == "off" ? "on" : "off";
				else if (source == dirButton)
					dir = dir == "l" ? "r" : "l";
				else if (source == animButton)
					anim = anim == "walk" ? "pose" : "walk";
				else
					return;
				apply();
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		builder = null;
		buttonsBuilder = null;
		demoResult = null;
		hatButton = null;
		glowButton = null;
		dirButton = null;
		animButton = null;
	}
}
