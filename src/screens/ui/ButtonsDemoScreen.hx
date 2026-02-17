package screens.ui;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

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

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "buttonsDemo", [], [
			normalBtn1 => addButtonWithSingleBuilder(buttonsBuilder, "main", "Click Me"),
			normalBtn2 => addButtonWithSingleBuilder(buttonsBuilder, "main", "Action"),
			normalBtn3 => addButtonWithSingleBuilder(buttonsBuilder, "main", "Submit"),
			warningBtn1 => addButtonWithSingleBuilder(buttonsBuilder, "warning", "Danger"),
			warningBtn2 => addButtonWithSingleBuilder(buttonsBuilder, "warning", "Delete"),
			warningBtn3 => addButtonWithSingleBuilder(buttonsBuilder, "warning", "Reset"),
			smallBtn1 => addButtonWithSingleBuilder(buttonsBuilder, "small", "OK"),
			smallBtn2 => addButtonWithSingleBuilder(buttonsBuilder, "small", "No"),
			smallBtn3 => addButtonWithSingleBuilder(buttonsBuilder, "small", "Info"),
			disableCheckbox => addCheckbox(stdBuilder, false),
		]);

		demoResult = ui.builderResults;
		normalBtn1 = ui.normalBtn1;
		normalBtn2 = ui.normalBtn2;
		normalBtn3 = ui.normalBtn3;
		warningBtn1 = ui.warningBtn1;
		warningBtn2 = ui.warningBtn2;
		warningBtn3 = ui.warningBtn3;
		smallBtn1 = ui.smallBtn1;
		smallBtn2 = ui.smallBtn2;
		smallBtn3 = ui.smallBtn3;
		disableCheckbox = ui.disableCheckbox;
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
