package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class TransitionsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var buttonsBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;

	// Incremental results for transition demos
	var crossfadeResult:Null<BuilderResult>;
	var instantResult:Null<BuilderResult>;
	var flipResult:Null<BuilderResult>;
	var fadeResult:Null<BuilderResult>;
	var slideLeftResult:Null<BuilderResult>;
	var slideRightResult:Null<BuilderResult>;
	var slideUpResult:Null<BuilderResult>;
	var slideDownResult:Null<BuilderResult>;
	var flipYResult:Null<BuilderResult>;

	// Buttons
	var btnNormal:Null<UIStandardMultiAnimButton>;
	var btnHover:Null<UIStandardMultiAnimButton>;
	var btnPressed:Null<UIStandardMultiAnimButton>;
	var btnFlip:Null<UIStandardMultiAnimButton>;
	var btnFade:Null<UIStandardMultiAnimButton>;
	var btnSlide:Null<UIStandardMultiAnimButton>;
	var btnFlipY:Null<UIStandardMultiAnimButton>;

	// State
	var flipState:Bool = false;
	var fadeState:Bool = true;
	var slideState:Bool = true;
	var flipYState:Bool = false;

	override public function load():Void {
		setupDemo("Transitions", "Animate parameter changes with transition {} blocks — crossfade, flip, fade, slide");

		demoBuilder = screenManager.buildFromResourceName("demos/animation/transitions.manim", false);
		buttonsBuilder = screenManager.buildFromResourceName("buttons.manim", false);

		// Build the incremental programmables
		crossfadeResult = demoBuilder.buildWithParameters("crossfadeBox", ["status" => "normal"], null, null, true);
		instantResult = demoBuilder.buildWithParameters("instantBox", ["status" => "normal"], null, null, true);
		flipResult = demoBuilder.buildWithParameters("flipBox", ["checked" => false], null, null, true);
		fadeResult = demoBuilder.buildWithParameters("fadeBox", ["show" => true], null, null, true);
		slideLeftResult = demoBuilder.buildWithParameters("slideLeftBox", ["show" => true], null, null, true);
		slideRightResult = demoBuilder.buildWithParameters("slideRightBox", ["show" => true], null, null, true);
		slideUpResult = demoBuilder.buildWithParameters("slideUpBox", ["show" => true], null, null, true);
		slideDownResult = demoBuilder.buildWithParameters("slideDownBox", ["show" => true], null, null, true);
		flipYResult = demoBuilder.buildWithParameters("flipYBox", ["checked" => false], null, null, true);

		// Build the layout shell with placeholders
		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "transitionsDemo", [], [
			crossfadeBox => crossfadeResult.object,
			instantBox => instantResult.object,
			flipBox => flipResult.object,
			fadeBox => fadeResult.object,
			slideLeft => slideLeftResult.object,
			slideRight => slideRightResult.object,
			slideUp => slideUpResult.object,
			slideDown => slideDownResult.object,
			flipYBox => flipYResult.object,
			btnNormal => addButtonWithSingleBuilder(buttonsBuilder, "main", "Normal"),
			btnHover => addButtonWithSingleBuilder(buttonsBuilder, "main", "Hover"),
			btnPressed => addButtonWithSingleBuilder(buttonsBuilder, "main", "Pressed"),
			btnFlip => addButtonWithSingleBuilder(buttonsBuilder, "main", "Toggle"),
			btnFade => addButtonWithSingleBuilder(buttonsBuilder, "main", "Toggle"),
			btnSlide => addButtonWithSingleBuilder(buttonsBuilder, "main", "Toggle"),
			btnFlipY => addButtonWithSingleBuilder(buttonsBuilder, "main", "Toggle"),
		]);

		demoResult = ui.builderResults;
		btnNormal = ui.btnNormal;
		btnHover = ui.btnHover;
		btnPressed = ui.btnPressed;
		btnFlip = ui.btnFlip;
		btnFade = ui.btnFade;
		btnSlide = ui.btnSlide;
		btnFlipY = ui.btnFlipY;

		addBuilderResult(demoResult);
	}

	function setStatus(status:String):Void {
		if (crossfadeResult != null)
			crossfadeResult.setParameter("status", status);
		if (instantResult != null)
			instantResult.setParameter("status", status);
		updateStatusText('Status -> $status');
	}

	function updateStatusText(msg:String):Void {
		if (demoResult != null) {
			final updatable = demoResult.getUpdatable("statusText");
			if (updatable != null)
				updatable.updateText(msg);
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == btnNormal) {
					setStatus("normal");
				} else if (source == btnHover) {
					setStatus("hover");
				} else if (source == btnPressed) {
					setStatus("pressed");
				} else if (source == btnFlip) {
					flipState = !flipState;
					if (flipResult != null)
						flipResult.setParameter("checked", flipState);
					updateStatusText('FlipX checked -> $flipState');
				} else if (source == btnFade) {
					fadeState = !fadeState;
					if (fadeResult != null)
						fadeResult.setParameter("show", fadeState);
					updateStatusText('Fade show -> $fadeState');
				} else if (source == btnSlide) {
					slideState = !slideState;
					if (slideLeftResult != null)
						slideLeftResult.setParameter("show", slideState);
					if (slideRightResult != null)
						slideRightResult.setParameter("show", slideState);
					if (slideUpResult != null)
						slideUpResult.setParameter("show", slideState);
					if (slideDownResult != null)
						slideDownResult.setParameter("show", slideState);
					updateStatusText('Slide show -> $slideState');
				} else if (source == btnFlipY) {
					flipYState = !flipYState;
					if (flipYResult != null)
						flipYResult.setParameter("checked", flipYState);
					updateStatusText('FlipY checked -> $flipYState');
				}
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		buttonsBuilder = null;
		demoResult = null;
		crossfadeResult = null;
		instantResult = null;
		flipResult = null;
		fadeResult = null;
		slideLeftResult = null;
		slideRightResult = null;
		slideUpResult = null;
		slideDownResult = null;
		flipYResult = null;
		btnNormal = null;
		btnHover = null;
		btnPressed = null;
		btnFlip = null;
		btnFade = null;
		btnSlide = null;
		btnFlipY = null;
	}
}
