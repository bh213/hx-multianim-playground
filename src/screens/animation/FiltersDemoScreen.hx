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
	var activeBitmapType:String = "rectBlack";

	override public function load():Void {
		setupDemo("Filters", "Visual filters on sprites: outline, glow, blur, saturate, brightness, dropShadow");

		demoBuilder = screenManager.buildFromResourceName("demos/animation/filters.manim", false);

		// Scrollable list for bitmap selection
		scrollableList = addScrollableListWithSingleBuilder(stdBuilder, "list-panel", "list-item-120", "scrollbar", "scrollbar", TestBitmaps.ALL_ITEMS,
			null, 0, 160, 200);
		addElement(scrollableList, null);

		// Build layout with list injected
		layoutResult = demoBuilder.buildWithParameters("filtersLayout", [], {
			placeholderObjects: [
				"bitmapList" => PVObject(scrollableList.getObject()),
			]
		});
		addBuilderResult(layoutResult);

		// Build initial filter showcase
		rebuildShowcase(TestBitmaps.ALL_TYPES[0]);
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
				updatable.updateText('Active: ${TestBitmaps.getName(bitmapType)}');
			}
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIDoubleClickItem(index, items):
				if (source == scrollableList && index >= 0 && index < TestBitmaps.ALL_TYPES.length) {
					rebuildShowcase(TestBitmaps.ALL_TYPES[index]);
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
