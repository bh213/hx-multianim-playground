package screens.ui;

import bh.ui.UIElement;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class ButtonsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var buttonsBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var allButtons:Array<UIStandardMultiAnimButton> = [];
	var disableCheckbox:Null<UIStandardMultiCheckbox>;
	var clickCount:Int = 0;

	override public function load():Void {
		setupDemo("Buttons", "Button styles: Normal, Warning, Small, Text Shadow, Font Colors, Sizes, Color Buttons");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/buttons-demo.manim", false);
		buttonsBuilder = screenManager.buildFromResourceName("buttons.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "buttonsDemo", [], [
			// Normal
			normalBtn1 => addButtonWithSingleBuilder(buttonsBuilder, "main", "Click Me"),
			normalBtn2 => addButtonWithSingleBuilder(buttonsBuilder, "main", "Action"),
			normalBtn3 => addButtonWithSingleBuilder(buttonsBuilder, "main", "Submit"),
			// Warning
			warningBtn1 => addButtonWithSingleBuilder(buttonsBuilder, "warning", "Danger"),
			warningBtn2 => addButtonWithSingleBuilder(buttonsBuilder, "warning", "Delete"),
			warningBtn3 => addButtonWithSingleBuilder(buttonsBuilder, "warning", "Reset"),
			// Small
			smallBtn1 => addButtonWithSingleBuilder(buttonsBuilder, "small", "OK"),
			smallBtn2 => addButtonWithSingleBuilder(buttonsBuilder, "small", "No"),
			smallBtn3 => addButtonWithSingleBuilder(buttonsBuilder, "small", "Info"),
			// Text Shadow
			shadowBtn1 => addButtonWithSingleBuilder(buttonsBuilder, "main", "Shadow"),
			shadowBtn2 => addButtonWithSingleBuilder(buttonsBuilder, "main", "Big Shadow"),
			shadowBtn3 => addButtonWithSingleBuilder(buttonsBuilder, "main", "Warning Shadow"),
			// Font Colors
			colorTextBtn1 => addButtonWithSingleBuilder(buttonsBuilder, "main", "Red Text"),
			colorTextBtn2 => addButtonWithSingleBuilder(buttonsBuilder, "main", "Green Text"),
			colorTextBtn3 => addButtonWithSingleBuilder(buttonsBuilder, "main", "Gold Text"),
			// Size Variants
			sizeBtn1 => addButtonWithSingleBuilder(buttonsBuilder, "main", "Compact"),
			sizeBtn2 => addButtonWithSingleBuilder(buttonsBuilder, "main", "Standard"),
			sizeBtn3 => addButtonWithSingleBuilder(buttonsBuilder, "main", "Large Button"),
			// Color Buttons
			colorBtn1 => addButtonWithSingleBuilder(buttonsBuilder, "main", ""),
			colorBtn2 => addButtonWithSingleBuilder(buttonsBuilder, "main", ""),
			colorBtn3 => addButtonWithSingleBuilder(buttonsBuilder, "main", ""),
			colorBtn4 => addButtonWithSingleBuilder(buttonsBuilder, "main", ""),
			// Checkbox
			disableCheckbox => addCheckbox(stdBuilder, false),
		]);

		demoResult = ui.builderResults;
		allButtons = [
			ui.normalBtn1, ui.normalBtn2, ui.normalBtn3,
			ui.warningBtn1, ui.warningBtn2, ui.warningBtn3,
			ui.smallBtn1, ui.smallBtn2, ui.smallBtn3,
			ui.shadowBtn1, ui.shadowBtn2, ui.shadowBtn3,
			ui.colorTextBtn1, ui.colorTextBtn2, ui.colorTextBtn3,
			ui.sizeBtn1, ui.sizeBtn2, ui.sizeBtn3,
			ui.colorBtn1, ui.colorBtn2, ui.colorBtn3, ui.colorBtn4,
		];
		disableCheckbox = ui.disableCheckbox;
		addBuilderResult(demoResult);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				for (btn in allButtons) {
					if (source == btn) {
						clickCount++;
						updateCounter();
						break;
					}
				}
			case UIToggle(pressed):
				if (source == disableCheckbox) {
					for (btn in allButtons)
						btn.disabled = pressed;
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
		allButtons = [];
		disableCheckbox = null;
		clickCount = 0;
	}
}
