package screens.layout;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;

class ComboStatesDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var cycleButton:Null<UIStandardMultiAnimButton>;
	var currentState:Int = 0;
	static final STATES = ["idle", "active", "warning", "error"];

	override public function load():Void {
		setupDemo("Combo States", "Multi-parameter conditionals with @if, @else, @default");

		demoBuilder = screenManager.buildFromResourceName("demos/layout/combo-states.manim", false);

		demoResult = demoBuilder.buildWithParameters("comboStatesShowcase", ["mode" => "idle", "level" => "low"], null, null, true);
		demoResult.object.setPosition(40, 80);
		addBuilderResult(demoResult);

		// Add cycle button
		cycleButton = addButtonWithSingleBuilder(commonBuilder, "backButton", null, "Cycle State");
		cycleButton.getObject().setPosition(500, 100);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == backButton) {
					screenManager.updateScreenMode(Single(screenManager.getScreen("nav")));
				} else if (source == cycleButton && demoResult != null) {
					currentState = (currentState + 1) % STATES.length;
					demoResult.setParameter("mode", STATES[currentState]);
				}
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		cycleButton = null;
	}
}
