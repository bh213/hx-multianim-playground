package screens.layout;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class ComboStatesDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var cycleButton:Null<UIStandardMultiAnimButton>;
	var currentState:Int = 0;
	static final STATES = ["idle", "active", "warning", "error"];

	override public function load():Void {
		setupDemo("Combo States", "Multi-parameter conditionals with @if, @else, @default");

		demoBuilder = screenManager.buildFromResourceName("demos/layout/combo-states.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "comboStatesShowcase", ["mode" => "idle", "level" => "low"], [
			cycleButton => addButtonWithSingleBuilder(commonBuilder, "backButton", "Cycle State"),
		], true);

		demoResult = ui.builderResults;
		cycleButton = ui.cycleButton;
		addBuilderResult(demoResult);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == cycleButton && demoResult != null) {
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
