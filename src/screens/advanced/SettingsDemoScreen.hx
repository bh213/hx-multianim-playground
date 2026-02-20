package screens.advanced;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;
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

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "settingsDemo", [], [
			btnDark => addButtonWithSingleBuilder(commonBuilder, "backButton", "dark"),
			btnLight => addButtonWithSingleBuilder(commonBuilder, "backButton", "light"),
			btnBlue => addButtonWithSingleBuilder(commonBuilder, "backButton", "blue"),
		]);

		demoResult = ui.builderResults;
		themeButtons = [ui.btnDark, ui.btnLight, ui.btnBlue];
		addBuilderResult(demoResult);

		// Build settings component examples (separate element, no interactive controls)
		settingsResult = demoBuilder.buildWithParameters("settingsExamples", []);
		settingsResult.object.setPosition(50, 300);
		addBuilderResult(settingsResult);

		statusText = new h2d.Text(FontManager.getFontByName("exo2_light_14"));
		statusText.text = 'Theme: $currentTheme';
		statusText.textColor = 0xCCCCCC;
		statusText.setPosition(50, 630);
		addObjectToLayer(statusText, DefaultLayer);

	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
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
