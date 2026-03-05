package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.ui.UIMultiAnimDraggable;
import bh.ui.UIMultiAnimDraggable.DragEvent;
import bh.ui.UICardHandHelper;
import bh.ui.UICardHandTypes;
import bh.ui.UICardHandTypes.TargetingResult;
import bh.ui.UIMultiAnimGrid;
import bh.ui.UIMultiAnimGridTypes;
import bh.ui.UIMultiAnimGridTypes.GridEvent;
import bh.ui.UIMultiAnimGridTypes.CellCoord;
import bh.base.Hex.HexOrientation;
import bh.base.MacroUtils;
import bh.multianim.MultiAnimBuilder;
import h2d.col.Point;

class GridDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;

	// === Left: Rect Grid Drag-Drop ===
	var rectGrid:Null<UIMultiAnimGrid>;
	var rectDraggables:Array<UIMultiAnimDraggable> = [];

	// === Center: Hex Grid + Cards ===
	var hexGrid:Null<UIMultiAnimGrid>;
	var cardHand:Null<UICardHandHelper>;
	var nextCardId:Int = 0;
	var handCardIds:Array<String> = [];

	// === Right: Grid-to-Grid ===
	var storageGrid:Null<UIMultiAnimGrid>;
	var loadoutGrid:Null<UIMultiAnimGrid>;
	var g2gDraggables:Array<UIMultiAnimDraggable> = [];
	var dragSourceGrid:Null<UIMultiAnimGrid>;
	var dragSourceCell:Null<CellCoord>;
	var dragSourceData:Dynamic;

	// Buttons
	var resetButton:Null<UIStandardMultiAnimButton>;
	var drawButton:Null<UIStandardMultiAnimButton>;
	var addRowBtn:Null<UIStandardMultiAnimButton>;
	var remRowBtn:Null<UIStandardMultiAnimButton>;
	var addRingBtn:Null<UIStandardMultiAnimButton>;
	var remRingBtn:Null<UIStandardMultiAnimButton>;
	var addStorBtn:Null<UIStandardMultiAnimButton>;
	var remStorBtn:Null<UIStandardMultiAnimButton>;
	var addLoadBtn:Null<UIStandardMultiAnimButton>;
	var remLoadBtn:Null<UIStandardMultiAnimButton>;

	// G2G container
	var g2gContainer:Null<h2d.Object>;

	// Grid dimension tracking
	var rectCols:Int = 5;
	var rectRows:Int = 4;
	var hexRadius:Int = 2;
	var storageCols:Int = 4;
	var storageRows:Int = 2;
	var loadoutCols:Int = 3;
	var loadoutRows:Int = 2;

	// Limits
	static inline var RECT_MIN_ROWS = 1;
	static inline var RECT_MAX_ROWS = 8;
	static inline var HEX_MIN_RADIUS = 0;
	static inline var HEX_MAX_RADIUS = 4;
	static inline var G2G_MIN_ROWS = 1;
	static inline var G2G_MAX_ROWS = 5;

	// Absolute position base (from gridDemo pos: 10, 70)
	static inline var BASE_X = 10.0;
	static inline var BASE_Y = 70.0;

	// Item colors for rect grid
	static final RECT_COLORS:Array<Int> = [0xCC4422, 0x2266CC, 0x22CC44, 0xCCCC22, 0x9944CC];

	// Card definitions for hex grid
	static final CARD_DEFS:Array<{name:String, color:Int}> = [
		{name: "Fire", color: 0xCC4422},
		{name: "Ice", color: 0x2266CC},
		{name: "Nature", color: 0x22CC44},
		{name: "Light", color: 0xCCCC22},
		{name: "Shadow", color: 0x9944CC},
		{name: "Storm", color: 0x22CCCC},
	];

	// G2G item colors
	static final G2G_COLORS:Array<Int> = [0xCC6622, 0x2288CC, 0x44CC44, 0xCCAA22, 0x8844CC];

	override public function load():Void {
		setupDemo("Grid Component", "Rect drag-drop, hex + cards, grid-to-grid transfers");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/grid-demo.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "gridDemo", [], [
			resetBtn => addButtonWithSingleBuilder(demoBuilder, "smallBtn", "Reset"),
			addRowBtn => addButtonWithSingleBuilder(demoBuilder, "smallBtn", "+Row"),
			remRowBtn => addButtonWithSingleBuilder(demoBuilder, "smallBtn", "-Row"),
			drawBtn => addButtonWithSingleBuilder(demoBuilder, "smallBtn", "Draw"),
			addRingBtn => addButtonWithSingleBuilder(demoBuilder, "smallBtn", "+Ring"),
			remRingBtn => addButtonWithSingleBuilder(demoBuilder, "smallBtn", "-Ring"),
			addStorBtn => addButtonWithSingleBuilder(demoBuilder, "smallBtn", "+Stor"),
			remStorBtn => addButtonWithSingleBuilder(demoBuilder, "smallBtn", "-Stor"),
			addLoadBtn => addButtonWithSingleBuilder(demoBuilder, "smallBtn", "+Load"),
			remLoadBtn => addButtonWithSingleBuilder(demoBuilder, "smallBtn", "-Load"),
		]);
		demoResult = ui.builderResults;
		resetButton = ui.resetBtn;
		drawButton = ui.drawBtn;
		addRowBtn = ui.addRowBtn;
		remRowBtn = ui.remRowBtn;
		addRingBtn = ui.addRingBtn;
		remRingBtn = ui.remRingBtn;
		addStorBtn = ui.addStorBtn;
		remStorBtn = ui.remStorBtn;
		addLoadBtn = ui.addLoadBtn;
		remLoadBtn = ui.remLoadBtn;
		addBuilderResult(demoResult);

		setupRectGrid();
		setupHexGrid();
		setupGridToGrid();
		updateButtonStates();
	}

	// ========== Left: Rect Grid + Internal Drag ==========

	function setupRectGrid():Void {
		rectGrid = new UIMultiAnimGrid(demoBuilder, {
			gridType: Rect(52, 52, 4),
			cellBuildName: "rectCell",
			snapPathName: "snapAnim",
			returnPathName: "returnAnim",
		});
		rectGrid.addRectRegion(5, 4);

		// Pre-fill top row
		for (i in 0...5)
			rectGrid.set(i, 0, {color: RECT_COLORS[i]});

		rectGrid.onGridEvent = onRectEvent;
		rectGrid.getObject().setPosition(BASE_X, BASE_Y + 50);
		addObjectToLayer(rectGrid.getObject(), DefaultLayer);
		rebuildRectDraggables();
	}

	function rebuildRectDraggables():Void {
		for (d in rectDraggables)
			removeElement(d);
		rectDraggables = [];
		if (rectGrid == null) return;

		rectGrid.forEach((col, row, data) -> {
			if (data == null) return;
			final itemObj = buildItemBlock(data.color);
			final drag = UIMultiAnimDraggable.create(itemObj);
			drag.setReturnAnimPath(demoBuilder, "returnAnim");
			drag.setSnapAnimPath(demoBuilder, "snapAnim");
			drag.dragAlpha = 0.7;
			drag.returnToOrigin = true;
			drag.dragLayer = ModalLayer;

			final srcCol = col;
			final srcRow = row;
			final srcData = data;

			// Set callbacks BEFORE acceptDrops (grid chains onDragDrop)
			drag.onDragEvent = (event, pos, wrapper) -> {
				switch event {
					case DragStart:
						dragSourceGrid = rectGrid;
						dragSourceCell = {col: srcCol, row: srcRow};
						dragSourceData = srcData;
						// Clear source immediately so isOccupied returns false
						rectGrid.clear(srcCol, srcRow);
					case DragCancel:
						// Restore data on cancel (return to origin)
						rectGrid.set(srcCol, srcRow, srcData);
					default:
				}
			};

			// acceptDrops AFTER setting callbacks (grid chains onDragDrop internally)
			rectGrid.acceptDrops(drag, (cell, _) -> !rectGrid.isOccupied(cell.col, cell.row));

			final pos = rectGrid.cellPosition(col, row);
			rectDraggables.push(drag);
			addElementWithPos(drag, pos.x, pos.y, DefaultLayer);
		});
	}

	function onRectEvent(event:GridEvent):Void {
		switch event {
			case CellClick(cell, button):
				setRectLog('Clicked (${cell.col}, ${cell.row})');
			case CellDrop(cell, _, _, _):
				if (dragSourceGrid == rectGrid && dragSourceCell != null) {
					// Source already cleared on DragStart
					rectGrid.set(cell.col, cell.row, dragSourceData);
					setRectLog('(${dragSourceCell.col},${dragSourceCell.row}) -> (${cell.col},${cell.row})');
					dragSourceGrid = null;
					dragSourceCell = null;
					dragSourceData = null;
					rebuildRectDraggables();
				}
			default:
		}
	}

	function resetRectGrid():Void {
		if (rectGrid == null) return;
		// Remove all cells and rebuild at default size
		var toRemove:Array<CellCoord> = [];
		rectGrid.forEach((col, row, data) -> {
			if (data != null) rectGrid.clear(col, row);
			toRemove.push({col: col, row: row});
		});
		for (c in toRemove)
			rectGrid.removeCell(c.col, c.row);
		rectRows = 4;
		rectGrid.addRectRegion(rectCols, rectRows);
		for (i in 0...5)
			rectGrid.set(i, 0, {color: RECT_COLORS[i]});
		rebuildRectDraggables();
		updateButtonStates();
		setRectLog("Reset!");
	}

	function addRectRow():Void {
		if (rectGrid == null || rectRows >= RECT_MAX_ROWS) return;
		for (col in 0...rectCols)
			rectGrid.addCell(col, rectRows);
		rectRows++;
		rebuildRectDraggables();
		updateButtonStates();
		setRectLog('${rectCols}x${rectRows}');
	}

	function removeRectRow():Void {
		if (rectGrid == null || rectRows <= RECT_MIN_ROWS) return;
		rectRows--;
		for (col in 0...rectCols)
			rectGrid.removeCell(col, rectRows);
		rebuildRectDraggables();
		updateButtonStates();
		setRectLog('${rectCols}x${rectRows}');
	}

	function setRectLog(text:String):Void {
		if (demoResult != null)
			demoResult.getUpdatable("rectLog").updateText(text);
	}

	// ========== Center: Hex Grid + Cards ==========

	function setupHexGrid():Void {
		hexGrid = new UIMultiAnimGrid(demoBuilder, {
			gridType: Hex(POINTY, 30, 30),
			cellBuildName: "hexCell",
		});
		hexGrid.addHexRegion(0, 0, 2);
		hexGrid.onGridEvent = onHexEvent;
		// Center the hex grid in the center section (close to card hand for targeting)
		hexGrid.getObject().setPosition(BASE_X + 500, BASE_Y + 210);
		addObjectToLayer(hexGrid.getObject(), DefaultLayer);

		// Card hand
		cardHand = new UICardHandHelper(this, demoBuilder, {
			layoutMode: Fan,
			anchorX: BASE_X + 530,
			anchorY: BASE_Y + 340,
			cardWidth: 100.0,
			cardHeight: 140.0,
			fanRadius: 400.0,
			fanMaxAngle: 25.0,
			hoverPopDistance: 20.0,
			hoverScale: 1.1,
			targetingThresholdY: 60.0,
			drawPilePosition: new bh.base.FPoint(BASE_X + 380, BASE_Y + 340),
			discardPilePosition: new bh.base.FPoint(BASE_X + 700, BASE_Y + 340),
			drawPathName: "drawAnim",
			discardPathName: "discardAnim",
			returnPathName: "returnCardAnim",
			rearrangePathName: "rearrangeAnim",
			arrowSegmentName: "arrowSegment",
			arrowHeadName: "arrowHead",
			arrowPathName: "arrowCurve",
		});
		cardHand.onCardEvent = onCardEvent;
		// Only allow playing cards on valid targets — return to hand otherwise
		cardHand.canPlayCard = (cardId, result) -> result.match(TargetZone(_));

		// Register hex grid cells as card targets
		hexGrid.registerAsCardTarget(cardHand, (cell, cardId) -> !hexGrid.isOccupied(cell.col, cell.row));

		// Initial hand
		for (_ in 0...3)
			drawHexCard();
	}

	function drawHexCard():Void {
		if (cardHand == null) return;
		final def = CARD_DEFS[nextCardId % CARD_DEFS.length];
		final id = 'card_$nextCardId';
		nextCardId++;
		handCardIds.push(id);
		cardHand.drawCard({
			id: id,
			buildName: "gridCard",
			params: ["cardName" => (def.name : Dynamic), "cardColor" => (def.color : Dynamic)],
			canTarget: true,
		});
	}

	function onCardEvent(event:CardHandEvent):Void {
		switch event {
			case CardPlayed(cardId, TargetZone(targetId)):
				handCardIds.remove(cardId);
				final cardIdx = Std.parseInt(cardId.split("_").pop());
				if (cardIdx != null) {
					final def = CARD_DEFS[cardIdx % CARD_DEFS.length];
					// targetId: "gridN_col_row"
					final parts = targetId.split("_");
					if (parts.length >= 3) {
						final col = Std.parseInt(parts[parts.length - 2]);
						final row = Std.parseInt(parts[parts.length - 1]);
						if (col != null && row != null && hexGrid != null) {
							hexGrid.set(col, row, {color: def.color},
								["occupied" => (true : Dynamic), "cellColor" => (def.color : Dynamic)]);
							setHexLog('${def.name} -> (${col},${row})');
						}
					}
				}
			case DrawAnimComplete(cardId):
				setHexLog('Drew $cardId');
			default:
		}
	}

	function onHexEvent(event:GridEvent):Void {
		switch event {
			case CellClick(cell, _):
				if (hexGrid != null && hexGrid.isOccupied(cell.col, cell.row)) {
					hexGrid.clear(cell.col, cell.row);
					hexGrid.getCellResult(cell.col, cell.row).setParameter("occupied", false);
					setHexLog('Cleared (${cell.col},${cell.row})');
				}
			default:
		}
	}

	function resetHexGrid():Void {
		if (hexGrid == null || cardHand == null) return;
		// Remove all cells and rebuild at default radius
		var toRemove:Array<CellCoord> = [];
		hexGrid.forEach((col, row, data) -> {
			if (data != null) {
				hexGrid.clear(col, row);
				hexGrid.getCellResult(col, row).setParameter("occupied", false);
			}
			toRemove.push({col: col, row: row});
		});
		for (c in toRemove)
			hexGrid.removeCell(c.col, c.row);
		hexRadius = 2;
		hexGrid.addHexRegion(0, 0, hexRadius);
		cardHand.setHand([]);
		handCardIds = [];
		nextCardId = 0;
		for (_ in 0...3) drawHexCard();
		updateButtonStates();
		setHexLog("Reset!");
	}

	function addHexRing():Void {
		if (hexGrid == null || hexRadius >= HEX_MAX_RADIUS) return;
		hexRadius++;
		// addHexRegion is additive and auto-refreshes card targets
		hexGrid.addHexRegion(0, 0, hexRadius);
		updateButtonStates();
		setHexLog('radius ${hexRadius}');
	}

	function removeHexRing():Void {
		if (hexGrid == null || hexRadius <= HEX_MIN_RADIUS) return;
		// Remove cells on the outer ring (distance == hexRadius from center)
		var toRemove:Array<CellCoord> = [];
		hexGrid.forEach((col, row, _) -> {
			if (hexGrid.distance(0, 0, col, row) == hexRadius)
				toRemove.push({col: col, row: row});
		});
		for (c in toRemove) {
			if (hexGrid.isOccupied(c.col, c.row)) {
				hexGrid.clear(c.col, c.row);
				hexGrid.getCellResult(c.col, c.row).setParameter("occupied", false);
			}
			// removeCell auto-refreshes card targets
			hexGrid.removeCell(c.col, c.row);
		}
		hexRadius--;
		updateButtonStates();
		setHexLog('radius ${hexRadius}');
	}

	function setHexLog(text:String):Void {
		if (demoResult != null)
			demoResult.getUpdatable("hexLog").updateText(text);
	}

	// ========== Right: Grid-to-Grid ==========

	function setupGridToGrid():Void {
		// Container for both grids — manually repositioned on row changes
		g2gContainer = new h2d.Object();
		g2gContainer.setPosition(BASE_X + 770, BASE_Y + 56);
		addObjectToLayer(g2gContainer, DefaultLayer);

		// Storage grid at top of container
		storageGrid = new UIMultiAnimGrid(demoBuilder, {
			gridType: Rect(52, 52, 4),
			cellBuildName: "rectCell",
			snapPathName: "snapAnim",
			returnPathName: "returnAnim",
		});
		storageGrid.addRectRegion(storageCols, storageRows);
		for (i in 0...5) {
			final col = i % storageCols;
			final row = Std.int(i / storageCols);
			storageGrid.set(col, row, {color: G2G_COLORS[i]});
		}
		storageGrid.onGridEvent = (e) -> onG2GEvent(storageGrid, e);
		g2gContainer.addChild(storageGrid.getObject());

		// Loadout grid below storage
		loadoutGrid = new UIMultiAnimGrid(demoBuilder, {
			gridType: Rect(52, 52, 4),
			cellBuildName: "rectCell",
			snapPathName: "snapAnim",
			returnPathName: "returnAnim",
		});
		loadoutGrid.addRectRegion(loadoutCols, loadoutRows);
		loadoutGrid.onGridEvent = (e) -> onG2GEvent(loadoutGrid, e);
		g2gContainer.addChild(loadoutGrid.getObject());

		repositionG2GLoadout();
		rebuildG2GDraggables();
		updateG2GCounts();
	}

	function repositionG2GLoadout():Void {
		if (loadoutGrid == null) return;
		// Storage height: rows * (cellSize + gap) - gap
		final storageH = storageRows * (52 + 4) - 4;
		loadoutGrid.getObject().y = storageH + 20;
	}

	function rebuildG2GDraggables():Void {
		for (d in g2gDraggables)
			removeElement(d);
		g2gDraggables = [];
		if (storageGrid == null || loadoutGrid == null) return;

		setupG2GDragsForGrid(storageGrid);
		setupG2GDragsForGrid(loadoutGrid);
	}

	function setupG2GDragsForGrid(grid:UIMultiAnimGrid):Void {
		grid.forEach((col, row, data) -> {
			if (data == null) return;
			final itemObj = buildItemBlock(data.color);
			final drag = UIMultiAnimDraggable.create(itemObj);
			drag.setReturnAnimPath(demoBuilder, "returnAnim");
			drag.setSnapAnimPath(demoBuilder, "snapAnim");
			drag.dragAlpha = 0.7;
			drag.returnToOrigin = true;
			drag.dragLayer = ModalLayer;

			final srcGrid = grid;
			final srcCol = col;
			final srcRow = row;

			// Set callbacks BEFORE acceptDrops (grid chains onDragDrop internally)
			drag.onDragEvent = (event, pos, wrapper) -> {
				switch event {
					case DragStart:
						dragSourceGrid = srcGrid;
						dragSourceCell = {col: srcCol, row: srcRow};
						dragSourceData = data;
						srcGrid.clear(srcCol, srcRow);
					case DragCancel:
						srcGrid.set(srcCol, srcRow, data);
					default:
				}
			};

			// Accept on both grids (empty cells only)
			storageGrid.acceptDrops(drag, (cell, _) -> !storageGrid.isOccupied(cell.col, cell.row));
			loadoutGrid.acceptDrops(drag, (cell, _) -> !loadoutGrid.isOccupied(cell.col, cell.row));

			final pos = grid.cellPosition(col, row);
			g2gDraggables.push(drag);
			addElementWithPos(drag, pos.x, pos.y, DefaultLayer);
		});
	}

	function onG2GEvent(targetGrid:UIMultiAnimGrid, event:GridEvent):Void {
		switch event {
			case CellDrop(cell, _, _, _):
				if (dragSourceGrid != null && dragSourceCell != null && dragSourceData != null) {
					// Source already cleared on DragStart
					targetGrid.set(cell.col, cell.row, dragSourceData);

					final srcName = if (dragSourceGrid == storageGrid) "Stor" else "Load";
					final tgtName = if (targetGrid == storageGrid) "Stor" else "Load";
					setG2GLog('$srcName -> $tgtName (${cell.col},${cell.row})');

					dragSourceGrid = null;
					dragSourceCell = null;
					dragSourceData = null;
					rebuildG2GDraggables();
					updateG2GCounts();
				}
			case CellClick(cell, _):
				final name = if (targetGrid == storageGrid) "Storage" else "Loadout";
				setG2GLog('$name (${cell.col},${cell.row})');
			default:
		}
	}

	function resetG2G():Void {
		if (storageGrid == null || loadoutGrid == null) return;
		// Remove all extra cells beyond defaults
		removeAllG2GCells(storageGrid, storageCols, storageRows);
		removeAllG2GCells(loadoutGrid, loadoutCols, loadoutRows);
		storageRows = 2;
		loadoutRows = 2;

		storageGrid.addRectRegion(storageCols, storageRows);
		for (i in 0...5) {
			final col = i % storageCols;
			final row = Std.int(i / storageCols);
			storageGrid.set(col, row, {color: G2G_COLORS[i]});
		}

		loadoutGrid.addRectRegion(loadoutCols, loadoutRows);

		repositionG2GLoadout();
		rebuildG2GDraggables();
		updateG2GCounts();
		updateButtonStates();
		setG2GLog("Reset!");
	}

	function removeAllG2GCells(grid:Null<UIMultiAnimGrid>, cols:Int, rows:Int):Void {
		if (grid == null) return;
		var toRemove:Array<CellCoord> = [];
		grid.forEach((col, row, data) -> {
			if (data != null) grid.clear(col, row);
			toRemove.push({col: col, row: row});
		});
		for (c in toRemove)
			grid.removeCell(c.col, c.row);
	}

	function addG2GRow(grid:Null<UIMultiAnimGrid>, cols:Int):Void {
		if (grid == null) return;
		// Find the current max row
		var maxRow = -1;
		grid.forEach((_, row, _) -> { if (row > maxRow) maxRow = row; });
		final newRow = maxRow + 1;
		for (col in 0...cols)
			grid.addCell(col, newRow);
	}

	function removeG2GRow(grid:Null<UIMultiAnimGrid>, cols:Int, rows:Int):Void {
		if (grid == null || rows <= 1) return;
		final lastRow = rows - 1;
		for (col in 0...cols) {
			if (grid.isOccupied(col, lastRow))
				grid.clear(col, lastRow);
			grid.removeCell(col, lastRow);
		}
	}

	function updateG2GCounts():Void {
		if (demoResult == null) return;
		var sc = 0;
		var lc = 0;
		if (storageGrid != null)
			storageGrid.forEach((_, _, data) -> { if (data != null) sc++; });
		if (loadoutGrid != null)
			loadoutGrid.forEach((_, _, data) -> { if (data != null) lc++; });
		demoResult.getUpdatable("storageCount").updateText('Storage: $sc');
		demoResult.getUpdatable("loadoutCount").updateText('Loadout: $lc');
	}

	function setG2GLog(text:String):Void {
		if (demoResult != null)
			demoResult.getUpdatable("g2gLog").updateText(text);
	}

	// ========== Button State ==========

	function updateButtonStates():Void {
		if (addRowBtn != null) addRowBtn.disabled = rectRows >= RECT_MAX_ROWS;
		if (remRowBtn != null) remRowBtn.disabled = rectRows <= RECT_MIN_ROWS;
		if (addRingBtn != null) addRingBtn.disabled = hexRadius >= HEX_MAX_RADIUS;
		if (remRingBtn != null) remRingBtn.disabled = hexRadius <= HEX_MIN_RADIUS;
		if (addStorBtn != null) addStorBtn.disabled = storageRows >= G2G_MAX_ROWS;
		if (remStorBtn != null) remStorBtn.disabled = storageRows <= G2G_MIN_ROWS;
		if (addLoadBtn != null) addLoadBtn.disabled = loadoutRows >= G2G_MAX_ROWS;
		if (remLoadBtn != null) remLoadBtn.disabled = loadoutRows <= G2G_MIN_ROWS;
	}

	// ========== Shared Helpers ==========

	function buildItemBlock(color:Int):h2d.Object {
		final parent = new h2d.Object();
		// 4px inset within 52×52 cell
		final tile = h2d.Tile.fromColor(color, 44, 44);
		final bmp = new h2d.Bitmap(tile, parent);
		bmp.x = 4;
		bmp.y = 4;
		return parent;
	}

	// ========== Events ==========

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		if (cardHand != null && cardHand.handleScreenEvent(event))
			return;

		switch event {
			case UIClick:
				if (source == resetButton) {
					resetRectGrid();
					resetHexGrid();
					resetG2G();
				} else if (source == drawButton) {
					drawHexCard();
				} else if (source == addRowBtn) {
					addRectRow();
				} else if (source == remRowBtn) {
					removeRectRow();
				} else if (source == addRingBtn) {
					addHexRing();
				} else if (source == remRingBtn) {
					removeHexRing();
				} else if (source == addStorBtn) {
					if (storageRows < G2G_MAX_ROWS) {
						addG2GRow(storageGrid, storageCols);
						storageRows++;
						repositionG2GLoadout();
						rebuildG2GDraggables();
						updateG2GCounts();
						updateButtonStates();
						setG2GLog('Stor ${storageCols}x${storageRows}');
					}
				} else if (source == remStorBtn) {
					if (storageRows > G2G_MIN_ROWS) {
						removeG2GRow(storageGrid, storageCols, storageRows);
						storageRows--;
						repositionG2GLoadout();
						rebuildG2GDraggables();
						updateG2GCounts();
						updateButtonStates();
						setG2GLog('Stor ${storageCols}x${storageRows}');
					}
				} else if (source == addLoadBtn) {
					if (loadoutRows < G2G_MAX_ROWS) {
						addG2GRow(loadoutGrid, loadoutCols);
						loadoutRows++;
						rebuildG2GDraggables();
						updateG2GCounts();
						updateButtonStates();
						setG2GLog('Load ${loadoutCols}x${loadoutRows}');
					}
				} else if (source == remLoadBtn) {
					if (loadoutRows > G2G_MIN_ROWS) {
						removeG2GRow(loadoutGrid, loadoutCols, loadoutRows);
						loadoutRows--;
						rebuildG2GDraggables();
						updateG2GCounts();
						updateButtonStates();
						setG2GLog('Load ${loadoutCols}x${loadoutRows}');
					}
				}
			default:
		}
		super.onScreenEvent(event, source);
	}

	override public function onMouseMove(pos:Point):Bool {
		// Card hand consumes mouse during drag/targeting — skip grid hover
		if (cardHand != null && cardHand.onMouseMove(pos.x, pos.y))
			return false;
		// cellAtPoint uses globalToLocal, so pass scene coordinates directly
		if (rectGrid != null)
			rectGrid.onMouseMove(pos.x, pos.y);
		if (hexGrid != null)
			hexGrid.onMouseMove(pos.x, pos.y);
		if (storageGrid != null)
			storageGrid.onMouseMove(pos.x, pos.y);
		if (loadoutGrid != null)
			loadoutGrid.onMouseMove(pos.x, pos.y);
		return super.onMouseMove(pos);
	}

	override public function onMouseClick(pos:Point, button:Int, release:Bool):Bool {
		// Card hand consumes release during drag — skip grid clicks
		if (release && cardHand != null && cardHand.onMouseRelease(pos.x, pos.y))
			return false;
		if (release) {
			if (rectGrid != null)
				rectGrid.onMouseClick(pos.x, pos.y, button);
			if (hexGrid != null)
				hexGrid.onMouseClick(pos.x, pos.y, button);
			if (storageGrid != null)
				storageGrid.onMouseClick(pos.x, pos.y, button);
			if (loadoutGrid != null)
				loadoutGrid.onMouseClick(pos.x, pos.y, button);
		}
		return super.onMouseClick(pos, button, release);
	}

	override public function update(dt:Float):Void {
		super.update(dt);
		if (cardHand != null) cardHand.update(dt);
	}

	// ========== Cleanup ==========

	override public function onClear():Void {
		super.onClear();
		if (rectGrid != null) { rectGrid.dispose(); rectGrid = null; }
		if (hexGrid != null) { hexGrid.dispose(); hexGrid = null; }
		if (cardHand != null) { cardHand.dispose(); cardHand = null; }
		if (storageGrid != null) { storageGrid.dispose(); storageGrid = null; }
		if (loadoutGrid != null) { loadoutGrid.dispose(); loadoutGrid = null; }
		rectDraggables = [];
		g2gDraggables = [];
		handCardIds = [];
		demoBuilder = null;
		demoResult = null;
		if (g2gContainer != null) { g2gContainer.remove(); g2gContainer = null; }
		resetButton = null;
		drawButton = null;
		addRowBtn = null;
		remRowBtn = null;
		addRingBtn = null;
		remRingBtn = null;
		addStorBtn = null;
		remStorBtn = null;
		addLoadBtn = null;
		remLoadBtn = null;
		dragSourceGrid = null;
		dragSourceCell = null;
		dragSourceData = null;
		nextCardId = 0;
		rectCols = 5;
		rectRows = 4;
		hexRadius = 2;
		storageCols = 4;
		storageRows = 2;
		loadoutCols = 3;
		loadoutRows = 2;
	}
}
