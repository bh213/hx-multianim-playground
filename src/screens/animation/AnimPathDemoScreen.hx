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
	var btnModeAngle:Null<UIStandardMultiAnimButton>;
	var btnModeNorm:Null<UIStandardMultiAnimButton>;

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
	var selectedColorIndex:Int = 0;
	var mode:Int = 0; // 0=start+angle, 1=start+end

	// Start and end points (set by L-click / R-click)
	var startPoint:FPoint;
	var endPoint:FPoint;

	// Animation objects
	var circles:Array<h2d.Graphics> = [];
	var animPaths:Array<AnimatedPath> = [];
	var markerGraphics:Null<h2d.Graphics>;
	var displayInteractive:Null<h2d.Interactive>;
	var manimPaths:Null<MultiAnimPaths>;

	// Color swatches
	var colorSwatches:Array<h2d.Graphics> = [];
	var colorHighlight:Null<h2d.Graphics>;

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

	static final COLORS = [0x7fdbda, 0xff4444, 0x44ff44, 0x4488ff, 0xffdd44, 0xff44ff, 0xffffff];
	static final COLOR_NAMES = ["Cyan", "Red", "Green", "Blue", "Yellow", "Magenta", "White"];

	static inline final AREA_X = 50;
	static inline final AREA_Y = 130;
	static inline final AREA_W = 680;
	static inline final AREA_H = 400;
	static inline final BASE_DURATION = 2.0;
	static inline final SWATCH_X = 520;
	static inline final SWATCH_Y = 543;

	// Path origin offset (non-zero for closed paths where normalize fails)
	var pathOrigin:FPoint = new FPoint(0, 0);

	override public function load():Void {
		setupDemo("Anim Paths", "Animated path demo: circles follow paths with alpha, scale, progress, color & direction curves");

		startPoint = new FPoint(AREA_X + 50, AREA_Y + AREA_H / 2);
		endPoint = new FPoint(AREA_X + AREA_W - 50, AREA_Y + AREA_H / 2);

		demoBuilder = screenManager.buildFromResourceName("demos/animation/anim-path.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "animPathDemo", [], [
			countDropdown => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar",
				COUNT_ITEMS, 1),
			btnModeAngle => addButtonWithSingleBuilder(commonBuilder, "backButton", "Start+Angle"),
			btnModeNorm => addButtonWithSingleBuilder(commonBuilder, "backButton", "Start+End"),
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
		btnModeAngle = ui.btnModeAngle;
		btnModeNorm = ui.btnModeNorm;
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
		colorHighlight = new h2d.Graphics();
		addObjectToLayer(colorHighlight, DefaultLayer);

		for (i in 0...COLORS.length) {
			var g = new h2d.Graphics();
			g.beginFill(COLORS[i]);
			g.drawRect(0, 0, 18, 18);
			g.endFill();
			g.setPosition(SWATCH_X + i * 22, SWATCH_Y);
			addObjectToLayer(g, DefaultLayer);
			colorSwatches.push(g);

			var idx = i;
			var inter = new h2d.Interactive(18, 18, g);
			inter.onClick = (_) -> {
				selectedColorIndex = idx;
				updateColorSelection();
				rebuildCircles();
			};
		}

		updateColorSelection();
	}

	function updateColorSelection():Void {
		if (colorHighlight == null) return;
		colorHighlight.clear();
		colorHighlight.lineStyle(2, 0xFFFFFF);
		colorHighlight.drawRect(
			SWATCH_X + selectedColorIndex * 22 - 2,
			SWATCH_Y - 2,
			22, 22
		);
	}

	function drawMarkers():Void {
		if (markerGraphics == null) return;
		markerGraphics.clear();

		if (mode == 0) {
			// Start+Angle: green start point + direction line to end
			drawCrosshair(markerGraphics, startPoint.x, startPoint.y, 0x44ff44);
			markerGraphics.lineStyle(1.0, 0xff6644);
			markerGraphics.moveTo(startPoint.x, startPoint.y);
			markerGraphics.lineTo(endPoint.x, endPoint.y);
			// Small dot at end of line
			markerGraphics.lineStyle(0);
			markerGraphics.beginFill(0xff6644);
			markerGraphics.drawCircle(endPoint.x, endPoint.y, 3);
			markerGraphics.endFill();
		} else {
			// Start+End: green start, red end
			drawCrosshair(markerGraphics, startPoint.x, startPoint.y, 0x44ff44);
			drawCrosshair(markerGraphics, endPoint.x, endPoint.y, 0xff4444);
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

	function getSelectedColor():Int {
		return COLORS[selectedColorIndex];
	}

	function rebuildCircles():Void {
		for (circle in circles) {
			circle.remove();
		}
		circles = [];
		animPaths = [];

		if (manimPaths == null || demoBuilder == null) return;

		var basePath = manimPaths.getPath(currentPath);
		var curvesMap = demoBuilder.getCurves();
		var activeCurve:Null<ICurve> = curvesMap.get(currentCurve);
		var duration = getDuration();

		var circleRadius:Float = if (count <= 1) 6 else if (count <= 5) 5 else if (count <= 10) 4 else 2;

		for (i in 0...count) {
			// Create circle drawn white, tinted by color
			var g = new h2d.Graphics();
			g.beginFill(0xFFFFFF);
			g.drawCircle(0, 0, circleRadius);
			g.endFill();
			// Direction indicator line
			g.lineStyle(1, 0xFFFFFF);
			g.moveTo(0, 0);
			g.lineTo(circleRadius * 1.5, 0);
			// Apply initial color tint
			var c = getSelectedColor();
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

	function getTransformedPath(basePath:Path):Path {
		if (mode == 0) {
			// Start+Angle: rotate to face end, no scaling
			var angle = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x);
			pathOrigin = startPoint;
			return basePath.withStartAngle(angle);
		}

		// Start+End: normalize handles both open and closed paths
		pathOrigin = new FPoint(0, 0);
		return basePath.normalize(startPoint, endPoint);
	}

	function createAnimPathForIndex(idx:Int, basePath:Path, activeCurve:Null<ICurve>, duration:Float):AnimatedPath {
		var transformedPath = getTransformedPath(basePath);

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
			ap.setColorRange(0x222222, getSelectedColor());
			ap.addCurveSegment(Color, 0.0, activeCurve);
		}

		ap.addEvent(1.0, "pathEnd");

		final ox = pathOrigin.x;
		final oy = pathOrigin.y;

		ap.onUpdate = (state) -> {
			if (idx < circles.length) {
				circles[idx].setPosition(ox + state.position.x, oy + state.position.y);
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
				restartPath(idx);
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
			final modeName = if (mode == 0) "Start+Angle" else "Start+End";
			updatable.updateText('Path: $currentPath | Curve: $currentCurve ($targetsStr) | Count: $count | $modeName | ${COLOR_NAMES[selectedColorIndex]}');
		}
	}

	override public function update(dt:Float):Void {
		super.update(dt);
		for (ap in animPaths) {
			if (ap != null) {
				ap.update(dt);
			}
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
				if (source == btnModeAngle) {
					mode = 0;
					drawMarkers();
					rebuildCircles();
					return;
				}
				if (source == btnModeNorm) {
					mode = 1;
					drawMarkers();
					rebuildCircles();
					return;
				}
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
		for (g in colorSwatches) {
			g.remove();
		}
		if (colorHighlight != null) {
			colorHighlight.remove();
			colorHighlight = null;
		}
		circles = [];
		animPaths = [];
		colorSwatches = [];
		demoBuilder = null;
		demoResult = null;
		pathList = null;
		curveList = null;
		countDropdown = null;
		speedSlider = null;
		randomizeBtn = null;
		btnModeAngle = null;
		btnModeNorm = null;
		alphaChk = null;
		scaleChk = null;
		progressChk = null;
		colorChk = null;
		directionChk = null;
		manimPaths = null;
		markerGraphics = null;
	}
}
