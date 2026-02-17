package screens.graphics;

import bh.ui.UIElement;
import bh.ui.*;
import bh.multianim.MultiAnimBuilder;

class NinepatchDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;

	override public function load():Void {
		setupDemo("Ninepatch", "Same 9-patch at different sizes showing proper stretching");

		demoBuilder = screenManager.buildFromResourceName("demos/graphics/ninepatch.manim", false);

		var result = demoBuilder.buildWithParameters("ninepatchShowcase", []);
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
