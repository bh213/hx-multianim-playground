package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

/**
 * Paint dirt onto grass and render the same grid with either autotile format from
 * demos/gamelike/autotile.manim: `dirtCorner` (16-tile corner set, dual grid) or `dirtBlob47`
 * (per-cell blob47 with partial mapping). Grid value DIRT = terrain, GRASS = background.
 */
class AutotileDemoScreen extends DemoScreenBase {
	static inline var GRID_W = 40;
	static inline var GRID_H = 28;
	static inline var TILE_SIZE = 8;
	static inline var SCALE = 2;
	static inline var DIRT = 1;
	static inline var GRASS = 0;
	static inline var CORNER_AUTOTILE = "dirtCorner";
	static inline var BLOB47_AUTOTILE = "dirtBlob47";

	var builder:Null<MultiAnimBuilder>;
	var buttonsBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var randomizeButton:Null<UIStandardMultiAnimButton>;
	var clearButton:Null<UIStandardMultiAnimButton>;
	var dirtButton:Null<UIStandardMultiAnimButton>;
	var grassButton:Null<UIStandardMultiAnimButton>;
	var cornerButton:Null<UIStandardMultiAnimButton>;
	var blob47Button:Null<UIStandardMultiAnimButton>;

	var grid:Array<Array<Int>>;
	var tileGroup:Null<h2d.TileGroup>;
	var mapClip:Null<h2d.Mask>;
	var mapInteractive:Null<h2d.Interactive>;
	var isPainting:Bool = false;
	var brush:Int = DIRT;
	var autotileName:String = CORNER_AUTOTILE;

	override public function load():Void {
		setupDemo("Autotile Terrain", "Paint terrain and compare the corner and blob47 autotile formats");

		builder = screenManager.buildFromResourceName("demos/gamelike/autotile.manim", false);
		buttonsBuilder = screenManager.buildFromResourceName("buttons.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(builder, "autotileDemo", [], [
			randomizeBtn => addButtonWithSingleBuilder(buttonsBuilder, "main", "Randomize"),
			clearBtn => addButtonWithSingleBuilder(buttonsBuilder, "main", "Clear"),
			dirtBtn => addButtonWithSingleBuilder(buttonsBuilder, "color", null),
			grassBtn => addButtonWithSingleBuilder(buttonsBuilder, "color", null),
			cornerBtn => addButtonWithSingleBuilder(buttonsBuilder, "main", "Corner"),
			blob47Btn => addButtonWithSingleBuilder(buttonsBuilder, "main", "Blob47"),
		]);
		demoResult = ui.builderResults;
		randomizeButton = ui.randomizeBtn;
		clearButton = ui.clearBtn;
		dirtButton = ui.dirtBtn;
		grassButton = ui.grassBtn;
		cornerButton = ui.cornerBtn;
		blob47Button = ui.blob47Btn;
		addBuilderResult(demoResult);

		final mapContainerEl = demoResult.getSingleItemByName("mapContainer");
		if (mapContainerEl == null)
			return;
		final mapContainer = mapContainerEl.object.toh2dObject();
		final mapW = GRID_W * TILE_SIZE * SCALE;
		final mapH = GRID_H * TILE_SIZE * SCALE;

		// The corner format draws half a tile past the grid edge; clip it to the map
		mapClip = new h2d.Mask(mapW, mapH, mapContainer);

