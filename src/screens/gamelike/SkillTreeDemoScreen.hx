package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;

class SkillTreeDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;

	static inline var ROWS = 3;
	static inline var COLS = 4;
	static inline var NODE_SIZE = 40;
	static inline var COL_GAP = 120;
	static inline var ROW_GAP = 90;

	var skillPoints:Int = 5;
	var unlocked:Array<Bool>;
	var selected:Int = -1;
	var nodeBitmaps:Array<h2d.Bitmap>;
	var nodeInteractives:Array<h2d.Interactive>;

	static final SKILL_NAMES = [
		"Power Strike", "Cleave", "Rampage", "Fury",
		"Quick Step", "Evasion", "Shadow Walk", "Assassinate",
		"Arcane Bolt", "Barrier", "Fireball", "Meteor",
	];

	static final LOCKED_COLOR = 0xFF666666;
	static final UNLOCKED_COLOR = 0xFF4CAF50;
	static final SELECTED_COLOR = 0xFFFFEB3B;

	override public function load():Void {
		setupDemo("Skill Tree", "3x4 skill tree grid with tier-based prerequisite unlocking");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/skill-tree.manim", false);
		demoResult = demoBuilder.buildWithParameters("skillTreeDemo", []);
		addBuilderResult(demoResult);

		// Initialize unlock states
		unlocked = [for (_ in 0...ROWS * COLS) false];
		nodeBitmaps = [];
		nodeInteractives = [];

		// Build skill nodes
		final container = demoResult.getSingleItemByName("nodeContainer").object.toh2dObject();

		for (row in 0...ROWS) {
			for (col in 0...COLS) {
				final x = col * COL_GAP;
				final y = row * ROW_GAP;

				final bmp = new h2d.Bitmap(h2d.Tile.fromColor(LOCKED_COLOR, NODE_SIZE, NODE_SIZE));
				bmp.setPosition(x, y);
				container.addChild(bmp);
				nodeBitmaps.push(bmp);

				// Skill name label below node
				final idx = row * COLS + col;
				final label = new h2d.Text(bh.base.FontManager.getFontByName("exo2_light_12"));
				label.text = SKILL_NAMES[idx];
				label.textColor = 0xCCCCCC;
				label.setPosition(x - 10, y + NODE_SIZE + 4);
				container.addChild(label);

				// Interactive
				final inter = new h2d.Interactive(NODE_SIZE, NODE_SIZE, container);
				inter.setPosition(x, y);
				final nodeIdx = idx;
				inter.onClick = function(_) {
					onNodeClick(nodeIdx);
				};
				nodeInteractives.push(inter);
			}
		}

		refreshDisplay();
	}

	function onNodeClick(nodeIdx:Int):Void {
		final col = nodeIdx % COLS;
		final row = Std.int(nodeIdx / COLS);

		if (unlocked[nodeIdx]) {
			// Already unlocked - just select it
			selected = nodeIdx;
			refreshDisplay();
			updateInfoText('${SKILL_NAMES[nodeIdx]} (already unlocked)');
			return;
		}

		// Check prerequisite: previous column in same row must be unlocked (or col == 0)
		if (col > 0) {
			final prereqIdx = row * COLS + (col - 1);
			if (!unlocked[prereqIdx]) {
				updateInfoText('Requires ${SKILL_NAMES[prereqIdx]} first!');
				return;
			}
		}

		// Check skill points
		if (skillPoints <= 0) {
			updateInfoText("No skill points remaining!");
			return;
		}

		// Unlock
		skillPoints--;
		unlocked[nodeIdx] = true;
		selected = nodeIdx;
		refreshDisplay();
		updateInfoText('Unlocked ${SKILL_NAMES[nodeIdx]}!');
	}

	function refreshDisplay():Void {
		for (i in 0...ROWS * COLS) {
			if (i == selected && unlocked[i]) {
				nodeBitmaps[i].tile = h2d.Tile.fromColor(SELECTED_COLOR, NODE_SIZE, NODE_SIZE);
			} else if (unlocked[i]) {
				nodeBitmaps[i].tile = h2d.Tile.fromColor(UNLOCKED_COLOR, NODE_SIZE, NODE_SIZE);
			} else {
				nodeBitmaps[i].tile = h2d.Tile.fromColor(LOCKED_COLOR, NODE_SIZE, NODE_SIZE);
			}
		}

		if (demoResult != null) {
			demoResult.getUpdatable("pointsText").updateText('Skill Points: $skillPoints');
		}
	}

	function updateInfoText(text:String):Void {
		if (demoResult != null) {
			demoResult.getUpdatable("skillInfoText").updateText(text);
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		super.onScreenEvent(event, source);
	}

	override public function onClear():Void {
		super.onClear();
		if (nodeInteractives != null) {
			for (inter in nodeInteractives) inter.remove();
			nodeInteractives = null;
		}
		demoBuilder = null;
		demoResult = null;
		unlocked = null;
		nodeBitmaps = null;
		skillPoints = 5;
		selected = -1;
	}
}
