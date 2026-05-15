package screens.graphics;

import bh.ui.UIElement;
import bh.ui.*;
import bh.multianim.MultiAnimBuilder;

class PixelsGraphicsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;

	override public function load():Void {
		setupDemo("Pixels & Graphics",
			"pixels (pixel, line, rect, filledrect) and graphics (rect, circle, ellipse, arc, roundRect, line, polygon)");

		demoBuilder = screenManager.buildFromResourceName("demos/graphics/pixels-graphics.manim", false);

		var result = demoBuilder.buildWithParameters("pixelsGraphicsShowcase", []);
		result.object.setPosition(40, 80);
		addBuilderResult(result);
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
	}
}
