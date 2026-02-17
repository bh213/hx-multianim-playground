package screens.layout;

import bh.ui.UIElement;
import bh.ui.*;
import bh.multianim.MultiAnimBuilder;

class FlowLayoutDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;

	override public function load():Void {
		setupDemo("Flow Layout", "Flow containers with vertical, horizontal, stack layouts and overflow modes");

		demoBuilder = screenManager.buildFromResourceName("demos/layout/flow-layout.manim", false);

		var result = demoBuilder.buildWithParameters("flowLayoutShowcase", []);
		result.object.setPosition(40, 80);
		addBuilderResult(result);
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
	}
}
