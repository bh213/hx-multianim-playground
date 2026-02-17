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
		setupDemo("Character Sheet", "Character stats with HP/MP bars, attributes, and XP progression");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/character-sheet.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "characterSheetDemo", [], [
			levelUpButton => addButtonWithSingleBuilder(stdBuilder, "button", "Level Up (+25 XP)"),
		]);

		demoResult = ui.builderResults;
		levelUpButton = ui.levelUpButton;
		addBuilderResult(demoResult);

		refreshDisplay();
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

			if (demoResult != null) {
				demoResult.getUpdatable("feedbackText").updateText('Level Up! Now level $level');
			}
		}
		refreshDisplay();
	}

	function refreshDisplay():Void {
		if (demoResult == null) return;

		demoResult.getUpdatable("charLevel").updateText('$level');

		final hpWidth = Std.int(300 * currentHp / maxHp);
		final hpBarObj = demoResult.getSingleItemByName("hpBar").object.toh2dObject();
		hpBarObj.scaleX = hpWidth / 300.0;
		demoResult.getUpdatable("hpText").updateText('$currentHp / $maxHp');

		final mpWidth = Std.int(300 * currentMp / maxMp);
		final mpBarObj = demoResult.getSingleItemByName("mpBar").object.toh2dObject();
		mpBarObj.scaleX = mpWidth / 300.0;
		demoResult.getUpdatable("mpText").updateText('$currentMp / $maxMp');

		demoResult.getUpdatable("strValue").updateText('$str');
		demoResult.getUpdatable("dexValue").updateText('$dex');
		demoResult.getUpdatable("intValue").updateText('$intStat');

		final strBarObj = demoResult.getSingleItemByName("strBar").object.toh2dObject();
		strBarObj.scaleX = Math.min(str / 60.0, 1.0) * (120.0 / 60.0);
		final dexBarObj = demoResult.getSingleItemByName("dexBar").object.toh2dObject();
		dexBarObj.scaleX = Math.min(dex / 60.0, 1.0) * (120.0 / 48.0);
		final intBarObj = demoResult.getSingleItemByName("intBar").object.toh2dObject();
		intBarObj.scaleX = Math.min(intStat / 60.0, 1.0) * (120.0 / 36.0);

		final xpRatio = xp / xpToLevel;
		final xpBarObj = demoResult.getSingleItemByName("xpBar").object.toh2dObject();
		xpBarObj.scaleX = if (xpRatio > 0) xpRatio * 340.0 else 0.001;
		demoResult.getUpdatable("xpText").updateText('$xp / $xpToLevel XP');

		final power = str + dex + intStat;
		demoResult.getUpdatable("powerText").updateText('$power');
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
