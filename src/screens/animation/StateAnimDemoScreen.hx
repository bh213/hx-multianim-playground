package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.multianim.MultiAnimBuilder;

class StateAnimDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;

	override public function load():Void {
		setupDemo("State Animations", "Animations loaded from .anim files with different states and directions");

		demoBuilder = screenManager.buildFromResourceName("demos/animation/state-anim.manim", false);

		var result = demoBuilder.buildWithParameters("stateAnimDemo", []);
		result.object.setPosition(40, 80);
		addBuilderResult(result);
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
	}
}
