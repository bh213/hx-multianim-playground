package screens.layout;

import bh.ui.UIElement;
import bh.ui.*;
import bh.multianim.MultiAnimBuilder;

class StaticRefsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;

	override public function load():Void {
		setupDemo("Static Refs", "Embed child programmables via staticRef($ref) with different parameters");

		demoBuilder = screenManager.buildFromResourceName("demos/layout/static-refs.manim", false);

		addBuilderResult(demoBuilder.buildWithParameters("staticRefsShowcase", []));
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
	}
}
