package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;
import bh.base.FontManager;
import bh.paths.*;

class PathsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var speedSlider:Null<UIStandardMultiAnimSlider>;
	var pathButtons:Array<UIStandardMultiAnimButton> = [];
	var currentPath:String = "circuit";
	var statusText:Null<h2d.Text>;

	var graphics:h2d.Graphics = new h2d.Graphics();
	var paths:Null<MultiAnimPaths>;
	var animatedPath:Null<AnimatedPath>;
	var markerObj:Null<h2d.Object>;
	var speed:Float = 80;

	// Path display area offset (matches the bitmap position in .manim)
	static inline final PATH_OFFSET_X = 400;
	static inline final PATH_OFFSET_Y = 300;

	override public function load():Void {
		setupDemo("Paths", "Path animation: objects follow defined paths using paths{} definitions");

		demoBuilder = screenManager.buildFromResourceName("demos/animation/paths.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "pathsDemo", [], [
			speedSlider => addSlider(stdBuilder, 50),
			btnCircuit => addButtonWithSingleBuilder(commonBuilder, "backButton", "circuit"),
			btnStar => addButtonWithSingleBuilder(commonBuilder, "backButton", "star"),
			btnZigzag => addButtonWithSingleBuilder(commonBuilder, "backButton", "zigzag"),
			btnSpiral => addButtonWithSingleBuilder(commonBuilder, "backButton", "spiral"),
			btnWaves => addButtonWithSingleBuilder(commonBuilder, "backButton", "waves"),
			btnBezier => addButtonWithSingleBuilder(commonBuilder, "backButton", "bezier"),
		]);

		demoResult = ui.builderResults;
		speedSlider = ui.speedSlider;
		pathButtons = [ui.btnCircuit, ui.btnStar, ui.btnZigzag, ui.btnSpiral, ui.btnWaves, ui.btnBezier];
		addBuilderResult(demoResult);

		// Get paths defined in the .manim file
		paths = demoBuilder.getPaths();

		// Add graphics layer for drawing path outlines
		addObjectToLayer(graphics, DefaultLayer);

		// Build the path marker
		var markerResult = demoBuilder.buildWithParameters("pathMarker", []);
		markerObj = markerResult.object;
		addObjectToLayer(markerObj, DefaultLayer);

		// Draw initial path and start animation
		drawCurrentPath();
		startAnimation();

		statusText = new h2d.Text(FontManager.getFontByName("exo2_light_14"));
		statusText.text = 'Path: $currentPath';
		statusText.textColor = 0xCCCCCC;
		statusText.setPosition(50, 590);
		addObjectToLayer(statusText, DefaultLayer);
	}

	function drawCurrentPath():Void {
		graphics.clear();
		if (paths == null) return;
		var path = paths.getPath(currentPath);
		graphics.lineStyle(2.0, 0x7fdbda);
		graphics.setPosition(PATH_OFFSET_X, PATH_OFFSET_Y);
		path.drawToGraphics(graphics);
	}

	function startAnimation():Void {
		if (paths == null) return;
		var path = paths.getPath(currentPath);
		animatedPath = new AnimatedPath(path, Distance(speed));
		animatedPath.onUpdate = (state) -> {
			if (markerObj != null) {
				markerObj.setPosition(PATH_OFFSET_X + state.position.x, PATH_OFFSET_Y + state.position.y);
			}
		};
		animatedPath.onEvent = (eventName, state) -> {
			if (eventName == "pathEnd") {
				// Restart animation when done
				startAnimation();
			}
		};
	}

	override public function update(dt:Float):Void {
		super.update(dt);
		if (animatedPath != null) {
			animatedPath.update(dt);
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				for (i in 0...pathButtons.length) {
					if (source == pathButtons[i]) {
						final pathNames = ["circuit", "star", "zigzag", "spiral", "waves", "bezierLoop"];
						currentPath = pathNames[i];
						if (statusText != null) {
							statusText.text = 'Path: $currentPath | Speed: ${Std.int(speed)}';
						}
						drawCurrentPath();
						startAnimation();
						return;
					}
				}
			case UIChangeValue(val):
				if (source == speedSlider && statusText != null) {
					speed = 30 + val * 1.7; // Map 0-100 slider to 30-200 speed range
					statusText.text = 'Path: $currentPath | Speed: ${Std.int(speed)}';
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
		paths = null;
		animatedPath = null;
		markerObj = null;
	}
}
