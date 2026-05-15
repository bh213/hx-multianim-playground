package screens.ui;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
import bh.base.MacroUtils;

class CheckboxesDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var checkboxBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var checkboxes:Array<UIStandardMultiCheckbox> = [];
	var disabledCheckbox1:Null<UIStandardMultiCheckbox>;
	var disabledCheckbox2:Null<UIStandardMultiCheckbox>;
	var disableToggle:Null<UIStandardMultiCheckbox>;

	override public function load():Void {
		setupDemo("Checkboxes", "Checkbox, tickbox, toggle, radio, radio2, and simple variants with selection tracking and disabled state");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/checkboxes-demo.manim", false);
		checkboxBuilder = screenManager.buildFromResourceName("checkbox.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "checkboxesDemo", [], [
			checkbox1 => addCheckbox(checkboxBuilder, false),
			checkbox2 => addCheckbox(checkboxBuilder, false),
			checkbox3 => addCheckbox(checkboxBuilder, false),
			checkbox4 => addCheckbox(checkboxBuilder, false),
			checkbox5 => addCheckbox(checkboxBuilder, false),
			checkbox6 => addCheckbox(checkboxBuilder, false),
			disabledCheckbox1 => addCheckbox(checkboxBuilder, true),
			disabledCheckbox2 => addCheckbox(checkboxBuilder, false),
			disableToggle => addCheckbox(checkboxBuilder, false),
		]);

		demoResult = ui.builderResults;
		checkboxes = [ui.checkbox1, ui.checkbox2, ui.checkbox3, ui.checkbox4, ui.checkbox5, ui.checkbox6];
		disabledCheckbox1 = ui.disabledCheckbox1;
		disabledCheckbox2 = ui.disabledCheckbox2;
		disableToggle = ui.disableToggle;

		addBuilderResult(demoResult);
		updateCount();
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIToggle(pressed):
				if (source == disableToggle) {
					disabledCheckbox1.disabled = pressed;
					disabledCheckbox2.disabled = pressed;
				} else {
					// One of the main checkboxes toggled
					updateCount();
				}
			default:
		}
		super.onScreenEvent(event, source);
	}

	function updateCount():Void {
		if (demoResult == null) return;
		var count = 0;
		for (cb in checkboxes) {
			if (cb.selected) count++;
		}
		final updatable = demoResult.getUpdatable("countText");
		if (updatable != null) {
			updatable.updateText('Selected: $count / ${checkboxes.length}');
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		checkboxBuilder = null;
		demoResult = null;
		checkboxes = [];
		disabledCheckbox1 = null;
		disabledCheckbox2 = null;
		disableToggle = null;
	}
}
