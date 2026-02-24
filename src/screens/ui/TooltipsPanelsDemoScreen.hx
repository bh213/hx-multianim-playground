package screens.ui;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UITooltipHelper;
import bh.ui.UITooltipHelper.TooltipPosition;
import bh.ui.UIPanelHelper;
import bh.ui.UIPanelHelper.PanelCloseMode;
import bh.ui.UIRichInteractiveHelper;
import bh.multianim.MultiAnimBuilder;
import bh.multianim.MultiAnimBuilder.BuilderResolvedSettings;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;

class TooltipsPanelsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var tooltipHelper:Null<UITooltipHelper>;
	var panelHelper:Null<UIPanelHelper>;
	var richHelper:Null<UIRichInteractiveHelper>;

	override public function load():Void {
		setupDemo("Tooltips & Panels", "Hover tooltips (UITooltipHelper) and click panels (UIPanelHelper)");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/tooltips-panels.manim", false);
		demoResult = demoBuilder.buildWithParameters("tooltipsPanelsDemo", [], null, null, true);
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

		// Rich interactive helper — auto-binds all interactives with bind metadata
		richHelper = new UIRichInteractiveHelper(this);
		richHelper.register(demoResult);
	}

	override public function update(dt:Float):Void {
		super.update(dt);
		if (tooltipHelper != null)
			tooltipHelper.update(dt);
		if (panelHelper != null) {
			final closingId = panelHelper.getActiveId();
			if (panelHelper.checkPendingClose()) {
				unregisterPanelBindings();
				final sf = closingId != null ? getStatusFieldForId(closingId) : "statusPanel";
				if (sf != null)
					updateStatus(sf, "Panel closed (outside click)");
			}
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		// Visual state updates (hover/pressed) — always forward
		if (richHelper != null)
			richHelper.handleEvent(event);

		// Let panel helper handle outside-click close logic
		if (panelHelper != null) {
			final closingId = panelHelper.getActiveId();
			if (panelHelper.handleOutsideClick(event)) {
				unregisterPanelBindings();
				final sf = closingId != null ? getStatusFieldForId(closingId) : "statusPanel";
				if (sf != null)
					updateStatus(sf, "Panel closed (outside click)");
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

		// Update only this section's status text
		final statusField = getStatusFieldForId(id);
		if (statusField != null) {
			final suffix = if (statusField == "statusCombo") ' (tooltip pending...)' else '';
			updateStatus(statusField, 'Hovering: $id$suffix');
		}
	}

	function handleLeave(id:String):Void {
		if (tooltipHelper != null)
			tooltipHelper.cancelHover(id);

		// Reset only this section's status text
		final statusField = getStatusFieldForId(id);
		if (statusField != null) {
			switch statusField {
				case "statusTooltip": updateStatus(statusField, "Hover a button to see a tooltip");
				case "statusRich": updateStatus(statusField, "Hover an item card to see a rich tooltip");
				case "statusCombo": updateStatus(statusField, "Hover for tooltip, click for panel");
				default:
			}
		}
	}

	function getStatusFieldForId(id:String):Null<String> {
		if (StringTools.startsWith(id, "btn"))
			return "statusTooltip";
		if (StringTools.startsWith(id, "item"))
			return "statusRich";
		if (StringTools.startsWith(id, "combo"))
			return "statusCombo";
		if (StringTools.startsWith(id, "trigger"))
			return "statusPanel";
		return null;
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
					unregisterPanelBindings();
					panelHelper.close();
					final sf = getStatusFieldForId(id);
					if (sf != null) {
						final msg = if (sf == "statusCombo") "Panel closed. Hover again for tooltip." else "Panel closed";
						updateStatus(sf, msg);
					}
					return;
				}

				// Close previous panel bindings before opening new one
				unregisterPanelBindings();

				// Determine close mode
				final closeMode = if (id == "triggerManual") Manual else OutsideClick;
				panelHelper.open(id, panelBuild, null, closeMode);
				registerPanelBindings();
				final sf = getStatusFieldForId(id);
				if (sf != null) {
					final msg = if (sf == "statusCombo") 'Panel opened for $id' else 'Opened: $panelBuild (${closeMode == Manual ? "manual close" : "outside-click close"})';
					updateStatus(sf, msg);
				}
			}
			return;
		}
	}

	function registerPanelBindings():Void {
		if (richHelper == null || panelHelper == null)
			return;
		final panelResult = panelHelper.getPanelResult();
		final prefix = panelHelper.getActivePrefix();
		if (panelResult != null && prefix != null)
			richHelper.register(panelResult, prefix);
	}

	function unregisterPanelBindings():Void {
		if (richHelper == null || panelHelper == null)
			return;
		final panelResult = panelHelper.getPanelResult();
		if (panelResult != null)
			richHelper.unregister(panelResult);
	}

	function handlePanelAction(fullId:String):Void {
		// Panel interactive IDs are prefixed: "triggerId.panelBuild.actionId"
		final parts = fullId.split(".");
		final triggerId = parts[0];
		final action = parts[parts.length - 1];
		final sf = getStatusFieldForId(triggerId) ?? "statusPanel";

		switch action {
			case "equip":
				updateStatus(sf, 'Action: Equip!');
				closePanelWithUnregister();
			case "drop":
				updateStatus(sf, 'Action: Drop!');
				closePanelWithUnregister();
			case "info":
				updateStatus(sf, 'Action: Info!');
				closePanelWithUnregister();
			case "closeBtn":
				closePanelWithUnregister();
				updateStatus(sf, "Panel closed (manual)");
			case "comboEquip":
				updateStatus(sf, "Equipped the Magic Ring!");
				closePanelWithUnregister();
			case "comboDiscard":
				updateStatus(sf, "Discarded the Magic Ring!");
				closePanelWithUnregister();
			default:
				// Color picker
				if (StringTools.startsWith(action, "color")) {
					final color = action.substr(5); // "colorRed" → "Red"
					updateStatus(sf, 'Picked color: $color');
					closePanelWithUnregister();
				}
		}
	}

	function closePanelWithUnregister():Void {
		unregisterPanelBindings();
		if (panelHelper != null)
			panelHelper.close();
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
		richHelper = null;
	}
}
