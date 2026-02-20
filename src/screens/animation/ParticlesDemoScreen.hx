package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;
import bh.base.FontManager;

class ParticlesDemoScreen extends DemoScreenBase {
	static final TAB_NAMES = ["Basics", "Colors", "Motion", "Bounds", "Paths", "SubEmit"];
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
	// Particle group names per tab (up to 4 per tab)
	static final TAB_GROUPS:Array<Array<String>> = [
		["fire", "rain", "sparkles", "explosion"],
		["rainbow", "sizeCurveDemo", "velocityCurveDemo", "pulseDemo"],
		["vortex", "turbulence", "pushPull", "fountain"],
		["killBounds", "bounceBounds", "wrapBounds", "lineBounds"],
		["pathEmit", "pathTangent", "pathGuideDemo", "waveStream"],
		["fireworkMain", "bounceBall"],
	];
	// UI programmable names per tab
	static final TAB_UI_NAMES = ["basicsUI", "colorsUI", "motionUI", "boundsUI", "pathsUI", "subEmittersUI"];

	var tabButtons:Array<UIStandardMultiAnimButton> = [];
	var activeTab:Int = 0;
	var tabBuilder:Null<MultiAnimBuilder> = null;
	var tabUIResult:Null<BuilderResult> = null;
	var particleObjects:Array<bh.base.Particles> = [];
	var boundsGraphics:Array<h2d.Graphics> = [];
	var descText:Null<h2d.Text> = null;

	override public function load():Void {
		setupDemo("Particles", "Particle effects — click tabs to explore features");

		// Tab buttons below master title bar
		for (i in 0...TAB_NAMES.length) {
			var btn = UIStandardMultiAnimButton.create(commonBuilder, "backButton", TAB_NAMES[i]);
			btn.getObject().setPosition(50 + i * 120, 70);
			addElement(btn, DefaultLayer);
			tabButtons.push(btn);
		}

		// Per-tab description text
		descText = new h2d.Text(FontManager.getFontByName("exo2_light_14"));
		descText.textColor = 0xAAAAAA;
		descText.setPosition(50, 105);
		addObjectToLayer(descText, DefaultLayer);

		loadTab(0);
	}

	function clearTab():Void {
		// Remove particle objects
		for (p in particleObjects) {
			p.remove();
		}
		particleObjects = [];

		// Remove bounds graphics
		for (g in boundsGraphics) {
			g.remove();
		}
		boundsGraphics = [];

		// Remove UI result
		if (tabUIResult != null) {
			tabUIResult.object.remove();
			tabUIResult = null;
		}
		tabBuilder = null;
	}

	function loadTab(index:Int):Void {
		clearTab();
		activeTab = index;

		// Update description
		if (descText != null) {
			descText.text = TAB_DESCRIPTIONS[index];
		}

		// Load the tab's .manim file
		tabBuilder = screenManager.buildFromResourceName(TAB_FILES[index], false);
		if (tabBuilder == null) return;

		// Build UI labels
		var uiResult = tabBuilder.buildWithParameters(TAB_UI_NAMES[index], []);
		uiResult.object.setPosition(0, 125);
		addObjectToLayer(uiResult.object, DefaultLayer);
		tabUIResult = uiResult;

		// Create particle groups at layout positions
		var groups = TAB_GROUPS[index];
		var layouts = tabBuilder.getLayouts();

		for (i in 0...groups.length) {
			var pos = layouts.getPoint("positions", i);
			var particles = tabBuilder.createParticles(groups[i]);
			particles.setPosition(pos.x, pos.y);
			addObjectToLayer(particles, DefaultLayer);
			particleObjects.push(particles);

			// Draw bounds indicator for bounds tab
			if (index == 3) {
				drawBoundsIndicator(pos.x, pos.y, i);
			}
		}
	}

	function drawBoundsIndicator(cx:Float, cy:Float, groupIndex:Int):Void {
		var g = new h2d.Graphics();

		if (groupIndex < 3) {
			// AABB indicator — dashed rectangle
			g.lineStyle(1, 0x666666);
			var minX = cx - 80;
			var minY = cy - 80;
			var maxX = cx + 80;
			var maxY = cy + 80;
			drawDashedRect(g, minX, minY, maxX, maxY);
		} else {
			// Line bounds — draw the 4 lines forming a box
			g.lineStyle(1, 0x886644);
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
		boundsGraphics.push(g);
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
			if (dist + segLen > len) segLen = len - dist;
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
			case UIClick:
				for (i in 0...tabButtons.length) {
					if (source == tabButtons[i]) {
						if (i != activeTab) {
							loadTab(i);
						}
						return;
					}
				}
			default:
		}
	}

	override public function onClear():Void {
		clearTab();
		tabButtons = [];
		descText = null;
		super.onClear();
	}
}
