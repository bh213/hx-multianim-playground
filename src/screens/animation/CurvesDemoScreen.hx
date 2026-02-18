package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.ui.UIMultiAnimScrollableList;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;
import bh.paths.Curve.ICurve;
import h2d.Tile;

class CurvesDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var currentCurve:String = "linear";

	var curveGraph:Null<h2d.Graphics>;
	var activeCurve:Null<ICurve>;
	var animTimer:Float = 0;
	var animDot:Null<h2d.Graphics>;
	var yBmp:Null<h2d.Bitmap>;
	var alphaBmp:Null<h2d.Bitmap>;
	var scaleBmp:Null<h2d.Bitmap>;

	var inverseCheckbox:Null<UIStandardMultiCheckbox>;
	var speedSlider:Null<UIStandardMultiAnimSlider>;
	var curveList:Null<UIMultiAnimScrollableList>;
	var bitmapList:Null<UIMultiAnimScrollableList>;
	var inverse:Bool = false;
	var speedPct:Int = 100;
	var currentBitmapIndex:Int = 6; // star

	static final CURVE_TYPES = [
		"linear", "easeInQuad", "easeOutQuad", "easeInOutQuad",
		"easeInCubic", "easeOutCubic", "easeInOutCubic",
		"easeInBack", "easeOutBack", "easeInOutBack",
		"easeOutBounce", "easeOutElastic",
		"accelDecel", "snapBack", "cubicBezier", "custom"
	];

	static final CURVE_ITEMS:Array<UIElementListItem> = [
		{name: "Linear"}, {name: "Ease In Quad"}, {name: "Ease Out Quad"}, {name: "Ease In/Out Quad"},
		{name: "Ease In Cubic"}, {name: "Ease Out Cubic"}, {name: "Ease In/Out Cubic"},
		{name: "Ease In Back"}, {name: "Ease Out Back"}, {name: "Ease In/Out Back"},
		{name: "Ease Out Bounce"}, {name: "Ease Out Elastic"},
		{name: "Accel/Decel"}, {name: "Snap Back"}, {name: "Cubic Bezier"}, {name: "Custom Points"}
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
			inverseChk => addCheckbox(stdBuilder, false),
			speedSlider => addSlider(stdBuilder, 100),
		]);

		demoResult = ui.builderResults;
		inverseCheckbox = ui.inverseChk;
		speedSlider = ui.speedSlider;
		addBuilderResult(demoResult);

		// Curves dropdown list
		curveList = addScrollableListWithSingleBuilder(stdBuilder, "list-panel", "list-item-120", "scrollbar", "scrollbar",
			CURVE_ITEMS, null, 0, 160, 190);
		addElement(curveList, null);
		curveList.getObject().setPosition(750, 100);
		addObjectToLayer(curveList.getObject(), DefaultLayer);

		// Bitmap dropdown list
		bitmapList = addScrollableListWithSingleBuilder(stdBuilder, "list-panel", "list-item-120", "scrollbar", "scrollbar",
			TestBitmaps.ALL_ITEMS, null, currentBitmapIndex, 160, 170);
		addElement(bitmapList, null);
		bitmapList.getObject().setPosition(750, 320);
		addObjectToLayer(bitmapList.getObject(), DefaultLayer);

		curveGraph = new h2d.Graphics();
		addObjectToLayer(curveGraph, DefaultLayer);

		animDot = createCircle(0xff6644, 5);
		addObjectToLayer(animDot, DefaultLayer);

		// Create bitmap demo dots
		final startTile = TestBitmaps.getTile(currentBitmapIndex);
		if (startTile != null) {
			final centered = centerTile(startTile);
			yBmp = new h2d.Bitmap(centered);
			alphaBmp = new h2d.Bitmap(centered);
			scaleBmp = new h2d.Bitmap(centered);
			addObjectToLayer(yBmp, DefaultLayer);
			addObjectToLayer(alphaBmp, DefaultLayer);
			addObjectToLayer(scaleBmp, DefaultLayer);
		}

		selectCurve("linear");
	}

	static function centerTile(tile:Tile):Tile {
		return tile.sub(0, 0, tile.width, tile.height, -tile.width / 2, -tile.height / 2);
	}

	function updateDemoBitmaps(index:Int):Void {
		currentBitmapIndex = index;
		final tile = TestBitmaps.getTile(index);
		if (tile == null) return;
		final centered = centerTile(tile);
		if (yBmp != null) yBmp.tile = centered;
		if (alphaBmp != null) alphaBmp.tile = centered;
		if (scaleBmp != null) scaleBmp.tile = centered;
		if (demoResult != null) {
			demoResult.getUpdatable("selectedBitmap").updateText(TestBitmaps.getName(TestBitmaps.getType(index)));
		}
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
		demoResult.getUpdatable("selectedCurve").updateText(name);
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
		if (yBmp != null) {
			yBmp.setPosition(Y_X + DEMO_W / 2, DEMO_Y + DEMO_H - 10 - eased * (DEMO_H - 20));
		}

		// Alpha
		if (alphaBmp != null) {
			alphaBmp.setPosition(ALPHA_X + DEMO_W / 2, DEMO_Y + DEMO_H / 2);
			alphaBmp.alpha = eased;
		}

		// Scale
		if (scaleBmp != null) {
			scaleBmp.setPosition(SCALE_X + DEMO_W / 2, DEMO_Y + DEMO_H / 2);
			scaleBmp.setScale(eased * DEMO_H / 2 / 15);
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIDoubleClickItem(index, items):
				if (source == curveList && index >= 0 && index < CURVE_TYPES.length) {
					selectCurve(CURVE_TYPES[index]);
				}
				if (source == bitmapList && index >= 0 && index < TestBitmaps.ALL_TYPES.length) {
					updateDemoBitmaps(index);
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
		curveGraph = null;
		activeCurve = null;
		animDot = null;
		yBmp = null;
		alphaBmp = null;
		scaleBmp = null;
		inverseCheckbox = null;
		speedSlider = null;
		curveList = null;
		bitmapList = null;
	}
}
