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
	var fadePanelHelper:Null<UIPanelHelper>;
	var richHelper:Null<UIRichInteractiveHelper>;

	override public function load():Void {
		setupDemo("Tooltips & Panels", "Hover tooltips, click panels, and fade transitions via TweenManager");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/tooltips-panels.manim", false);
		demoResult = demoBuilder.buildWithParameters("tooltipsPanelsDemo", [], null, null, true);
		addBuilderResult(demoResult);
		addInteractives(demoResult);

		// Tooltip helper — with TweenManager for smooth fade (default: 0.15s in, 0.1s out)
		tooltipHelper = new UITooltipHelper(this, demoBuilder, {delay: 0.3, position: Above}, screenManager.tweens);

		// Section 1: position overrides
		tooltipHelper.setPosition("btnAbove", Above);
		tooltipHelper.setPosition("btnBelow", Below);
		tooltipHelper.setPosition("btnLeft", Left);
		tooltipHelper.setPosition("btnRight", Right);

		// Section 2: delay overrides
		tooltipHelper.setDelay("itemSword", 0);
		tooltipHelper.setDelay("itemCrown", 1.0);

		// Panel helper — instant (no fade defaults), with TweenManager available for Section 5 comparison
		panelHelper = new UIPanelHelper(this, demoBuilder, {position: Below, closeOn: OutsideClick}, screenManager.tweens);

		// Fade panel helper — with fade transitions (Section 5)
		fadePanelHelper = new UIPanelHelper(this, demoBuilder, {
			position: Below,
			closeOn: OutsideClick,
			fadeIn: 0.3,
			fadeOut: 0.2
		}, screenManager.tweens);

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
				unregisterPanelBindings(panelHelper);
				final sf = closingId != null ? getStatusFieldForId(closingId) : "statusPanel";
				if (sf != null)
					updateStatus(sf, "Panel closed (outside click)");
			}
		}
		if (fadePanelHelper != null) {
			final closingId = fadePanelHelper.getActiveId();
			if (fadePanelHelper.checkPendingClose()) {
				unregisterPanelBindings(fadePanelHelper);
				updateStatus("statusFade", "Fading panel closed (outside click)");
			}
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		// Visual state updates (hover/pressed) — always forward
		if (richHelper != null)
			richHelper.handleEvent(event);

		// Let panel helpers handle outside-click close logic
		if (panelHelper != null) {
			final closingId = panelHelper.getActiveId();
			if (panelHelper.handleOutsideClick(event)) {
				unregisterPanelBindings(panelHelper);
				final sf = closingId != null ? getStatusFieldForId(closingId) : "statusPanel";
				if (sf != null)
					updateStatus(sf, "Panel closed (outside click)");
				return;
			}
		}
		if (fadePanelHelper != null) {
			if (fadePanelHelper.handleOutsideClick(event)) {
				unregisterPanelBindings(fadePanelHelper);
				updateStatus("statusFade", "Fading panel closed (outside click)");
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
		if (StringTools.startsWith(id, "fade"))
			return "statusFade";
		return null;
	}

	function handleClick(id:String, metadata:BuilderResolvedSettings):Void {
		// First: check if clicking inside an open panel (panel interactives have no metadata)
		if (panelHelper != null && panelHelper.isOpen()) {
			if (panelHelper.isOwnInteractive(id)) {
				handlePanelAction(id, panelHelper, "statusPanel");
				return;
			}
		}
		if (fadePanelHelper != null && fadePanelHelper.isOpen()) {
			if (fadePanelHelper.isOwnInteractive(id)) {
				handlePanelAction(id, fadePanelHelper, "statusFade");
				return;
			}
		}

		// Section 5: Fade triggers use dedicated helper
		if (id == "fadeInstant" || id == "fadeSmooth") {
			handleFadeClick(id, metadata);
			return;
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
					unregisterPanelBindings(panelHelper);
					panelHelper.close();
					final sf = getStatusFieldForId(id);
					if (sf != null) {
						final msg = if (sf == "statusCombo") "Panel closed. Hover again for tooltip." else "Panel closed";
						updateStatus(sf, msg);
					}
					return;
				}

				// Close previous panel bindings before opening new one
				unregisterPanelBindings(panelHelper);

				// Determine close mode
				final closeMode = if (id == "triggerManual") Manual else OutsideClick;
				panelHelper.open(id, panelBuild, null, closeMode);
				registerPanelBindings(panelHelper);
				final sf = getStatusFieldForId(id);
				if (sf != null) {
					final msg = if (sf == "statusCombo") 'Panel opened for $id' else 'Opened: $panelBuild (${closeMode == Manual ? "manual close" : "outside-click close"})';
					updateStatus(sf, msg);
				}
			}
			return;
		}
	}

	function handleFadeClick(id:String, metadata:BuilderResolvedSettings):Void {
		final helper = if (id == "fadeInstant") panelHelper else fadePanelHelper;
		if (helper == null)
			return;

		// Toggle: if same trigger is already open, close it
		if (helper.isOpen() && helper.getActiveId() == id) {
			unregisterPanelBindings(helper);
			helper.close();
			final label = if (id == "fadeInstant") "Instant" else "Fading";
			updateStatus("statusFade", '$label panel closed');
			return;
		}

		// Close both helpers if either is open
		if (panelHelper != null && panelHelper.isOpen()) {
			unregisterPanelBindings(panelHelper);
			panelHelper.close();
		}
		if (fadePanelHelper != null && fadePanelHelper.isOpen()) {
			unregisterPanelBindings(fadePanelHelper);
			fadePanelHelper.close();
		}

		final panelBuild = metadata.getStringOrDefault("panel", "panelFade");
		helper.open(id, panelBuild, null, OutsideClick);
		registerPanelBindings(helper);
		final label = if (id == "fadeInstant") "Instant panel opened (no fade)" else "Fading panel opened (fadeIn: 0.3s, fadeOut: 0.2s)";
		updateStatus("statusFade", label);
	}

	function registerPanelBindings(helper:UIPanelHelper):Void {
		if (richHelper == null)
			return;
		final panelResult = helper.getPanelResult();
		final prefix = helper.getActivePrefix();
		if (panelResult != null && prefix != null)
			richHelper.register(panelResult, prefix);
	}

	function unregisterPanelBindings(helper:UIPanelHelper):Void {
		if (richHelper == null)
			return;
		final panelResult = helper.getPanelResult();
		if (panelResult != null)
			richHelper.unregister(panelResult);
	}

	function handlePanelAction(fullId:String, helper:UIPanelHelper, defaultStatus:String):Void {
		// Panel interactive IDs are prefixed: "triggerId.panelBuild.actionId"
		final parts = fullId.split(".");
		final triggerId = parts[0];
		final action = parts[parts.length - 1];
		final sf = getStatusFieldForId(triggerId) ?? defaultStatus;

		switch action {
			case "equip":
				updateStatus(sf, 'Action: Equip!');
				closePanelWithUnregister(helper);
			case "drop":
				updateStatus(sf, 'Action: Drop!');
				closePanelWithUnregister(helper);
			case "info":
				updateStatus(sf, 'Action: Info!');
				closePanelWithUnregister(helper);
			case "closeBtn":
				closePanelWithUnregister(helper);
				final label = if (helper == fadePanelHelper) "Fading panel closed (manual)" else "Panel closed (manual)";
				updateStatus(sf, label);
			case "comboEquip":
				updateStatus(sf, "Equipped the Magic Ring!");
				closePanelWithUnregister(helper);
			case "comboDiscard":
				updateStatus(sf, "Discarded the Magic Ring!");
				closePanelWithUnregister(helper);
			default:
				// Color picker
				if (StringTools.startsWith(action, "color")) {
					final color = action.substr(5); // "colorRed" → "Red"
					updateStatus(sf, 'Picked color: $color');
					closePanelWithUnregister(helper);
				}
		}
	}

	function closePanelWithUnregister(helper:UIPanelHelper):Void {
		unregisterPanelBindings(helper);
		helper.close();
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
		fadePanelHelper = null;
		richHelper = null;
	}
}
