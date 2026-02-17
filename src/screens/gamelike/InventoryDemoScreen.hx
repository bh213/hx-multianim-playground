package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;

class InventoryDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var selectedCell:Int = -1;

	static inline var COLS = 5;
	static inline var ROWS = 4;
	static inline var CELL_SIZE = 50;
	static inline var CELL_GAP = 10;

	// Items: cell index -> item info
	var items:Map<Int, {name:String, color:Int}>;
	var cellInteractives:Array<h2d.Interactive>;

	static final ITEM_DEFS:Array<{name:String, color:Int, cell:Int}> = [
		{name: "Health Potion", color: 0xFFFF4444, cell: 0},
		{name: "Iron Sword", color: 0xFF4CAF50, cell: 2},
		{name: "Gold Ring", color: 0xFFFFEB3B, cell: 4},
		{name: "Blue Shield", color: 0xFF2C5F7C, cell: 7},
		{name: "Fire Scroll", color: 0xFFFF7F50, cell: 10},
		{name: "Silver Helm", color: 0xFFB0B0B0, cell: 13},
		{name: "Mana Crystal", color: 0xFF4A90A4, cell: 16},
		{name: "Red Cloak", color: 0xFFCC3333, cell: 19},
	];

	override public function load():Void {
		setupDemo("Inventory Grid", "5x4 inventory grid with item selection and tooltip");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/inventory.manim", false);
		demoResult = demoBuilder.buildWithParameters("inventoryDemo", []);
		addBuilderResult(demoResult);

		// Initialize items
		items = new Map();
		for (def in ITEM_DEFS) {
			items.set(def.cell, {name: def.name, color: def.color});
		}

		// Build grid cells programmatically into the grid container
		final container = demoResult.getSingleItemByName("gridContainer").object.toh2dObject();
		cellInteractives = [];

		for (row in 0...ROWS) {
			for (col in 0...COLS) {
				final cellIdx = row * COLS + col;
				final x = col * (CELL_SIZE + CELL_GAP);
				final y = row * (CELL_SIZE + CELL_GAP);

				// Cell background
				final cellBg = new h2d.Bitmap(h2d.Tile.fromColor(0xFF333333, CELL_SIZE, CELL_SIZE));
				cellBg.setPosition(x, y);
				container.addChild(cellBg);

				// Item colored square if present
				if (items.exists(cellIdx)) {
					final item = items.get(cellIdx);
					final itemBmp = new h2d.Bitmap(h2d.Tile.fromColor(item.color, 40, 40));
					itemBmp.setPosition(x + 5, y + 5);
					container.addChild(itemBmp);
				}

				// Interactive overlay
				final inter = new h2d.Interactive(CELL_SIZE, CELL_SIZE, container);
				inter.setPosition(x, y);
				final idx = cellIdx;
				inter.onClick = function(_) {
					selectCell(idx);
				};
				cellInteractives.push(inter);
			}
		}

		updateItemCount();
	}

	function selectCell(cellIndex:Int):Void {
		if (demoResult == null) return;
		selectedCell = cellIndex;

		// Position highlight on the grid container
		final col = cellIndex % COLS;
		final row = Std.int(cellIndex / COLS);
		final x = 15 + col * (CELL_SIZE + CELL_GAP);
		final y = 50 + row * (CELL_SIZE + CELL_GAP);

		final highlightObj = demoResult.getSingleItemByName("selectHighlight").object.toh2dObject();
		highlightObj.setPosition(x, y);

		// Update tooltip text
		final tooltip = demoResult.getUpdatable("tooltipText");
		if (items.exists(cellIndex)) {
			tooltip.updateText('${items.get(cellIndex).name} [Slot ${cellIndex}]');
		} else {
			tooltip.updateText('Empty [Slot ${cellIndex}]');
		}
	}

	function updateItemCount():Void {
		if (demoResult == null) return;
		var count = 0;
		for (_ in items) count++;
		demoResult.getUpdatable("itemCountText").updateText('Items: $count / 20');
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		super.onScreenEvent(event, source);
	}

	override public function onClear():Void {
		super.onClear();
		if (cellInteractives != null) {
			for (inter in cellInteractives) inter.remove();
			cellInteractives = null;
		}
		demoBuilder = null;
		demoResult = null;
		items = null;
		selectedCell = -1;
	}
}