		// Interactive overlay for painting (screen-space size accounts for tile scale)
		mapInteractive = new h2d.Interactive(mapW, mapH, mapContainer);
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
			if (isPainting)
				paintAt(e.relX, e.relY);
		};
		mapInteractive.onOut = function(_) {
			isPainting = false;
		};

		// Start with a random map so both formats have shapes to show
		grid = [for (_ in 0...GRID_H) [for (_ in 0...GRID_W) GRASS]];
		randomize();
		updateSelection();
	}

	function paintAt(relX:Float, relY:Float):Void {
		final gx = Std.int(relX / (TILE_SIZE * SCALE));
		final gy = Std.int(relY / (TILE_SIZE * SCALE));
		if (gx >= 0 && gx < GRID_W && gy >= 0 && gy < GRID_H && grid[gy][gx] != brush) {
			grid[gy][gx] = brush;
			refresh();
		}
	}

	function refresh():Void {
		rebuildAutotile();
		updateStatus();
	}

	function rebuildAutotile():Void {
		if (builder == null || mapClip == null)
			return;
		if (tileGroup != null)
			tileGroup.remove();
		// Tiles are resolved once per builder, so rebuilding the whole TileGroup per edit is cheap
		tileGroup = builder.buildAutotile(autotileName, grid);
		tileGroup.setScale(SCALE);
		mapClip.addChild(tileGroup);
	}

	/** Random blobs: noise, then a few cellular-automaton smoothing passes. */
	function randomize():Void {
		for (y in 0...GRID_H)
			for (x in 0...GRID_W)
				grid[y][x] = Std.random(100) < 48 ? DIRT : GRASS;
		for (_ in 0...4) {
			final next = [for (y in 0...GRID_H) [for (x in 0...GRID_W) countDirtAround(x, y) >= 5 ? DIRT : GRASS]];
			grid = next;
		}
		refresh();
	}

	/** Dirt cells in the 3x3 block around (x, y), including itself. */
	function countDirtAround(x:Int, y:Int):Int {
		var count = 0;
		for (dy in -1...2)
			for (dx in -1...2) {
				final nx = x + dx;
				final ny = y + dy;
				if (nx >= 0 && nx < GRID_W && ny >= 0 && ny < GRID_H && grid[ny][nx] == DIRT)
					count++;
			}
		return count;
	}

	function clearMap():Void {
		for (y in 0...GRID_H)
			for (x in 0...GRID_W)
				grid[y][x] = GRASS;
		refresh();
	}

	function updateStatus():Void {
		if (demoResult == null)
			return;
		var dirtCount = 0;
		for (y in 0...GRID_H)
			for (x in 0...GRID_W)
				if (grid[y][x] == DIRT)
					dirtCount++;
		final format = autotileName == CORNER_AUTOTILE ? "corner" : "blob47";
		final updatable = demoResult.getUpdatable("statusText");
		if (updatable != null)
			updatable.updateText('Dirt: $dirtCount / ${GRID_W * GRID_H} cells  |  format: $format');
	}

	function updateSelection():Void {
		if (dirtButton != null) dirtButton.getObject().alpha = brush == DIRT ? 1.0 : 0.4;
		if (grassButton != null) grassButton.getObject().alpha = brush == GRASS ? 1.0 : 0.4;
		if (cornerButton != null) cornerButton.getObject().alpha = autotileName == CORNER_AUTOTILE ? 1.0 : 0.4;
		if (blob47Button != null) blob47Button.getObject().alpha = autotileName == BLOB47_AUTOTILE ? 1.0 : 0.4;
	}

	function setFormat(name:String):Void {
		if (autotileName == name)
			return;
		autotileName = name;
		updateSelection();
		refresh();
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == randomizeButton)
					randomize();
				else if (source == clearButton)
					clearMap();
				else if (source == dirtButton) {
					brush = DIRT;
					updateSelection();
				} else if (source == grassButton) {
					brush = GRASS;
					updateSelection();
				} else if (source == cornerButton)
					setFormat(CORNER_AUTOTILE);
				else if (source == blob47Button)
					setFormat(BLOB47_AUTOTILE);
			default:
		}
		super.onScreenEvent(event, source);
	}

	override public function onClear():Void {
		super.onClear();
		if (mapInteractive != null) {
			mapInteractive.remove();
			mapInteractive = null;
		}
		if (tileGroup != null) {
			tileGroup.remove();
			tileGroup = null;
		}
		if (mapClip != null) {
			mapClip.remove();
			mapClip = null;
		}
		builder = null;
		buttonsBuilder = null;
		demoResult = null;
		randomizeButton = null;
		clearButton = null;
		dirtButton = null;
		grassButton = null;
		cornerButton = null;
		blob47Button = null;
		grid = null;
	}
}
