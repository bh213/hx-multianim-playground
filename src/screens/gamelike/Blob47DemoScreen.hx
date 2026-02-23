package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class Blob47DemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var autotileBuilder:Null<MultiAnimBuilder>;
	var buttonsBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var randomizeButton:Null<UIStandardMultiAnimButton>;
	var clearButton:Null<UIStandardMultiAnimButton>;
	var grassButton:Null<UIStandardMultiAnimButton>;
	var dirtButton:Null<UIStandardMultiAnimButton>;

	static inline var GRID_W = 40;
	static inline var GRID_H = 28;
	static inline var TILE_SIZE = 8;
	static inline var SCALE = 2;

	var grid:Array<Array<Int>>;
	var tileGroup:Null<h2d.TileGroup>;
	var mapContainer:Null<h2d.Object>;
	var mapInteractive:Null<h2d.Interactive>;
	var isPainting:Bool = false;
	var paintValue:Int = 0;

	override public function load():Void {
		setupDemo("Blob47 Autotile", "Interactive terrain painter with blob47 autotiling");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/blob47.manim", false);
		// Separate builder for autotile - buildAutotile needs clean builder state
		autotileBuilder = screenManager.buildFromResourceName("demos/gamelike/blob47.manim", false);
		buttonsBuilder = screenManager.buildFromResourceName("buttons.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "blob47Demo", [], [
			randomizeBtn => addButtonWithSingleBuilder(buttonsBuilder, "main", "Randomize"),
			clearBtn => addButtonWithSingleBuilder(buttonsBuilder, "main", "Clear"),
			grassBtn => addButtonWithSingleBuilder(buttonsBuilder, "color", null),
			dirtBtn => addButtonWithSingleBuilder(buttonsBuilder, "color", null),
		]);
		demoResult = ui.builderResults;
		randomizeButton = ui.randomizeBtn;
		clearButton = ui.clearBtn;
		grassButton = ui.grassBtn;
		dirtButton = ui.dirtBtn;
		addBuilderResult(demoResult);

		// Initialize grid to all grass
		grid = [for (_ in 0...GRID_H) [for (_ in 0...GRID_W) 1]];

		// Get map container
		mapContainer = demoResult.getSingleItemByName("mapContainer").object.toh2dObject();

		// Create interactive overlay for painting (screen-space size accounts for tile scale)
		mapInteractive = new h2d.Interactive(GRID_W * TILE_SIZE * SCALE, GRID_H * TILE_SIZE * SCALE, mapContainer);

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
			if (isPainting) {
				paintAt(e.relX, e.relY);
			}
		};

		mapInteractive.onOut = function(_) {
			isPainting = false;
		};

		rebuildAutotile();
		updateStatus();
		updateTileSelection();
	}

	function paintAt(relX:Float, relY:Float):Void {
		final gx = Std.int(relX / (TILE_SIZE * SCALE));
		final gy = Std.int(relY / (TILE_SIZE * SCALE));
		if (gx >= 0 && gx < GRID_W && gy >= 0 && gy < GRID_H) {
			if (grid[gy][gx] != paintValue) {
				grid[gy][gx] = paintValue;
				rebuildAutotile();
				updateStatus();
			}
		}
	}

	function rebuildAutotile():Void {
		if (tileGroup != null) {
			tileGroup.remove();
		}
		tileGroup = autotileBuilder.buildAutotile("blob47Grass", grid);
		tileGroup.setScale(SCALE);
		mapContainer.addChild(tileGroup);
	}

	function randomize():Void {
		for (y in 0...GRID_H) {
			for (x in 0...GRID_W) {
				grid[y][x] = Std.random(100) < 55 ? 1 : 0;
			}
		}
		rebuildAutotile();
		updateStatus();
	}

	function clearMap():Void {
		for (y in 0...GRID_H) {
			for (x in 0...GRID_W) {
				grid[y][x] = paintValue;
			}
		}
		rebuildAutotile();
		updateStatus();
	}

	function updateStatus():Void {
		if (demoResult == null) return;
		var grassCount = 0;
		for (y in 0...GRID_H)
			for (x in 0...GRID_W)
				if (grid[y][x] == 1) grassCount++;
		final total = GRID_W * GRID_H;
		demoResult.getUpdatable("statusText").updateText('Grass: $grassCount / $total tiles');
	}

	function updateTileSelection():Void {
		if (grassButton != null) grassButton.getObject().alpha = paintValue == 1 ? 1.0 : 0.4;
		if (dirtButton != null) dirtButton.getObject().alpha = paintValue == 0 ? 1.0 : 0.4;
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == randomizeButton)
					randomize();
				else if (source == clearButton) {
					clearMap();
					paintValue = 1 - paintValue;
					updateTileSelection();
				}
				else if (source == grassButton) {
					paintValue = 1;
					updateTileSelection();
				} else if (source == dirtButton) {
					paintValue = 0;
					updateTileSelection();
				}
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
		demoBuilder = null;
		autotileBuilder = null;
		buttonsBuilder = null;
		demoResult = null;
		randomizeButton = null;
		clearButton = null;
		grassButton = null;
		dirtButton = null;
		grid = null;
		mapContainer = null;
	}
}
