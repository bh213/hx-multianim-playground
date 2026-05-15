package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;
import bh.paths.*;

class PathsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var speedSlider:Null<UIStandardMultiAnimSlider>;
	var pathButtons:Array<UIStandardMultiAnimButton> = [];
	var currentPath:String = "circuit";

	var graphics:h2d.Graphics = new h2d.Graphics();
	var paths:Null<MultiAnimPaths>;
	var animatedPath:Null<AnimatedPath>;
	var markerObj:Null<h2d.Object>;
	var speed:Float = 100;

	// Path display area offset (matches the bitmap position in .manim)
	static inline final PATH_OFFSET_X = 400;
	static inline final PATH_OFFSET_Y = 300;

	static final PATH_NAMES = ["circuit", "star", "zigzag", "spiral", "waves", "bezierLoop"];

	override public function load():Void {
		setupDemo("Paths", "Path animation: objects follow paths defined in the .manim paths{} block");

		demoBuilder = screenManager.buildFromResourceName("demos/animation/paths.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "pathsDemo", [], [
			speedSlider => addSlider(stdBuilder, 100),
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
		updateStatusText();
	}

	function drawCurrentPath():Void {
		graphics.clear();
		if (paths == null) return;
		var path = paths.getPath(currentPath);
		graphics.lineStyle(2.0, 0xFF7fdbda);
		graphics.setPosition(PATH_OFFSET_X, PATH_OFFSET_Y);
		path.drawToGraphics(graphics);
	}

	function startAnimation():Void {
		if (paths == null) return;
		var path = paths.getPath(currentPath);
		animatedPath = new AnimatedPath(path, Distance(speed));
		animatedPath.onUpdate = (state) -> {
			if (markerObj != null)
				markerObj.setPosition(PATH_OFFSET_X + state.position.x, PATH_OFFSET_Y + state.position.y);
		};
		animatedPath.onEvent = (eventName, _) -> {
			// pathEnd fires automatically when the path completes — restart for a continuous loop
			if (eventName == "pathEnd") startAnimation();
		};
	}

	function updateStatusText():Void {
		if (demoResult == null) return;
		final updatable = demoResult.getUpdatable("statusText");
		if (updatable != null)
			updatable.updateText('Path: $currentPath | Speed: ${Std.int(speed)} px/s');
	}

	override public function update(dt:Float):Void {
		super.update(dt);
		if (animatedPath != null) animatedPath.update(dt);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				for (i in 0...pathButtons.length) {
					if (source == pathButtons[i]) {
						currentPath = PATH_NAMES[i];
						drawCurrentPath();
						startAnimation();
						updateStatusText();
						return;
					}
				}
			case UIChangeValue(val):
				if (source == speedSlider) {
					speed = val;
					updateStatusText();
					startAnimation();
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
		paths = null;
		animatedPath = null;
		markerObj = null;
	}
}
