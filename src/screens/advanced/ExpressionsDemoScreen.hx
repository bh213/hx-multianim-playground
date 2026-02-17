package screens.advanced;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
import bh.base.FontManager;

class ExpressionsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var expressionResult:Null<BuilderResult>;
	var valueSlider:Null<UIStandardMultiAnimSlider>;
	var currentValue:Int = 25;
	var statusText:Null<h2d.Text>;

	override public function load():Void {
		setupDemo("Expressions", "Arithmetic expressions with $param: live result display of $value * 2 + 10");

		demoBuilder = screenManager.buildFromResourceName("demos/advanced/expressions.manim", false);

		// Build with incremental mode for live expression evaluation
		expressionResult = demoBuilder.buildWithParameters("expressionsDemo", ["value" => 25], null, null, true);
		expressionResult.object.setPosition(50, 140);
		addBuilderResult(expressionResult);

		// Value slider
		valueSlider = addSlider(stdBuilder, null, 25);
		addElement(valueSlider, DefaultLayer);
		valueSlider.getObject().setPosition(50, 640);

		// Status text
		statusText = new h2d.Text(FontManager.getFontByName("exo2_light_14"));
		statusText.text = 'Input value: $currentValue | Computed: ${currentValue * 2 + 10}';
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
					if (expressionResult != null) {
						expressionResult.setParameter("value", val);
					}
					if (statusText != null) {
						statusText.text = 'Input value: $currentValue | Computed: ${currentValue * 2 + 10}';
					}
				}
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		expressionResult = null;
		valueSlider = null;
		statusText = null;
	}
}
