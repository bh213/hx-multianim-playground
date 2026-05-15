package screens.ui;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimDropdown.UIStandardMultiAnimDropdown;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class DropdownsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var dropdownScrollable:Null<UIStandardMultiAnimDropdown>;
	var dropdownAutoFew:Null<UIStandardMultiAnimDropdown>;
	var dropdownAutoMany:Null<UIStandardMultiAnimDropdown>;
	var dropdownCustom:Null<UIStandardMultiAnimDropdown>;
	var dropdownWide:Null<UIStandardMultiAnimDropdown>;
	var dropdownLarge:Null<UIStandardMultiAnimDropdown>;
	var dropdownDisabled:Null<UIStandardMultiAnimDropdown>;
	var disableCheckbox:Null<UIStandardMultiCheckbox>;
	var allDropdowns:Array<UIStandardMultiAnimDropdown> = [];

	static final FRUITS:Array<UIElementListItem> = [
		{name: "Apple"},
		{name: "Banana"},
		{name: "Cherry"},
		{name: "Dragon Fruit"},
		{name: "Elderberry"},
		{name: "Fig"},
		{name: "Grape"},
		{name: "Honeydew"},
		{name: "Kiwi"},
		{name: "Lemon"},
	];

	static final FEW_ITEMS:Array<UIElementListItem> = [
		{name: "Red"},
		{name: "Green"},
		{name: "Blue"},
	];

	static final MANY_ITEMS:Array<UIElementListItem> = [
		{name: "Red"},
		{name: "Orange"},
		{name: "Yellow"},
		{name: "Green"},
		{name: "Blue"},
		{name: "Indigo"},
		{name: "Violet"},
		{name: "Cyan"},
		{name: "Magenta"},
		{name: "Teal"},
	];

	override public function load():Void {
		autoSyncInitialState = true;
		setupDemo("Dropdowns", "Dropdown menus: scrollable (fixed height) and autoscale (auto-sizing) modes");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/dropdowns.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "dropdownsDemo", [], [
			dropdownScrollable => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar", FRUITS, 0),
			dropdownAutoFew => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar", FEW_ITEMS, 0),
			dropdownAutoMany => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar", MANY_ITEMS, 0),
			dropdownCustom => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar", FRUITS, 0),
			dropdownWide => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar", FRUITS, 0),
			dropdownLarge => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar", FRUITS, 0),
			dropdownDisabled => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar", FRUITS, 0),
			// Checkbox
			disableCheckbox => addCheckbox(stdBuilder, false),
		]);

		demoResult = ui.builderResults;
		dropdownScrollable = ui.dropdownScrollable;
		dropdownAutoFew = ui.dropdownAutoFew;
		dropdownAutoMany = ui.dropdownAutoMany;
		dropdownCustom = ui.dropdownCustom;
		dropdownWide = ui.dropdownWide;
		dropdownLarge = ui.dropdownLarge;
		dropdownDisabled = ui.dropdownDisabled;
		dropdownDisabled.disabled = true;
		disableCheckbox = ui.disableCheckbox;
		// dropdownDisabled stays permanently disabled — excluded from the toggle list
		allDropdowns = [
			dropdownScrollable, dropdownAutoFew, dropdownAutoMany,
			dropdownCustom, dropdownWide, dropdownLarge,
		];

		addBuilderResult(demoResult);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIChangeItem(index, items):
				if (source == dropdownScrollable) {
					updateSelectedText(index, items, "scrollableText");
				} else if (source == dropdownAutoFew) {
					updateSelectedText(index, items, "autoFewText");
				} else if (source == dropdownAutoMany) {
					updateSelectedText(index, items, "autoManyText");
				} else if (source == dropdownCustom) {
					updateSelectedText(index, items, "customText");
				} else if (source == dropdownWide) {
					updateSelectedText(index, items, "wideText");
				} else if (source == dropdownLarge) {
					updateSelectedText(index, items, "largeText");
				} else if (source == dropdownDisabled) {
					updateSelectedText(index, items, "disabledText");
				}
			case UIToggle(pressed):
				if (source == disableCheckbox) {
					for (dd in allDropdowns)
						dd.disabled = pressed;
				}
			default:
		}
		super.onScreenEvent(event, source);
	}

	function updateSelectedText(index:Int, items:Array<UIElementListItem>, fieldName:String):Void {
		if (demoResult == null) return;
		final updatable = demoResult.getUpdatable(fieldName);
		if (updatable != null) {
			if (index >= 0 && index < items.length) {
				updatable.updateText('Selected: ${items[index].name}');
			} else {
				updatable.updateText('Selected: None');
			}
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		dropdownScrollable = null;
		dropdownAutoFew = null;
		dropdownAutoMany = null;
		dropdownCustom = null;
		dropdownWide = null;
		dropdownLarge = null;
		dropdownDisabled = null;
		disableCheckbox = null;
		allDropdowns = [];
	}
}
