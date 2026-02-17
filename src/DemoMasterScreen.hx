import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;

class DemoMasterScreen extends UIScreenBase {
	var commonBuilder:Null<MultiAnimBuilder>;
	var titleResult:Null<BuilderResult>;
	var descriptionResult:Null<BuilderResult>;
	var backButton:Null<UIStandardMultiAnimButton>;

	public function load():Void {
		commonBuilder = screenManager.buildFromResourceName("demo-common.manim", false);

		titleResult = commonBuilder.buildWithParameters("titleBar", ["title" => "Demo"]);
		addBuilderResult(titleResult);

		descriptionResult = commonBuilder.buildWithParameters("descriptionLabel", ["text" => ""]);
		addBuilderResult(descriptionResult);

		backButton = addButtonWithSingleBuilder(commonBuilder, "backButton", null, "Back");
		addElement(backButton, DefaultLayer);
		backButton.getObject().setPosition(1190, 0);
	}

	public function setDemoInfo(title:String, description:String):Void {
		if (titleResult != null) {
			titleResult.getUpdatable("titleText").updateText(title);
		}
		if (descriptionResult != null) {
			descriptionResult.getUpdatable("descText").updateText(description);
		}
	}

	public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == backButton) {
					screenManager.updateScreenMode(Single(screenManager.getScreen("nav")));
					#if js
					js.Browser.window.location.hash = 'screen=nav';
					#end
				}
			default:
		}
	}

	public override function onClear():Void {
		commonBuilder = null;
		titleResult = null;
		descriptionResult = null;
		backButton = null;
	}
}
