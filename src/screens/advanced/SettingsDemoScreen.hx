package screens.advanced;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
import bh.base.FontManager;

class SettingsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var settingsResult:Null<BuilderResult>;
	var statusText:Null<h2d.Text>;
	var themeButtons:Array<UIStandardMultiAnimButton> = [];
	var currentTheme:String = "dark";

	override public function load():Void {
		setupDemo("Settings", "Settings configuration demo: shows settings{key:type=>value} usage");

		demoBuilder = screenManager.buildFromResourceName("demos/advanced/settings.manim", false);

		// Build the settings demo layout
		demoResult = demoBuilder.buildWithParameters("settingsDemo", []);
		demoResult.object.setPosition(50, 140);
		addBuilderResult(demoResult);

		// Build settings component examples
		settingsResult = demoBuilder.buildWithParameters("settingsExamples", []);
		settingsResult.object.setPosition(50, 300);
		addBuilderResult(settingsResult);

		// Theme selector buttons
		final themes = ["dark", "light", "blue"];
		var xPos:Float = 50;
		for (theme in themes) {
			final btn = addButtonWithSingleBuilder(commonBuilder, "backButton", null, theme);
			btn.getObject().setPosition(xPos, 660);
			themeButtons.push(btn);
			xPos += 120;
		}

		// Status text
		statusText = new h2d.Text(FontManager.getFontByName("exo2_light_14"));
		statusText.text = 'Theme: $currentTheme';
		statusText.textColor = 0xCCCCCC;
		statusText.setPosition(50, 630);
		addObjectToLayer(statusText, DefaultLayer);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == backButton) {
					screenManager.updateScreenMode(Single(screenManager.getScreen("nav")));
					return;
				}
				for (i in 0...themeButtons.length) {
					if (source == themeButtons[i]) {
						final themes = ["dark", "light", "blue"];
						currentTheme = themes[i];
						if (statusText != null) {
							statusText.text = 'Theme: $currentTheme';
						}
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
		settingsResult = null;
		statusText = null;
		themeButtons = [];
	}
}
