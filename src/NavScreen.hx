import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
import bh.ui.screens.ScreenTransition;
import bh.base.MacroUtils;

class NavScreen extends UIScreenBase {
	var commonBuilder:Null<MultiAnimBuilder>;
	var carouselBuilder:Null<MultiAnimBuilder>;
	var navBuilder:Null<MultiAnimBuilder>;
	var cards:Array<{button:UIStandardMultiAnimButton, screenName:String}>;

	// Carousel state
	var carouselResult:Null<BuilderResult>;
	var navResult:Null<BuilderResult>;
	var viewDemoButton:Null<UIStandardMultiAnimButton>;
	var currentSlide:Int = 0;
	var slideTimer:Float = 0.0;

	// Animated slide params (tracked to avoid redundant setParameter calls)
	var lastCondValue:Int = -1;
	var lastCondState:Int = -1;
	var lastNpW:Int = -1;
	var lastNpH:Int = -1;
	var animTimer:Float = 0.0; // always runs, even when paused

	// Particle slide (managed separately since particles can't be inside conditionals)
	var particleObject:Null<h2d.Object>;

	// Carousel controls
	var prevBtn:Null<UIStandardMultiAnimButton>;
	var nextBtn:Null<UIStandardMultiAnimButton>;
	var pauseBtn:Null<UIStandardMultiAnimButton>;
	var playBtn:Null<UIStandardMultiAnimButton>;
	var isPaused:Bool = false;

	static inline final SLIDE_INTERVAL:Float = 5.0;
	static inline final NUM_SLIDES:Int = 7;
	static inline final PARTICLE_SLIDE:Int = 6;

	static final SLIDE_DATA:Array<{title:String, desc:String, syntax:String, target:String}> = [
		{
			title: "Sprite Animations",
			desc: "State machine animations from .anim files\nwith direction states, loop control, and frame events",
			syntax: "stateAnim construct(\"s\", \"s\" => sheet \"crew2\", anim, 10, loop)",
			target: "stateAnim"
		},
		{
			title: "Visual Filters",
			desc: "9 GPU filters: glow, outline, blur, saturate,\nbrightness, dropShadow, hue, grayscale, pixelOutline",
			syntax: "filter: glow(color: #ffaa00, alpha: 0.8, radius: 8)",
			target: "filters"
		},
		{
			title: "9-Patch Panels",
			desc: "Scalable UI panels from sprite sheets.\nDefine once, render at any size",
			syntax: "ninepatch(\"ui\", \"Window_3x3_idle\", 200, 60)",
			target: "ninepatch"
		},
		{
			title: "Runtime Conditionals",
			desc: "Parameter switching with @() conditionals.\nExpressions, comparisons, ranges, and negation",
			syntax: "@(param=>A) text(...)  @(param=>!C) text(...)",
			target: "conditionals"
		},
		{
			title: "Repeatable Patterns",
			desc: "Generate grids and sequences with repeatable loops.\nUse $i in expressions for alpha, position, color",
			syntax: "repeatable($i, step(20)) { @alpha(1.0 - $i/5.0) ... }",
			target: "repeatable"
		},
		{
			title: "Pixel Art & Text",
			desc: "Procedural line drawing with pixels blocks.\nMulti-font text rendering with alignment options",
			syntax: "pixels( line 0,0, 40,40, #ff4444 )",
			target: "pixelsGraphics"
		},
		{
			title: "Particle Effects",
			desc: "GPU particle systems with sub-emitters.\nFirework bursts spawn on particle death",
			syntax: "subEmitters: [{ groupId: \"burst\", trigger: ondeath, burstCount: 18 }]",
			target: "particles"
		}
	];

