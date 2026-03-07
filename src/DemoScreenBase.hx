import bh.ui.UIElement;
import bh.ui.*;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.UIScrollableScreen;
import bh.ui.screens.ScreenManager;

class DemoScreenBase extends UIScrollableScreen {
	var stdBuilder:Null<MultiAnimBuilder>;
	var commonBuilder:Null<MultiAnimBuilder>;
	public var demoTitle:String = "";
	public var demoDescription:String = "";

	public function load():Void {
		// Subclasses must override and call setupDemo()
	}

	function setupDemo(title:String, description:String):Void {
		demoTitle = title;
		demoDescription = description;
		stdBuilder = screenManager.buildFromResourceName("std.manim", false);
		commonBuilder = screenManager.buildFromResourceName("demo-common.manim", false);
	}

	public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {}

	public override function onClear():Void {
		super.onClear();
		stdBuilder = null;
		commonBuilder = null;
	}
}
