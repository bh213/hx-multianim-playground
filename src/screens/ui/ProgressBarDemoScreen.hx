package screens.ui;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimProgressBar;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;

class ProgressBarDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var barBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var bar1:Null<UIMultiAnimProgressBar>;
	var bar2:Null<UIMultiAnimProgressBar>;
	var bar3:Null<UIMultiAnimProgressBar>;
	var animBar:Null<UIMultiAnimProgressBar>;
	var thinBar1:Null<UIMultiAnimProgressBar>;
	var thinBar2:Null<UIMultiAnimProgressBar>;
	var thinBar3:Null<UIMultiAnimProgressBar>;
	var animTimer:Float = 0;
	var animValue:Int = 0;

	override public function load():Void {
		setupDemo("Progress Bars", "Progress bars at various values with auto-animation");

		barBuilder = screenManager.buildFromResourceName("demos/ui/progress-bar.manim", false);
		demoBuilder = barBuilder;

		// Static bars at fixed values
		bar1 = addProgressBar(barBuilder, null, 25);
		bar2 = addProgressBar(barBuilder, null, 60);
		bar3 = addProgressBar(barBuilder, null, 90);

		// Animated bar starting at 0
		animBar = addProgressBar(barBuilder, null, 0);

		// Thin bars
		thinBar1 = addProgressBar(barBuilder, null, 30);
		thinBar2 = addProgressBar(barBuilder, null, 65);
		thinBar3 = addProgressBar(barBuilder, null, 95);

		demoResult = demoBuilder.buildWithParameters("progressBarDemo", [], {
			placeholderObjects: [
				"bar1" => PVObject(bar1.getObject()),
				"bar2" => PVObject(bar2.getObject()),
				"bar3" => PVObject(bar3.getObject()),
				"animBar" => PVObject(animBar.getObject()),
				"thinBar1" => PVObject(thinBar1.getObject()),
				"thinBar2" => PVObject(thinBar2.getObject()),
				"thinBar3" => PVObject(thinBar3.getObject()),
			]
		});

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
		barBuilder = null;
		demoResult = null;
		bar1 = null;
		bar2 = null;
		bar3 = null;
		animBar = null;
		thinBar1 = null;
		thinBar2 = null;
		thinBar3 = null;
		animTimer = 0;
		animValue = 0;
	}
}