	static final CATEGORIES:Array<{name:String, screens:Array<{id:String, title:String}>}> = [
		{
			name: "Advanced Features",
			screens: [
				{id: "featureShowcase", title: "Feature Showcase"},
				{id: "incremental", title: "Incremental"},
				{id: "interactives", title: "Interactives"},
				{id: "conditionals", title: "Conditionals"},
				{id: "expressions", title: "Expressions"},
				{id: "settings", title: "Settings"},
				{id: "macroPerformance", title: "Macro Performance"},
				{id: "loadoutRuntime", title: "Loadout Lab (runtime)"},
				{id: "loadoutCodegen", title: "Loadout Lab (codegen)"},
			]
		},
		{
			name: "UI Components",
			screens: [
				{id: "buttons", title: "Buttons"},
				{id: "checkboxes", title: "Checkboxes"},
				{id: "sliders", title: "Sliders"},
				{id: "dropdowns", title: "Dropdowns"},
				{id: "scrollableList", title: "Scrollable List"},
				{id: "radio", title: "Radio Buttons"},
				{id: "progressBar", title: "Progress Bars"},
				{id: "draggable", title: "Draggable"},
				{id: "dialogs", title: "Dialogs"},
				{id: "tabs", title: "Tabs"},
				{id: "textInput", title: "Text Input"},
				{id: "tooltipsPanels", title: "Tooltips & Panels"},
			]
		},
		{
			name: "Layout & Composition",
			screens: [
				{id: "staticRefs", title: "Static Refs"},
				{id: "dynamicRefs", title: "Dynamic Refs"},
				{id: "flowLayout", title: "Flow Layout"},
				{id: "repeatable", title: "Repeatable"},
				{id: "slots", title: "Slots"},
				{id: "comboStates", title: "Combo States"},
			]
		},
		{
			name: "Graphics & Rendering",
			screens: [
				{id: "bitmapsAtlas", title: "Bitmaps & Atlas"},
				{id: "ninepatch", title: "Ninepatch"},
				{id: "textFonts", title: "Text & Fonts"},
				{id: "richText", title: "Rich Text"},
				{id: "richTextAutofit", title: "Rich Text Autofit"},
				{id: "pixelsGraphics", title: "Pixels & Graphics"},
			]
		},
		{
			name: "Animation & Effects",
			screens: [
				{id: "stateAnim", title: "State Animations"},
				{id: "particles", title: "Particles"},
				{id: "paths", title: "Paths"},
				{id: "curves", title: "Curves"},
				{id: "animPath", title: "Anim Paths"},
				{id: "filters", title: "Filters"},
				{id: "floatingText", title: "Floating Text"},
				{id: "screenShake", title: "Screen Shake"},
				{id: "transitions", title: "Transitions"},
			]
		},
		{
			name: "Game-Like Demos",
			screens: [
				{id: "inventory", title: "Inventory Grid"},
				{id: "characterSheet", title: "Character Sheet"},
				{id: "blob47", title: "Blob47 Autotile"},
				{id: "battleHud", title: "Battle HUD"},
				{id: "skillTree", title: "Equipment Tree"},
				{id: "dialogue", title: "Dialogue Box"},
				{id: "statusEffects", title: "Status Effects"},
			{id: "cards", title: "Cards"},
				{id: "gridComponent", title: "Grid Component"},
				{id: "projectList", title: "Project List"},
			]
		}
	];

