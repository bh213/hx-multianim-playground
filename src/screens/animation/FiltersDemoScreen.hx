package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
import bh.base.FontManager;

class FiltersDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var filterCheckboxes:Array<UIStandardMultiCheckbox> = [];
	var filterNames:Array<String> = ["outline", "glow", "blur", "saturate", "brightness", "dropShadow"];
	var filterStates:Array<Bool> = [];
	var statusText:Null<h2d.Text>;

	override public function load():Void {
		setupDemo("Filters", "Visual filters on sprites: outline, glow, blur, saturate, brightness, dropShadow");

		demoBuilder = screenManager.buildFromResourceName("demos/animation/filters.manim", false);

		// Build the demo with filter showcase
		demoResult = demoBuilder.buildWithParameters("filtersDemo", []);
		addBuilderResult(demoResult);

		// Add checkboxes for each filter type
		var yPos:Float = 500;
		for (i in 0...filterNames.length) {
			filterStates.push(false);
			final checkbox = addCheckbox(stdBuilder, null, false);
			addElement(checkbox, DefaultLayer);
			checkbox.getObject().setPosition(50, yPos);

			// Add label next to checkbox
			final label = new h2d.Text(FontManager.getFontByName("exo2_14"));
			label.text = filterNames[i];
			label.textColor = 0xCCCCCC;
			label.setPosition(80, yPos + 2);
			addObjectToLayer(label, DefaultLayer);

			filterCheckboxes.push(checkbox);
			yPos += 30;
		}

		// Status text
		statusText = new h2d.Text(FontManager.getFontByName("exo2_light_14"));
		statusText.text = "Toggle checkboxes to enable/disable filters";
		statusText.textColor = 0xCCCCCC;
		statusText.setPosition(50, 470);
		addObjectToLayer(statusText, DefaultLayer);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == backButton) {
					screenManager.updateScreenMode(Single(screenManager.getScreen("nav")));
					return;
				}
			case UIToggle(checked):
				for (i in 0...filterCheckboxes.length) {
					if (source == filterCheckboxes[i]) {
						filterStates[i] = checked;
						updateStatusText();
						return;
					}
				}
			default:
		}
	}

	function updateStatusText():Void {
		if (statusText == null) return;
		var activeFilters:Array<String> = [];
		for (i in 0...filterNames.length) {
			if (filterStates[i]) {
				activeFilters.push(filterNames[i]);
			}
		}
		if (activeFilters.length == 0) {
			statusText.text = "No filters active";
		} else {
			statusText.text = 'Active: ${activeFilters.join(", ")}';
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		filterCheckboxes = [];
		filterStates = [];
		statusText = null;
	}
}
