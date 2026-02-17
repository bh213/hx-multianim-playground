package screens.advanced;

import bh.ui.UIElement;
import bh.ui.*;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
import bh.base.FontManager;

class InteractivesDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var statusText:Null<h2d.Text>;
	var clickInfoText:Null<h2d.Text>;

	override public function load():Void {
		setupDemo("Interactives", "Hit regions with typed metadata using interactive(w, h, id, key=>val)");

		demoBuilder = screenManager.buildFromResourceName("demos/advanced/interactives.manim", false);

		// Build the demo
		demoResult = demoBuilder.buildWithParameters("interactivesDemo", []);
		demoResult.object.setPosition(50, 140);
		addBuilderResult(demoResult);

		// Register interactives from the builder result
		addInteractives(demoResult);

		// Status text
		statusText = new h2d.Text(FontManager.getFontByName("exo2_light_14"));
		statusText.text = "Click on any interactive region to see its id and metadata";
		statusText.textColor = 0xCCCCCC;
		statusText.setPosition(50, 560);
		addObjectToLayer(statusText, DefaultLayer);

		// Click info display
		clickInfoText = new h2d.Text(FontManager.getFontByName("exo2_16"));
		clickInfoText.text = "No region clicked yet";
		clickInfoText.textColor = 0x7fdbda;
		clickInfoText.setPosition(50, 590);
		addObjectToLayer(clickInfoText, DefaultLayer);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == backButton) {
					screenManager.updateScreenMode(Single(screenManager.getScreen("nav")));
					return;
				}
				// Check if clicked an interactive element
				if (Std.isOfType(source, UIInteractiveWrapper)) {
					final wrapper:UIInteractiveWrapper = cast source;
					final id = wrapper.id;
					if (clickInfoText != null) {
						clickInfoText.text = 'Clicked: id="$id"';
					}
				}
			case UIEntering:
				if (Std.isOfType(source, UIInteractiveWrapper)) {
					final wrapper:UIInteractiveWrapper = cast source;
					if (statusText != null) {
						statusText.text = 'Hovering: ${wrapper.id}';
					}
				}
			case UILeaving:
				if (statusText != null) {
					statusText.text = "Click on any interactive region to see its id and metadata";
				}
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		statusText = null;
		clickInfoText = null;
	}
}
