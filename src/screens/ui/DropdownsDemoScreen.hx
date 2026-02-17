package screens.ui;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimDropdown.UIStandardMultiAnimDropdown;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;

class DropdownsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var dropdown1:Null<UIStandardMultiAnimDropdown>;
	var dropdown2:Null<UIStandardMultiAnimDropdown>;

	static final ITEMS:Array<UIElementListItem> = [
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

	static final COLOR_ITEMS:Array<UIElementListItem> = [
		{name: "Red"},
		{name: "Green"},
		{name: "Blue"},
		{name: "Yellow"},
		{name: "Purple"},
		{name: "Orange"},
		{name: "Cyan"},
	];

	override public function load():Void {
		setupDemo("Dropdowns", "Dropdown menus with item selection and display");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/dropdowns.manim", false);

		dropdown1 = addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar", ITEMS, null, 0);
		dropdown2 = addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar", COLOR_ITEMS, null, 0);

		demoResult = demoBuilder.buildWithParameters("dropdownsDemo", [], {
			placeholderObjects: [
				"dropdown1" => PVObject(dropdown1.getObject()),
				"dropdown2" => PVObject(dropdown2.getObject()),
			]
		});

		addBuilderResult(demoResult);
		updateSelectedText(0, ITEMS, "selectedText");
		updateSelectedText(0, COLOR_ITEMS, "selected2Text");
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIChangeItem(index, items):
				if (source == dropdown1) {
					updateSelectedText(index, items, "selectedText");
				} else if (source == dropdown2) {
					updateSelectedText(index, items, "selected2Text");
				}
			default:
		}
		super.onScreenEvent(event, source);
	}

	function updateSelectedText(index:Int, items:Array<UIElementListItem>, fieldName:String):Void {
		if (demoResult == null) return;
		final updatable = demoResult.getUpdatable(fieldName);
		if (updatable != null) {
			final prefix = fieldName == "selectedText" ? "Selected" : "Color";
			if (index >= 0 && index < items.length) {
				updatable.updateText('$prefix: ${items[index].name}');
			} else {
				updatable.updateText('$prefix: None');
			}
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		dropdown1 = null;
		dropdown2 = null;
	}
}
