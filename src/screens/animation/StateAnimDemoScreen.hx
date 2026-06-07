package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimTabs;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.ui.UIMultiAnimScrollableList;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;
import bh.stateanim.AnimationSM;
import bh.stateanim.AnimParser;
import bh.stateanim.AnimParser.AnimFilterType;

class StateAnimDemoScreen extends DemoScreenBase {
	static final TAB_ITEMS:Array<UIElementListItem> = [
		{name: "Gallery"},
		{name: "Interactive"},
		{name: "Points & Events"},
		{name: "Filters"},
	];
	static final TAB_FILES = [
		"demos/animation/state-anim-gallery.manim",
		"demos/animation/state-anim-interactive.manim",
		"demos/animation/state-anim-points.manim",
		"demos/animation/state-anim-filters.manim",
	];
	static final TAB_DESCRIPTIONS = [
		"All state animations from .anim files — marine, turret, shield, arrows with direction state selectors",
		"Interactive control: select animation, adjust speed, toggle externally-driven mode, scrub with progress slider",
		"Visualize extra points (fire, targeting, line_*) and animation events on live animations",
		"Filter types: tint, brightness, saturate, grayscale, hue, outline, pixelOutline, replaceColor — applied to state animations",
	];

	static final MARINE_ANIMS = [
		"idle", "stand", "hit", "killed", "dead", "dodge",
		"fire-up", "fire-down", "fire-left", "fire-right",
		"fire-upright", "fire-downleft", "fire-upleft", "fire-downright",
	];
	static final MARINE_ANIM_ITEMS:Array<UIElementListItem> = [
		{name: "idle"}, {name: "stand"}, {name: "hit"}, {name: "killed"}, {name: "dead"}, {name: "dodge"},
		{name: "fire-up"}, {name: "fire-down"}, {name: "fire-left"}, {name: "fire-right"},
		{name: "fire-upright"}, {name: "fire-downleft"}, {name: "fire-upleft"}, {name: "fire-downright"},
	];

	static final SHIELD_ANIMS = ["idle_0", "idle_1", "impact"];
	static final SHIELD_ANIM_ITEMS:Array<UIElementListItem> = [
		{name: "idle_0"}, {name: "idle_1"}, {name: "impact"},
	];

	static final TURRET_ANIMS = ["idle", "shoot", "hit", "explode", "destroyed"];
	static final TURRET_ANIM_ITEMS:Array<UIElementListItem> = [
		{name: "idle"}, {name: "shoot"}, {name: "hit"}, {name: "explode"}, {name: "destroyed"},
	];

	static final ARROWS_ANIMS = ["dir0", "dir1", "dir2", "dir3", "dir4", "dir5"];
	static final ARROWS_ANIM_ITEMS:Array<UIElementListItem> = [
		{name: "dir0"}, {name: "dir1"}, {name: "dir2"}, {name: "dir3"}, {name: "dir4"}, {name: "dir5"},
	];

	static final SOURCE_ITEMS:Array<UIElementListItem> = [
		{name: "Marine"},
		{name: "Shield"},
		{name: "Turret"},
		{name: "Arrows"},
	];

	// Per-source config: [anims, items, hasDirection]
	static final SOURCE_ANIMS = [MARINE_ANIMS, SHIELD_ANIMS, TURRET_ANIMS, ARROWS_ANIMS];
	static final SOURCE_ANIM_ITEMS:Array<Array<UIElementListItem>> = [MARINE_ANIM_ITEMS, SHIELD_ANIM_ITEMS, TURRET_ANIM_ITEMS, ARROWS_ANIM_ITEMS];
	static final SOURCE_HAS_DIRECTION = [true, true, false, false];

	static inline final EVENT_LOG_SIZE = 8;

	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var tabs:Null<UIMultiAnimTabs>;

	// Tab 2: Interactive
	var interactiveBuilder:Null<MultiAnimBuilder>;
	var interactiveResult:Null<BuilderResult>;
	var interactiveAnimR:Null<AnimationSM>;
	var interactiveAnimL:Null<AnimationSM>;
	var interactiveAnim:Null<AnimationSM>; // alias to current direction
	var speedSlider:Null<UIStandardMultiAnimSlider>;
	var extDrivenChk:Null<UIStandardMultiCheckbox>;
	var pauseChk:Null<UIStandardMultiCheckbox>;
	var progressSlider:Null<UIStandardMultiAnimSlider>;
	var leftChk:Null<UIStandardMultiCheckbox>;
	var animList:Null<UIMultiAnimScrollableList>;
	var currentAnimName:String = "idle";
	var isExtDriven:Bool = false;
	var speedPct:Int = 100;