	public function load():Void {
		commonBuilder = screenManager.buildFromResourceName("demo-common.manim", false);
		carouselBuilder = screenManager.buildFromResourceName("nav-carousel.manim", false);
		navBuilder = screenManager.buildFromResourceName("nav-screen.manim", false);
		cards = [];
		currentSlide = 0;
		slideTimer = 0.0;

		// ── Nav layout (title + info panel + control buttons) ────
		var ui = MacroUtils.macroBuildWithParameters(navBuilder, "navLayout", [], [
			viewDemoButton => addButtonWithSingleBuilder(commonBuilder, "viewDemoButton", "View Demo >"),
			prevBtn => addButtonWithSingleBuilder(commonBuilder, "carouselCtrlBtn", "<"),
			pauseBtn => addButtonWithSingleBuilder(commonBuilder, "carouselCtrlBtn", "||"),
			playBtn => addButtonWithSingleBuilder(commonBuilder, "carouselCtrlBtn", ">"),
			nextBtn => addButtonWithSingleBuilder(commonBuilder, "carouselCtrlBtn", ">"),
		]);

		navResult = ui.builderResults;
		viewDemoButton = ui.viewDemoButton;
		prevBtn = ui.prevBtn;
		nextBtn = ui.nextBtn;
		pauseBtn = ui.pauseBtn;
		playBtn = ui.playBtn;
		addBuilderResult(navResult);
		playBtn.getObject().visible = false;

		// ── Carousel visual (position from layouts) ──────────────
		var layouts = navBuilder.getLayouts();
		var carouselPos = layouts.getPoint("positions", 0);
		carouselResult = carouselBuilder.buildWithParameters("carouselContent", ["currentSlide" => 0], null, null, true);
		carouselResult.object.setPosition(carouselPos.x, carouselPos.y);
		addBuilderResult(carouselResult);

		// ── Particle effects (position from layouts) ─────────────
		var particlePos = layouts.getPoint("positions", 1);
		var fireworks = carouselBuilder.createParticles("navFireworkLauncher");
		carouselBuilder.addParticleGroupTo("navFireworkBurst", fireworks);
		fireworks.setPosition(particlePos.x, particlePos.y);
		fireworks.visible = false;
		addObjectToLayer(fireworks, DefaultLayer);
		particleObject = fireworks;

		// Initial info panel content
		updateInfoPanel();

		// ── Category headers (positions from layouts) ────────────
		for (i in 0...CATEGORIES.length) {
			var pos = layouts.getPoint("catHeaders", i);
			var headerResult = commonBuilder.buildWithParameters("categoryHeader", ["title" => CATEGORIES[i].name]);
			headerResult.object.setPosition(pos.x, pos.y);
			addBuilderResult(headerResult);
		}

		// ── Nav cards (positions from layouts, flat index) ───────
		var cardIdx = 0;
		for (cat in CATEGORIES) {
			for (screen in cat.screens) {
				var pos = layouts.getPoint("navCards", cardIdx);
				var cardButton = addButtonWithSingleBuilder(commonBuilder, "navCardSmall", null, screen.title);
				addElement(cardButton, DefaultLayer);
				cardButton.getObject().setPosition(pos.x, pos.y);
				cards.push({button: cardButton, screenName: screen.id});
				cardIdx++;
			}
		}
	}

	// ── Carousel auto-advance ─────────────────────────────────────

	override public function update(dt:Float):Void {
		super.update(dt);

		animTimer += dt;

		if (!isPaused) {
			slideTimer += dt;
			if (slideTimer >= SLIDE_INTERVAL) {
				slideTimer = 0.0;
				goToSlide((currentSlide + 1) % NUM_SLIDES);
			}
		}

		// Animate slide-specific parameters (always, even when paused)
		if (carouselResult != null)
			updateSlideAnimations();
	}

	function updateSlideAnimations():Void {
		var t = animTimer; // always-running timer for continuous animation

		if (currentSlide == 2) {
			// 9-patch resize: grow X (0-1.5s), grow Y (1.5-3s), shrink both (3-5s), loops
			var cycle = t % 5.0;
			var w:Int;
			var h:Int;
			if (cycle < 1.5) {
				var p = cycle / 1.5;
				w = Math.round(120 + 330 * p);
				h = 50;
			} else if (cycle < 3.0) {
				var p = (cycle - 1.5) / 1.5;
				w = 450;
				h = Math.round(50 + 100 * p);
			} else {
				var p = (cycle - 3.0) / 2.0;
				w = Math.round(450 - 330 * p);
				h = Math.round(150 - 100 * p);
			}
			if (w != lastNpW) {
				lastNpW = w;
				carouselResult.setParameter("npW", w);
			}
			if (h != lastNpH) {
				lastNpH = h;
				carouselResult.setParameter("npH", h);
			}
			// Update size text
			var sizeUpd = carouselResult.getUpdatable("npSizeText");
			if (sizeUpd != null)
				sizeUpd.updateText('$w x $h');
		}

		if (currentSlide == 3) {
			// Oscillate condValue 0..100 (sine wave over 5s)
			var val = Math.round(50 + 49 * Math.sin(t * Math.PI * 2 / 5));
			if (val != lastCondValue) {
				lastCondValue = val;
				carouselResult.setParameter("condValue", val);
				var barUpd = carouselResult.getUpdatable("condBarValue");
				if (barUpd != null)
					barUpd.updateText('$val');
			}
			// Cycle A/B/C state every 1.5s
			var state = Math.floor(t / 1.5) % 3;
			if (state != lastCondState) {
				lastCondState = state;
				carouselResult.setParameter("condState", state);
			}
		}
	}

