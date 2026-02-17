package screens.advanced;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
import bh.base.FontManager;

class IncrementalDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var incrementalResult:Null<BuilderResult>;
	var valueSlider:Null<UIStandardMultiAnimSlider>;
	var currentValue:Int = 50;
	var statusText:Null<h2d.Text>;

	override public function load():Void {
		setupDemo("Incremental Updates", "Build once, update live via setParameter() without full rebuild");

		demoBuilder = screenManager.buildFromResourceName("demos/advanced/incremental.manim", false);

		// Build demo with incremental mode enabled
		incrementalResult = demoBuilder.buildWithParameters("incrementalDemo", ["value" => 50], null, null, true);
		incrementalResult.object.setPosition(50, 140);
		addBuilderResult(incrementalResult);

		// Value slider
		valueSlider = addSlider(stdBuilder, null, 50);
		addElement(valueSlider, DefaultLayer);
		valueSlider.getObject().setPosition(50, 620);

		// Status text
		statusText = new h2d.Text(FontManager.getFontByName("exo2_light_14"));
		statusText.text = 'Value: $currentValue | Drag slider to update live';
		statusText.textColor = 0xCCCCCC;
		statusText.setPosition(50, 590);
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
					if (incrementalResult != null) {
						incrementalResult.setParameter("value", val);
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
		incrementalResult = null;
		valueSlider = null;
		statusText = null;
	}
}
