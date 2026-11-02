package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;
import bh.base.TileMap;

/** A map of demos/gamelike/tilemap-grids.manim, where it is placed and how far it may be raised. **/
private typedef PlacedMap = {
	final name:String;
	final container:h2d.Object;
	final scale:Float;
	final maxLevel:Int;
	var ?map:TileMap;
	var ?hit:h2d.Interactive;
}

/**
 * Tile maps on the isometric and hex grids, from demos/gamelike/tilemap-grids.manim: a city of
 * Kenney's isometric blocks and an island of the Hexset's hexes, built with `buildTilemap`. The cell
 * under the mouse is found with `toCell` (the top or side drawn there, a raised cell's first) and read
 * with `terrainAt`, `levelAt`, `sideAt` and `metadataAt`; a left click raises it and a right click
 * lowers it with `setLevel`, its chunk drawn again with the cell lifted and sorted among the actors.
 */
class TilemapGridsDemoScreen extends DemoScreenBase {
	/** Room left above each map for a cell raised higher than any is at the start. **/
	static inline var ROOM = 40;

	var builder:Null<MultiAnimBuilder>;
	var buttonsBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var resetButton:Null<UIStandardMultiAnimButton>;
	var maps:Array<PlacedMap> = [];

	override public function load():Void {
		setupDemo("Iso & Hex Maps", "Tile maps on the isometric and hex grids: the tileset says its grid, the map is rows as on the square one; raised cells are lifted and sort among the actors");

		builder = screenManager.buildFromResourceName("demos/gamelike/tilemap-grids.manim", false);
		buttonsBuilder = screenManager.buildFromResourceName("buttons.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(builder, "tilemapGridsDemo", [], [
			resetBtn => addButtonWithSingleBuilder(buttonsBuilder, "main", "Reset"),
		]);
		demoResult = ui.builderResults;
		resetButton = ui.resetBtn;
		addBuilderResult(demoResult);

		final city = demoResult.getSingleItemByName("cityContainer");
		final island = demoResult.getSingleItemByName("islandContainer");
		if (city == null || island == null)
			return;
		maps = [
			{name: "city", container: city.object.toh2dObject(), scale: 0.5, maxLevel: 3},
			{name: "island", container: island.object.toh2dObject(), scale: 2, maxLevel: 2},
		];
		buildMaps();
	}

	function buildMaps():Void {
		for (placed in maps)
			place(placed);
		updateStatus();
	}

	/** Builds a map into its container, its top `ROOM` pixels down, and the area that reads it. **/
	function place(placed:PlacedMap):Void {
		if (builder == null)
			return;
		if (placed.map != null)
			placed.map.remove();
		if (placed.hit != null)
			placed.hit.remove();
		final map = builder.buildTilemap(placed.name);
		map.setScale(placed.scale);
		map.cullToScene = false; // both maps are in view whole
		placed.container.addChild(map);
		map.redraw(); // drawn now, so its bounds are what it draws
		final b = map.getBounds(placed.container);
		map.x = -b.xMin;
		map.y = ROOM - b.yMin;
		final hit = new h2d.Interactive(b.width, b.height + ROOM, placed.container);
		hit.onMove = function(e:hxd.Event) describeAt(placed, e);
		// left button (0) raises, right button (1) lowers; an Interactive hears the right one only when asked
		hit.enableRightButton = true;
		hit.onPush = function(e:hxd.Event) {
			if (e.button == 0 || e.button == 1)
				changeAt(placed, e, e.button == 0);
		};
		hit.onOut = function(_) setCellText("Move over a map to read a cell");
		placed.map = map;
		placed.hit = hit;
	}

	/** The cell under the pointer: the event's point taken into the map's own coordinates. **/
	function cellOf(placed:PlacedMap, e:hxd.Event):Null<h2d.col.IPoint> {
		final map = placed.map;
		final hit = placed.hit;
		if (map == null || hit == null)
			return null;
		final p = hit.localToGlobal(new h2d.col.Point(e.relX, e.relY));
		map.globalToLocal(p);
		final c = map.toCell(p.x, p.y);
		return map.inside(c.x, c.y) ? c : null;
	}

	function changeAt(placed:PlacedMap, e:hxd.Event, raising:Bool):Void {
		final map = placed.map;
		final c = cellOf(placed, e);
		if (map == null || c == null)
			return;
		final level = map.levelAt(c.x, c.y);
		final next = raising ? (level < placed.maxLevel ? level + 1 : level) : (level > 0 ? level - 1 : 0);
		if (next != level) {
			try {
				map.setLevel(c.x, c.y, next);
			} catch (err:Dynamic) {
				setCellText('${placed.name}: $err');
				return;
			}
		}
		describeAt(placed, e);
	}

	/** What the map says of the cell under the mouse. **/
	function describeAt(placed:PlacedMap, e:hxd.Event):Void {
		final map = placed.map;
		final c = cellOf(placed, e);
		if (map == null || c == null) {
			setCellText("Move over a map to read a cell");
			return;
		}
		final parts = ['${placed.name} cell ${c.x}, ${c.y}', 'terrain: ${map.terrainAt(c.x, c.y)}', 'level: ${map.levelAt(c.x, c.y)}'];
		if (map.sideAt(c.x, c.y) > 0)
			parts.push('its side drops ${map.sideAt(c.x, c.y)}');
		final building = placed.name == "city" ? map.cellAt("buildings", c.x, c.y) : null;
		if (building != null)
			parts.push('buildings: $building');
		final meta = map.metadataAt(c.x, c.y);
		final keys = [for (k in meta.keys()) k];
		keys.sort(Reflect.compare);
		for (k in keys)
			parts.push('$k = ${meta.getStringOrDefault(k, "")}');
		setCellText(parts.join("   |   "));
	}

	function setCellText(text:String):Void {
		if (demoResult == null)
			return;
		final updatable = demoResult.getUpdatable("cellText");
		if (updatable != null)
			updatable.updateText(text);
	}

	function updateStatus():Void {
		if (demoResult == null)
			return;
		final parts = [
			for (placed in maps)
				if (placed.map != null)
					'${placed.name}: ${placed.map.width} x ${placed.map.height} on the ${placed.map.grid.kindName()} grid, lifted ${placed.map.lift} px a level'
		];
		final updatable = demoResult.getUpdatable("statusText");
		if (updatable != null)
			updatable.updateText(parts.join("  |  "));
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == resetButton)
					buildMaps();
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		maps = [];
		builder = null;
		buttonsBuilder = null;
		demoResult = null;
		resetButton = null;
	}
}
