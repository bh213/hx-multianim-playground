package screens.ui;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimScrollableList;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;

class ScrollableListDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var scrollableList:Null<UIMultiAnimScrollableList>;

	static final LIST_ITEMS:Array<UIElementListItem> = [
		{name: "Item 1 - Sword"},
		{name: "Item 2 - Shield"},
		{name: "Item 3 - Potion"},
		{name: "Item 4 - Scroll"},
		{name: "Item 5 - Amulet"},
		{name: "Item 6 - Ring"},
		{name: "Item 7 - Helmet"},
		{name: "Item 8 - Boots"},
		{name: "Item 9 - Gloves"},
		{name: "Item 10 - Cape"},
		{name: "Item 11 - Staff"},
		{name: "Item 12 - Bow"},
		{name: "Item 13 - Arrow"},
		{name: "Item 14 - Dagger"},
		{name: "Item 15 - Wand"},
		{name: "Item 16 - Orb"},
		{name: "Item 17 - Gem"},
		{name: "Item 18 - Rune"},
		{name: "Item 19 - Tome"},
		{name: "Item 20 - Charm"},
		{name: "Item 21 - Belt"},
		{name: "Item 22 - Crown"},
		{name: "Item 23 - Hammer"},
		{name: "Item 24 - Spear"},
		{name: "Item 25 - Axe"},
	];

	override public function load():Void {
		setupDemo("Scrollable List", "Scrollable list with 25 items and selection tracking");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/scrollable-list.manim", false);

		scrollableList = addScrollableListWithSingleBuilder(stdBuilder, "list-panel", "list-item-120", "scrollbar", "scrollbar", LIST_ITEMS, null, 0, 200, 300);
		addElement(scrollableList, null);

		demoResult = demoBuilder.buildWithParameters("scrollableListDemo", [], {
			placeholderObjects: [
				"scrollableList" => PVObject(scrollableList.getObject()),
			]
		});

		addBuilderResult(demoResult);
		updateSelectedText(0);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIChangeItem(index, items):
				if (source == scrollableList) {
					updateSelectedText(index);
				}
			case UIDoubleClickItem(index, items):
				if (source == scrollableList) {
					updateDoubleClickText(index);
				}
			default:
		}
		super.onScreenEvent(event, source);
	}

	function updateSelectedText(index:Int):Void {
		if (demoResult == null) return;
		final updatable = demoResult.getUpdatable("selectedText");
		if (updatable != null) {
			if (index >= 0 && index < LIST_ITEMS.length) {
				updatable.updateText('Selected: ${LIST_ITEMS[index].name}');
			} else {
				updatable.updateText('Selected: None');
			}
		}
	}

	function updateDoubleClickText(index:Int):Void {
		if (demoResult == null) return;
		final updatable = demoResult.getUpdatable("doubleClickText");
		if (updatable != null) {
			if (index >= 0 && index < LIST_ITEMS.length) {
				updatable.updateText('Confirmed: ${LIST_ITEMS[index].name}');
			} else {
				updatable.updateText('Confirmed: None');
			}
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		scrollableList = null;
	}
}
