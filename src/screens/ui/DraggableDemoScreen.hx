package screens.ui;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimDraggable;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
import h2d.col.Point;

class DraggableDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var draggables:Array<UIMultiAnimDraggable> = [];

	static final COLORS:Array<Int> = [0xFF4444, 0x44CC44, 0x4488FF, 0xFFAA00, 0xAA44FF];
	static final SIZES:Array<{w:Int, h:Int}> = [
		{w: 60, h: 60},
		{w: 80, h: 40},
		{w: 50, h: 70},
		{w: 70, h: 50},
		{w: 55, h: 55},
	];

	override public function load():Void {
		setupDemo("Draggable", "Free-drag colored rectangles within a bounded area");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/draggable.manim", false);

		demoResult = demoBuilder.buildWithParameters("draggableDemo", []);
		addBuilderResult(demoResult);

		// Create draggable colored rectangles
		for (i in 0...COLORS.length) {
			final color = COLORS[i];
			final size = SIZES[i];

			// Create a colored bitmap using h2d primitives
			final tile = h2d.Tile.fromColor(color, size.w, size.h);
			final bitmap = new h2d.Bitmap(tile);

			final draggable = UIMultiAnimDraggable.create(bitmap);
			draggable.onDragEvent = (event, pos, wrapper) -> {
				if (event == DragMove || event == DragStart) {
					updateDragInfo(i, pos);
				}
			};

			draggables.push(draggable);

			// Position the draggables in a row inside the drag area
			final startX = 80 + i * 130;
			final startY = 200;
			addElementWithPos(draggable, startX, startY, DefaultLayer);
		}
	}

	function updateDragInfo(index:Int, pos:Point):Void {
		if (demoResult == null) return;
		final updatable = demoResult.getUpdatable("dragText");
		if (updatable != null) {
			updatable.updateText('Rectangle ${index + 1} at (${Std.int(pos.x)}, ${Std.int(pos.y)})');
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		super.onScreenEvent(event, source);
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		draggables = [];
	}
}
