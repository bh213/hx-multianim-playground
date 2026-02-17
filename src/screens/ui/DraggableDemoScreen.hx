package screens.ui;

import bh.base.FPoint;
import bh.paths.AnimatedPath;
import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimDraggable;
import bh.ui.UIMultiAnimDraggable.DragEvent;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
import h2d.col.Point;
import h2d.col.Bounds;

class DraggableDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var draggables:Array<UIMultiAnimDraggable> = [];

	// Base position offset of the programmable
	static inline var BX = 50;
	static inline var BY = 80;

	override public function load():Void {
		setupDemo("Draggable", "All drag & drop modes: snap zones, constraints, priority, layer, alpha/highlight");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/draggable.manim", false);
		demoResult = demoBuilder.buildWithParameters("draggableDemo", []);
		addBuilderResult(demoResult);

		setupDropZoneDrag();
		setupConstraintDrag();
		setupPriorityDrag();
		setupDragLayerDrag();
	}

	// --- Mode 1: Drop zones with snap & elastic return, alpha feedback ---
	function setupDropZoneDrag():Void {
		var drag = UIMultiAnimDraggable.create(new h2d.Bitmap(h2d.Tile.fromColor(0x4488FF, 40, 40)));
		drag.returnPathFactory = animPathFactory("returnAnim");
		drag.snapPathFactory = animPathFactory("snapAnim");
		drag.dragAlpha = 0.6;
		drag.zoneHighlightAlpha = 1.0;

		drag.addDropZone({
			id: "zone1",
			bounds: Bounds.fromValues(BX + 0, BY + 60, 120, 120),
			snapX: BX + 40,
			snapY: BY + 100,
		});
		drag.addDropZone({
			id: "zone2",
			bounds: Bounds.fromValues(BX + 150, BY + 60, 120, 120),
			snapX: BX + 190,
			snapY: BY + 100,
		});

		drag.onDragEvent = (event, pos, wrapper) -> {
			switch event {
				case ZoneEnter(zone):
					updateEventText('ZoneEnter: ${zone.id}');
				case ZoneLeave(zone):
					updateEventText('ZoneLeave: ${zone.id}');
				case DragStart:
					updateEventText('DragStart (alpha=0.6)');
				case DragEnd:
					updateEventText('DragEnd (snapped)');
				case DragCancel:
					updateEventText('DragCancel (elastic return)');
				default:
			}
		};

		draggables.push(drag);
		addElementWithPos(drag, BX + 300, BY + 100, DefaultLayer);
	}

	// --- Mode 2: Horizontal constraint — always bounces back to start ---
	function setupConstraintDrag():Void {
		var drag = UIMultiAnimDraggable.create(new h2d.Bitmap(h2d.Tile.fromColor(0x44CC44, 50, 20)));
		final minX = BX + 0;
		final maxX = BX + 500;
		final fixedY = BY + 272;
		drag.dragConstraint = (pos) -> new Point(Math.max(minX, Math.min(pos.x, maxX)), fixedY);
		drag.returnPathFactory = animPathFactory("returnAnim");
		drag.dragAlpha = 0.7;

		drag.onDragEvent = (event, pos, wrapper) -> {
			switch event {
				case DragMove:
					updateEventText('Constrained X=${Std.int(pos.x)} [${minX}..${maxX}]');
				default:
			}
		};

		draggables.push(drag);
		addElementWithPos(drag, BX + 0, fixedY, DefaultLayer);
	}

	// --- Mode 3: Priority zones (overlapping) with elastic return ---
	function setupPriorityDrag():Void {
		var drag = UIMultiAnimDraggable.create(new h2d.Bitmap(h2d.Tile.fromColor(0xFFAA00, 30, 30)));
		drag.returnPathFactory = animPathFactory("returnAnim");
		drag.snapPathFactory = animPathFactory("snapAnim");
		drag.dragAlpha = 0.7;
		drag.zoneHighlightAlpha = 1.0;

		// Outer zone, lower priority
		drag.addDropZone({
			id: "outer-low",
			bounds: Bounds.fromValues(BX + 0, BY + 370, 180, 120),
			snapX: BX + 140,
			snapY: BY + 420,
			priority: 0,
		});
		// Inner zone, higher priority (overlaps outer)
		drag.addDropZone({
			id: "inner-high",
			bounds: Bounds.fromValues(BX + 50, BY + 390, 80, 80),
			snapX: BX + 70,
			snapY: BY + 410,
			priority: 10,
		});

		drag.onDragEvent = (event, pos, wrapper) -> {
			switch event {
				case DragEnd:
					updateEventText('Priority: dropped');
				case ZoneEnter(zone):
					updateEventText('Priority enter: ${zone.id}');
				case ZoneLeave(zone):
					updateEventText('Priority leave: ${zone.id}');
				default:
			}
		};

		draggables.push(drag);
		addElementWithPos(drag, BX + 200, BY + 400, DefaultLayer);
	}

	// --- Mode 4: BackgroundLayer (hides behind everything while dragging) ---
	function setupDragLayerDrag():Void {
		var drag = UIMultiAnimDraggable.create(new h2d.Bitmap(h2d.Tile.fromColor(0xAA44FF, 50, 50)));
		drag.dragLayer = BackgroundLayer;
		drag.returnPathFactory = animPathFactory("linearReturn");
		drag.dragAlpha = 0.8;

		drag.onDragEvent = (event, pos, wrapper) -> {
			switch event {
				case DragStart:
					updateEventText('Layer: behind (BackgroundLayer)');
				case DragCancel:
					updateEventText('Layer: back to DefaultLayer');
				default:
			}
		};

		draggables.push(drag);
		addElementWithPos(drag, BX + 400, BY + 270, DefaultLayer);
	}

	function animPathFactory(name:String):AnimatedPathFactory {
		return (from:FPoint, to:FPoint) -> demoBuilder.createAnimatedPath(name, from, to);
	}

	function updateEventText(text:String):Void {
		if (demoResult == null)
			return;
		final updatable = demoResult.getUpdatable("eventText");
		if (updatable != null) {
			updatable.updateText(text);
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
