package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.ui.UIMultiAnimDropdown.UIStandardMultiAnimDropdown;
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
	var pathButtons:Array<UIStandardMultiAnimButton> = [];
	var curveButtons:Array<UIStandardMultiAnimButton> = [];
	var modeButtons:Array<UIStandardMultiAnimButton> = [];
	var countDropdown:Null<UIStandardMultiAnimDropdown>;
	var speedSlider:Null<UIStandardMultiAnimSlider>;
	var randomizeBtn:Null<UIStandardMultiAnimButton>;
	var alphaChk:Null<UIStandardMultiCheckbox>;
	var scaleChk:Null<UIStandardMultiCheckbox>;
	var progressChk:Null<UIStandardMultiCheckbox>;

	// State
	var currentPath:String = "circuit";
	var currentCurve:String = "linear";
	var applyAlpha:Bool = false;
	var applyScale:Bool = false;
	var applyProgress:Bool = true;
	var count:Int = 5;
	var mode:Int = 0; // 0=fixedStart+randAngle, 1=randStart+fixedEnd, 2=fixedStart+randEnd
	var speedPct:Int = 100;

	// Fixed point (set by clicking in display area)
	var fixedPoint:FPoint;

	// Animation objects
	var circles:Array<h2d.Graphics> = [];
	var animPaths:Array<AnimatedPath> = [];
	var pathGraphics:h2d.Graphics = new h2d.Graphics();
	var markerGraphics:Null<h2d.Graphics>;
	var displayInteractive:Null<h2d.Interactive>;
	var manimPaths:Null<MultiAnimPaths>;

	// Random data per circle
	var randPoints:Array<FPoint> = [];
	var randAngles:Array<Float> = [];

	static final PATH_NAMES = ["circuit", "star", "spiral", "waves", "bezierLoop", "circle"];
	static final CURVE_NAMES = ["linear", "easeInOut", "bounce", "elastic", "back", "fadeIn", "pulse"];
	static final COUNT_ITEMS:Array<UIElementListItem> = [{name: "1"}, {name: "5"}, {name: "10"}, {name: "100"}];
	static final COUNT_VALUES = [1, 5, 10, 100];

	static inline final AREA_X = 50;
	static inline final AREA_Y = 130;
	static inline final AREA_W = 700;
	static inline final AREA_H = 400;
	static inline final BASE_DURATION = 2.0;

	override public function load():Void {
		setupDemo("Anim Paths", "Animated path demo: circles follow paths with alpha, scale & progress curves");

		fixedPoint = new FPoint(AREA_X + AREA_W / 2, AREA_Y + AREA_H / 2);

		demoBuilder = screenManager.buildFromResourceName("demos/animation/anim-path.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "animPathDemo", [], [
			btnCircuit => addButtonWithSingleBuilder(commonBuilder, "backButton", "circuit"),
			btnStar => addButtonWithSingleBuilder(commonBuilder, "backButton", "star"),
			btnSpiral => addButtonWithSingleBuilder(commonBuilder, "backButton", "spiral"),
			btnWaves => addButtonWithSingleBuilder(commonBuilder, "backButton", "waves"),
			btnBezier => addButtonWithSingleBuilder(commonBuilder, "backButton", "bezier"),
			btnCircle => addButtonWithSingleBuilder(commonBuilder, "backButton", "circle"),
			btnLinear => addButtonWithSingleBuilder(commonBuilder, "backButton", "linear"),
			btnEaseInOut => addButtonWithSingleBuilder(commonBuilder, "backButton", "easeInOut"),
			btnBounce => addButtonWithSingleBuilder(commonBuilder, "backButton", "bounce"),
			btnElastic => addButtonWithSingleBuilder(commonBuilder, "backButton", "elastic"),
			btnBack => addButtonWithSingleBuilder(commonBuilder, "backButton", "back"),
			btnFadeIn => addButtonWithSingleBuilder(commonBuilder, "backButton", "fadeIn"),
			btnPulse => addButtonWithSingleBuilder(commonBuilder, "backButton", "pulse"),
			countDropdown => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar",
				COUNT_ITEMS, 1),
			btnModeAngle => addButtonWithSingleBuilder(commonBuilder, "backButton", "Click+Angle"),
			btnModeRandStart => addButtonWithSingleBuilder(commonBuilder, "backButton", "Rand Start"),
			btnModeRandEnd => addButtonWithSingleBuilder(commonBuilder, "backButton", "Rand End"),
			speedSlider => addSlider(stdBuilder, 100),
			btnRandomize => addButtonWithSingleBuilder(commonBuilder, "backButton", "Randomize"),
			chkAlpha => addCheckbox(stdBuilder, false),
			chkScale => addCheckbox(stdBuilder, false),
			chkProgress => addCheckbox(stdBuilder, true),
		]);

		demoResult = ui.builderResults;
		pathButtons = [ui.btnCircuit, ui.btnStar, ui.btnSpiral, ui.btnWaves, ui.btnBezier, ui.btnCircle];
		curveButtons = [ui.btnLinear, ui.btnEaseInOut, ui.btnBounce, ui.btnElastic, ui.btnBack, ui.btnFadeIn, ui.btnPulse];
		modeButtons = [ui.btnModeAngle, ui.btnModeRandStart, ui.btnModeRandEnd];
		countDropdown = ui.countDropdown;
		speedSlider = ui.speedSlider;
		randomizeBtn = ui.btnRandomize;
		alphaChk = ui.chkAlpha;
		scaleChk = ui.chkScale;
		progressChk = ui.chkProgress;
		addBuilderResult(demoResult);

		manimPaths = demoBuilder.getPaths();

		// Graphics layers
		addObjectToLayer(pathGraphics, DefaultLayer);

		// Fixed point marker (crosshair)
		markerGraphics = new h2d.Graphics();
		addObjectToLayer(markerGraphics, DefaultLayer);
		drawFixedPointMarker();

		// Click interaction on display area
		displayInteractive = new h2d.Interactive(AREA_W, AREA_H);
		displayInteractive.setPosition(AREA_X, AREA_Y);
		displayInteractive.onClick = (event) -> {
			fixedPoint = new FPoint(AREA_X + event.relX, AREA_Y + event.relY);
			drawFixedPointMarker();
			rebuildCircles();
		};
		addObjectToLayer(displayInteractive, DefaultLayer);

		rebuildCircles();
	}

	function drawFixedPointMarker():Void {
		if (markerGraphics == null) return;
		markerGraphics.clear();
		final x = fixedPoint.x;
		final y = fixedPoint.y;
		// Crosshair
		markerGraphics.lineStyle(1.5, 0xff6644);
		markerGraphics.moveTo(x - 8, y);
		markerGraphics.lineTo(x + 8, y);
		markerGraphics.moveTo(x, y - 8);
		markerGraphics.lineTo(x, y + 8);
		// Circle
		markerGraphics.lineStyle(1.0, 0xff6644);
		markerGraphics.drawCircle(x, y, 5);
	}

	function randomPointInArea():FPoint {
		return new FPoint(
			AREA_X + 20 + Math.random() * (AREA_W - 40),
			AREA_Y + 20 + Math.random() * (AREA_H - 40)
		);
	}

	function generateRandomData():Void {
		randPoints = [];
		randAngles = [];
		for (_ in 0...count) {
			randPoints.push(randomPointInArea());
			randAngles.push(Math.random() * Math.PI * 2);
		}
	}

	function getDuration():Float {
		return BASE_DURATION * (100.0 / speedPct);
	}

	function rebuildCircles():Void {
		// Remove old circles
		for (circle in circles) {
			circle.remove();
		}
		circles = [];
		animPaths = [];

		generateRandomData();

		if (manimPaths == null || demoBuilder == null) return;

		var basePath = manimPaths.getPath(currentPath);
		var curvesMap = demoBuilder.getCurves();
		var activeCurve:Null<ICurve> = curvesMap.get(currentCurve);
		var duration = getDuration();

		var circleRadius:Float = if (count <= 1) 6 else if (count <= 5) 5 else if (count <= 10) 4 else 2;

		for (i in 0...count) {
			// Create circle
			var g = new h2d.Graphics();
			g.beginFill(0x7fdbda);
			g.drawCircle(0, 0, circleRadius);
			g.endFill();
			addObjectToLayer(g, DefaultLayer);
			circles.push(g);

			// Create animated path
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

	function getTransformedPath(idx:Int, basePath:Path):Path {
		switch mode {
			case 0: // Fixed start + random angle
				return basePath.withStartAngle(randAngles[idx]);
			case 1: // Random start + fixed end
				return basePath.normalize(randPoints[idx], fixedPoint);
			case 2: // Fixed start + random end
				return basePath.normalize(fixedPoint, randPoints[idx]);
			default:
				return basePath;
		}
	}

	function getOrigin(idx:Int):FPoint {
		// In mode 0 (angle), path starts at (0,0) so we offset by fixedPoint
		if (mode == 0) return fixedPoint;
		// In modes 1,2, normalize already places path in screen coords
		return new FPoint(0, 0);
	}

	function createAnimPathForIndex(idx:Int, basePath:Path, activeCurve:Null<ICurve>, duration:Float):AnimatedPath {
		var transformedPath = getTransformedPath(idx, basePath);

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

		ap.addEvent(1.0, "pathEnd");

		final origin = getOrigin(idx);
		final ox = origin.x;
		final oy = origin.y;

		ap.onUpdate = (state) -> {
			if (idx < circles.length) {
				circles[idx].setPosition(ox + state.position.x, oy + state.position.y);
				circles[idx].alpha = state.alpha;
				circles[idx].setScale(state.scale);
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

		// Regenerate random data for this circle
		randPoints[idx] = randomPointInArea();
		randAngles[idx] = Math.random() * Math.PI * 2;

		var basePath = manimPaths.getPath(currentPath);
		var curvesMap = demoBuilder.getCurves();
		var activeCurve:Null<ICurve> = curvesMap.get(currentCurve);

		animPaths[idx] = createAnimPathForIndex(idx, basePath, activeCurve, getDuration());
	}

	function updateStatusText():Void {
		if (demoResult == null) return;
		final updatable = demoResult.getUpdatable("statusText");
		if (updatable != null) {
			final modeNames = ["Click+Angle", "Rand Start->Fixed End", "Fixed Start->Rand End"];
			var targets:Array<String> = [];
			if (applyAlpha) targets.push("alpha");
			if (applyScale) targets.push("scale");
			if (applyProgress) targets.push("progress");
			final targetsStr = if (targets.length > 0) targets.join("+") else "none";
			updatable.updateText('Path: $currentPath | Curve: $currentCurve ($targetsStr) | Count: $count | ${modeNames[mode]}');
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
			case UIClick:
				// Path buttons
				for (i in 0...pathButtons.length) {
					if (source == pathButtons[i]) {
						currentPath = PATH_NAMES[i];
						rebuildCircles();
						return;
					}
				}
				// Curve buttons
				for (i in 0...curveButtons.length) {
					if (source == curveButtons[i]) {
						currentCurve = CURVE_NAMES[i];
						rebuildCircles();
						return;
					}
				}
				// Mode buttons
				for (i in 0...modeButtons.length) {
					if (source == modeButtons[i]) {
						mode = i;
						rebuildCircles();
						return;
					}
				}
				// Randomize
				if (source == randomizeBtn) {
					rebuildCircles();
					return;
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
		circles = [];
		animPaths = [];
		demoBuilder = null;
		demoResult = null;
		pathButtons = [];
		curveButtons = [];
		modeButtons = [];
		countDropdown = null;
		speedSlider = null;
		randomizeBtn = null;
		alphaChk = null;
		scaleChk = null;
		progressChk = null;
		manimPaths = null;
		markerGraphics = null;
		randPoints = [];
		randAngles = [];
	}
}
