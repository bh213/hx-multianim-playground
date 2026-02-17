package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;
import bh.base.FontManager;

class PathsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var speedSlider:Null<UIStandardMultiAnimSlider>;
	var pathButtons:Array<UIStandardMultiAnimButton> = [];
	var currentPath:String = "circuit";
	var statusText:Null<h2d.Text>;

	override public function load():Void {
		setupDemo("Paths", "Path animation: objects follow defined paths using paths{} definitions");

		demoBuilder = screenManager.buildFromResourceName("demos/animation/paths.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "pathsDemo", [], [
			speedSlider => addSlider(stdBuilder, 50),
			btnCircuit => addButtonWithSingleBuilder(commonBuilder, "backButton", "circuit"),
			btnStar => addButtonWithSingleBuilder(commonBuilder, "backButton", "star"),
			btnZigzag => addButtonWithSingleBuilder(commonBuilder, "backButton", "zigzag"),
		]);

		demoResult = ui.builderResults;
		speedSlider = ui.speedSlider;
		pathButtons = [ui.btnCircuit, ui.btnStar, ui.btnZigzag];
		addBuilderResult(demoResult);

		statusText = new h2d.Text(FontManager.getFontByName("exo2_light_14"));
		statusText.text = 'Path: $currentPath';
		statusText.textColor = 0xCCCCCC;
		statusText.setPosition(50, 590);
		addObjectToLayer(statusText, DefaultLayer);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				for (i in 0...pathButtons.length) {
					if (source == pathButtons[i]) {
						final paths = ["circuit", "star", "zigzag"];
						currentPath = paths[i];
						if (statusText != null) {
							statusText.text = 'Path: $currentPath';
						}
						return;
					}
				}
			case UIChangeValue(val):
				if (source == speedSlider && statusText != null) {
					statusText.text = 'Path: $currentPath | Speed: ${val}%';
				}
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		speedSlider = null;
		pathButtons = [];
		statusText = null;
	}
}
