package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;
import bh.paths.Curve.ICurve;

class CurvesDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var curveButtons:Array<UIStandardMultiAnimButton> = [];
	var currentCurve:String = "linear";

	var curveGraph:Null<h2d.Graphics>;
	var activeCurve:Null<ICurve>;
	var animTimer:Float = 0;
	var animDot:Null<h2d.Graphics>;
	var yDot:Null<h2d.Graphics>;
	var alphaDot:Null<h2d.Graphics>;
	var scaleDot:Null<h2d.Graphics>;

	var inverseCheckbox:Null<UIStandardMultiCheckbox>;
	var speedSlider:Null<UIStandardMultiAnimSlider>;
	var inverse:Bool = false;
	var speedPct:Int = 100;

	static final CURVE_TYPES = [
		"linear", "easeInQuad", "easeOutQuad", "easeInOutQuad", "easeOutCubic", "easeOutBack",
		"easeOutBounce", "easeOutElastic", "accelDecel", "snapBack", "custom"
	];

	static inline final ANIM_DURATION = 1.5;
	static inline final GRAPH_X = 50;
	static inline final GRAPH_Y = 180;
	static inline final GRAPH_W = 250;
	static inline final GRAPH_H = 180;
	static inline final DEMO_Y = 180;
	static inline final DEMO_H = 180;
	static inline final Y_X = 350;
	static inline final ALPHA_X = 480;
	static inline final SCALE_X = 610;
	static inline final DEMO_W = 100;

	override public function load():Void {
		setupDemo("Curves", "1D curve visualization using curves{} definitions with easing functions");

		demoBuilder = screenManager.buildFromResourceName("demos/animation/curves.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "curvesDemo", [], [
			btnLinear => addButtonWithSingleBuilder(commonBuilder, "backButton", "linear"),
			btnEaseInQuad => addButtonWithSingleBuilder(commonBuilder, "backButton", "inQuad"),
			btnEaseOutQuad => addButtonWithSingleBuilder(commonBuilder, "backButton", "outQuad"),
			btnEaseInOutQuad => addButtonWithSingleBuilder(commonBuilder, "backButton", "inOutQuad"),
			btnEaseOutCubic => addButtonWithSingleBuilder(commonBuilder, "backButton", "outCubic"),
			btnEaseOutBack => addButtonWithSingleBuilder(commonBuilder, "backButton", "outBack"),
			btnEaseOutBounce => addButtonWithSingleBuilder(commonBuilder, "backButton", "bounce"),
			btnEaseOutElastic => addButtonWithSingleBuilder(commonBuilder, "backButton", "elastic"),
			btnAccelDecel => addButtonWithSingleBuilder(commonBuilder, "backButton", "accel/decel"),
			btnSnapBack => addButtonWithSingleBuilder(commonBuilder, "backButton", "snapBack"),
			btnCustom => addButtonWithSingleBuilder(commonBuilder, "backButton", "custom"),
			inverseChk => addCheckbox(stdBuilder, false),
			speedSlider => addSlider(stdBuilder, 100),
		]);

		demoResult = ui.builderResults;
		curveButtons = [
			ui.btnLinear, ui.btnEaseInQuad, ui.btnEaseOutQuad, ui.btnEaseInOutQuad,
			ui.btnEaseOutCubic, ui.btnEaseOutBack, ui.btnEaseOutBounce, ui.btnEaseOutElastic,
			ui.btnAccelDecel, ui.btnSnapBack, ui.btnCustom
		];
		inverseCheckbox = ui.inverseChk;
		speedSlider = ui.speedSlider;
		addBuilderResult(demoResult);

		curveGraph = new h2d.Graphics();
		addObjectToLayer(curveGraph, DefaultLayer);

		animDot = createCircle(0xff6644, 5);
		yDot = createSquare(0x7fdbda, 20);
		alphaDot = createSquare(0x7fdbda, 20);
		scaleDot = createSquare(0x7fdbda, 20);
		addObjectToLayer(animDot, DefaultLayer);
		addObjectToLayer(yDot, DefaultLayer);
		addObjectToLayer(alphaDot, DefaultLayer);
		addObjectToLayer(scaleDot, DefaultLayer);

		selectCurve("linear");
	}

	function createSquare(color:Int, size:Int):h2d.Graphics {
		final g = new h2d.Graphics();
		final half = size / 2.0;
		g.beginFill(color);
		g.drawRect(-half, -half, size, size);
		g.endFill();
		return g;
	}

	function createCircle(color:Int, radius:Int):h2d.Graphics {
		final g = new h2d.Graphics();
		g.beginFill(color);
		g.drawCircle(0, 0, radius);
		g.endFill();
		return g;
	}

	function selectCurve(name:String):Void {
		if (demoBuilder == null) return;
		currentCurve = name;
		animTimer = 0;

		final curves = demoBuilder.getCurves();
		activeCurve = curves.get(name);

		demoResult.getUpdatable("curveLabel").updateText(name + (inverse ? " (inverse)" : ""));
		drawCurveGraph();
	}

	function drawCurveGraph():Void {
		if (curveGraph == null || activeCurve == null) return;

		curveGraph.clear();
		curveGraph.setPosition(GRAPH_X, GRAPH_Y);

		// Axis lines
		curveGraph.lineStyle(1, 0x444455);
		curveGraph.moveTo(0, GRAPH_H);
		curveGraph.lineTo(GRAPH_W, GRAPH_H);
		curveGraph.moveTo(0, 0);
		curveGraph.lineTo(0, GRAPH_H);

		// Draw curve
		curveGraph.lineStyle(2, 0x7fdbda);
		final steps = 100;
		for (s in 0...steps + 1) {
			final t = s / steps;
			var value = activeCurve.getValue(t);
			if (inverse) value = 1 - value;
			final px = t * GRAPH_W;
			final py = GRAPH_H - value * GRAPH_H;

			if (s == 0) curveGraph.moveTo(px, py);
			else curveGraph.lineTo(px, py);
		}
	}

	override public function update(dt:Float):Void {
		super.update(dt);

		if (activeCurve == null) return;

		animTimer += dt * (speedPct / 100.0);
		final totalCycle = ANIM_DURATION * 2;
		if (animTimer >= totalCycle) animTimer -= totalCycle;

		// Ping-pong: 0->1->0
		final linearT = if (animTimer < ANIM_DURATION) animTimer / ANIM_DURATION else 2.0 - animTimer / ANIM_DURATION;
		var eased = activeCurve.getValue(linearT);
		if (inverse) eased = 1 - eased;

		// Tracking dot on curve graph
		if (animDot != null) {
			animDot.setPosition(GRAPH_X + linearT * GRAPH_W, GRAPH_Y + GRAPH_H - eased * GRAPH_H);
		}

		// Y position
		if (yDot != null) {
			yDot.setPosition(Y_X + DEMO_W / 2, DEMO_Y + DEMO_H - 10 - eased * (DEMO_H - 20));
		}

		// Alpha
		if (alphaDot != null) {
			alphaDot.setPosition(ALPHA_X + DEMO_W / 2, DEMO_Y + DEMO_H / 2);
			alphaDot.alpha = eased;
		}

		// Scale (0 to half the container)
		if (scaleDot != null) {
			scaleDot.setPosition(SCALE_X + DEMO_W / 2, DEMO_Y + DEMO_H / 2);
			scaleDot.setScale(eased * DEMO_H / 2 / 20);
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				for (i in 0...curveButtons.length) {
					if (source == curveButtons[i]) {
						selectCurve(CURVE_TYPES[i]);
						return;
					}
				}
			case UIToggle(checked):
				if (source == inverseCheckbox) {
					inverse = checked;
					demoResult.getUpdatable("curveLabel").updateText(currentCurve + (inverse ? " (inverse)" : ""));
					drawCurveGraph();
				}
			case UIChangeValue(val):
				if (source == speedSlider) {
					speedPct = val;
					demoResult.getUpdatable("speedValue").updateText('$val%');
				}
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		curveButtons = [];
		curveGraph = null;
		activeCurve = null;
		animDot = null;
		yDot = null;
		alphaDot = null;
		scaleDot = null;
		inverseCheckbox = null;
		speedSlider = null;
	}
}