	function goToSlide(index:Int):Void {
		currentSlide = index;
		slideTimer = 0.0;
		animTimer = 0.0;
		lastCondValue = -1;
		lastCondState = -1;
		lastNpW = -1;
		lastNpH = -1;

		// Update carousel visual (also updates dot indicators via conditionals)
		if (carouselResult != null)
			carouselResult.setParameter("currentSlide", index);

		// Show/hide particles for slide 6
		if (particleObject != null)
			particleObject.visible = (index == PARTICLE_SLIDE);

		updateInfoPanel();
	}

	function updateInfoPanel():Void {
		if (navResult == null) return;
		var data = SLIDE_DATA[currentSlide];
		var titleUpd = navResult.getUpdatable("slideTitle");
		if (titleUpd != null) titleUpd.updateText(data.title);
		var descUpd = navResult.getUpdatable("slideDesc");
		if (descUpd != null) descUpd.updateText(data.desc);
		var syntaxUpd = navResult.getUpdatable("slideSyntax");
		if (syntaxUpd != null) syntaxUpd.updateText(data.syntax);
	}

	// ── Navigation ────────────────────────────────────────────────

	function navigateToScreen(screenId:String):Void {
		final targetScreen = screenManager.getScreen(screenId);
		final masterScreen:DemoMasterScreen = cast(screenManager.getScreen("demoMaster"), DemoMasterScreen);
		if (Std.isOfType(targetScreen, DemoScreenBase)) {
			final demo:DemoScreenBase = cast targetScreen;
			masterScreen.setDemoInfo(demo.demoTitle, demo.demoDescription);
		}
		screenManager.switchScreen(MasterAndSingle(masterScreen, targetScreen), SlideLeft(0.25, EaseOutCubic));
		#if js
		Main.instance.currentScreenName = screenId;
		js.Browser.window.location.hash = 'screen=${screenId}';
		#end
	}

	// ── Events ────────────────────────────────────────────────────

	public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				// Carousel controls
				if (source == prevBtn) {
					goToSlide((currentSlide - 1 + NUM_SLIDES) % NUM_SLIDES);
					return;
				}
				if (source == nextBtn) {
					goToSlide((currentSlide + 1) % NUM_SLIDES);
					return;
				}
				if (source == pauseBtn || source == playBtn) {
					isPaused = !isPaused;
					if (pauseBtn != null) pauseBtn.getObject().visible = !isPaused;
					if (playBtn != null) playBtn.getObject().visible = isPaused;
					return;
				}
				// View Demo button
				if (source == viewDemoButton) {
					navigateToScreen(SLIDE_DATA[currentSlide].target);
					return;
				}
				// Nav card buttons
				for (card in cards) {
					if (source == card.button) {
						navigateToScreen(card.screenName);
						return;
					}
				}
			default:
		}
	}

	// ── Cleanup ───────────────────────────────────────────────────

	public override function onClear():Void {
		commonBuilder = null;
		carouselBuilder = null;
		navBuilder = null;
		cards = [];
		carouselResult = null;
		navResult = null;
		viewDemoButton = null;
		particleObject = null;
		prevBtn = null;
		nextBtn = null;
		pauseBtn = null;
		playBtn = null;
		isPaused = false;
	}
}
