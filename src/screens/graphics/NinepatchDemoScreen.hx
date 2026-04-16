package screens.graphics;

import bh.ui.*;
import bh.ui.UIMultiAnimDraggable;
import bh.ui.UIMultiAnimDraggable.DropZoneId;
import bh.multianim.MultiAnimBuilder;
import bh.base.FontManager;
import h2d.col.Point;
import h2d.col.Bounds;

class NinepatchDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;

	var panelResult:Null<BuilderResult>;
	var handleDraggable:Null<UIMultiAnimDraggable>;
	static inline final PANEL_X = 500;
	static inline final PANEL_Y = 520;
	static inline final HANDLE_SIZE = 12;
	static inline final SNAP = 30;
	var panelWidth:Int = 210;
	var panelHeight:Int = 150;

	override public function load():Void {
		setupDemo("Ninepatch", "9-patch stretching at various sizes, plus a resizable panel with drag handle");

		demoBuilder = screenManager.buildFromResourceName("demos/graphics/ninepatch.manim", false);

		var result = demoBuilder.buildWithParameters("ninepatchShowcase", []);
		result.object.setPosition(40, 80);
		addBuilderResult(result);

		// Resizable ninepatch panel
		var label = new h2d.Text(FontManager.getFontByName("m6x11"));
		label.text = "Drag corner to resize:";
		label.textColor = 0xFFCCCCCC;
		label.setPosition(PANEL_X, PANEL_Y - 20);
		addObjectToLayer(label, DefaultLayer);

		panelResult = demoBuilder.buildWithParameters("resizablePanel", ["width" => panelWidth, "height" => panelHeight], null, null, true);
		panelResult.object.setPosition(PANEL_X, PANEL_Y);
		addBuilderResult(panelResult);

		// Drag handle at bottom-right corner
		final handleTile = h2d.Tile.fromColor(0xFF7fdbda, HANDLE_SIZE, HANDLE_SIZE);
		final handleBitmap = new h2d.Bitmap(handleTile);
		handleDraggable = UIMultiAnimDraggable.create(handleBitmap);
		handleDraggable.setSnapAnimPath(demoBuilder, "snapAnim");
		handleDraggable.dragConstraint = (pos) -> {
			final x = Math.max(PANEL_X + 60 - HANDLE_SIZE, Math.min(PANEL_X + 510 - HANDLE_SIZE, pos.x));
			final y = Math.max(PANEL_Y + 60 - HANDLE_SIZE, Math.min(PANEL_Y + 210 - HANDLE_SIZE, pos.y));
			return new Point(x, y);
		};
		handleDraggable.addDropZone({
			id: Named("resize"),
			bounds: Bounds.fromValues(0, 0, 2000, 2000),
			snapProvider: () -> {
				final snappedW = Std.int(panelWidth / SNAP + 0.5) * SNAP;
				final snappedH = Std.int(panelHeight / SNAP + 0.5) * SNAP;
				return new Point(PANEL_X + snappedW - HANDLE_SIZE, PANEL_Y + snappedH - HANDLE_SIZE);
			}
		});
		addElementWithPos(handleDraggable, PANEL_X + panelWidth - HANDLE_SIZE, PANEL_Y + panelHeight - HANDLE_SIZE, DefaultLayer);
	}

	override public function update(dt:Float):Void {
		super.update(dt);
		if (handleDraggable == null || panelResult == null) return;
		final obj = handleDraggable.getObject();
		final newW = Std.int(Math.max(60, obj.x + HANDLE_SIZE - PANEL_X));
		final newH = Std.int(Math.max(60, obj.y + HANDLE_SIZE - PANEL_Y));
		if (newW != panelWidth || newH != panelHeight) {
			panelWidth = newW;
			panelHeight = newH;
			panelResult.setParameter("width", newW);
			panelResult.setParameter("height", newH);
			final upd = panelResult.getUpdatable("sizeText");
			if (upd != null) upd.updateText('$newW x $newH');
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		panelResult = null;
		handleDraggable = null;
	}
}
