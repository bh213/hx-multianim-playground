package screens.advanced;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.ui.UIMultiAnimDraggable;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;
import bh.base.FontManager;
import h2d.col.Point;

class SettingsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var settingsResult:Null<BuilderResult>;
	var statusText:Null<h2d.Text>;
	var themeButtons:Array<UIStandardMultiAnimButton> = [];
	var currentTheme:String = "dark";

	var panelResult:Null<BuilderResult>;
	var handleDraggable:Null<UIMultiAnimDraggable>;
	static inline final PANEL_X = 450;
	static inline final PANEL_Y = 300;
	static inline final HANDLE_SIZE = 12;
	var panelWidth:Int = 150;
	var panelHeight:Int = 200;

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

		// Resizable ninepatch panel
		var label = new h2d.Text(FontManager.getFontByName("m6x11"));
		label.text = "Drag corner to resize:";
		label.textColor = 0xCCCCCC;
		label.setPosition(PANEL_X, PANEL_Y - 20);
		addObjectToLayer(label, DefaultLayer);

		panelResult = demoBuilder.buildWithParameters("resizablePanel", ["width" => panelWidth, "height" => panelHeight], null, null, true);
		panelResult.object.setPosition(PANEL_X, PANEL_Y);
		addBuilderResult(panelResult);

		// Drag handle at bottom-right corner
		final handleTile = h2d.Tile.fromColor(0x7fdbda, HANDLE_SIZE, HANDLE_SIZE);
		final handleBitmap = new h2d.Bitmap(handleTile);
		handleDraggable = UIMultiAnimDraggable.create(handleBitmap);
		handleDraggable.onDragDestination = (pos, wrapper) -> {
			final mouseX = wrapper.eventPos.x;
			final mouseY = wrapper.eventPos.y;
			final newW = Std.int(Math.max(50, Math.min(500, mouseX - PANEL_X)));
			final newH = Std.int(Math.max(50, Math.min(500, mouseY - PANEL_Y)));
			panelWidth = newW;
			panelHeight = newH;
			if (panelResult != null) {
				panelResult.setParameter("width", newW);
				panelResult.setParameter("height", newH);
				final upd = panelResult.getUpdatable("sizeText");
				if (upd != null) upd.updateText('$newW x $newH');
			}
			handleDraggable.getObject().setPosition(PANEL_X + newW - HANDLE_SIZE, PANEL_Y + newH - HANDLE_SIZE);
			return false;
		};
		addElementWithPos(handleDraggable, PANEL_X + panelWidth - HANDLE_SIZE, PANEL_Y + panelHeight - HANDLE_SIZE, DefaultLayer);
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
		panelResult = null;
		handleDraggable = null;
	}
}
