package screens.ui;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.ui.UIMultiAnimRadioButtons;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
import bh.base.MacroUtils;

class RadioDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var radioBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var radioVertical:Null<UIMultiAnimRadioButtons>;
	var radioHorizontal:Null<UIMultiAnimRadioButtons>;
	var radioVertical2:Null<UIMultiAnimRadioButtons>;
	var disabledRadio:Null<UIMultiAnimRadioButtons>;
	var disableToggle:Null<UIStandardMultiCheckbox>;

	static final VERTICAL_ITEMS:Array<UIElementListItem> = [
		{name: "Option A"},
		{name: "Option B"},
		{name: "Option C"},
		{name: "Option D"},
	];

	static final HORIZONTAL_ITEMS:Array<UIElementListItem> = [
		{name: "Small"},
		{name: "Medium"},
		{name: "Large"},
		{name: "Extra Large"},
	];

	static final DIFFICULTY_ITEMS:Array<UIElementListItem> = [
		{name: "Easy"},
		{name: "Normal"},
		{name: "Hard"},
	];

	static final DISABLED_ITEMS:Array<UIElementListItem> = [
		{name: "Alpha"},
		{name: "Beta"},
		{name: "Gamma"},
	];

	override public function load():Void {
		setupDemo("Radio Buttons", "Vertical and horizontal radio groups with selection feedback and disabled state");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/radios-demo.manim", false);
		radioBuilder = screenManager.buildFromResourceName("radio.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "radiosDemo", [], [
			radioVertical => addRadio(radioBuilder, VERTICAL_ITEMS, true, 0),
			radioHorizontal => addRadio(radioBuilder, HORIZONTAL_ITEMS, false, 0),
			radioVertical2 => addRadio(radioBuilder, DIFFICULTY_ITEMS, true, 0),
			disabledRadio => addRadio(radioBuilder, DISABLED_ITEMS, true, 0),
			disableToggle => addCheckbox(radioBuilder, false),
		]);

		demoResult = ui.builderResults;
		radioVertical = ui.radioVertical;
		radioHorizontal = ui.radioHorizontal;
		radioVertical2 = ui.radioVertical2;
		disabledRadio = ui.disabledRadio;
		disableToggle = ui.disableToggle;

		addBuilderResult(demoResult);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIChangeItem(index, items):
				if (source == radioVertical) {
					updateText("verticalText", "Selected", index, items);
				} else if (source == radioHorizontal) {
					updateText("horizontalText", "Selected", index, items);
				} else if (source == radioVertical2) {
					updateText("radio2Text", "Selected", index, items);
				}
			case UIToggle(pressed):
				if (source == disableToggle) {
					disabledRadio.disabled = pressed;
				}
			default:
		}
		super.onScreenEvent(event, source);
	}

	function updateText(fieldName:String, prefix:String, index:Int, items:Array<UIElementListItem>):Void {
		if (demoResult == null) return;
		final updatable = demoResult.getUpdatable(fieldName);
		if (updatable != null) {
			if (index >= 0 && index < items.length) {
				updatable.updateText('$prefix: ${items[index].name}');
			}
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		radioBuilder = null;
		demoResult = null;
		radioVertical = null;
		radioHorizontal = null;
		radioVertical2 = null;
		disabledRadio = null;
		disableToggle = null;
	}
}
