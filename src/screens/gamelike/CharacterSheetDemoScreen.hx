package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class CharacterSheetDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var levelUpButton:Null<UIStandardMultiAnimButton>;

	// Character stats
	var level:Int = 1;
	var xp:Int = 0;
	var xpToLevel:Int = 100;
	var str:Int = 10;
	var dex:Int = 8;
	var intStat:Int = 6;
	var maxHp:Int = 100;
	var maxMp:Int = 50;
	var currentHp:Int = 100;
	var currentMp:Int = 50;

	override public function load():Void {
		setupDemo("Character Sheet", "Character stats with dynamic references for HP/MP bars, attributes, and XP");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/character-sheet.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "characterSheetDemo", [
			"hp" => currentHp,
			"maxHp" => maxHp,
			"mp" => currentMp,
			"maxMp" => maxMp,
			"strStat" => str,
			"dexStat" => dex,
			"intStat" => intStat,
			"xp" => xp,
			"xpMax" => xpToLevel,
			"level" => level,
		], [
			levelUpButton => addButtonWithSingleBuilder(stdBuilder, "button", "Level Up (+25 XP)"),
		], true);

		demoResult = ui.builderResults;
		levelUpButton = ui.levelUpButton;
		addBuilderResult(demoResult);
	}

	function gainXP(amount:Int):Void {
		xp += amount;
		while (xp >= xpToLevel) {
			xp -= xpToLevel;
			level++;
			str += 2;
			dex += 1;
			intStat += 1;
			maxHp += 15;
			maxMp += 8;
			currentHp = maxHp;
			currentMp = maxMp;
			xpToLevel = Std.int(xpToLevel * 1.5);
		}
		refreshDisplay();
	}

	function refreshDisplay():Void {
		if (demoResult == null) return;

		demoResult.setParameter("hp", currentHp);
		demoResult.setParameter("maxHp", maxHp);
		demoResult.setParameter("mp", currentMp);
		demoResult.setParameter("maxMp", maxMp);
		demoResult.setParameter("strStat", str);
		demoResult.setParameter("dexStat", dex);
		demoResult.setParameter("intStat", intStat);
		demoResult.setParameter("xp", xp);
		demoResult.setParameter("xpMax", xpToLevel);
		demoResult.setParameter("level", level);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == levelUpButton) {
					gainXP(25);
				}
			default:
		}
		super.onScreenEvent(event, source);
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		levelUpButton = null;
		level = 1;
		xp = 0;
		xpToLevel = 100;
		str = 10;
		dex = 8;
		intStat = 6;
		maxHp = 100;
		maxMp = 50;
		currentHp = 100;
		currentMp = 50;
	}
}
