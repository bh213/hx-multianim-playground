package screens.ui;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UITooltipHelper;
import bh.ui.UITooltipHelper.TooltipPosition;
import bh.ui.UIPanelHelper;
import bh.ui.UIPanelHelper.PanelCloseMode;
import bh.multianim.MultiAnimBuilder;
import bh.multianim.MultiAnimBuilder.BuilderResolvedSettings;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;

class TooltipsPanelsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var tooltipHelper:Null<UITooltipHelper>;
	var panelHelper:Null<UIPanelHelper>;

	override public function load():Void {
		setupDemo("Tooltips & Panels", "Hover tooltips (UITooltipHelper) and click panels (UIPanelHelper)");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/tooltips-panels.manim", false);
		demoResult = demoBuilder.buildWithParameters("tooltipsPanelsDemo", []);
		addBuilderResult(demoResult);
		addInteractives(demoResult);

		// Tooltip helper — default: 0.3s delay, positioned Above
		tooltipHelper = new UITooltipHelper(this, demoBuilder, {delay: 0.3, position: Above});

		// Section 1: position overrides
		tooltipHelper.setPosition("btnAbove", Above);
		tooltipHelper.setPosition("btnBelow", Below);
		tooltipHelper.setPosition("btnLeft", Left);
		tooltipHelper.setPosition("btnRight", Right);

		// Section 2: delay overrides
		tooltipHelper.setDelay("itemSword", 0);
		tooltipHelper.setDelay("itemCrown", 1.0);

		// Panel helper — default: Below, OutsideClick close
		panelHelper = new UIPanelHelper(this, demoBuilder, {position: Below, closeOn: OutsideClick});
	}

	override public function update(dt:Float):Void {
		super.update(dt);
		if (tooltipHelper != null)
			tooltipHelper.update(dt);
		if (panelHelper != null) {
			if (panelHelper.checkPendingClose())
				updateStatus("statusPanel", "Panel closed (outside click)");
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		// Let panel helper handle outside-click close logic first
		if (panelHelper != null) {
			if (panelHelper.handleOutsideClick(event)) {
				updateStatus("statusPanel", "Panel closed (outside click)");
				return;
			}
		}

		switch event {
			case UIInteractiveEvent(UIEntering, id, metadata):
				handleEnter(id, metadata);
			case UIInteractiveEvent(UILeaving, id, _):
				handleLeave(id);
			case UIInteractiveEvent(UIClick, id, metadata):
				handleClick(id, metadata);
			default:
		}
	}

	function handleEnter(id:String, metadata:BuilderResolvedSettings):Void {
		// Panel interactives have no metadata — skip tooltip logic for them
		final tooltipBuild = metadata.getStringOrDefault("tooltip", "");
		if (tooltipBuild == "" || tooltipHelper == null)
			return;

		// Don't show tooltip if panel is open for this item (combo behavior)
		if (panelHelper != null && panelHelper.isOpen() && panelHelper.getActiveId() == id)
			return;

		// Build params from metadata
		var params = buildTooltipParams(metadata);
		tooltipHelper.startHover(id, tooltipBuild, params);

		// Update status text
		updateStatus("statusTooltip", 'Hovering: $id');
		updateStatus("statusRich", 'Hovering: $id');
		updateStatus("statusCombo", 'Hovering: $id (tooltip pending...)');
	}

	function handleLeave(id:String):Void {
		if (tooltipHelper != null)
			tooltipHelper.cancelHover(id);

		updateStatus("statusTooltip", "Hover a button to see a tooltip");
		updateStatus("statusRich", "Hover an item card to see a rich tooltip");
		updateStatus("statusCombo", "Hover for tooltip, click for panel");
	}

	function handleClick(id:String, metadata:BuilderResolvedSettings):Void {
		// First: check if clicking inside an open panel (panel interactives have no metadata)
		if (panelHelper != null && panelHelper.isOpen()) {
			if (panelHelper.isOwnInteractive(id)) {
				handlePanelAction(id);
				return;
			}
		}

		// Then: check if clicking a panel trigger
		final panelBuild = metadata.getStringOrDefault("panel", "");
		if (panelBuild != "") {
			// Hide tooltip first
			if (tooltipHelper != null)
				tooltipHelper.hide();

			if (panelHelper != null) {
				// Toggle: if clicking the same trigger, close the panel
				if (panelHelper.isOpen() && panelHelper.getActiveId() == id) {
					panelHelper.close();
					updateStatus("statusPanel", "Panel closed");
					updateStatus("statusCombo", "Panel closed. Hover again for tooltip.");
					return;
				}

				// Determine close mode
				final closeMode = if (id == "triggerManual") Manual else OutsideClick;
				panelHelper.open(id, panelBuild, null, closeMode);
				updateStatus("statusPanel", 'Opened: $panelBuild (${closeMode == Manual ? "manual close" : "outside-click close"})');
				updateStatus("statusCombo", 'Panel opened for $id');
			}
			return;
		}
	}

	function handlePanelAction(fullId:String):Void {
		// Panel interactive IDs are prefixed: "triggerId.panelBuild.actionId"
		// Extract the action part (last segment)
		final parts = fullId.split(".");
		final action = parts[parts.length - 1];

		switch action {
			case "equip":
				updateStatus("statusPanel", 'Action: Equip!');
				if (panelHelper != null) panelHelper.close();
			case "drop":
				updateStatus("statusPanel", 'Action: Drop!');
				if (panelHelper != null) panelHelper.close();
			case "info":
				updateStatus("statusPanel", 'Action: Info!');
				if (panelHelper != null) panelHelper.close();
			case "closeBtn":
				if (panelHelper != null)
					panelHelper.close();
				updateStatus("statusPanel", "Panel closed (manual)");
			case "comboEquip":
				updateStatus("statusCombo", "Equipped the Magic Ring!");
				if (panelHelper != null)
					panelHelper.close();
			case "comboDiscard":
				updateStatus("statusCombo", "Discarded the Magic Ring!");
				if (panelHelper != null)
					panelHelper.close();
			default:
				// Color picker
				if (StringTools.startsWith(action, "color")) {
					final color = action.substr(5); // "colorRed" → "Red"
					updateStatus("statusPanel", 'Picked color: $color');
					if (panelHelper != null) panelHelper.close();
				}
		}
	}

	function buildTooltipParams(metadata:BuilderResolvedSettings):Map<String, Dynamic> {
		var params = new Map<String, Dynamic>();
		for (key in ["label", "name", "desc", "rarity", "damage", "color"]) {
			final val = metadata.getStringOrDefault(key, "");
			if (val != "")
				params.set(key, val);
		}
		return params;
	}

	function updateStatus(fieldName:String, text:String):Void {
		if (demoResult == null)
			return;
		final updatable = demoResult.getUpdatable(fieldName);
		if (updatable != null)
			updatable.updateText(text);
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		tooltipHelper = null;
		panelHelper = null;
	}
}