	// Tab 3: Points & Events
	var pointsBuilder:Null<MultiAnimBuilder>;
	var pointsResult:Null<BuilderResult>;
	var ptsMarineR:Null<AnimationSM>;
	var ptsMarineL:Null<AnimationSM>;
	var ptsShieldR:Null<AnimationSM>;
	var ptsShieldL:Null<AnimationSM>;
	var ptsTurret:Null<AnimationSM>;
	var ptsArrows:Null<AnimationSM>;
	var ptsAnim:Null<AnimationSM>; // alias to current
	var pointsGraphics:Null<h2d.Graphics>;
	var ptsLeftChk:Null<UIStandardMultiCheckbox>;
	var ptsSourceList:Null<UIMultiAnimScrollableList>;
	var ptsAnimList:Null<UIMultiAnimScrollableList>;
	var eventLog:Array<String> = [];
	var ptsCurrentSource:Int = 0; // 0=marine, 1=shield, 2=turret, 3=arrows
	var ptsCurrentDir:Bool = false; // false=right, true=left

	// Tab 4: Filters
	var filtersResult:Null<BuilderResult>;

	override public function load():Void {
		setupDemo("State Animations", "Interactive exploration of .anim state machine animations");

		demoBuilder = screenManager.buildFromResourceName("demos/animation/state-anim.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "stateAnimDemo", [], [
			animTabs => addTabs(stdBuilder, TAB_ITEMS, 0),
		]);

		demoResult = ui.builderResults;
		tabs = ui.animTabs;
		addBuilderResult(demoResult);

		if (demoResult != null) {
			var updatable = demoResult.getUpdatable("description");
			if (updatable != null)
				updatable.updateText(TAB_DESCRIPTIONS[0]);
		}

