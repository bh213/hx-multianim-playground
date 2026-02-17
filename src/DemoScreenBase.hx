import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
import bh.base.FontManager;

class DemoScreenBase extends UIScreenBase {
	var stdBuilder:Null<MultiAnimBuilder>;
	var commonBuilder:Null<MultiAnimBuilder>;
	var titleResult:Null<BuilderResult>;
	var descriptionResult:Null<BuilderResult>;
	var backButton:Null<UIStandardMultiAnimButton>;

	public function load():Void {
		// Subclasses must override and call setupDemo()
	}

	function setupDemo(title:String, description:String):Void {
		stdBuilder = screenManager.buildFromResourceName("std.manim", false);
		commonBuilder = screenManager.buildFromResourceName("demo-common.manim", false);

		// Build title bar
		titleResult = commonBuilder.buildWithParameters("titleBar", ["title" => title]);
		addBuilderResult(titleResult);

		// Build description
		descriptionResult = commonBuilder.buildWithParameters("descriptionLabel", ["text" => description]);
		addBuilderResult(descriptionResult);

		// Add back button
		backButton = addButtonWithSingleBuilder(commonBuilder, "backButton", null, "Back");
	}

	public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == backButton) {
					screenManager.updateScreenMode(Single(screenManager.getScreen("nav")));
				}
			default:
		}
	}

	public override function onClear():Void {
		stdBuilder = null;
		commonBuilder = null;
		titleResult = null;
		descriptionResult = null;
		backButton = null;
	}
}
