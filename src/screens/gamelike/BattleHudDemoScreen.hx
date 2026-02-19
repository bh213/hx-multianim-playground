package screens.gamelike;

import bh.ui.*;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class BattleHudDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;

	// State
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
		setupDemo("Hero HUD", "Animated HP/MP bars with Dota 2-style damage trail and death cycle");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/battle-hud.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "battleHudDemo", [
			"hp" => heroHp,
			"maxHp" => heroMaxHp,
			"hpTrail" => heroHp,
			"mp" => heroMp,
			"maxMp" => heroMaxMp,
			"mpTrail" => heroMp,
			"dead" => 0,
		], [], true);

		demoResult = ui.builderResults;
		addBuilderResult(demoResult);
	}

	function refreshDisplay():Void {
		if (demoResult == null) return;
		demoResult.beginUpdate();
		demoResult.setParameter("hp", heroHp);
		demoResult.setParameter("hpTrail", hpTrail);
		demoResult.setParameter("mp", heroMp);
		demoResult.setParameter("mpTrail", mpTrail);
		demoResult.endUpdate();
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
		if (demoResult == null) return;

		if (isDead) {
			deadTimer -= dt;
			updateTrails(dt);
			refreshDisplay();

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
				demoResult.setParameter("dead", 0);
				refreshDisplay();
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
		refreshDisplay();

		if (heroHp <= 0) {
			isDead = true;
			deadTimer = DEAD_DURATION;
			demoResult.setParameter("dead", 1);
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		heroHp = 100;
		heroMaxHp = 100;
		heroMp = 50;
		heroMaxMp = 50;
		hpTrail = 100;
		mpTrail = 50;
		isDead = false;
	}
}
