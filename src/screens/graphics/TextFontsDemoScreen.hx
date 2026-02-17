package screens.graphics;

import bh.ui.UIElement;
import bh.ui.*;
import bh.multianim.MultiAnimBuilder;

class TextFontsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;

	override public function load():Void {
		setupDemo("Text & Fonts", "Fonts, alignments, colors, and drop shadows with different backgrounds");

		demoBuilder = screenManager.buildFromResourceName("demos/graphics/text-fonts.manim", false);

		var result = demoBuilder.buildWithParameters("textFontsShowcase", []);
		result.object.setPosition(40, 80);
		addBuilderResult(result);
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
	}
}
