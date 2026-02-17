package screens.ui;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimDropdown.UIStandardMultiAnimDropdown;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
import bh.base.MacroUtils;

class DropdownsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var dropdownScrollable:Null<UIStandardMultiAnimDropdown>;
	var dropdownAutoFew:Null<UIStandardMultiAnimDropdown>;
	var dropdownAutoMany:Null<UIStandardMultiAnimDropdown>;

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
		setupDemo("Dropdowns", "Dropdown menus: scrollable (fixed height) and autoscale (auto-sizing) modes");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/dropdowns.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "dropdownsDemo", [], [
			dropdownScrollable => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar", FRUITS, 0),
			dropdownAutoFew => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar", FEW_ITEMS, 0),
			dropdownAutoMany => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar", MANY_ITEMS, 0),
		]);

		demoResult = ui.builderResults;
		dropdownScrollable = ui.dropdownScrollable;
		dropdownAutoFew = ui.dropdownAutoFew;
		dropdownAutoMany = ui.dropdownAutoMany;

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
	}
}
