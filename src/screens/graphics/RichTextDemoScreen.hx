package screens.graphics;

import bh.ui.UIElement;
import bh.ui.*;
import bh.multianim.MultiAnimBuilder;

class RichTextDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var result:Null<BuilderResult>;
	var dmgTimer:Float = 0;
	var questTimer:Float = 0;
	var equipTimer:Float = 0;
	var quests:Array<String> = ["accepted", "progress", "complete"];
	var questIdx:Int = 0;
	var equips:Array<String> = ["sword", "shield", "empty"];
	var equipIdx:Int = 0;
	var popupText:Null<h2d.Text> = null;
	var popupTimer:Float = 0;

	override public function load():Void {
		setupDemo("Rich Text", "BBCode markup with named styles, inline images, alignment, drop shadow, spacing, and hyperlinks");

		demoBuilder = screenManager.buildFromResourceName("demos/graphics/rich-text.manim", false);

		result = demoBuilder.buildWithParameters("richTextShowcase",
			["dmg" => 3, "dmgColor" => 0xFFFF4444, "quest" => "accepted", "equip" => "sword"], null, null, true);
		result.object.setPosition(40, 80);
		addBuilderResult(result);

		// Wire hyperlink clicks directly (builder's closure captures this.builderParams which resets after build)
		if (result.htmlTextsWithLinks != null) {
			for (ht in result.htmlTextsWithLinks) {
				ht.onHyperlink = (url) -> showPopup('Clicked: ${url}');
			}
		}
	}

	function showPopup(msg:String):Void {
		if (popupText != null) {
			popupText.remove();
		}
		final font = hxd.res.DefaultFont.get();
		popupText = new h2d.Text(font);
		popupText.text = msg;
		popupText.textColor = 0xFF44FFFF;
		popupText.setPosition(690, 840);
		result.object.addChild(popupText);
		popupTimer = 2.0;
	}

	function dmgToColor(dmg:Int):Int {
		return switch (dmg) {
			case 1: 0xFFAAAAAA; // gray — weak hit
			case 2: 0xFFFFFFFF; // white — normal
			case 3: 0xFFFFCC44; // yellow — solid
			case 4: 0xFFFF8844; // orange — strong
			case _: 0xFFFF4444; // red — critical
		};
	}

	override public function update(dt:Float):Void {
		super.update(dt);
		if (result == null) return;

		// Popup fade-out
		if (popupText != null) {
			popupTimer -= dt;
			if (popupTimer <= 0) {
				popupText.remove();
				popupText = null;
			} else if (popupTimer < 0.5) {
				popupText.alpha = popupTimer / 0.5;
			}
		}

		// Section 9: Randomize damage and derive color
		dmgTimer += dt;
		if (dmgTimer >= 0.8) {
			dmgTimer = 0;
			var dmg = 1 + Std.random(5);
			result.beginUpdate();
			result.setParameter("dmg", dmg);
			result.setParameter("dmgColor", dmgToColor(dmg));
			result.endUpdate();
		}

		// Section 10: Cycle quest states
		questTimer += dt;
		if (questTimer >= 2.0) {
			questTimer = 0;
			questIdx = (questIdx + 1) % quests.length;
			result.setParameter("quest", quests[questIdx]);
		}

		// Section 11: Cycle equipment
		equipTimer += dt;
		if (equipTimer >= 1.5) {
			equipTimer = 0;
			equipIdx = (equipIdx + 1) % equips.length;
			result.setParameter("equip", equips[equipIdx]);
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		result = null;
		if (popupText != null) {
			popupText.remove();
			popupText = null;
		}
	}
}
