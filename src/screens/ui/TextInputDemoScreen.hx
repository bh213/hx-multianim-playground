package screens.ui;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimTextInput;
import bh.ui.UITabGroup;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
import bh.base.MacroUtils;

class TextInputDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;

	var colorInput:Null<UIMultiAnimTextInput>;
	var greyInput:Null<UIMultiAnimTextInput>;
	var titleColorInput:Null<UIMultiAnimTextInput>;
	var titleGreyInput:Null<UIMultiAnimTextInput>;

	var maxLenInput:Null<UIMultiAnimTextInput>;
	var numericInput:Null<UIMultiAnimTextInput>;
	var readOnlyInput:Null<UIMultiAnimTextInput>;
	var disabledInput:Null<UIMultiAnimTextInput>;

	var firstNameInput:Null<UIMultiAnimTextInput>;
	var lastNameInput:Null<UIMultiAnimTextInput>;
	var emailInput:Null<UIMultiAnimTextInput>;

	var multilineInput:Null<UIMultiAnimTextInput>;
	var alphanumericInput:Null<UIMultiAnimTextInput>;

	var enterAdvancesToggle:Null<UIStandardMultiCheckbox>;
	var disableAllToggle:Null<UIStandardMultiCheckbox>;

	var myTabGroup:Null<UITabGroup>;

	override public function load():Void {
		setupDemo("Text Input", "Text input fields with styles, filters, and tab navigation");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/textinput-demo.manim", false);

		myTabGroup = enableTabNavigation();

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "textInputDemo", [], [
			colorInput => addTextInput(stdBuilder, ""),
			greyInput => addTextInput(stdBuilder, ""),
			titleColorInput => addTextInput(stdBuilder, ""),
			titleGreyInput => addTextInput(stdBuilder, ""),
			maxLenInput => addTextInput(stdBuilder, ""),
			numericInput => addTextInput(stdBuilder, ""),
			readOnlyInput => addTextInput(stdBuilder, ""),
			disabledInput => addTextInput(stdBuilder, ""),
			firstNameInput => addTextInput(stdBuilder, ""),
			lastNameInput => addTextInput(stdBuilder, ""),
			emailInput => addTextInput(stdBuilder, ""),
			multilineInput => addTextInput(stdBuilder, ""),
			alphanumericInput => addTextInput(stdBuilder, ""),
			enterAdvancesToggle => addCheckbox(stdBuilder, false),
			disableAllToggle => addCheckbox(stdBuilder, false),
		]);

		demoResult = ui.builderResults;
		colorInput = ui.colorInput;
		greyInput = ui.greyInput;
		titleColorInput = ui.titleColorInput;
		titleGreyInput = ui.titleGreyInput;
		maxLenInput = ui.maxLenInput;
		numericInput = ui.numericInput;
		readOnlyInput = ui.readOnlyInput;
		disabledInput = ui.disabledInput;
		firstNameInput = ui.firstNameInput;
		lastNameInput = ui.lastNameInput;
		emailInput = ui.emailInput;
		multilineInput = ui.multilineInput;
		alphanumericInput = ui.alphanumericInput;
		enterAdvancesToggle = ui.enterAdvancesToggle;
		disableAllToggle = ui.disableAllToggle;

		// Set read-only and disabled states from Haxe (bare booleans not supported in .manim settings)
		if (disabledInput != null)
			disabledInput.disabled = true;

		addBuilderResult(demoResult);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UITextChange(text):
				updateEventLog('TextChange: "$text"');
			case UITextSubmit(text):
				updateEventLog('TextSubmit (Enter): "$text"');
			case UIFocusChange(focused):
				final name = getInputName(source);
				updateEventLog('FocusChange: $name ${focused ? "focused" : "blurred"}');
			case UIToggle(pressed):
				if (source == enterAdvancesToggle) {
					if (myTabGroup != null)
						myTabGroup.enterAdvances = pressed;
					updateEventLog('Enter advances: $pressed');
				} else if (source == disableAllToggle) {
					setAllDisabled(pressed);
					updateEventLog('All inputs disabled: $pressed');
				}
			default:
		}
		super.onScreenEvent(event, source);
	}

	function getInputName(source:Null<UIElement>):String {
		if (source == colorInput) return "Color";
		if (source == greyInput) return "Grey";
		if (source == titleColorInput) return "Title Color";
		if (source == titleGreyInput) return "Title Grey";
		if (source == maxLenInput) return "Max Length";
		if (source == numericInput) return "Numeric";
		if (source == readOnlyInput) return "Read-only";
		if (source == disabledInput) return "Disabled";
		if (source == firstNameInput) return "First Name";
		if (source == lastNameInput) return "Last Name";
		if (source == emailInput) return "Email";
		if (source == multilineInput) return "Multiline";
		if (source == alphanumericInput) return "Alphanumeric";
		return "Unknown";
	}

	function setAllDisabled(disabled:Bool):Void {
		final inputs = [colorInput, greyInput, titleColorInput, titleGreyInput, maxLenInput, numericInput, firstNameInput, lastNameInput, emailInput, multilineInput, alphanumericInput];
		for (input in inputs) {
			if (input != null)
				input.disabled = disabled;
		}
	}

	function updateEventLog(message:String):Void {
		if (demoResult == null) return;
		final updatable = demoResult.getUpdatable("eventLog");
		if (updatable != null)
			updatable.updateText(message);
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		colorInput = null;
		greyInput = null;
		titleColorInput = null;
		titleGreyInput = null;
		maxLenInput = null;
		numericInput = null;
		readOnlyInput = null;
		disabledInput = null;
		firstNameInput = null;
		lastNameInput = null;
		emailInput = null;
		multilineInput = null;
		alphanumericInput = null;
		enterAdvancesToggle = null;
		disableAllToggle = null;
		myTabGroup = null;
	}
}
