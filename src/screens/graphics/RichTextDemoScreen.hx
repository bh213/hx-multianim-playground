package screens.graphics;

import bh.ui.UIElement;
import bh.ui.*;
import bh.multianim.MultiAnimBuilder;

class RichTextDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var result:Null<BuilderResult>;
	var dmgTimer:Float = 0;
	var msgTimer:Float = 0;
	var messages:Array<String> = ["idle", "combat", "loot"];
	var msgIdx:Int = 0;

	override public function load():Void {
		setupDemo("Rich Text", "Native markup with named styles, inline colors, font switching, and images");

		demoBuilder = screenManager.buildFromResourceName("demos/graphics/rich-text.manim", false);

		result = demoBuilder.buildWithParameters("richTextShowcase", ["dmg" => 3, "dmgColor" => 0xFFFF4444, "msg" => "idle"], null, null, true);
		result.object.setPosition(40, 80);
		addBuilderResult(result);
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

		// Randomize damage and derive color every 0.8s
		dmgTimer += dt;
		if (dmgTimer >= 0.8) {
			dmgTimer = 0;
			var dmg = 1 + Std.random(5);
			result.beginUpdate();
			result.setParameter("dmg", dmg);
			result.setParameter("dmgColor", dmgToColor(dmg));
			result.endUpdate();
		}

		// Cycle battle log message every 2s
		msgTimer += dt;
		if (msgTimer >= 2.0) {
			msgTimer = 0;
			msgIdx = (msgIdx + 1) % messages.length;
			result.setParameter("msg", messages[msgIdx]);
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		result = null;
	}
}
