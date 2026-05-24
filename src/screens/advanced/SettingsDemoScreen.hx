package screens.advanced;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class SettingsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var variantButtons:Array<UIStandardMultiAnimButton> = [];
	var panelContainer:Null<h2d.Object>;
	var currentPanels:Array<h2d.Object> = [];

	static final PANEL_NAMES = ["panelCompact", "panelWide", "panelTall"];
	static final PANEL_LABELS = ["Compact", "Wide", "Tall"];

	override public function load():Void {
		setupDemo("Settings", "settings{} metadata configures code behavior — same code, different layout");

		demoBuilder = screenManager.buildFromResourceName("demos/advanced/settings.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "settingsDemo", [], [
			btnCompact => addButtonWithSingleBuilder(stdBuilder, "button", "Compact"),
			btnWide => addButtonWithSingleBuilder(stdBuilder, "button", "Wide"),
			btnTall => addButtonWithSingleBuilder(stdBuilder, "button", "Tall"),
		]);

		demoResult = ui.builderResults;
		variantButtons = [ui.btnCompact, ui.btnWide, ui.btnTall];
		addBuilderResult(demoResult);

		final container = demoResult.getSingleItemByName("panelContainer");
		if (container != null)
			panelContainer = container.object.toh2dObject();
		currentPanels = [];

		setVariant(0);
	}

	function setVariant(index:Int):Void {
		if (demoBuilder == null || panelContainer == null)
			return;

		// Clear previous panels
		for (p in currentPanels)
			p.remove();
		currentPanels = [];

		final panelName = PANEL_NAMES[index];

		// Build first instance to read its settings
		final first = demoBuilder.buildWithParameters(panelName, []);
		final s = first.rootSettings;
		final width = s.getIntOrDefault("width", 100);
		final height = s.getIntOrDefault("height", 100);
		final gap = s.getIntOrDefault("gap", 10);
		final category = s.getStringOrDefault("category", "?");

		// Place first panel
		panelContainer.addChild(first.object);
		currentPanels.push(first.object);

		// Build 2 more, positioned using settings-driven layout
		for (i in 1...3) {
			final instance = demoBuilder.buildWithParameters(panelName, []);
			instance.object.setPosition(i * (width + gap), 0);
			panelContainer.addChild(instance.object);
			currentPanels.push(instance.object);
		}

		// Update inspector with the settings the code just used
		updateStatus("inspWidth", 'width: $width');
		updateStatus("inspHeight", 'height: $height');
		updateStatus("inspGap", 'gap: $gap');
		updateStatus("inspCategory", 'category: "$category"');

		final total = 3 * width + 2 * gap;
		updateStatus("logText", '${PANEL_LABELS[index]}: 3 x ${width}px + ${gap}px gap = ${total}px total');
	}

	function updateStatus(fieldName:String, text:String):Void {
		if (demoResult == null)
			return;
		final updatable = demoResult.getUpdatable(fieldName);
		if (updatable != null)
			updatable.updateText(text);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				for (i in 0...variantButtons.length) {
					if (source == variantButtons[i]) {
						setVariant(i);
						return;
					}
				}
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		variantButtons = [];
		panelContainer = null;
		currentPanels = [];
	}
}
