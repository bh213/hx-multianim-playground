package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;
import bh.ui.ScreenShakeHelper;

class ScreenShakeDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var shake:Null<ScreenShakeHelper>;

	var btnLight:Null<UIStandardMultiAnimButton>;
	var btnHeavy:Null<UIStandardMultiAnimButton>;
	var btnRecoil:Null<UIStandardMultiAnimButton>;
	var btnLanding:Null<UIStandardMultiAnimButton>;
	var btnCurve:Null<UIStandardMultiAnimButton>;

	override public function load():Void {
		setupDemo("Screen Shake",
			"Additive impact shake via ScreenShakeHelper: linear, directional recoil/landing, and curve-driven decay");

		demoBuilder = screenManager.buildFromResourceName("demos/animation/screen-shake.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "screenShakeDemo", [], [
			btnLight => addButtonWithSingleBuilder(stdBuilder, "button", "Light"),
			btnHeavy => addButtonWithSingleBuilder(stdBuilder, "button", "Heavy"),
			btnRecoil => addButtonWithSingleBuilder(stdBuilder, "button", "Recoil (horiz)"),
			btnLanding => addButtonWithSingleBuilder(stdBuilder, "button", "Landing (vert)"),
			btnCurve => addButtonWithSingleBuilder(stdBuilder, "button", "Curve decay"),
		]);
		demoResult = ui.builderResults;
		addBuilderResult(demoResult);
		btnLight = ui.btnLight;
		btnHeavy = ui.btnHeavy;
		btnRecoil = ui.btnRecoil;
		btnLanding = ui.btnLanding;
		btnCurve = ui.btnCurve;

		// Shake the #shakeStage point (its h2d container is the shake target)
		final stage = demoResult.getSingleItemByName("shakeStage").getBuiltHeapsObject().toh2dObject();
		shake = new ScreenShakeHelper(stage);
	}

	function setStatus(s:String):Void {
		if (demoResult == null) return;
		final u = demoResult.getUpdatable("shakeStatus");
		if (u != null) u.updateText(s);
	}

	override public function update(dt:Float):Void {
		super.update(dt);
		if (shake != null) {
			shake.update(dt);
			setStatus(shake.isShaking ? "Shaking..." : "Idle");
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (shake != null) {
					if (source == btnLight)
						shake.shake(4.0, 0.3);
					else if (source == btnHeavy)
						shake.shake(12.0, 0.6);
					else if (source == btnRecoil)
						shake.shakeDirectional(8.0, 0.25, 1.0, 0.0);
					else if (source == btnLanding)
						shake.shakeDirectional(8.0, 0.3, 0.0, 1.0);
					else if (source == btnCurve)
						shake.shakeWithCurve(10.0, 0.8, (t) -> t * t);
				}
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		if (shake != null) {
			shake.stop();
			shake = null;
		}
		demoBuilder = null;
		demoResult = null;
		btnLight = null;
		btnHeavy = null;
		btnRecoil = null;
		btnLanding = null;
		btnCurve = null;
	}
}
