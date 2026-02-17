package screens.layout;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.multianim.MultiAnimBuilder;

class DynamicRefsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var slider:Null<UIStandardMultiAnimSlider>;

	override public function load():Void {
		setupDemo("Dynamic Refs", "dynamicRef($ref) with runtime setParameter() updates via slider");

		demoBuilder = screenManager.buildFromResourceName("demos/layout/dynamic-refs.manim", false);

		// Build the showcase with initial value
		demoResult = demoBuilder.buildWithParameters("dynamicRefsShowcase", ["barValue" => 50], null, null, true);
		demoResult.object.setPosition(40, 80);
		addBuilderResult(demoResult);

		// Add a slider to control the dynamic ref value
		slider = addSlider(stdBuilder, null, 50);
		addElement(slider, DefaultLayer);
		slider.getObject().setPosition(500, 100);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == backButton) {
					screenManager.updateScreenMode(Single(screenManager.getScreen("nav")));
				}
			case UIChangeValue(value):
				if (source == slider && demoResult != null) {
					demoResult.setParameter("barValue", value);
				}
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		slider = null;
	}
}
