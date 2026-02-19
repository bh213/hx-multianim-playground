package screens.advanced;

import bh.ui.UIElement;
import bh.ui.*;
import bh.multianim.MultiAnimBuilder;

class FeatureShowcaseDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;

	override public function load():Void {
		setupDemo("Feature Showcase", "Layers, tileGroups, apply blocks, bitmap alignment, and more");

		demoBuilder = screenManager.buildFromResourceName("demos/advanced/feature-showcase.manim", false);

		var result = demoBuilder.buildWithParameters("featureShowcase", []);
		result.object.setPosition(40, 80);
		addBuilderResult(result);
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
	}
}
