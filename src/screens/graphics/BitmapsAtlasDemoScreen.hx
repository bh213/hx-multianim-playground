package screens.graphics;

import bh.ui.UIElement;
import bh.ui.*;
import bh.multianim.MultiAnimBuilder;

class BitmapsAtlasDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;

	override public function load():Void {
		setupDemo("Bitmaps & Atlas", "Generated bitmaps (color, cross, colorWithText), file bitmaps, and atlas sheet sprites");

		demoBuilder = screenManager.buildFromResourceName("demos/graphics/bitmaps-atlas.manim", false);

		var result = demoBuilder.buildWithParameters("bitmapsAtlasShowcase", []);
		result.object.setPosition(40, 80);
		addBuilderResult(result);
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
	}
}
