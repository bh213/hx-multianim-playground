package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimScrollableList;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;

class FiltersDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var layoutResult:Null<BuilderResult>;
	var showcaseResult:Null<BuilderResult>;
	var scrollableList:Null<UIMultiAnimScrollableList>;
	var activeBitmapType:String = "rectangle";

	static final BITMAP_ITEMS:Array<UIElementListItem> = [
		{name: "Rectangle"},
		{name: "Marine"},
		{name: "Circle"},
		{name: "Star"},
		{name: "Skull"},
	];

	static final BITMAP_TYPES:Array<String> = ["rectangle", "marine", "circle", "star", "skull"];

	override public function load():Void {
		setupDemo("Filters", "Visual filters on sprites: outline, glow, blur, saturate, brightness, dropShadow");

		demoBuilder = screenManager.buildFromResourceName("demos/animation/filters.manim", false);

		// Scrollable list for bitmap selection
		scrollableList = addScrollableListWithSingleBuilder(stdBuilder, "list-panel", "list-item-120", "scrollbar", "scrollbar", BITMAP_ITEMS, null, 0, 160,
			130);
		addElement(scrollableList, null);

		// Build layout with list injected
		layoutResult = demoBuilder.buildWithParameters("filtersLayout", [], {
			placeholderObjects: [
				"bitmapList" => PVObject(scrollableList.getObject()),
			]
		});
		addBuilderResult(layoutResult);

		// Build initial filter showcase
		rebuildShowcase("rectangle");
	}

	function rebuildShowcase(bitmapType:String):Void {
		if (showcaseResult != null) {
			showcaseResult.object.remove();
		}

		activeBitmapType = bitmapType;
		showcaseResult = demoBuilder.buildWithParameters("filterShowcase", ["bitmapType" => bitmapType]);
		showcaseResult.object.setPosition(280, 160);
		addBuilderResult(showcaseResult);

		if (layoutResult != null) {
			final updatable = layoutResult.getUpdatable("selectedText");
			if (updatable != null) {
				final idx = BITMAP_TYPES.indexOf(bitmapType);
				final displayName = idx >= 0 ? BITMAP_ITEMS[idx].name : bitmapType;
				updatable.updateText('Active: $displayName');
			}
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIDoubleClickItem(index, items):
				if (source == scrollableList && index >= 0 && index < BITMAP_TYPES.length) {
					rebuildShowcase(BITMAP_TYPES[index]);
				}
			default:
		}
		super.onScreenEvent(event, source);
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		layoutResult = null;
		showcaseResult = null;
		scrollableList = null;
	}
}
