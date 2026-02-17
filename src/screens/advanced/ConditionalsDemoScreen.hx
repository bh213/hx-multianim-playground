package screens.advanced;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
import bh.base.FontManager;

class ConditionalsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var conditionalResult:Null<BuilderResult>;
	var valueSlider:Null<UIStandardMultiAnimSlider>;
	var currentValue:Int = 50;
	var statusText:Null<h2d.Text>;

	override public function load():Void {
		setupDemo("Conditionals", "All conditional types: @(), @if(), @else, @default, range, comparison operators");

		demoBuilder = screenManager.buildFromResourceName("demos/advanced/conditionals.manim", false);

		// Build with incremental mode for live updates
		conditionalResult = demoBuilder.buildWithParameters("conditionalsDemo", ["value" => 50], null, null, true);
		conditionalResult.object.setPosition(50, 140);
		addBuilderResult(conditionalResult);

		// Value slider
		valueSlider = addSlider(stdBuilder, null, 50);
		addElement(valueSlider, DefaultLayer);
		valueSlider.getObject().setPosition(50, 640);

		// Status text
		statusText = new h2d.Text(FontManager.getFontByName("exo2_light_14"));
		statusText.text = 'Value: $currentValue | Drag slider to change which conditionals match';
		statusText.textColor = 0xCCCCCC;
		statusText.setPosition(50, 610);
		addObjectToLayer(statusText, DefaultLayer);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == backButton) {
					screenManager.updateScreenMode(Single(screenManager.getScreen("nav")));
					return;
				}
			case UIChangeValue(val):
				if (source == valueSlider) {
					currentValue = val;
					if (conditionalResult != null) {
						conditionalResult.setParameter("value", val);
					}
					if (statusText != null) {
						statusText.text = 'Value: $currentValue';
					}
				}
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		conditionalResult = null;
		valueSlider = null;
		statusText = null;
	}
}
