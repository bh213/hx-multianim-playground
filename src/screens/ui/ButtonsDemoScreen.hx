package screens.ui;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;

class ButtonsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var button1:Null<UIStandardMultiAnimButton>;
	var button2:Null<UIStandardMultiAnimButton>;
	var button3:Null<UIStandardMultiAnimButton>;
	var button4:Null<UIStandardMultiAnimButton>;
	var button5:Null<UIStandardMultiAnimButton>;
	var disableCheckbox:Null<UIStandardMultiCheckbox>;
	var clickCount:Int = 0;

	override public function load():Void {
		setupDemo("Buttons", "Multiple button styles with click counter and disable toggle");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/buttons.manim", false);

		button1 = addButtonWithSingleBuilder(stdBuilder, "button", null, "Click Me");
		addElement(button1, null);
		button2 = addButtonWithSingleBuilder(stdBuilder, "button", null, "Action");
		addElement(button2, null);
		button3 = addButtonWithSingleBuilder(stdBuilder, "button", null, "Submit");
		addElement(button3, null);
		button4 = addButtonWithSingleBuilder(stdBuilder, "button", null, "Normal");
		addElement(button4, null);
		button5 = addButtonWithSingleBuilder(stdBuilder, "button", null, "Disabled");
		addElement(button5, null);
		button5.disabled = true;

		disableCheckbox = addCheckbox(stdBuilder, null, false);
		addElement(disableCheckbox, null);

		demoResult = demoBuilder.buildWithParameters("buttonsDemo", [], {
			placeholderObjects: [
				"button1" => PVObject(button1.getObject()),
				"button2" => PVObject(button2.getObject()),
				"button3" => PVObject(button3.getObject()),
				"button4" => PVObject(button4.getObject()),
				"button5" => PVObject(button5.getObject()),
				"disableCheckbox" => PVObject(disableCheckbox.getObject()),
			]
		});

		addBuilderResult(demoResult);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == button1 || source == button2 || source == button3 || source == button4) {
					clickCount++;
					updateCounter();
				}
			case UIToggle(pressed):
				if (source == disableCheckbox) {
					button1.disabled = pressed;
					button2.disabled = pressed;
					button3.disabled = pressed;
					button4.disabled = pressed;
				}
			default:
		}
		super.onScreenEvent(event, source);
	}

	function updateCounter():Void {
		if (demoResult != null) {
			final updatable = demoResult.getUpdatable("counterText");
			if (updatable != null) {
				updatable.updateText('Clicks: $clickCount');
			}
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		button1 = null;
		button2 = null;
		button3 = null;
		button4 = null;
		button5 = null;
		disableCheckbox = null;
		clickCount = 0;
	}
}
