package screens.graphics;

import bh.ui.UIElement;
import bh.ui.*;
import bh.multianim.MultiAnimBuilder;

class BitmapsAtlasDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;

	override public function load():Void {
		setupDemo("Bitmaps & Atlas", "bitmap(generated(color())) for colored rectangles and bitmap alignment");

		demoBuilder = screenManager.buildFromResourceName("demos/graphics/bitmaps-atlas.manim", false);

		var result = demoBuilder.buildWithParameters("bitmapsAtlasShowcase", []);
		result.object.setPosition(40, 80);
		addBuilderResult(result);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == backButton) {
					screenManager.updateScreenMode(Single(screenManager.getScreen("nav")));
				}
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
	}
}
