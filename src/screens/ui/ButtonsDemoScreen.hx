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
	var buttonsBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var normalBtn1:Null<UIStandardMultiAnimButton>;
	var normalBtn2:Null<UIStandardMultiAnimButton>;
	var normalBtn3:Null<UIStandardMultiAnimButton>;
	var warningBtn1:Null<UIStandardMultiAnimButton>;
	var warningBtn2:Null<UIStandardMultiAnimButton>;
	var warningBtn3:Null<UIStandardMultiAnimButton>;
	var smallBtn1:Null<UIStandardMultiAnimButton>;
	var smallBtn2:Null<UIStandardMultiAnimButton>;
	var smallBtn3:Null<UIStandardMultiAnimButton>;
	var disableCheckbox:Null<UIStandardMultiCheckbox>;
	var clickCount:Int = 0;

	override public function load():Void {
		setupDemo("Buttons", "Multiple button styles: Normal, Warning, and Small");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/buttons-demo.manim", false);
		buttonsBuilder = screenManager.buildFromResourceName("buttons.manim", false);

		// Normal buttons (buttons.main)
		normalBtn1 = addButtonWithSingleBuilder(buttonsBuilder, "main", null, "Click Me");
		addElement(normalBtn1, null);
		normalBtn2 = addButtonWithSingleBuilder(buttonsBuilder, "main", null, "Action");
		addElement(normalBtn2, null);
		normalBtn3 = addButtonWithSingleBuilder(buttonsBuilder, "main", null, "Submit");
		addElement(normalBtn3, null);

		// Warning buttons (buttons.warning)
		warningBtn1 = addButtonWithSingleBuilder(buttonsBuilder, "warning", null, "Danger");
		addElement(warningBtn1, null);
		warningBtn2 = addButtonWithSingleBuilder(buttonsBuilder, "warning", null, "Delete");
		addElement(warningBtn2, null);
		warningBtn3 = addButtonWithSingleBuilder(buttonsBuilder, "warning", null, "Reset");
		addElement(warningBtn3, null);

		// Small buttons (buttons.small)
		smallBtn1 = addButtonWithSingleBuilder(buttonsBuilder, "small", null, "OK");
		addElement(smallBtn1, null);
		smallBtn2 = addButtonWithSingleBuilder(buttonsBuilder, "small", null, "No");
		addElement(smallBtn2, null);
		smallBtn3 = addButtonWithSingleBuilder(buttonsBuilder, "small", null, "Info");
		addElement(smallBtn3, null);

		disableCheckbox = addCheckbox(stdBuilder, null, false);
		addElement(disableCheckbox, null);

		demoResult = demoBuilder.buildWithParameters("buttonsDemo", [], {
			placeholderObjects: [
				"normalBtn1" => PVObject(normalBtn1.getObject()),
				"normalBtn2" => PVObject(normalBtn2.getObject()),
				"normalBtn3" => PVObject(normalBtn3.getObject()),
				"warningBtn1" => PVObject(warningBtn1.getObject()),
				"warningBtn2" => PVObject(warningBtn2.getObject()),
				"warningBtn3" => PVObject(warningBtn3.getObject()),
				"smallBtn1" => PVObject(smallBtn1.getObject()),
				"smallBtn2" => PVObject(smallBtn2.getObject()),
				"smallBtn3" => PVObject(smallBtn3.getObject()),
				"disableCheckbox" => PVObject(disableCheckbox.getObject()),
			]
		});

		addBuilderResult(demoResult);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == normalBtn1 || source == normalBtn2 || source == normalBtn3 ||
					source == warningBtn1 || source == warningBtn2 || source == warningBtn3 ||
					source == smallBtn1 || source == smallBtn2 || source == smallBtn3) {
					clickCount++;
					updateCounter();
				}
			case UIToggle(pressed):
				if (source == disableCheckbox) {
					normalBtn1.disabled = pressed;
					normalBtn2.disabled = pressed;
					normalBtn3.disabled = pressed;
					warningBtn1.disabled = pressed;
					warningBtn2.disabled = pressed;
					warningBtn3.disabled = pressed;
					smallBtn1.disabled = pressed;
					smallBtn2.disabled = pressed;
					smallBtn3.disabled = pressed;
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
		buttonsBuilder = null;
		demoResult = null;
		normalBtn1 = null;
		normalBtn2 = null;
		normalBtn3 = null;
		warningBtn1 = null;
		warningBtn2 = null;
		warningBtn3 = null;
		smallBtn1 = null;
		smallBtn2 = null;
		smallBtn3 = null;
		disableCheckbox = null;
		clickCount = 0;
	}
}
