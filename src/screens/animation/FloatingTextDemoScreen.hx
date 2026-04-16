package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.ui.UIMultiAnimDropdown.UIStandardMultiAnimDropdown;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;
import bh.base.FontManager;
import bh.ui.FloatingTextHelper;

class FloatingTextDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var floatingText:Null<FloatingTextHelper>;
	var spawnContainer:Null<h2d.Object>;
	var spawnInteractive:Null<h2d.Interactive>;

	// Controls
	var styleDropdown:Null<UIStandardMultiAnimDropdown>;
	var chkAutoSpawn:Null<UIStandardMultiCheckbox>;
	var btnClear:Null<UIStandardMultiAnimButton>;

	// State
	var currentStyle:Int = 0;
	var autoSpawnTimer:Float = 0;
	var totalSpawned:Int = 0;

	// Spawn area geometry (relative to programmable pos 40, 70)
	static inline final AREA_X = 0;
	static inline final AREA_Y = 70;
	static inline final AREA_W = 700;
	static inline final AREA_H = 400;
	static inline final DEMO_X = 40;
	static inline final DEMO_Y = 70;

	static final STYLE_ITEMS:Array<UIElementListItem> = [
		{name: "Random"},
		{name: "Damage (-N)"},
		{name: "Heal (+N)"},
		{name: "Crit (N!)"},
		{name: "XP (+N xp)"},
		{name: "Wind Drift"},
		{name: "Splatter"},
		{name: "Wobble"},
	];

	static final ANIM_NAMES = ["dmgAnim", "healAnim", "critAnim", "xpAnim", "windAnim", "splatterAnim", "wobbleAnim"];
	static final COLORS:Array<Int> = [0xFFFF4444, 0xFF44FF44, 0xFFFFD700, 0xFF4488FF, 0xFFBBBBBB, 0xFFFF6622, 0xFFFF88FF];
	static final FONTS = ["exo2_black_16", "exo2_16", "exo2_black_20", "exo2_light_14", "exo2_light_14", "exo2_black_16", "exo2_black_16"];

	override public function load():Void {
		setupDemo("Floating Text", "AnimatedPath-driven floating text for damage numbers, heals, crits, and XP");

		demoBuilder = screenManager.buildFromResourceName("demos/animation/floating-text.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "floatingTextDemo", [], [
			styleDropdown => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar",
				STYLE_ITEMS, 0),
			chkAutoSpawn => addCheckbox(stdBuilder, true),
			btnClear => addButtonWithSingleBuilder(commonBuilder, "backButton", "Clear"),
		]);

		demoResult = ui.builderResults;
		addBuilderResult(demoResult);
		styleDropdown = ui.styleDropdown;
		chkAutoSpawn = ui.chkAutoSpawn;
		btnClear = ui.btnClear;

		// Create spawn container at the area's world position
		spawnContainer = new h2d.Object();
		spawnContainer.setPosition(DEMO_X + AREA_X, DEMO_Y + AREA_Y);
		addObjectToLayer(spawnContainer, DefaultLayer);

		floatingText = new FloatingTextHelper(spawnContainer);

		// Create interactive covering the spawn area
		spawnInteractive = new h2d.Interactive(AREA_W, AREA_H, spawnContainer);
		spawnInteractive.onClick = function(e:hxd.Event) {
			spawnAt(e.relX, e.relY);
		};
	}

	function spawnAt(localX:Float, localY:Float):Void {
		if (demoBuilder == null || floatingText == null)
			return;
		// currentStyle 0 = Random, 1..N = specific styles (offset by 1 from arrays)
		var style = if (currentStyle == 0) Std.random(ANIM_NAMES.length) else currentStyle - 1;
		var animPath = demoBuilder.createAnimatedPath(ANIM_NAMES[style]);
		var text = generateText(style);
		var color = COLORS[style];
		var font = FontManager.getFontByName(FONTS[style]);
		floatingText.spawn(text, font, localX, localY, animPath, color);
		totalSpawned++;
		updateStatusText();
	}

	function generateText(style:Int):String {
		return switch style {
			case 0: '-${Std.random(46) + 5}';
			case 1: '+${Std.random(26) + 5}';
			case 2: '${Std.random(151) + 50}!';
			case 3: '+${Std.random(91) + 10} xp';
			case 4: '~${Std.random(20) + 5}~';
			case 5: '${Std.random(80) + 20}!!';
			case 6: '${Std.random(30) + 10}~';
			default: "?";
		};
	}

	function updateStatusText():Void {
		if (demoResult == null)
			return;
		final count = floatingText != null ? floatingText.count : 0;
		final updatable = demoResult.getUpdatable("statusText");
		if (updatable != null)
			updatable.updateText('Active: $count  |  Total spawned: $totalSpawned');
	}

	override public function update(dt:Float):Void {
		super.update(dt);
		if (floatingText != null) {
			floatingText.update(dt);
			updateStatusText();
		}

		// Auto-spawn
		final autoChk = chkAutoSpawn;
		if (autoChk != null && autoChk.selected) {
			autoSpawnTimer += dt;
			while (autoSpawnTimer >= 0.2) {
				autoSpawnTimer -= 0.2;
				// Random position within spawn area
				final rx = 50.0 + Std.random(Std.int(AREA_W - 100));
				final ry = 50.0 + Std.random(Std.int(AREA_H - 100));
				spawnAt(rx, ry);
			}
		} else {
			autoSpawnTimer = 0;
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == btnClear) {
					if (floatingText != null)
						floatingText.clear();
					updateStatusText();
				}
			case UIChangeItem(index, items):
				if (source == styleDropdown && index >= 0 && index < STYLE_ITEMS.length)
					currentStyle = index;
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		if (spawnInteractive != null) {
			spawnInteractive.remove();
			spawnInteractive = null;
		}
		if (spawnContainer != null) {
			spawnContainer.remove();
			spawnContainer = null;
		}
		demoBuilder = null;
		demoResult = null;
		floatingText = null;
		styleDropdown = null;
		chkAutoSpawn = null;
		btnClear = null;
		totalSpawned = 0;
	}
}
