package screens.ui;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimProgressBar;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
import bh.base.MacroUtils;

class ProgressBarDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var animBar:Null<UIMultiAnimProgressBar>;
	var pixelBar:Null<UIMultiAnimProgressBar>;
	var animTimer:Float = 0;
	var animValue:Int = 0;

	override public function load():Void {
		setupDemo("Progress Bars", "Progress bars at various values with auto-animation");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/progress-bar.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "progressBarDemo", [], [
			bar1 => addProgressBar(demoBuilder, 25),
			bar2 => addProgressBar(demoBuilder, 60),
			bar3 => addProgressBar(demoBuilder, 90),
			animBar => addProgressBar(demoBuilder, 0),
			pixelBar => addProgressBar(demoBuilder, 0),
			thinBar1 => addProgressBar(demoBuilder, 30),
			thinBar2 => addProgressBar(demoBuilder, 65),
			thinBar3 => addProgressBar(demoBuilder, 95),
		]);

		demoResult = ui.builderResults;
		animBar = ui.animBar;
		pixelBar = ui.pixelBar;

		addBuilderResult(demoResult);
	}

	override public function update(dt:Float):Void {
		super.update(dt);
		animTimer += dt;
		if (animTimer >= 0.05) {
			animTimer = 0;
			animValue++;
			if (animValue > 100) {
				animValue = 0;
			}
			if (animBar != null) {
				animBar.setIntValue(animValue);
			}
			if (pixelBar != null) {
				pixelBar.setIntValue(animValue);
			}
			updateValueText();
		}
	}

	function updateValueText():Void {
		if (demoResult == null) return;
		final updatable = demoResult.getUpdatable("valueText");
		if (updatable != null) {
			updatable.updateText('Animated: $animValue%');
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		super.onScreenEvent(event, source);
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		animBar = null;
		pixelBar = null;
		animTimer = 0;
		animValue = 0;
	}
}
