package screens.ui;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimRadioButtons;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;

class RadioDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var radioVertical:Null<UIMultiAnimRadioButtons>;
	var radioHorizontal:Null<UIMultiAnimRadioButtons>;
	var radioVertical2:Null<UIMultiAnimRadioButtons>;

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

	override public function load():Void {
		setupDemo("Radio Buttons", "Vertical and horizontal radio groups with selection feedback");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/radio.manim", false);

		radioVertical = addRadio(stdBuilder, null, VERTICAL_ITEMS, true, 0);
		addElement(radioVertical, null);
		radioHorizontal = addRadio(stdBuilder, null, HORIZONTAL_ITEMS, false, 0);
		addElement(radioHorizontal, null);
		radioVertical2 = addRadio(stdBuilder, null, DIFFICULTY_ITEMS, true, 0);
		addElement(radioVertical2, null);

		demoResult = demoBuilder.buildWithParameters("radioDemo", [], {
			placeholderObjects: [
				"radioVertical" => PVObject(radioVertical.getObject()),
				"radioHorizontal" => PVObject(radioHorizontal.getObject()),
				"radioVertical2" => PVObject(radioVertical2.getObject()),
			]
		});

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
		demoResult = null;
		radioVertical = null;
		radioHorizontal = null;
		radioVertical2 = null;
	}
}
