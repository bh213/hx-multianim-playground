package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.ui.UIMultiAnimDropdown.UIStandardMultiAnimDropdown;
import bh.ui.UIMultiAnimScrollableList;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;
import bh.base.FPoint;
import bh.paths.*;
import bh.paths.MultiAnimPaths.Path;
import bh.paths.MultiAnimPaths.PathNormalization;
import bh.paths.Curve.ICurve;

class AnimPathDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;

	// UI elements
	var pathList:Null<UIMultiAnimScrollableList>;
	var curveList:Null<UIMultiAnimScrollableList>;
	var countDropdown:Null<UIStandardMultiAnimDropdown>;
	var speedSlider:Null<UIStandardMultiAnimSlider>;
	var randomizeBtn:Null<UIStandardMultiAnimButton>;
	var alphaChk:Null<UIStandardMultiCheckbox>;
	var scaleChk:Null<UIStandardMultiCheckbox>;
	var progressChk:Null<UIStandardMultiCheckbox>;
	var colorChk:Null<UIStandardMultiCheckbox>;
	var directionChk:Null<UIStandardMultiCheckbox>;
	var modeDropdown:Null<UIStandardMultiAnimDropdown>;

	// State
	var currentPath:String = "circuit";
	var currentCurve:String = "linear";
	var applyAlpha:Bool = false;
	var applyScale:Bool = false;
	var applyProgress:Bool = true;
	var applyColor:Bool = false;
	var applyDirection:Bool = false;
	var count:Int = 5;
	var speedPct:Int = 100;
	var startColorIndex:Int = 0;
	var endColorIndex:Int = 3; // blue
	var mode:Int = 0; // 0=Stretch, 1=FitCenter, 2=Anchor, 3=FitBounds

	// Start and end points (set by L-click / R-click)
	var startPoint:FPoint;
	var endPoint:FPoint;

	// Animation objects
	var circles:Array<h2d.Graphics> = [];
	var animPaths:Array<AnimatedPath> = [];
	// Indices whose path reached its end this frame; restarted AFTER the update loop
	// so we never reassign animPaths[idx] while iterating it.
	var pendingRestarts:Array<Int> = [];
	var markerGraphics:Null<h2d.Graphics>;
	var displayInteractive:Null<h2d.Interactive>;
	var manimPaths:Null<MultiAnimPaths>;

	// Color swatches (start and end rows)
	var startColorSwatches:Array<h2d.Graphics> = [];
	var endColorSwatches:Array<h2d.Graphics> = [];
	var startColorHighlight:Null<h2d.Graphics>;
	var endColorHighlight:Null<h2d.Graphics>;

	static final PATH_NAMES = ["circuit", "star", "spiral", "waves", "bezierLoop", "circle"];
	static final PATH_ITEMS:Array<UIElementListItem> = [
		{name: "Circuit"}, {name: "Star"}, {name: "Spiral"}, {name: "Waves"}, {name: "Bezier Loop"}, {name: "Circle"}
	];

	static final CURVE_NAMES = [
		"linear", "easeInQuad", "easeOutQuad", "easeInOutQuad",
		"easeInCubic", "easeOutCubic", "easeInOutCubic",
		"easeInBack", "easeOutBack", "easeInOutBack",
		"easeOutBounce", "easeOutElastic",
		"accelDecel", "snapBack", "cubicBezier", "custom",
		"fadeIn", "pulse"
	];
	static final CURVE_ITEMS:Array<UIElementListItem> = [
		{name: "Linear"}, {name: "Ease In Quad"}, {name: "Ease Out Quad"}, {name: "Ease In/Out Quad"},
		{name: "Ease In Cubic"}, {name: "Ease Out Cubic"}, {name: "Ease In/Out Cubic"},
		{name: "Ease In Back"}, {name: "Ease Out Back"}, {name: "Ease In/Out Back"},
		{name: "Ease Out Bounce"}, {name: "Ease Out Elastic"},
		{name: "Accel/Decel"}, {name: "Snap Back"}, {name: "Cubic Bezier"}, {name: "Custom Points"},
		{name: "Fade In"}, {name: "Pulse"}
	];

	static final COUNT_ITEMS:Array<UIElementListItem> = [{name: "1"}, {name: "5"}, {name: "10"}, {name: "100"}];
	static final COUNT_VALUES = [1, 5, 10, 100];

	static final MODE_ITEMS:Array<UIElementListItem> = [{name: "Stretch"}, {name: "FitCenter"}, {name: "Anchor"}, {name: "FitBounds"}];
	static final MODE_NAMES = ["Stretch", "FitCenter", "Anchor", "FitBounds"];

	static final COLORS = [0xFF7fdbda, 0xFFff4444, 0xFF44ff44, 0xFF4488ff, 0xFFffdd44, 0xFFff44ff, 0xFFffffff];
	static final COLOR_NAMES = ["Cyan", "Red", "Green", "Blue", "Yellow", "Magenta", "White"];

	static inline final AREA_X = 50;
	static inline final AREA_Y = 130;
	static inline final AREA_W = 680;
	static inline final AREA_H = 400;
	static inline final BASE_DURATION = 2.0;
	static inline final SWATCH_X = 555;
	static inline final SWATCH_START_Y = 578;
	static inline final SWATCH_END_Y = 613;

	override public function load():Void {
		setupDemo("Anim Paths", "Animated path demo: circles follow paths with alpha, scale, progress, color & direction curves");

		startPoint = new FPoint(AREA_X + 50, AREA_Y + AREA_H / 2);
		endPoint = new FPoint(AREA_X + AREA_W - 50, AREA_Y + AREA_H / 2);

		demoBuilder = screenManager.buildFromResourceName("demos/animation/anim-path.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "animPathDemo", [], [
			countDropdown => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar",
				COUNT_ITEMS, 1),
			modeDropdown => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar",
				MODE_ITEMS, 0),
			speedSlider => addSlider(stdBuilder, 100),
			btnRandomize => addButtonWithSingleBuilder(commonBuilder, "backButton", "Randomize"),
			chkAlpha => addCheckbox(stdBuilder, false),
			chkScale => addCheckbox(stdBuilder, false),
			chkProgress => addCheckbox(stdBuilder, true),
			chkColor => addCheckbox(stdBuilder, false),
			chkDirection => addCheckbox(stdBuilder, false),
		]);

		demoResult = ui.builderResults;
		countDropdown = ui.countDropdown;
		modeDropdown = ui.modeDropdown;
		speedSlider = ui.speedSlider;
		randomizeBtn = ui.btnRandomize;
		alphaChk = ui.chkAlpha;
		scaleChk = ui.chkScale;
		progressChk = ui.chkProgress;
		colorChk = ui.chkColor;
		directionChk = ui.chkDirection;
		addBuilderResult(demoResult);

		manimPaths = demoBuilder.getPaths();

		// Path scrollable list (right column)
		pathList = addScrollableListWithSingleBuilder(stdBuilder, "list-panel", "list-item-120", "scrollbar", "scrollbar",
			PATH_ITEMS, null, 0, 160, 190);
		addElement(pathList, null);
		pathList.getObject().setPosition(750, 130);
		addObjectToLayer(pathList.getObject(), DefaultLayer);

		// Curve scrollable list (right column)
		curveList = addScrollableListWithSingleBuilder(stdBuilder, "list-panel", "list-item-120", "scrollbar", "scrollbar",
			CURVE_ITEMS, null, 0, 160, 190);
		addElement(curveList, null);
		curveList.getObject().setPosition(750, 350);
		addObjectToLayer(curveList.getObject(), DefaultLayer);

		// Markers for start/end points
		markerGraphics = new h2d.Graphics();
		addObjectToLayer(markerGraphics, DefaultLayer);
		drawMarkers();

		// Color swatches
		createColorSwatches();

		// Click interaction on display area
		displayInteractive = new h2d.Interactive(AREA_W, AREA_H);
		displayInteractive.setPosition(AREA_X, AREA_Y);
		displayInteractive.enableRightButton = true;
		displayInteractive.onPush = (event) -> {
			var pt = new FPoint(AREA_X + event.relX, AREA_Y + event.relY);
			if (event.button == 0) {
				startPoint = pt;
			} else if (event.button == 1) {
				endPoint = pt;
			}
			drawMarkers();
			rebuildCircles();
		};
		addObjectToLayer(displayInteractive, DefaultLayer);

		rebuildCircles();
	}

	function createColorSwatches():Void {
		startColorHighlight = new h2d.Graphics();
		addObjectToLayer(startColorHighlight, DefaultLayer);
		endColorHighlight = new h2d.Graphics();
		addObjectToLayer(endColorHighlight, DefaultLayer);

		for (i in 0...COLORS.length) {
			// Start color row
			var gs = new h2d.Graphics();
			gs.beginFill(COLORS[i]);
			gs.drawRect(0, 0, 18, 18);
			gs.endFill();
			gs.setPosition(SWATCH_X + i * 22, SWATCH_START_Y);
			addObjectToLayer(gs, DefaultLayer);
			startColorSwatches.push(gs);

			var idx = i;
			var interS = new h2d.Interactive(18, 18, gs);
			interS.onClick = (_) -> {
				startColorIndex = idx;
				updateColorSelection();
				rebuildCircles();
			};

			// End color row
			var ge = new h2d.Graphics();
			ge.beginFill(COLORS[i]);
			ge.drawRect(0, 0, 18, 18);
			ge.endFill();
			ge.setPosition(SWATCH_X + i * 22, SWATCH_END_Y);
			addObjectToLayer(ge, DefaultLayer);
			endColorSwatches.push(ge);

			var interE = new h2d.Interactive(18, 18, ge);
			interE.onClick = (_) -> {
				endColorIndex = idx;
				updateColorSelection();
				rebuildCircles();
			};
		}

		updateColorSelection();
	}

	function updateColorSelection():Void {
		if (startColorHighlight != null) {
			startColorHighlight.clear();
			startColorHighlight.lineStyle(2, 0xFFFFFFFF);
			startColorHighlight.drawRect(SWATCH_X + startColorIndex * 22 - 2, SWATCH_START_Y - 2, 22, 22);
		}
		if (endColorHighlight != null) {
			endColorHighlight.clear();
			endColorHighlight.lineStyle(2, 0xFFFFFFFF);
			endColorHighlight.drawRect(SWATCH_X + endColorIndex * 22 - 2, SWATCH_END_Y - 2, 22, 22);
		}
	}

	function drawMarkers():Void {
		if (markerGraphics == null) return;
		markerGraphics.clear();

		if (mode == 2) {
			// Anchor: green position + direction line to end (angle indicator)
			drawCrosshair(markerGraphics, startPoint.x, startPoint.y, 0xFF44ff44);
			markerGraphics.lineStyle(1.0, 0xFFff6644);
			markerGraphics.moveTo(startPoint.x, startPoint.y);
			markerGraphics.lineTo(endPoint.x, endPoint.y);
			markerGraphics.lineStyle(0);
			markerGraphics.beginFill(0xFFff6644);
			markerGraphics.drawCircle(endPoint.x, endPoint.y, 3);
			markerGraphics.endFill();
		} else if (mode == 3) {
			// FitBounds: draw rectangle between start (topLeft) and end (bottomRight)
			drawCrosshair(markerGraphics, startPoint.x, startPoint.y, 0xFF44ff44);
			drawCrosshair(markerGraphics, endPoint.x, endPoint.y, 0xFFff4444);
			markerGraphics.lineStyle(1.0, 0xFF888888);
			markerGraphics.drawRect(startPoint.x, startPoint.y,
				endPoint.x - startPoint.x, endPoint.y - startPoint.y);
		} else {
			// Stretch / FitCenter: green start, red end
			drawCrosshair(markerGraphics, startPoint.x, startPoint.y, 0xFF44ff44);
			drawCrosshair(markerGraphics, endPoint.x, endPoint.y, 0xFFff4444);
		}
	}

	function drawCrosshair(g:h2d.Graphics, x:Float, y:Float, color:Int):Void {
		g.lineStyle(1.5, color);
		g.moveTo(x - 8, y);
		g.lineTo(x + 8, y);
		g.moveTo(x, y - 8);
		g.lineTo(x, y + 8);
		g.lineStyle(1.0, color);
		g.drawCircle(x, y, 5);
	}

	function getDuration():Float {
		return BASE_DURATION * (100.0 / speedPct);
	}

	function getStartColor():Int {
		return COLORS[startColorIndex];
	}

	function getEndColor():Int {
		return COLORS[endColorIndex];
	}

	function rebuildCircles():Void {
		for (circle in circles) {
			circle.remove();
		}
		circles = [];
		animPaths = [];
		pendingRestarts = [];

		if (manimPaths == null || demoBuilder == null) return;

		var basePath = manimPaths.getPath(currentPath);
		var curvesMap = demoBuilder.getCurves();
		var activeCurve:Null<ICurve> = curvesMap.get(currentCurve);
		var duration = getDuration();

		var circleRadius:Float = if (count <= 1) 6 else if (count <= 5) 5 else if (count <= 10) 4 else 2;

		for (i in 0...count) {
			// Create circle drawn white, tinted by color
			var g = new h2d.Graphics();
			g.beginFill(0xFFFFFFFF);
			g.drawCircle(0, 0, circleRadius);
			g.endFill();
			// Direction indicator line
			g.lineStyle(1, 0xFFFFFFFF);
			g.moveTo(0, 0);
			g.lineTo(circleRadius * 1.5, 0);
			// Apply initial color tint
			var c = getStartColor();
			g.color.x = ((c >> 16) & 0xFF) / 255.0;
			g.color.y = ((c >> 8) & 0xFF) / 255.0;
			g.color.z = (c & 0xFF) / 255.0;
			addObjectToLayer(g, DefaultLayer);
			circles.push(g);

			var ap = createAnimPathForIndex(i, basePath, activeCurve, duration);
			animPaths.push(ap);

			// Stagger: pre-advance each circle
			var stagger = (i * duration) / count;
			if (stagger > 0.001) {
				ap.update(stagger);
			}
		}

		updateStatusText();
	}

	function getNormalization():PathNormalization {
		return switch mode {
			case 0: Stretch(startPoint, endPoint);
			case 1: FitCenter(startPoint, endPoint);
			case 2: Anchor(startPoint, Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x));
			case 3: FitBounds(startPoint, endPoint);
			default: Stretch(startPoint, endPoint);
		};
	}

	function createAnimPathForIndex(idx:Int, basePath:Path, activeCurve:Null<ICurve>, duration:Float):AnimatedPath {
		var transformedPath = basePath.applyTransform(getNormalization());

		var ap = new AnimatedPath(transformedPath, Time(duration));

		if (applyAlpha && activeCurve != null) {
			ap.addCurveSegment(Alpha, 0.0, activeCurve);
		}
		if (applyScale && activeCurve != null) {
			ap.addCurveSegment(Scale, 0.0, activeCurve);
		}
		if (applyProgress && activeCurve != null) {
			ap.addCurveSegment(Progress, 0.0, activeCurve);
		}
		if (applyColor && activeCurve != null) {
			ap.addColorCurveSegment(0.0, activeCurve, getStartColor(), getEndColor());
		}

		ap.addEvent(1.0, "pathEnd");

		ap.onUpdate = (state) -> {
			if (idx < circles.length) {
				circles[idx].setPosition(state.position.x, state.position.y);
				circles[idx].alpha = state.alpha;
				circles[idx].setScale(state.scale);

				if (applyColor) {
					var c = state.color;
					circles[idx].color.x = ((c >> 16) & 0xFF) / 255.0;
					circles[idx].color.y = ((c >> 8) & 0xFF) / 255.0;
					circles[idx].color.z = (c & 0xFF) / 255.0;
				}

				if (applyDirection) {
					circles[idx].rotation = state.angle;
				}
			}
		};

		ap.onEvent = (eventName, state) -> {
			if (eventName == "pathEnd") {
				if (pendingRestarts.indexOf(idx) < 0)
					pendingRestarts.push(idx);
			}
		};

		return ap;
	}

	function restartPath(idx:Int):Void {
		if (manimPaths == null || demoBuilder == null || idx >= count) return;

		var basePath = manimPaths.getPath(currentPath);
		var curvesMap = demoBuilder.getCurves();
		var activeCurve:Null<ICurve> = curvesMap.get(currentCurve);

		animPaths[idx] = createAnimPathForIndex(idx, basePath, activeCurve, getDuration());
	}

	function updateStatusText():Void {
		if (demoResult == null) return;
		final updatable = demoResult.getUpdatable("statusText");
		if (updatable != null) {
			var targets:Array<String> = [];
			if (applyAlpha) targets.push("alpha");
			if (applyScale) targets.push("scale");
			if (applyProgress) targets.push("progress");
			if (applyColor) targets.push("color");
			if (applyDirection) targets.push("direction");
			final targetsStr = if (targets.length > 0) targets.join("+") else "none";
			final modeName = MODE_NAMES[mode];
			updatable.updateText('Path: $currentPath | Curve: $currentCurve ($targetsStr) | Count: $count | $modeName | ${COLOR_NAMES[startColorIndex]}->${COLOR_NAMES[endColorIndex]}');
		}
	}

	override public function update(dt:Float):Void {
		super.update(dt);
		for (ap in animPaths) {
			if (ap != null) {
				ap.update(dt);
			}
		}
		if (pendingRestarts.length > 0) {
			for (idx in pendingRestarts)
				restartPath(idx);
			pendingRestarts = [];
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIDoubleClickItem(index, items):
				if (source == pathList && index >= 0 && index < PATH_NAMES.length) {
					currentPath = PATH_NAMES[index];
					if (demoResult != null) {
						final u = demoResult.getUpdatable("selectedPath");
						if (u != null) u.updateText(PATH_NAMES[index]);
					}
					rebuildCircles();
				}
				if (source == curveList && index >= 0 && index < CURVE_NAMES.length) {
					currentCurve = CURVE_NAMES[index];
					if (demoResult != null) {
						final u = demoResult.getUpdatable("selectedCurve");
						if (u != null) u.updateText(CURVE_NAMES[index]);
					}
					rebuildCircles();
				}
			case UIChangeItem(index, items):
				if (source == countDropdown && index >= 0 && index < COUNT_VALUES.length) {
					count = COUNT_VALUES[index];
					rebuildCircles();
				}
				if (source == modeDropdown && index >= 0 && index < MODE_NAMES.length) {
					mode = index;
					drawMarkers();
					rebuildCircles();
				}
			case UIChangeValue(val):
				if (source == speedSlider) {
					speedPct = val;
					if (demoResult != null) {
						final su = demoResult.getUpdatable("speedValue");
						if (su != null) su.updateText('$val%');
					}
					rebuildCircles();
				}
			case UIToggle(checked):
				if (source == alphaChk) {
					applyAlpha = checked;
					rebuildCircles();
				} else if (source == scaleChk) {
					applyScale = checked;
					rebuildCircles();
				} else if (source == progressChk) {
					applyProgress = checked;
					rebuildCircles();
				} else if (source == colorChk) {
					applyColor = checked;
					rebuildCircles();
				} else if (source == directionChk) {
					applyDirection = checked;
					rebuildCircles();
				}
			case UIClick:
				if (source == randomizeBtn) {
					rebuildCircles();
					return;
				}
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		for (circle in circles) {
			circle.remove();
		}
		if (displayInteractive != null) {
			displayInteractive.remove();
			displayInteractive = null;
		}
		for (g in startColorSwatches) {
			g.remove();
		}
		for (g in endColorSwatches) {
			g.remove();
		}
		if (startColorHighlight != null) {
			startColorHighlight.remove();
			startColorHighlight = null;
		}
		if (endColorHighlight != null) {
			endColorHighlight.remove();
			endColorHighlight = null;
		}
		circles = [];
		animPaths = [];
		pendingRestarts = [];
		startColorSwatches = [];
		endColorSwatches = [];
		demoBuilder = null;
		demoResult = null;
		pathList = null;
		curveList = null;
		countDropdown = null;
		modeDropdown = null;
		speedSlider = null;
		randomizeBtn = null;
		alphaChk = null;
		scaleChk = null;
		progressChk = null;
		colorChk = null;
		directionChk = null;
		manimPaths = null;
		markerGraphics = null;
	}
}
