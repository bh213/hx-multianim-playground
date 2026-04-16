package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimTabs;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class ParticlesDemoScreen extends DemoScreenBase {
	static final TAB_ITEMS:Array<UIElementListItem> = [
		{name: "Basics"},
		{name: "Colors"},
		{name: "Motion"},
		{name: "Bounds"},
		{name: "Paths"},
		{name: "SubEmit"},
	];
	static final TAB_FILES = [
		"demos/animation/particles-basics.manim",
		"demos/animation/particles-colors.manim",
		"demos/animation/particles-motion.manim",
		"demos/animation/particles-bounds.manim",
		"demos/animation/particles-paths.manim",
		"demos/animation/particles-subemitters.manim",
	];
	static final TAB_DESCRIPTIONS = [
		"Emission modes: point, cone, box, circle — with basic properties",
		"Color curve segments, size curves, and velocity curves with inline easings",
		"Gravity, vortex, turbulence, wind, attractor, and repulsor force fields",
		"Boundary modes: kill, bounce, wrap — plus line bounds",
		"Emit along paths, tangent velocity, and pathguide force fields",
		"Sub-emitter triggers: onDeath bursts and onCollision sparks",
	];
	static final TAB_GROUPS:Array<Array<String>> = [
		["fire", "rain", "sparkles", "explosion"],
		["rainbow", "sizeCurveDemo", "velocityCurveDemo", "pulseDemo"],
		["vortex", "turbulence", "pushPull", "fountain"],
		["killBounds", "bounceBounds", "wrapBounds", "lineBounds"],
		["pathEmit", "pathTangent", "pathGuideDemo", "waveStream"],
		["fireworkMain", "bounceBall"],
	];
	static final TAB_UI_NAMES = ["basicsUI", "colorsUI", "motionUI", "boundsUI", "pathsUI", "subEmittersUI"];
	static final SUB_EMITTER_GROUPS:Map<Int, Map<Int, Array<String>>> = [
		5 => [0 => ["fireworkBurst"], 1 => ["bounceSparks"]],
	];

	var tabs:Null<UIMultiAnimTabs> = null;
	var demoBuilder:Null<MultiAnimBuilder> = null;
	var demoResult:Null<BuilderResult> = null;

	override public function load():Void {
		setupDemo("Particles", "Particle effects — click tabs to explore features");

		demoBuilder = screenManager.buildFromResourceName("demos/animation/particles-demo.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "particlesDemo", [], [
			particleTabs => addTabs(stdBuilder, TAB_ITEMS, 0),
		]);

		demoResult = ui.builderResults;
		tabs = ui.particleTabs;

		addBuilderResult(demoResult);

		// Set initial description
		if (demoResult != null) {
			var updatable = demoResult.getUpdatable("description");
			if (updatable != null)
				updatable.updateText(TAB_DESCRIPTIONS[0]);
		}

		// Pre-load all tab content via beginTab/endTab
		for (t in 0...TAB_FILES.length) {
			loadTabContent(t);
		}
	}

	function loadTabContent(index:Int):Void {
		tabs.beginTab(index);

		var builder = screenManager.buildFromResourceName(TAB_FILES[index], false);
		if (builder == null) {
			tabs.endTab();
			return;
		}

		// UI labels — positions are panel-relative via contentArea
		addBuilderResult(builder.buildWithParameters(TAB_UI_NAMES[index], []));

		// Particle groups at layout positions (panel-relative)
		var groups = TAB_GROUPS[index];
		var layouts = builder.getLayouts();

		for (i in 0...groups.length) {
			var pos = layouts.getPoint("positions", i);
			var particles = builder.createParticles(groups[i]);

			var subMap = SUB_EMITTER_GROUPS.get(index);
			if (subMap != null) {
				var subGroups = subMap.get(i);
				if (subGroups != null) {
					for (subName in subGroups)
						builder.addParticleGroupTo(subName, particles);
				}
			}

			particles.setPosition(pos.x, pos.y);
			addObjectToLayer(particles, DefaultLayer);

			if (index == 3) {
				drawBoundsIndicator(pos.x, pos.y, i);
			}
		}

		if (index == 4) {
			drawPathIndicators(builder, layouts);
		}

		tabs.endTab();
	}

	function drawBoundsIndicator(cx:Float, cy:Float, groupIndex:Int):Void {
		var g = new h2d.Graphics();

		if (groupIndex < 3) {
			g.lineStyle(1, 0xFF666666);
			drawDashedRect(g, cx - 80, cy - 80, cx + 80, cy + 80);
		} else {
			g.lineStyle(1, 0xFF886644);
			g.moveTo(cx - 80, cy + 80);
			g.lineTo(cx + 80, cy + 80);
			g.moveTo(cx - 80, cy - 80);
			g.lineTo(cx - 80, cy + 80);
			g.moveTo(cx + 80, cy - 80);
			g.lineTo(cx - 80, cy - 80);
			g.moveTo(cx + 80, cy + 80);
			g.lineTo(cx + 80, cy - 80);
		}

		addObjectToLayer(g, DefaultLayer);
	}

	function drawPathIndicators(builder:MultiAnimBuilder, layouts:bh.multianim.layouts.MultiAnimLayouts):Void {
		var paths = builder.getPaths();
		var pathNames = ["orbit", "orbit", "orbit", "wave"];

		for (i in 0...pathNames.length) {
			var pos = layouts.getPoint("positions", i);
			var path = paths.getPath(pathNames[i]);

			var g = new h2d.Graphics();
			g.lineStyle(1, 0xFF555555);

			var steps = 80;
			for (s in 0...steps + 1) {
				var rate = s / steps;
				var pt = path.getPoint(rate);
				if (s == 0) {
					g.moveTo(pos.x + pt.x, pos.y + pt.y);
				} else {
					g.lineTo(pos.x + pt.x, pos.y + pt.y);
				}
			}

			addObjectToLayer(g, DefaultLayer);
		}
	}

	function drawDashedRect(g:h2d.Graphics, x1:Float, y1:Float, x2:Float, y2:Float):Void {
		drawDashedLine(g, x1, y1, x2, y1);
		drawDashedLine(g, x2, y1, x2, y2);
		drawDashedLine(g, x2, y2, x1, y2);
		drawDashedLine(g, x1, y2, x1, y1);
	}

	function drawDashedLine(g:h2d.Graphics, x1:Float, y1:Float, x2:Float, y2:Float):Void {
		var dx = x2 - x1;
		var dy = y2 - y1;
		var len = Math.sqrt(dx * dx + dy * dy);
		var dashLen = 6.0;
		var gapLen = 4.0;
		var dist = 0.0;
		var drawing = true;
		while (dist < len) {
			var segLen = drawing ? dashLen : gapLen;
			if (dist + segLen > len)
				segLen = len - dist;
			var t0 = dist / len;
			var t1 = (dist + segLen) / len;
			if (drawing) {
				g.moveTo(x1 + dx * t0, y1 + dy * t0);
				g.lineTo(x1 + dx * t1, y1 + dy * t1);
			}
			dist += segLen;
			drawing = !drawing;
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIChangeItem(index, items):
				if (source == tabs) {
					// Only update description — tab system handles content visibility
					if (demoResult != null) {
						var updatable = demoResult.getUpdatable("description");
						if (updatable != null)
							updatable.updateText(TAB_DESCRIPTIONS[index]);
					}
				}
			default:
		}
	}

	override public function onClear():Void {
		tabs = null;
		demoBuilder = null;
		demoResult = null;
		super.onClear();
	}
}
