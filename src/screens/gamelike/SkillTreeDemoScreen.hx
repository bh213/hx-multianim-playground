package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class SkillTreeDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var resetButton:Null<UIStandardMultiAnimButton>;
	var addPointButton:Null<UIStandardMultiAnimButton>;

	static inline var COLS = 4;
	static inline var NODE_COUNT = 12;
	static inline var START_POINTS = 5;

	var skillPoints:Int = START_POINTS;
	var unlocked:Array<Bool>;
	var hoveredNode:Int = -1;

	static final COSTS = [1, 2, 3, 5, 1, 2, 3, 5, 1, 2, 3, 5];

	static final SKILL_NAMES = [
		"Helm", "Plate", "Axe", "Aegis",
		"Boots", "Gloves", "Bow", "Signet",
		"Staff", "Tome", "Scroll", "Gem",
	];

	static final PATH_NAMES = ["WAR", "ROG", "MAG"];
	static final PATH_SLOT_NAMES = ["warNode", "rogNode", "magNode"];

	static final ICONS = [
		"helm", "armor", "axe", "tshield",
		"boots", "gloves", "bow", "ring",
		"staff", "book", "scroll", "gem",
	];

	override public function load():Void {
		setupDemo("Equipment Tree", "Roguelike icons with grayscale filters, tiered costs, state-driven visuals");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/skill-tree.manim", false);

		unlocked = [for (_ in 0...NODE_COUNT) false];

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "eqTreeDemo", [], [
			resetButton => addButtonWithSingleBuilder(stdBuilder, "button", "Reset"),
			addPointButton => addButtonWithSingleBuilder(stdBuilder, "button", "+1 SP"),
		]);

		demoResult = ui.builderResults;
		resetButton = ui.resetButton;
		addPointButton = ui.addPointButton;
		addBuilderResult(demoResult);
		addInteractives(demoResult);

		// Populate all node slots
		for (i in 0...NODE_COUNT) buildNodeContent(i);
		updateSkillPointsText();
	}

	function nodeSlot(idx:Int) {
		return demoResult.getSlot(PATH_SLOT_NAMES[Std.int(idx / COLS)], idx % COLS);
	}

	// Returns slot state string matching the .manim enum
	function nodeState(idx:Int):String {
		if (unlocked[idx]) return "upgraded";
		final col = idx % COLS;
		final row = Std.int(idx / COLS);
		final prevUnlocked = col == 0 || unlocked[row * COLS + (col - 1)];
		if (!prevUnlocked) return "hidden";
		return if (skillPoints >= COSTS[idx]) "upgradable" else "notEnoughPoints";
	}

	// Build icon and place into slot, set slot state
	function buildNodeContent(idx:Int):Void {
		if (demoResult == null || demoBuilder == null) return;
		final slot = nodeSlot(idx);
		slot.clear();
		final state = nodeState(idx);
		slot.setParameter("state", state);

		if (state == "hidden") return;

		final gray = state != "upgraded";
		final result = demoBuilder.buildWithParameters("eqIcon", [
			"icon" => ICONS[idx],
			"style" => if (gray) "gray" else "full",
		]);
		final obj = result.object;
		if (state == "upgradable") obj.alpha = 0.5;
		slot.setContent(obj);
	}

	function recalcStates():Void {
		if (demoResult == null) return;
		for (i in 0...NODE_COUNT) buildNodeContent(i);
		updateSkillPointsText();
	}

	function onNodeClick(nodeIdx:Int):Void {
		if (nodeIdx < 0 || nodeIdx >= NODE_COUNT) return;

		final state = nodeState(nodeIdx);
		final name = SKILL_NAMES[nodeIdx];
		final path = PATH_NAMES[Std.int(nodeIdx / COLS)];

		if (state == "upgraded") {
			updateInfoText('[$path] $name — already unlocked');
			return;
		}

		if (state == "hidden") {
			updateInfoText("??? — unlock previous tier to reveal");
			return;
		}

		if (state == "notEnoughPoints") {
			updateInfoText('[$path] $name — needs ${COSTS[nodeIdx]} SP (have $skillPoints)');
			return;
		}

		// Upgrade (state == "upgradable")
		skillPoints -= COSTS[nodeIdx];
		unlocked[nodeIdx] = true;
		recalcStates();
		updateInfoText('Unlocked $name! (-${COSTS[nodeIdx]} SP)');
	}

	function onNodeHover(nodeIdx:Int):Void {
		if (nodeIdx < 0 || nodeIdx >= NODE_COUNT) {
			clearHover();
			return;
		}

		if (hoveredNode >= 0 && hoveredNode != nodeIdx) {
			nodeSlot(hoveredNode).setParameter("hover", "off");
		}
		hoveredNode = nodeIdx;
		nodeSlot(nodeIdx).setParameter("hover", "on");

		final state = nodeState(nodeIdx);
		final path = PATH_NAMES[Std.int(nodeIdx / COLS)];
		final name = SKILL_NAMES[nodeIdx];

		final info = switch state {
			case "upgraded": '[$path] $name — unlocked';
			case "upgradable": '[$path] $name (${COSTS[nodeIdx]} SP) — click to unlock';
			case "notEnoughPoints": '[$path] $name (${COSTS[nodeIdx]} SP) — not enough SP';
			default: "??? — unlock previous tier to reveal";
		};
		updateInfoText(info);
	}

	function clearHover():Void {
		if (hoveredNode >= 0 && demoResult != null) {
			nodeSlot(hoveredNode).setParameter("hover", "off");
			hoveredNode = -1;
		}
	}

	function addSkillPoint():Void {
		skillPoints++;
		recalcStates();
		updateInfoText('Added 1 SP! Total: $skillPoints');
	}

	function resetSkills():Void {
		skillPoints = START_POINTS;
		hoveredNode = -1;
		unlocked = [for (_ in 0...NODE_COUNT) false];
		recalcStates();
		updateInfoText("Equipment tree reset!");
	}

	function updateInfoText(text:String):Void {
		if (demoResult != null) {
			demoResult.getUpdatable("skillInfoText").updateText(text);
		}
	}

	function updateSkillPointsText():Void {
		if (demoResult != null) {
			demoResult.getUpdatable("skillPointsText").updateText('Skill Points: $skillPoints');
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == resetButton) {
					resetSkills();
				} else if (source == addPointButton) {
					addSkillPoint();
				}
			case UIInteractiveEvent(UIClick, id, _):
				final nodeIdx = Std.parseInt(id);
				if (nodeIdx != null) onNodeClick(nodeIdx);
			case UIInteractiveEvent(UIEntering(_), id, _):
				final nodeIdx = Std.parseInt(id);
				if (nodeIdx != null) onNodeHover(nodeIdx);
			case UIInteractiveEvent(UILeaving, _, _):
				clearHover();
				updateInfoText("Hover over equipment to see details");
			default:
		}
		super.onScreenEvent(event, source);
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		resetButton = null;
		addPointButton = null;
		skillPoints = START_POINTS;
		hoveredNode = -1;
		unlocked = null;
	}
}
