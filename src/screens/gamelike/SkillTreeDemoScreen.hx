package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class SkillTreeDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var resetButton:Null<UIStandardMultiAnimButton>;

	static inline var COLS = 4;
	static inline var ROWS = 3;
	static inline var NODE_COUNT = 12;

	var skillPoints:Int = 5;
	var unlocked:Array<Bool>;
	var selected:Int = -1;

	// Node positions relative to the programmable origin (must match .manim)
	static final NODE_X = [75, 195, 315, 435, 75, 195, 315, 435, 75, 195, 315, 435];
	static final NODE_Y = [70, 70, 70, 70, 155, 155, 155, 155, 240, 240, 240, 240];

	static final SKILL_NAMES = [
		"Power", "Cleave", "Fury", "Titan",
		"Agility", "Dodge", "Swift", "Shadow",
		"Focus", "Arcane", "Mystic", "Cosmic",
	];

	override public function load():Void {
		setupDemo("Skill Tree", "Dynamic refs with incremental updates, interactives for hover/click");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/skill-tree.manim", false);

		unlocked = [true, false, false, false, true, false, false, false, true, false, false, false];

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "skillTreeDemo", [
			"u0" => 1, "u1" => 0, "u2" => 0, "u3" => 0,
			"u4" => 1, "u5" => 0, "u6" => 0, "u7" => 0,
			"u8" => 1, "u9" => 0, "u10" => 0, "u11" => 0,
			"pts" => skillPoints,
		], [
			resetButton => addButtonWithSingleBuilder(stdBuilder, "button", "Reset"),
		], true);

		demoResult = ui.builderResults;
		resetButton = ui.resetButton;
		addBuilderResult(demoResult);
		addInteractives(demoResult);
	}

	function isUnlockable(nodeIdx:Int):Bool {
		if (unlocked[nodeIdx]) return false;
		if (skillPoints <= 0) return false;
		final col = nodeIdx % COLS;
		final row = Std.int(nodeIdx / COLS);
		return col == 0 || unlocked[row * COLS + (col - 1)];
	}

	function onNodeClick(nodeIdx:Int):Void {
		if (nodeIdx < 0 || nodeIdx >= NODE_COUNT) return;

		final col = nodeIdx % COLS;
		final row = Std.int(nodeIdx / COLS);

		if (unlocked[nodeIdx]) {
			selected = nodeIdx;
			updateSelectHighlight();
			updateInfoText('${SKILL_NAMES[nodeIdx]} — already unlocked');
			return;
		}

		if (col > 0 && !unlocked[row * COLS + (col - 1)]) {
			updateInfoText('Requires ${SKILL_NAMES[row * COLS + (col - 1)]} first!');
			return;
		}

		if (skillPoints <= 0) {
			updateInfoText("No skill points remaining!");
			return;
		}

		// Unlock via incremental parameter update
		skillPoints--;
		unlocked[nodeIdx] = true;
		selected = nodeIdx;

		demoResult.setParameter('u$nodeIdx', 1);
		demoResult.setParameter("pts", skillPoints);

		updateSelectHighlight();
		updateInfoText('Unlocked ${SKILL_NAMES[nodeIdx]}!');
	}

	function onNodeHover(nodeIdx:Int):Void {
		if (nodeIdx < 0 || nodeIdx >= NODE_COUNT) {
			hideHoverHighlight();
			return;
		}

		// Highlight unlockable nodes
		if (isUnlockable(nodeIdx)) {
			final obj = demoResult.getSingleItemByName("hoverHighlight").object.toh2dObject();
			obj.setPosition(NODE_X[nodeIdx] - 2, NODE_Y[nodeIdx] - 2);
			obj.alpha = 1.0;
		} else {
			hideHoverHighlight();
		}

		final suffix = if (unlocked[nodeIdx]) " (unlocked)"
			else if (isUnlockable(nodeIdx)) " — click to unlock"
			else " (locked)";
		updateInfoText(SKILL_NAMES[nodeIdx] + suffix);
	}

	function hideHoverHighlight():Void {
		if (demoResult == null) return;
		final obj = demoResult.getSingleItemByName("hoverHighlight").object.toh2dObject();
		obj.alpha = 0.0;
	}

	function updateSelectHighlight():Void {
		if (demoResult == null) return;
		final obj = demoResult.getSingleItemByName("selectHighlight").object.toh2dObject();
		if (selected >= 0 && selected < NODE_COUNT) {
			obj.setPosition(NODE_X[selected] - 2, NODE_Y[selected] - 2);
			obj.alpha = 1.0;
		} else {
			obj.alpha = 0.0;
		}
	}

	function resetSkills():Void {
		skillPoints = 5;
		selected = -1;
		unlocked = [true, false, false, false, true, false, false, false, true, false, false, false];

		for (i in 0...NODE_COUNT) {
			demoResult.setParameter('u$i', unlocked[i] ? 1 : 0);
		}
		demoResult.setParameter("pts", skillPoints);

		// Hide highlights
		final selObj = demoResult.getSingleItemByName("selectHighlight").object.toh2dObject();
		selObj.alpha = 0.0;
		hideHoverHighlight();
		updateInfoText("Skills reset!");
	}

	function updateInfoText(text:String):Void {
		if (demoResult != null) {
			demoResult.getUpdatable("skillInfoText").updateText(text);
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == resetButton) {
					resetSkills();
				} else if (Std.isOfType(source, UIInteractiveWrapper)) {
					final wrapper:UIInteractiveWrapper = cast source;
					final nodeIdx = Std.parseInt(wrapper.id);
					if (nodeIdx != null) onNodeClick(nodeIdx);
				}
			case UIEntering:
				if (Std.isOfType(source, UIInteractiveWrapper)) {
					final wrapper:UIInteractiveWrapper = cast source;
					final nodeIdx = Std.parseInt(wrapper.id);
					if (nodeIdx != null) onNodeHover(nodeIdx);
				}
			case UILeaving:
				hideHoverHighlight();
				updateInfoText("Hover over a skill to see details");
			default:
		}
		super.onScreenEvent(event, source);
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		resetButton = null;
		skillPoints = 5;
		selected = -1;
		unlocked = null;
	}
}
