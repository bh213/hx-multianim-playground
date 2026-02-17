package screens.layout;

import bh.ui.UIElement;
import bh.ui.*;
import bh.multianim.MultiAnimBuilder;

class RepeatableDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;

	override public function load():Void {
		setupDemo("Repeatable", "Generated grids via repeatable() with step, range, and indexed elements");

		demoBuilder = screenManager.buildFromResourceName("demos/layout/repeatable.manim", false);

		var result = demoBuilder.buildWithParameters("repeatableShowcase", []);
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
