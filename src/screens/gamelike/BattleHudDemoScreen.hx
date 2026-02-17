package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;

class BattleHudDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var attackButton:Null<UIStandardMultiAnimButton>;
	var defendButton:Null<UIStandardMultiAnimButton>;

	// Hero stats
	var heroHp:Int = 100;
	var heroMaxHp:Int = 100;
	var heroMp:Int = 50;
	var heroMaxMp:Int = 50;
	var defending:Bool = false;

	// Enemy stats
	var enemyHp:Int = 80;
	var enemyMaxHp:Int = 80;
	var enemyMp:Int = 30;
	var enemyMaxMp:Int = 30;

	// Turn management
	var isPlayerTurn:Bool = true;
	var enemyDelayTimer:Float = 0;
	var waitingForEnemy:Bool = false;

	// Damage text animation
	var damageTextTimer:Float = 0;
	var damageTextY:Float = 0;
	var showingDamage:Bool = false;

	override public function load():Void {
		setupDemo("Battle HUD", "Two-unit battle with HP/MP bars, actions, and turn-based combat");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/battle-hud.manim", false);

		attackButton = addButtonWithSingleBuilder(stdBuilder, "button", null, "Attack");
		addElement(attackButton, null);
		defendButton = addButtonWithSingleBuilder(stdBuilder, "button", null, "Defend");
		addElement(defendButton, null);

		demoResult = demoBuilder.buildWithParameters("battleHudDemo", [], {
			placeholderObjects: [
				"attackButton" => PVObject(attackButton.getObject()),
				"defendButton" => PVObject(defendButton.getObject()),
			]
		});
		addBuilderResult(demoResult);

		refreshBars();
	}

	function doPlayerAttack():Void {
		if (!isPlayerTurn || waitingForEnemy) return;

		defending = false;
		final damage = 10 + Std.int(Math.random() * 8);
		enemyHp = Std.int(Math.max(0, enemyHp - damage));

		showDamageText('$damage', 500, 150);
		setLog('Hero attacks for $damage damage!');

		if (enemyHp <= 0) {
			setLog("Enemy defeated! Victory!");
			setTurnText("VICTORY!");
			isPlayerTurn = false;
			refreshBars();
			return;
		}

		isPlayerTurn = false;
		waitingForEnemy = true;
		enemyDelayTimer = 1.5;
		setTurnText("Enemy Turn...");
		refreshBars();
	}

	function doPlayerDefend():Void {
		if (!isPlayerTurn || waitingForEnemy) return;

		defending = true;
		setLog("Hero takes a defensive stance!");
		demoResult.getUpdatable("heroStatusText").updateText("Defending");

		isPlayerTurn = false;
		waitingForEnemy = true;
		enemyDelayTimer = 1.5;
		setTurnText("Enemy Turn...");
	}

	function doEnemyAttack():Void {
		var damage = 8 + Std.int(Math.random() * 6);
		if (defending) {
			damage = Std.int(damage / 2);
			defending = false;
			demoResult.getUpdatable("heroStatusText").updateText("");
			setLog('Enemy attacks for $damage (blocked half)!');
		} else {
			setLog('Enemy attacks for $damage damage!');
		}

		heroHp = Std.int(Math.max(0, heroHp - damage));
		showDamageText('$damage', 150, 150);

		if (heroHp <= 0) {
			setLog("Hero falls... Defeat!");
			setTurnText("DEFEAT");
			refreshBars();
			return;
		}

		isPlayerTurn = true;
		waitingForEnemy = false;
		setTurnText("Your Turn");
		refreshBars();
	}

	function showDamageText(text:String, x:Float, y:Float):Void {
		if (demoResult == null) return;
		demoResult.getUpdatable("damageText").updateText(text);
		final obj = demoResult.getSingleItemByName("damageText").object.toh2dObject();
		obj.setPosition(x, y);
		obj.visible = true;
		damageTextTimer = 1.0;
		damageTextY = y;
		showingDamage = true;
	}

	function setLog(text:String):Void {
		if (demoResult != null) {
			demoResult.getUpdatable("logText").updateText(text);
		}
	}

	function setTurnText(text:String):Void {
		if (demoResult != null) {
			demoResult.getUpdatable("turnText").updateText(text);
		}
	}

	function refreshBars():Void {
		if (demoResult == null) return;

		// Hero HP
		final heroHpRatio = heroHp / heroMaxHp;
		final heroHpObj = demoResult.getSingleItemByName("heroHpBar").object.toh2dObject();
		heroHpObj.scaleX = Math.max(heroHpRatio, 0.001);
		demoResult.getUpdatable("heroHpText").updateText('$heroHp / $heroMaxHp');

		// Hero MP
		final heroMpRatio = heroMp / heroMaxMp;
		final heroMpObj = demoResult.getSingleItemByName("heroMpBar").object.toh2dObject();
		heroMpObj.scaleX = Math.max(heroMpRatio, 0.001);
		demoResult.getUpdatable("heroMpText").updateText('$heroMp / $heroMaxMp');

		// Enemy HP
		final enemyHpRatio = enemyHp / enemyMaxHp;
		final enemyHpObj = demoResult.getSingleItemByName("enemyHpBar").object.toh2dObject();
		enemyHpObj.scaleX = Math.max(enemyHpRatio, 0.001);
		demoResult.getUpdatable("enemyHpText").updateText('$enemyHp / $enemyMaxHp');

		// Enemy MP
		final enemyMpRatio = enemyMp / enemyMaxMp;
		final enemyMpObj = demoResult.getSingleItemByName("enemyMpBar").object.toh2dObject();
		enemyMpObj.scaleX = Math.max(enemyMpRatio, 0.001);
		demoResult.getUpdatable("enemyMpText").updateText('$enemyMp / $enemyMaxMp');
	}

	override public function update(dt:Float):Void {
		super.update(dt);

		// Enemy attack delay
		if (waitingForEnemy) {
			enemyDelayTimer -= dt;
			if (enemyDelayTimer <= 0) {
				doEnemyAttack();
			}
		}

		// Damage text float animation
		if (showingDamage && demoResult != null) {
			damageTextTimer -= dt;
			if (damageTextTimer <= 0) {
				showingDamage = false;
				final obj = demoResult.getSingleItemByName("damageText").object.toh2dObject();
				obj.visible = false;
			} else {
				final obj = demoResult.getSingleItemByName("damageText").object.toh2dObject();
				damageTextY -= dt * 40;
				obj.setPosition(obj.x, damageTextY);
				obj.alpha = damageTextTimer;
			}
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == attackButton) {
					doPlayerAttack();
				} else if (source == defendButton) {
					doPlayerDefend();
				}
			default:
		}
		super.onScreenEvent(event, source);
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		attackButton = null;
		defendButton = null;
		heroHp = 100;
		heroMaxHp = 100;
		heroMp = 50;
		heroMaxMp = 50;
		enemyHp = 80;
		enemyMaxHp = 80;
		enemyMp = 30;
		enemyMaxMp = 30;
		isPlayerTurn = true;
		waitingForEnemy = false;
		showingDamage = false;
		defending = false;
	}
}