		for (t in 0...TAB_FILES.length)
			loadTabContent(t);
	}

	function loadTabContent(index:Int):Void {
		tabs.beginTab(index);

		try {
			switch (index) {
				case 0:
					loadGalleryTab();
				case 1:
					loadInteractiveTab();
				case 2:
					loadPointsTab();
				case 3:
					loadFiltersTab();
			}
		} catch (e) {
			trace('Error loading tab $index: $e');
		}

		tabs.endTab();
	}

	// ---- Tab 1: Gallery ----

	function loadGalleryTab():Void {
		var builder = screenManager.buildFromResourceName(TAB_FILES[0], false);
		if (builder == null) return;
		addBuilderResult(builder.buildWithParameters("galleryUI", []));
	}

	// ---- Tab 2: Interactive ----

	function loadInteractiveTab():Void {
		interactiveBuilder = screenManager.buildFromResourceName(TAB_FILES[1], false);
		if (interactiveBuilder == null) return;

		var ui = MacroUtils.macroBuildWithParameters(interactiveBuilder, "interactiveUI", [], [
			speedSlider => addSlider(stdBuilder, 100),
			extDrivenChk => addCheckbox(stdBuilder, false),
			pauseChk => addCheckbox(stdBuilder, false),
			progressSlider => addSlider(stdBuilder, 0),
			leftChk => addCheckbox(stdBuilder, false),
		]);

		interactiveResult = ui.builderResults;
		speedSlider = ui.speedSlider;
		extDrivenChk = ui.extDrivenChk;
		pauseChk = ui.pauseChk;
		progressSlider = ui.progressSlider;
		leftChk = ui.leftChk;

		addBuilderResult(interactiveResult);

		// Progress slider starts disabled (ext driven is off by default)
		if (progressSlider != null)
			progressSlider.getObject().alpha = 0.3;

		// Animation list (copy to avoid shared array mutation from setItems in Tab 3)
		animList = addScrollableListWithSingleBuilder(stdBuilder, "list-panel", "list-item-120", "scrollbar", "scrollbar",
			MARINE_ANIM_ITEMS.copy(), null, 0, 160, 200);
		animList.getObject().setPosition(260, 35);
		addElement(animList, DefaultLayer);

		// Extract named AnimationSMs from built result
		interactiveAnimR = interactiveResult.getSingleItemByName("previewR").asStateAnim();
		interactiveAnimL = interactiveResult.getSingleItemByName("previewL").asStateAnim();
		interactiveAnimL.visible = false;
		interactiveAnim = interactiveAnimR;

		updateInfoPanel();
	}

	function switchInteractiveDirection(left:Bool):Void {
		var newAnim = left ? interactiveAnimL : interactiveAnimR;
		var oldAnim = interactiveAnim;

		if (oldAnim != null) oldAnim.visible = false;
		if (newAnim != null) {
			newAnim.visible = true;
			newAnim.play(currentAnimName);
			@:privateAccess newAnim.speed = speedPct / 100.0;
			newAnim.externallyDriven = isExtDriven;
		}
		interactiveAnim = newAnim;
		updateInfoPanel();
	}

	function playInteractiveAnim(name:String):Void {
		currentAnimName = name;
		if (interactiveAnim != null) {
			interactiveAnim.play(name);
			@:privateAccess interactiveAnim.speed = speedPct / 100.0;
		}
		updateInfoPanel();
	}

	function scrubToProgress(value:Int):Void {
		if (interactiveAnim == null) return;
		interactiveAnim.play(currentAnimName);
		var duration = getAnimDuration(interactiveAnim);
		var targetTime = duration * value / 100.0;
		if (targetTime > 0) {
			@:privateAccess interactiveAnim.speed = 1.0;
			interactiveAnim.update(targetTime);
			@:privateAccess interactiveAnim.speed = speedPct / 100.0;
		}
		interactiveAnim.paused = true;
	}

	function getAnimDuration(anim:AnimationSM):Float {
		if (anim.current == null) return 0;
		var total:Float = 0;
		for (s in anim.current.states) {
			switch (s) {
				case Frame(f):
					total += f.duration;
				default:
			}
		}
		return total;
	}

	function getFrameCount(anim:AnimationSM):Int {
		if (anim.current == null) return 0;
		var count = 0;
		for (s in anim.current.states) {
			switch (s) {
				case Frame(_):
					count++;
				default:
			}
		}
		return count;
	}

	function updateInfoPanel():Void {
		if (interactiveResult == null || interactiveAnim == null) return;

		var animName = interactiveAnim.getCurrentAnimName();
		setUpdatable(interactiveResult, "infoName", animName != null ? animName : "-");

		var frame = interactiveAnim.getCurrentFrame();
		if (frame != null) {
			var fps = Math.round(1.0 / frame.duration);
			setUpdatable(interactiveResult, "infoFps", '$fps');
		} else {
			setUpdatable(interactiveResult, "infoFps", "-");
		}

		var frameCount = getFrameCount(interactiveAnim);
		setUpdatable(interactiveResult, "infoFrames", '$frameCount');

		if (interactiveAnim.current != null) {
			var loopText = switch (interactiveAnim.current.loopCount) {
				case -1: "forever";
				case 0: "none (play once)";
				default: '${interactiveAnim.current.loopCount}x';
			};
			setUpdatable(interactiveResult, "infoLoop", loopText);
		}
	}

	// ---- Tab 3: Points & Events ----

	function loadPointsTab():Void {
		pointsBuilder = screenManager.buildFromResourceName(TAB_FILES[2], false);
		if (pointsBuilder == null) return;

		var ui = MacroUtils.macroBuildWithParameters(pointsBuilder, "pointsUI", [], [
			ptsLeftChk => addCheckbox(stdBuilder, false),
		]);

		pointsResult = ui.builderResults;
		ptsLeftChk = ui.ptsLeftChk;
		addBuilderResult(pointsResult);

		// Source list
		ptsSourceList = addScrollableListWithSingleBuilder(stdBuilder, "list-panel", "list-item-120", "scrollbar", "scrollbar",
			SOURCE_ITEMS, null, 0, 160, 100);
		ptsSourceList.getObject().setPosition(260, 55);
		addElement(ptsSourceList, DefaultLayer);

		// Animation list (copy to own the array, since setItems mutates in-place)
		ptsAnimList = addScrollableListWithSingleBuilder(stdBuilder, "list-panel", "list-item-120", "scrollbar", "scrollbar",
			MARINE_ANIM_ITEMS.copy(), null, 0, 160, 120);
		ptsAnimList.getObject().setPosition(430, 55);
		addElement(ptsAnimList, DefaultLayer);

		// Graphics overlay for crosshairs
		pointsGraphics = new h2d.Graphics();
		addObjectToLayer(pointsGraphics, DefaultLayer);

		// Extract all named AnimationSMs
		ptsMarineR = pointsResult.getSingleItemByName("marineR").asStateAnim();
		ptsMarineL = pointsResult.getSingleItemByName("marineL").asStateAnim();
		ptsShieldR = pointsResult.getSingleItemByName("shieldR").asStateAnim();
		ptsShieldL = pointsResult.getSingleItemByName("shieldL").asStateAnim();
		ptsTurret = pointsResult.getSingleItemByName("turret").asStateAnim();
		ptsArrows = pointsResult.getSingleItemByName("arrows").asStateAnim();

		// Hide all except initial
		ptsMarineL.visible = false;
		ptsShieldR.visible = false;
		ptsShieldL.visible = false;
		ptsTurret.visible = false;
		ptsArrows.visible = false;
		ptsAnim = ptsMarineR;

		setupPointsAnimEvents(ptsMarineR);
		setupPointsAnimEvents(ptsMarineL);
		setupPointsAnimEvents(ptsShieldR);
		setupPointsAnimEvents(ptsShieldL);
		setupPointsAnimEvents(ptsTurret);
		setupPointsAnimEvents(ptsArrows);
	}

	function setupPointsAnimEvents(anim:AnimationSM):Void {
		anim.onAnimationEvent = function(event) {
			var logEntry = switch (event) {
				case Trigger(data): 'Trigger: $data';
				case TriggerData(name, meta): 'TriggerData: $name ${meta != null ? Std.string(meta) : ""}';
				case PointEvent(name, point): 'Event: $name at (${point.x}, ${point.y})';
			};
			addEventLogEntry(logEntry);
		};
	}

	function addEventLogEntry(entry:String):Void {
		eventLog.insert(0, entry);
		if (eventLog.length > EVENT_LOG_SIZE)
			eventLog.resize(EVENT_LOG_SIZE);
		updateEventLogDisplay();
	}

	function updateEventLogDisplay():Void {
		if (pointsResult == null) return;
		for (i in 0...EVENT_LOG_SIZE) {
			var text = i < eventLog.length ? eventLog[i] : "";
			setUpdatable(pointsResult, 'eventLog$i', text);
		}
	}

	function switchPointsSource(sourceIdx:Int):Void {
		ptsCurrentSource = sourceIdx;

		// Update animation list items (copy to avoid setItems mutating the static array in-place)
		if (ptsAnimList != null)
			ptsAnimList.setItems(SOURCE_ANIM_ITEMS[sourceIdx].copy());

		// Update direction UI based on whether source has direction state
		var hasDir = SOURCE_HAS_DIRECTION[sourceIdx];
		if (ptsLeftChk != null)
			ptsLeftChk.getObject().alpha = hasDir ? 1.0 : 0.3;
		setUpdatable(pointsResult, "ptsDirValue", hasDir ? (ptsCurrentDir ? "l" : "r") : "-");

		// Reset direction to right for sources without direction
		if (!hasDir)
			ptsCurrentDir = false;

		switchPointsAnim(0);
	}

	function switchPointsAnim(animIdx:Int):Void {
		var anims = SOURCE_ANIMS[ptsCurrentSource];
		if (animIdx < 0 || animIdx >= anims.length) return;
		var animName = anims[animIdx];

		// Hide all
		if (ptsMarineR != null) ptsMarineR.visible = false;
		if (ptsMarineL != null) ptsMarineL.visible = false;
		if (ptsShieldR != null) ptsShieldR.visible = false;
		if (ptsShieldL != null) ptsShieldL.visible = false;
		if (ptsTurret != null) ptsTurret.visible = false;
		if (ptsArrows != null) ptsArrows.visible = false;

		// Select and show correct one
		switch (ptsCurrentSource) {
			case 0:
				ptsAnim = ptsCurrentDir ? ptsMarineL : ptsMarineR;
			case 1:
				ptsAnim = ptsCurrentDir ? ptsShieldL : ptsShieldR;
			case 2:
				ptsAnim = ptsTurret;
			case 3:
				ptsAnim = ptsArrows;
			default:
				ptsAnim = ptsMarineR;
		}

		if (ptsAnim != null) {
			ptsAnim.visible = true;
			ptsAnim.play(animName);
		}

		eventLog = [];
		updateEventLogDisplay();
	}

	function switchPointsDirection(left:Bool):Void {
		// Ignore direction toggle for sources without direction
		if (!SOURCE_HAS_DIRECTION[ptsCurrentSource]) return;

		ptsCurrentDir = left;
		// Get current anim name before switching
		var animName = ptsAnim != null ? ptsAnim.getCurrentAnimName() : "idle";

		// Hide all
		if (ptsMarineR != null) ptsMarineR.visible = false;
		if (ptsMarineL != null) ptsMarineL.visible = false;
		if (ptsShieldR != null) ptsShieldR.visible = false;
		if (ptsShieldL != null) ptsShieldL.visible = false;
		if (ptsTurret != null) ptsTurret.visible = false;
		if (ptsArrows != null) ptsArrows.visible = false;

		switch (ptsCurrentSource) {
			case 0:
				ptsAnim = left ? ptsMarineL : ptsMarineR;
			case 1:
				ptsAnim = left ? ptsShieldL : ptsShieldR;
			default:
		}

		if (ptsAnim != null) {
			ptsAnim.visible = true;
			if (animName != null)
				ptsAnim.play(animName);
		}
	}

	function drawExtraPoints():Void {
		if (pointsGraphics == null || ptsAnim == null) return;
		pointsGraphics.clear();

		var pointNames = ptsAnim.getExtraPointNames();
		var baseX:Float = 120;
		var baseY:Float = 180;

		for (i in 0...pointNames.length) {
			var name = pointNames[i];
			var pt = ptsAnim.getExtraPoint(name);
			if (pt == null) continue;

			var px = baseX + pt.x;
			var py = baseY + pt.y;

			// Crosshair
			pointsGraphics.lineStyle(2, 0xFFff7f50);
			pointsGraphics.moveTo(px - 8, py);
			pointsGraphics.lineTo(px + 8, py);
			pointsGraphics.moveTo(px, py - 8);
			pointsGraphics.lineTo(px, py + 8);

			// Small circle
			pointsGraphics.lineStyle(1, 0xFFff7f50);
			pointsGraphics.drawCircle(px, py, 4);

			// Update info text
			if (i < 5) {
				setUpdatable(pointsResult, 'pointInfo$i', '$name: (${pt.x}, ${pt.y})');
			}
		}

		// Clear unused point info slots
		for (i in pointNames.length...5) {
			setUpdatable(pointsResult, 'pointInfo$i', "");
		}
	}

	// ---- Tab 4: Filters ----

	function loadFiltersTab():Void {
		var builder = screenManager.buildFromResourceName(TAB_FILES[3], false);
		if (builder == null) return;
		filtersResult = builder.buildWithParameters("filtersUI", []);
		addBuilderResult(filtersResult);

		// Apply filters to named state animations
		applyAnimFilter("filterTint", AFTint(0xFFFF4444));
		applyAnimFilter("filterBrightness", AFBrightness(1.5));
		applyAnimFilter("filterSaturate", AFSaturate(0.0));
		applyAnimFilter("filterGrayscale", AFGrayscale(1.0));
		applyAnimFilter("filterHue", AFHue(120 * Math.PI / 180)); // hue rotation is in radians
		applyAnimFilter("filterOutline", AFOutline(2.0, 0xFFFFFF00));
		applyAnimFilter("filterPixelOutline", AFPixelOutline(0xFF00FF00));
		applyAnimFilter("filterReplaceColor", AFReplaceColor([0xFF5B6EE1, 0xFF3F3F74], [0xFFE15B5B, 0xFF743F3F]));

		// Combined filter examples
		applyAnimFilterCombo("filterCombo1", AFTint(0xFFFF6644), AFOutline(1.0, 0xFFFFFFFF));
		applyAnimFilterCombo("filterCombo2", AFGrayscale(1.0), AFPixelOutline(0xFFFF0000));
		applyAnimFilterCombo("filterCombo3", AFHue(60 * Math.PI / 180), AFBrightness(1.3));

	}

	function applyAnimFilter(name:String, filterType:AnimFilterType):Void {
		if (filtersResult == null) return;
		var item = filtersResult.getSingleItemByName(name);
		if (item == null) return;
		var anim:AnimationSM = item.asStateAnim();
		switch filterType {
			case AFTint(color):
				var c = color;
				if (c >>> 24 == 0) c |= 0xFF000000;
				anim.clip.color.setColor(c);
			default:
				@:nullSafety(Off) anim.clip.filter = AnimParser.buildAnimFilter(filterType);
		}
	}

	function applyAnimFilterCombo(name:String, filter1:AnimFilterType, filter2:AnimFilterType):Void {
		if (filtersResult == null) return;
		var item = filtersResult.getSingleItemByName(name);
		if (item == null) return;
		var anim:AnimationSM = item.asStateAnim();

		var group = new h2d.filter.Group();
		var hasFilter = false;

		for (ft in [filter1, filter2]) {
			switch ft {
				case AFTint(color):
					var c = color;
					if (c >>> 24 == 0) c |= 0xFF000000;
					anim.clip.color.setColor(c);
				default:
					var f = AnimParser.buildAnimFilter(ft);
					if (f != null) {
						group.add(f);
						hasFilter = true;
					}
			}
		}

		if (hasFilter)
			@:nullSafety(Off) anim.clip.filter = group;
	}

	// ---- Shared ----

	function setUpdatable(result:Null<BuilderResult>, name:String, text:String):Void {
		if (result == null) return;
		var updatable = result.getUpdatable(name);
		if (updatable != null) updatable.updateText(text);
	}

	// ---- Update loop ----

	override public function update(dt:Float):Void {
		super.update(dt);

		// Tab 2: update metadata display and externally driven logic
		if (interactiveAnim != null && interactiveResult != null) {
			// When externally driven, we drive the animation
			if (isExtDriven && !interactiveAnim.paused) {
				interactiveAnim.update(dt);
			}

			// Update current frame display
			var frameIdx = interactiveAnim.clip.getCurrentFrameIndex();
			var frameCount = getFrameCount(interactiveAnim);
			setUpdatable(interactiveResult, "infoCurrentFrame", '$frameIdx / $frameCount');
			setUpdatable(interactiveResult, "infoFinished", '${interactiveAnim.isFinished()}');
		}

		// Tab 3: draw crosshairs
		if (ptsAnim != null && pointsGraphics != null) {
			drawExtraPoints();
		}

	}

	// ---- Event handling ----

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIChangeItem(index, items):
				if (source == tabs) {
					if (demoResult != null) {
						var updatable = demoResult.getUpdatable("description");
						if (updatable != null && index >= 0 && index < TAB_DESCRIPTIONS.length)
							updatable.updateText(TAB_DESCRIPTIONS[index]);
					}
				}

			case UIDoubleClickItem(index, items):
				// Tab 2: animation list
				if (source == animList && index >= 0 && index < MARINE_ANIMS.length) {
					playInteractiveAnim(MARINE_ANIMS[index]);
				}
				// Tab 3: source list
				if (source == ptsSourceList && index >= 0 && index < SOURCE_ITEMS.length) {
					switchPointsSource(index);
				}
				// Tab 3: animation list
				if (source == ptsAnimList) {
					switchPointsAnim(index);
				}

			case UIChangeValue(value):
				if (source == speedSlider) {
					speedPct = value;
					if (interactiveAnim != null)
						@:privateAccess interactiveAnim.speed = value / 100.0;
					setUpdatable(interactiveResult, "speedValue", '$value%');
				} else if (source == progressSlider && isExtDriven) {
					scrubToProgress(value);
					setUpdatable(interactiveResult, "progressValue", '$value%');
				}

			case UIToggle(checked):
				if (source == extDrivenChk) {
					isExtDriven = checked;
					if (interactiveAnim != null)
						interactiveAnim.externallyDriven = checked;
					if (progressSlider != null)
						progressSlider.getObject().alpha = checked ? 1.0 : 0.3;
				} else if (source == pauseChk) {
					if (interactiveAnim != null)
						interactiveAnim.paused = checked;
				} else if (source == leftChk) {
					switchInteractiveDirection(checked);
					setUpdatable(interactiveResult, "dirValue", checked ? "l" : "r");
				} else if (source == ptsLeftChk) {
					switchPointsDirection(checked);
					if (SOURCE_HAS_DIRECTION[ptsCurrentSource])
						setUpdatable(pointsResult, "ptsDirValue", checked ? "l" : "r");
				}

			default:
		}
		super.onScreenEvent(event, source);
	}

	// ---- Cleanup ----

	override public function onClear():Void {
		demoBuilder = null;
		demoResult = null;
		tabs = null;
		interactiveBuilder = null;
		interactiveResult = null;
		interactiveAnimR = null;
		interactiveAnimL = null;
		interactiveAnim = null;
		speedSlider = null;
		extDrivenChk = null;
		pauseChk = null;
		progressSlider = null;
		leftChk = null;
		animList = null;
		pointsBuilder = null;
		pointsResult = null;
		ptsMarineR = null;
		ptsMarineL = null;
		ptsShieldR = null;
		ptsShieldL = null;
		ptsTurret = null;
		ptsArrows = null;
		ptsAnim = null;
		pointsGraphics = null;
		ptsLeftChk = null;
		ptsSourceList = null;
		ptsAnimList = null;
		eventLog = [];
		filtersResult = null;
		super.onClear();
	}
}
