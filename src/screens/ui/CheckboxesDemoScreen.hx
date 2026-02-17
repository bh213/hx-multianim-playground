package screens.ui;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;

class CheckboxesDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var checkboxes:Array<UIStandardMultiCheckbox> = [];
	var disabledCheckbox1:Null<UIStandardMultiCheckbox>;
	var disabledCheckbox2:Null<UIStandardMultiCheckbox>;
	var disableToggle:Null<UIStandardMultiCheckbox>;

	override public function load():Void {
		setupDemo("Checkboxes", "Checkbox, tickbox, and toggle variants with selection tracking");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/checkboxes.manim", false);

		// Create the 5 checkbox variants
		var cb1 = addCheckbox(stdBuilder, null, false);
		addElement(cb1, null);
		var cb2 = addCheckbox(stdBuilder, null, false);
		addElement(cb2, null);
		var cb3 = addCheckbox(stdBuilder, null, false);
		addElement(cb3, null);
		var cb4 = addCheckbox(stdBuilder, null, false);
		addElement(cb4, null);
		var cb5 = addCheckbox(stdBuilder, null, false);
		addElement(cb5, null);
		checkboxes = [cb1, cb2, cb3, cb4, cb5];

		// Disabled state checkboxes
		disabledCheckbox1 = addCheckbox(stdBuilder, null, true);
		addElement(disabledCheckbox1, null);
		disabledCheckbox2 = addCheckbox(stdBuilder, null, false);
		addElement(disabledCheckbox2, null);

		// Toggle for enabling/disabling
		disableToggle = addCheckbox(stdBuilder, null, false);
		addElement(disableToggle, null);

		demoResult = demoBuilder.buildWithParameters("checkboxesDemo", [], {
			placeholderObjects: [
				"checkbox1" => PVObject(cb1.getObject()),
				"checkbox2" => PVObject(cb2.getObject()),
				"checkbox3" => PVObject(cb3.getObject()),
				"checkbox4" => PVObject(cb4.getObject()),
				"checkbox5" => PVObject(cb5.getObject()),
				"disabledCheckbox1" => PVObject(disabledCheckbox1.getObject()),
				"disabledCheckbox2" => PVObject(disabledCheckbox2.getObject()),
				"disableToggle" => PVObject(disableToggle.getObject()),
			]
		});

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
		demoResult = null;
		checkboxes = [];
		disabledCheckbox1 = null;
		disabledCheckbox2 = null;
		disableToggle = null;
	}
}
