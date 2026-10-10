package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;
import bh.base.TileMap;

/**
 * A tile map from demos/gamelike/tilemap.manim, painted live: a terrain brush calls
 * `setTerrain`, raising and lowering call `setLevel`, and the map draws again only the chunk the
 * cell is in. The cell under the mouse is read back with `terrainAt`, `levelAt` and `metadataAt`.
 */
class TilemapDemoScreen extends DemoScreenBase {
	static inline var SCALE = 2;
	static inline var CHUNK = 8;

	var builder:Null<MultiAnimBuilder>;
	var buttonsBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var grassButton:Null<UIStandardMultiAnimButton>;
	var dirtButton:Null<UIStandardMultiAnimButton>;
	var waterButton:Null<UIStandardMultiAnimButton>;
	var raiseButton:Null<UIStandardMultiAnimButton>;
	var lowerButton:Null<UIStandardMultiAnimButton>;
	var resetButton:Null<UIStandardMultiAnimButton>;

	var map:Null<TileMap>;
	var mapContainer:Null<h2d.Object>;
	var mapInteractive:Null<h2d.Interactive>;
	var isPainting:Bool = false;
	/** A legend character to paint, or "+" / "-" for the ground raised and lowered. **/
	var brush:String = "d";

	override public function load():Void {
		setupDemo("Tile Map", "Terrains, a shore transition, a plateau with its side, cells and metadata from one .manim; paint it and only its chunk is drawn again");

		builder = screenManager.buildFromResourceName("demos/gamelike/tilemap.manim", false);
		buttonsBuilder = screenManager.buildFromResourceName("buttons.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(builder, "tilemapDemo", [], [
			grassBtn => addButtonWithSingleBuilder(buttonsBuilder, "color", null),
			dirtBtn => addButtonWithSingleBuilder(buttonsBuilder, "color", null),
			waterBtn => addButtonWithSingleBuilder(buttonsBuilder, "color", null),
			raiseBtn => addButtonWithSingleBuilder(buttonsBuilder, "main", "Raise"),
			lowerBtn => addButtonWithSingleBuilder(buttonsBuilder, "main", "Lower"),
			resetBtn => addButtonWithSingleBuilder(buttonsBuilder, "main", "Reset"),
		]);
		demoResult = ui.builderResults;
		grassButton = ui.grassBtn;
		dirtButton = ui.dirtBtn;
		waterButton = ui.waterBtn;
		raiseButton = ui.raiseBtn;
		lowerButton = ui.lowerBtn;
		resetButton = ui.resetBtn;
		addBuilderResult(demoResult);

