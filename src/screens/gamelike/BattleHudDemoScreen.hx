package screens.gamelike;

import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class BattleHudDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResults:Array<BuilderResult> = [];
	var controlsResult:Null<BuilderResult>;
	var pauseButton:Null<UIStandardMultiAnimButton>;
	var paused:Bool = false;

	// State (shared across all HUD variants)
	var heroHp:Int = 100;
	var heroMaxHp:Int = 100;
	var heroMp:Int = 50;
	var heroMaxMp:Int = 50;

	// Trail (Float for smooth catch-up animation)
	var hpTrail:Float = 100;
	var mpTrail:Float = 50;
	var hpTrailDelay:Float = 0;
	var mpTrailDelay:Float = 0;

	// Scripted loop
	var loopTimer:Float = 0;
	var isDead:Bool = false;

	// Phase boundaries (seconds within 10s loop)
	// Phase 1: Decrease HP 100→0   (0.0 – 4.0)
	// Phase 2: Dead                 (4.0 – 6.0)
	// Phase 3: Increase HP 0→100   (6.0 – 10.0)
	static inline var DECREASE_END = 4.0;
	static inline var DEAD_END = 6.0;
	static inline var LOOP_DURATION = 10.0;

	override public function load():Void {
		setupDemo("Battle HUD", "Three visual styles, same code — the .manim defines the look, the code drives the data");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/battle-hud.manim", false);

		// Build all 3 HUD variants — same parameters, different visuals
		for (name in ["battleHudDemo", "pixelBattleHud", "verticalBattleHud"]) {
			final result = buildHud(name);
			demoResults.push(result);
			addBuilderResult(result);
		}

		// Controls
		buildControls();
	}

	function buildControls():Void {
		if (controlsResult != null)
			controlsResult.object.remove();
		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "battleHudControls", [], [
			pauseButton => addButtonWithSingleBuilder(stdBuilder, "button", paused ? "Resume" : "Pause"),
		]);
		controlsResult = ui.builderResults;
		addBuilderResult(controlsResult);
		pauseButton = ui.pauseButton;
		pauseButton.onClick = function() {
			paused = !paused;
			buildControls();
		};
	}

	function buildHud(name:String):BuilderResult {
		var params = new Map<String, Dynamic>();
		params.set("hp", heroHp);
		params.set("maxHp", heroMaxHp);
		params.set("hpTrail", heroHp);
		params.set("mp", heroMp);
		params.set("maxMp", heroMaxMp);
		params.set("mpTrail", heroMp);
		params.set("dead", 0);
		return demoBuilder.buildWithParameters(name, params, null, null, true);
	}

	// Same function drives any HUD variant — doesn't know which visual style it's updating
	function refreshHud(result:BuilderResult):Void {
		result.beginUpdate();
		result.setParameter("hp", heroHp);
		result.setParameter("hpTrail", hpTrail);
		result.setParameter("mp", heroMp);
		result.setParameter("mpTrail", mpTrail);
		result.endUpdate();
	}

	function refreshAllHuds():Void {
		for (result in demoResults)
			refreshHud(result);
	}

	function setAllDead(dead:Int):Void {
		for (result in demoResults)
			result.setParameter("dead", dead);
	}

	/** Step-wise decrease: 6 discrete hits over the phase, HP goes 100→80→60→40→20→0 */
	static function steppedDecrease(progress:Float, maxVal:Int):Int {
		var step = Std.int(Math.min(5, Math.floor(progress * 6)));
		return Std.int(maxVal * (5 - step) / 5);
	}

	function updateTrails(dt:Float):Void {
		// Trail follows HP downward with delay
		if (hpTrailDelay > 0) {
			hpTrailDelay -= dt;
		} else if (hpTrail > heroHp) {
			final speed = Math.max((hpTrail - heroHp) * 4, 15);
			hpTrail = Math.max(heroHp, hpTrail - speed * dt);
		}
		// Trail snaps up when HP increases
		if (hpTrail < heroHp)
			hpTrail = heroHp;

		if (mpTrailDelay > 0) {
			mpTrailDelay -= dt;
		} else if (mpTrail > heroMp) {
			final speed = Math.max((mpTrail - heroMp) * 4, 12);
			mpTrail = Math.max(heroMp, mpTrail - speed * dt);
		}
		if (mpTrail < heroMp)
			mpTrail = heroMp;
	}

	override public function update(dt:Float):Void {
		super.update(dt);
		if (demoResults.length == 0)
			return;
		if (paused)
			return;

		var prevHp = heroHp;
		var prevMp = heroMp;
		var wasDead = isDead;

		loopTimer += dt;
		if (loopTimer >= LOOP_DURATION) {
			loopTimer -= LOOP_DURATION;
			// Reset to full at loop boundary
			hpTrail = heroMaxHp;
			mpTrail = heroMaxMp;
			hpTrailDelay = 0;
			mpTrailDelay = 0;
		}

		var t = loopTimer;

		if (t < DECREASE_END) {
			// Phase 1: Decrease HP — discrete hits
			var progress = t / DECREASE_END;
			heroHp = steppedDecrease(progress, heroMaxHp);
			heroMp = steppedDecrease(progress * 0.8, heroMaxMp);
			isDead = false;
		} else if (t < DEAD_END) {
			// Phase 2: Dead
			heroHp = 0;
			heroMp = 0;
			isDead = true;
		} else {
			// Phase 3: Increase HP — smooth heal
			var progress = (t - DEAD_END) / (LOOP_DURATION - DEAD_END);
			heroHp = Std.int(heroMaxHp * progress);
			heroMp = Std.int(heroMaxMp * progress);
			isDead = false;
		}

		// Trigger trail delay on discrete HP/MP drops
		if (heroHp < prevHp)
			hpTrailDelay = 0.25;
		if (heroMp < prevMp)
			mpTrailDelay = 0.2;

		// Dead state transitions
		if (isDead && !wasDead)
			setAllDead(1);
		if (!isDead && wasDead)
			setAllDead(0);

		updateTrails(dt);
		refreshAllHuds();
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResults = [];
		heroHp = 100;
		heroMaxHp = 100;
		heroMp = 50;
		heroMaxMp = 50;
		hpTrail = 100;
		mpTrail = 50;
		isDead = false;
		loopTimer = 0;
		paused = false;
		pauseButton = null;
		controlsResult = null;
	}
}
