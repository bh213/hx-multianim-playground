package screens.graphics;

import bh.ui.UIElement;
import bh.ui.*;
import bh.multianim.MultiAnimBuilder;

class RichTextDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;

	override public function load():Void {
		setupDemo("Rich Text", "Native markup with named styles, inline colors, font switching, and images");

		demoBuilder = screenManager.buildFromResourceName("demos/graphics/rich-text.manim", false);

		var result = demoBuilder.buildWithParameters("richTextShowcase", []);
		result.object.setPosition(40, 80);
		addBuilderResult(result);
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
	}
}