		final containerEl = demoResult.getSingleItemByName("mapContainer");
		if (containerEl == null)
			return;
		mapContainer = containerEl.object.toh2dObject();
		buildMap();
		updateSelection();
	}

	function buildMap():Void {
		if (builder == null || mapContainer == null)
			return;
		if (map != null)
			map.remove();
		if (mapInteractive != null)
			mapInteractive.remove();
		// Small chunks, so painting shows what is drawn again
		final was = TileMap.defaultChunkSize;
		TileMap.defaultChunkSize = CHUNK;
		map = builder.buildTilemap("meadow");
		TileMap.defaultChunkSize = was;
		map.setScale(SCALE);
		map.cullToScene = false; // the whole map is in view
		mapContainer.addChild(map);

		final w = map.width * map.tileSize * SCALE;
		final h = map.height * map.tileSize * SCALE;
		mapInteractive = new h2d.Interactive(w, h, mapContainer);
		mapInteractive.onPush = function(e:hxd.Event) {
			if (e.button == 0) {
				isPainting = true;
				paintAt(e.relX, e.relY);
			}
		};
		mapInteractive.onRelease = function(_) {
			isPainting = false;
		};
		mapInteractive.onMove = function(e:hxd.Event) {
			describeAt(e.relX, e.relY);
			if (isPainting)
				paintAt(e.relX, e.relY);
		};
		mapInteractive.onOut = function(_) {
			isPainting = false;
		};
		updateStatus();
	}

	function cellOf(relX:Float, relY:Float):h2d.col.IPoint {
		return map.toCell(relX / SCALE, relY / SCALE);
	}

	function paintAt(relX:Float, relY:Float):Void {
		if (map == null)
			return;
		final c = cellOf(relX, relY);
		if (!map.inside(c.x, c.y))
			return;
		switch brush {
			case "+":
				if (map.levelAt(c.x, c.y) < 1) map.setLevel(c.x, c.y, 1);
			case "-":
				if (map.levelAt(c.x, c.y) > 0) map.setLevel(c.x, c.y, 0);
			default:
				if (map.terrainAt(c.x, c.y) != terrainOf(brush)) map.setTerrain(c.x, c.y, brush);
		}
		describeAt(relX, relY);
	}

	static function terrainOf(brush:String):String {
		return switch brush {
			case "d": "dirt";
			case "~": "water";
			default: "grass";
		};
	}

	/** What the map says of the cell under the mouse. **/
	function describeAt(relX:Float, relY:Float):Void {
		if (map == null || demoResult == null)
			return;
		final c = cellOf(relX, relY);
		final updatable = demoResult.getUpdatable("cellText");
		if (updatable == null)
			return;
		if (!map.inside(c.x, c.y)) {
			updatable.updateText("Move over the map to read a cell");
			return;
		}
		final meta = map.metadataAt(c.x, c.y);
		final parts = ['cell ${c.x}, ${c.y}', 'terrain: ${map.terrainAt(c.x, c.y)}', 'level: ${map.levelAt(c.x, c.y)}'];
		if (map.sideAt(c.x, c.y) > 0)
			parts.push('side of a rise of ${map.sideAt(c.x, c.y)}');
		final cell = map.cellAt("props", c.x, c.y);
		if (cell != null)
			parts.push('props: $cell');
		final keys = [for (k in meta.keys()) k];
		keys.sort(Reflect.compare);
		for (k in keys)
			parts.push('$k = ${meta.getStringOrDefault(k, "")}');
		updatable.updateText(parts.join("   |   "));
	}

	function updateStatus():Void {
		if (map == null || demoResult == null)
			return;
		final updatable = demoResult.getUpdatable("statusText");
		if (updatable != null)
			updatable.updateText('${map.width} x ${map.height} cells of ${map.tileSize}px  |  ${map.chunkCols} x ${map.chunkRows} chunks of $CHUNK  |  spawn at ${map.mark("spawn").x}, ${map.mark("spawn").y}');
	}

	function updateSelection():Void {
		if (grassButton != null) grassButton.getObject().alpha = brush == "." ? 1.0 : 0.4;
		if (dirtButton != null) dirtButton.getObject().alpha = brush == "d" ? 1.0 : 0.4;
		if (waterButton != null) waterButton.getObject().alpha = brush == "~" ? 1.0 : 0.4;
		if (raiseButton != null) raiseButton.getObject().alpha = brush == "+" ? 1.0 : 0.4;
		if (lowerButton != null) lowerButton.getObject().alpha = brush == "-" ? 1.0 : 0.4;
	}

	function setBrush(b:String):Void {
		brush = b;
		updateSelection();
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == grassButton)
					setBrush(".");
				else if (source == dirtButton)
					setBrush("d");
				else if (source == waterButton)
					setBrush("~");
				else if (source == raiseButton)
					setBrush("+");
				else if (source == lowerButton)
					setBrush("-");
				else if (source == resetButton)
					buildMap();
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		map = null;
		mapContainer = null;
		mapInteractive = null;
		builder = null;
		buttonsBuilder = null;
		demoResult = null;
		grassButton = null;
		dirtButton = null;
		waterButton = null;
		raiseButton = null;
		lowerButton = null;
		resetButton = null;
		isPainting = false;
	}
}
