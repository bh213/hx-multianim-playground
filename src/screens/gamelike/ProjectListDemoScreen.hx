package screens.gamelike;

import bh.base.MacroUtils;
import bh.ui.UIElement;
import bh.ui.UIMultiAnimScrollableList;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;

class ProjectListDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var scrollableList:Null<UIMultiAnimScrollableList>;
	var startBtn:Null<UIStandardMultiAnimButton>;
	var completeBtn:Null<UIStandardMultiAnimButton>;
	var resetBtn:Null<UIStandardMultiAnimButton>;
	var scrollToBtn:Null<UIStandardMultiAnimButton>;

	// Mutable status tracking (PROJECT_DEFS stays immutable)
	var projectStatuses:Array<String>;

	static final PROJECT_DEFS:Array<{name:String, desc:String, cost:String, duration:String, effect:String, initialStatus:String}> = [
		{name: "Iron Mine", desc: "Extract iron ore from deposits", cost: "500g", duration: "2 yr", effect: "+10 iron/turn", initialStatus: "normal"},
		{name: "Trade Route", desc: "Establish trade with neighbors", cost: "800g", duration: "3 yr", effect: "+5 gold/turn", initialStatus: "normal"},
		{name: "Stone Walls", desc: "Fortify city perimeter", cost: "1200g", duration: "4 yr", effect: "+20 defense", initialStatus: "active"},
		{name: "Grain Storage", desc: "Build granaries for surplus", cost: "300g", duration: "1 yr", effect: "+8 food cap", initialStatus: "completed"},
		{name: "Barracks", desc: "Train military units", cost: "900g", duration: "3 yr", effect: "+2 units/turn", initialStatus: "normal"},
		{name: "Marketplace", desc: "Central hub for commerce", cost: "600g", duration: "2 yr", effect: "+3 trade slots", initialStatus: "normal"},
		{name: "Aqueduct", desc: "Water supply infrastructure", cost: "1500g", duration: "5 yr", effect: "+15 health", initialStatus: "disabled"},
		{name: "Library", desc: "Repository of knowledge", cost: "700g", duration: "2 yr", effect: "+5 research/turn", initialStatus: "normal"},
		{name: "Harbor", desc: "Access to sea trade routes", cost: "2000g", duration: "6 yr", effect: "+10 gold/turn", initialStatus: "active"},
		{name: "Cathedral", desc: "Spiritual center of the city", cost: "3000g", duration: "8 yr", effect: "+25 morale", initialStatus: "normal"},
	];

	override public function load():Void {
		setupDemo("Project List", "Scrollable list with custom items, base states, and dynamic updates");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/project-list.manim", false);
		projectStatuses = [for (def in PROJECT_DEFS) def.initialStatus];

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "projectListDemo", [], [
			scrollableList => addScrollableList(
				stdBuilder.createElementBuilder("list-panel"),
				demoBuilder.createElementBuilder("project-list-item"),
				stdBuilder.createElementBuilder("scrollbar"),
				"scrollbar", buildProjectItems(), 0, 280, 360
			),
			startBtn => addButtonWithSingleBuilder(stdBuilder, "button", "Start"),
			completeBtn => addButtonWithSingleBuilder(stdBuilder, "button", "Complete"),
			resetBtn => addButtonWithSingleBuilder(stdBuilder, "button", "Reset All"),
			scrollToBtn => addButtonWithSingleBuilder(stdBuilder, "button", "Scroll #8"),
		]);

		scrollableList = ui.scrollableList;
		startBtn = ui.startBtn;
		completeBtn = ui.completeBtn;
		resetBtn = ui.resetBtn;
		scrollToBtn = ui.scrollToBtn;
		demoResult = ui.builderResults;
		addBuilderResult(demoResult);

		updateDetailPanel(0);
		updateButtons(0);
	}

	function buildProjectItems():Array<UIElementListItem> {
		return [
			for (i in 0...PROJECT_DEFS.length) {
				final def = PROJECT_DEFS[i];
				final status = projectStatuses[i];
				({
					name: def.name,
					disabled: status == "disabled",
					baseStatus: status,
					params: [
						"description" => (def.desc : Dynamic),
						"cost" => (def.cost : Dynamic),
						"duration" => (def.duration : Dynamic),
						"effect" => (def.effect : Dynamic),
						"baseState" => (status : Dynamic),
						"showEffect" => ((status == "active" || status == "completed") ? "true" : "false" : Dynamic),
						"showDone" => ((status == "completed") ? "true" : "false" : Dynamic),
					],
				} : UIElementListItem);
			}
		];
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIChangeItem(index, _):
				if (source == scrollableList) {
					updateDetailPanel(index);
					updateButtons(index);
				}
			case UIDoubleClickItem(index, _):
				if (source == scrollableList) {
					final status = projectStatuses[index];
					if (status == "normal")
						startSelectedProject();
					else if (status == "active")
						completeSelectedProject();
				}
			case UIClick:
				if (source == startBtn)
					startSelectedProject();
				else if (source == completeBtn)
					completeSelectedProject();
				else if (source == resetBtn)
					resetAllProjects();
				else if (source == scrollToBtn) {
					if (scrollableList != null) {
						scrollableList.scrollToAndSelect(7);
						updateDetailPanel(7);
						updateButtons(7);
						updateLog("Scrolled to project #8 (Library)");
					}
				}
			default:
		}
		super.onScreenEvent(event, source);
	}

	function refreshList(selectedIdx:Int):Void {
		if (scrollableList == null) return;
		scrollableList.setItems(buildProjectItems(), selectedIdx, true);
	}

	function startSelectedProject():Void {
		if (scrollableList == null) return;
		final idx = scrollableList.getSelectedIndex();
		if (idx < 0 || idx >= PROJECT_DEFS.length) return;
		final status = projectStatuses[idx];
		if (status != "normal") {
			updateLog('Cannot start: ${PROJECT_DEFS[idx].name} is $status');
			return;
		}
		projectStatuses[idx] = "active";
		refreshList(idx);
		updateDetailPanel(idx);
		updateButtons(idx);
		updateLog('Started: ${PROJECT_DEFS[idx].name}');
	}

	function completeSelectedProject():Void {
		if (scrollableList == null) return;
		final idx = scrollableList.getSelectedIndex();
		if (idx < 0 || idx >= PROJECT_DEFS.length) return;
		final status = projectStatuses[idx];
		if (status != "active") {
			updateLog('Cannot complete: ${PROJECT_DEFS[idx].name} is $status');
			return;
		}
		projectStatuses[idx] = "completed";
		refreshList(idx);
		updateDetailPanel(idx);
		updateButtons(idx);
		updateLog('Completed: ${PROJECT_DEFS[idx].name}');
	}

	function resetAllProjects():Void {
		if (scrollableList == null) return;
		projectStatuses = [for (def in PROJECT_DEFS) def.initialStatus];
		refreshList(0);
		updateDetailPanel(0);
		updateButtons(0);
		updateLog("All projects reset to initial state");
	}

	function updateButtons(index:Int):Void {
		if (index < 0 || index >= PROJECT_DEFS.length) return;
		final status = projectStatuses[index];
		if (startBtn != null) startBtn.disabled = status != "normal";
		if (completeBtn != null) completeBtn.disabled = status != "active";
	}

	function updateDetailPanel(index:Int):Void {
		if (demoResult == null) return;
		if (index < 0 || index >= PROJECT_DEFS.length) return;
		final def = PROJECT_DEFS[index];
		final status = projectStatuses[index];

		final titleUpd = demoResult.getUpdatable("detailTitle");
		if (titleUpd != null) titleUpd.updateText(def.name);

		final statusUpd = demoResult.getUpdatable("detailStatus");
		if (statusUpd != null) statusUpd.updateText('Status: $status');

		final costUpd = demoResult.getUpdatable("detailCost");
		if (costUpd != null) costUpd.updateText('Cost: ${def.cost}');

		final durationUpd = demoResult.getUpdatable("detailDuration");
		if (durationUpd != null) durationUpd.updateText('Duration: ${def.duration}');

		final descUpd = demoResult.getUpdatable("detailDesc");
		if (descUpd != null) descUpd.updateText(def.desc);

		final effectUpd = demoResult.getUpdatable("detailEffect");
		if (effectUpd != null) effectUpd.updateText(status != "normal" ? 'Effect: ${def.effect}' : "");
	}

	function updateLog(msg:String):Void {
		if (demoResult == null) return;
		final logUpd = demoResult.getUpdatable("logText");
		if (logUpd != null) logUpd.updateText(msg);
	}

	override public function onClear():Void {
		super.onClear();
		demoResult = null;
		demoBuilder = null;
		scrollableList = null;
		startBtn = null;
		completeBtn = null;
		resetBtn = null;
		scrollToBtn = null;
	}
}
