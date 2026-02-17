package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;

class MinimapDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;

	static inline var GRID_SIZE = 6;
	static inline var ROOM_SIZE = 48;
	static inline var ROOM_GAP = 4;

	var revealed:Array<Bool>;
	var currentRoom:Int = 0;
	var roomBitmaps:Array<h2d.Bitmap>;
	var roomInteractives:Array<h2d.Interactive>;
	var bossRoom:Int;

	// Room types: 0=normal, 1=treasure, 2=trap, 3=boss
	var roomTypes:Array<Int>;

	static final ROOM_NAMES = ["Empty Room", "Treasure Room", "Trap Room", "Boss Room"];
	static final FOG_COLOR = 0xFF444444;
	static final EXPLORED_COLOR = 0xFF4CAF50;
	static final CURRENT_COLOR = 0xFFFFEB3B;
	static final BOSS_COLOR = 0xFFFF4444;
	static final TREASURE_COLOR = 0xFF4A90A4;
	static final TRAP_COLOR = 0xFFFF7F50;

	override public function load():Void {
		setupDemo("Minimap", "6x6 dungeon grid with fog of war and room exploration");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/minimap.manim", false);
		demoResult = demoBuilder.buildWithParameters("minimapDemo", []);
		addBuilderResult(demoResult);

		// Initialize rooms
		final totalRooms = GRID_SIZE * GRID_SIZE;
		revealed = [for (_ in 0...totalRooms) false];
		roomTypes = [for (_ in 0...totalRooms) 0];

		// Place boss room at far corner
		bossRoom = totalRooms - 1;
		roomTypes[bossRoom] = 3;

		// Scatter some treasure and trap rooms
		roomTypes[5] = 1;
		roomTypes[10] = 2;
		roomTypes[14] = 1;
		roomTypes[21] = 2;
		roomTypes[28] = 1;
		roomTypes[33] = 2;

		// Reveal starting room
		revealed[0] = true;
		currentRoom = 0;

		// Build grid
		final container = demoResult.getSingleItemByName("gridContainer").object.toh2dObject();
		roomBitmaps = [];
		roomInteractives = [];

		for (i in 0...totalRooms) {
			final col = i % GRID_SIZE;
			final row = Std.int(i / GRID_SIZE);
			final x = col * (ROOM_SIZE + ROOM_GAP);
			final y = row * (ROOM_SIZE + ROOM_GAP);

			final bmp = new h2d.Bitmap(h2d.Tile.fromColor(FOG_COLOR, ROOM_SIZE, ROOM_SIZE));
			bmp.setPosition(x, y);
			container.addChild(bmp);
			roomBitmaps.push(bmp);

			final inter = new h2d.Interactive(ROOM_SIZE, ROOM_SIZE, container);
			inter.setPosition(x, y);
			final idx = i;
			inter.onClick = function(_) {
				onRoomClick(idx);
			};
			roomInteractives.push(inter);
		}

		refreshMap();
		updateInfoTexts();
	}

	function onRoomClick(roomIdx:Int):Void {
		if (revealed[roomIdx]) {
			// Move to this room if already revealed
			currentRoom = roomIdx;
			refreshMap();
			updateInfoTexts();
			return;
		}

		// Check adjacency to current room
		final curCol = currentRoom % GRID_SIZE;
		final curRow = Std.int(currentRoom / GRID_SIZE);
		final targetCol = roomIdx % GRID_SIZE;
		final targetRow = Std.int(roomIdx / GRID_SIZE);

		final dx = Math.abs(targetCol - curCol);
		final dy = Math.abs(targetRow - curRow);

		// Must be adjacent (not diagonal)
		if ((dx == 1 && dy == 0) || (dx == 0 && dy == 1)) {
			revealed[roomIdx] = true;
			currentRoom = roomIdx;
			refreshMap();
			updateInfoTexts();
		}
	}

	function refreshMap():Void {
		final totalRooms = GRID_SIZE * GRID_SIZE;
		for (i in 0...totalRooms) {
			if (i == currentRoom) {
				roomBitmaps[i].tile = h2d.Tile.fromColor(CURRENT_COLOR, ROOM_SIZE, ROOM_SIZE);
			} else if (revealed[i]) {
				final color = switch roomTypes[i] {
					case 1: TREASURE_COLOR;
					case 2: TRAP_COLOR;
					case 3: BOSS_COLOR;
					default: EXPLORED_COLOR;
				};
				roomBitmaps[i].tile = h2d.Tile.fromColor(color, ROOM_SIZE, ROOM_SIZE);
			} else {
				roomBitmaps[i].tile = h2d.Tile.fromColor(FOG_COLOR, ROOM_SIZE, ROOM_SIZE);
			}
		}
	}

	function updateInfoTexts():Void {
		if (demoResult == null) return;
		var exploredCount = 0;
		for (r in revealed) if (r) exploredCount++;
		final total = GRID_SIZE * GRID_SIZE;
		demoResult.getUpdatable("exploredText").updateText('Explored: $exploredCount / $total');

		final col = currentRoom % GRID_SIZE;
		final row = Std.int(currentRoom / GRID_SIZE);
		final typeName = ROOM_NAMES[roomTypes[currentRoom]];
		demoResult.getUpdatable("roomInfoText").updateText('Room ($col,$row) - $typeName');
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		super.onScreenEvent(event, source);
	}

	override public function onClear():Void {
		super.onClear();
		if (roomInteractives != null) {
			for (inter in roomInteractives) inter.remove();
			roomInteractives = null;
		}
		demoBuilder = null;
		demoResult = null;
		revealed = null;
		roomBitmaps = null;
		roomTypes = null;
	}
}
