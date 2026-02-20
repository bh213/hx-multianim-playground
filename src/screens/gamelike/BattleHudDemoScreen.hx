package screens.gamelike;

import bh.ui.*;
import bh.multianim.MultiAnimBuilder;

class BattleHudDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResults:Array<BuilderResult> = [];

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

	// Damage/mana timing
	var nextDamageTimer:Float = 1.5;
	var nextMpUseTimer:Float = 2.0;

	// Death
	var isDead:Bool = false;
	var deadTimer:Float = 0;
	static inline var DEAD_DURATION = 1.5;

	override public function load():Void {
		setupDemo("Battle HUD", "Three visual styles, same code — the .manim defines the look, the code drives the data");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/battle-hud.manim", false);

		// Build all 3 HUD variants — same parameters, different visuals
		for (name in ["battleHudDemo", "pixelBattleHud", "verticalBattleHud"]) {
			final result = buildHud(name);
			demoResults.push(result);
			addBuilderResult(result);
		}
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

	function dealDamage():Void {
		final damage = 8 + Std.int(Math.random() * 20);
		heroHp = Std.int(Math.max(0, heroHp - damage));
		hpTrailDelay = 0.25;
	}

	function useMana():Void {
		final cost = 3 + Std.int(Math.random() * 12);
		heroMp = Std.int(Math.max(0, heroMp - cost));
		mpTrailDelay = 0.2;
	}

	function updateTrails(dt:Float):Void {
		if (hpTrailDelay > 0) {
			hpTrailDelay -= dt;
		} else if (hpTrail > heroHp) {
			final speed = Math.max((hpTrail - heroHp) * 4, 15);
			hpTrail = Math.max(heroHp, hpTrail - speed * dt);
		}

		if (mpTrailDelay > 0) {
			mpTrailDelay -= dt;
		} else if (mpTrail > heroMp) {
			final speed = Math.max((mpTrail - heroMp) * 4, 12);
			mpTrail = Math.max(heroMp, mpTrail - speed * dt);
		}
	}

	override public function update(dt:Float):Void {
		super.update(dt);
		if (demoResults.length == 0) return;

		if (isDead) {
			deadTimer -= dt;
			updateTrails(dt);
			refreshAllHuds();

			if (deadTimer <= 0) {
				isDead = false;
				heroHp = heroMaxHp;
				heroMp = heroMaxMp;
				hpTrail = heroMaxHp;
				mpTrail = heroMaxMp;
				hpTrailDelay = 0;
				mpTrailDelay = 0;
				nextDamageTimer = 1.5;
				nextMpUseTimer = 2.0;
				setAllDead(0);
				refreshAllHuds();
			}
			return;
		}

		nextDamageTimer -= dt;
		if (nextDamageTimer <= 0) {
			dealDamage();
			nextDamageTimer = 1.0 + Math.random() * 2.0;
		}

		nextMpUseTimer -= dt;
		if (nextMpUseTimer <= 0) {
			useMana();
			nextMpUseTimer = 1.5 + Math.random() * 2.5;
		}

		updateTrails(dt);
		refreshAllHuds();

		if (heroHp <= 0) {
			isDead = true;
			deadTimer = DEAD_DURATION;
			setAllDead(1);
		}
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
	}
}
