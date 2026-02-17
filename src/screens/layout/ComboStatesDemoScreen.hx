package screens.layout;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class ComboStatesDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var cycleModeButton:Null<UIStandardMultiAnimButton>;
	var cycleLevelButton:Null<UIStandardMultiAnimButton>;
	var cycleStateButton:Null<UIStandardMultiAnimButton>;
	var currentMode:Int = 0;
	var currentLevel:Int = 0;
	var currentState:Int = 0;
	static final MODES = ["idle", "active", "warning", "error"];
	static final LEVELS = ["low", "medium", "high", "critical"];
	static final DEVICE_STATES = ["on", "off", "standby", "unknown"];

	override public function load():Void {
		setupDemo("Combo States", "Multi-parameter conditionals with @if, @else, @default");

		demoBuilder = screenManager.buildFromResourceName("demos/layout/combo-states.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "comboStatesShowcase", ["mode" => "idle", "level" => "low", "state" => "on"], [
			cycleMode => addButtonWithSingleBuilder(commonBuilder, "backButton", "Cycle Mode"),
			cycleLevel => addButtonWithSingleBuilder(commonBuilder, "backButton", "Cycle Level"),
			cycleState => addButtonWithSingleBuilder(commonBuilder, "backButton", "Cycle State"),
		], true);

		demoResult = ui.builderResults;
		cycleModeButton = ui.cycleMode;
		cycleLevelButton = ui.cycleLevel;
		cycleStateButton = ui.cycleState;
		addBuilderResult(demoResult);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == cycleModeButton && demoResult != null) {
					currentMode = (currentMode + 1) % MODES.length;
					demoResult.setParameter("mode", MODES[currentMode]);
					final upd = demoResult.getUpdatable("modeText");
					if (upd != null) upd.updateText('mode: ${MODES[currentMode]}');
				} else if (source == cycleLevelButton && demoResult != null) {
					currentLevel = (currentLevel + 1) % LEVELS.length;
					demoResult.setParameter("level", LEVELS[currentLevel]);
					final upd = demoResult.getUpdatable("levelText");
					if (upd != null) upd.updateText('level: ${LEVELS[currentLevel]}');
				} else if (source == cycleStateButton && demoResult != null) {
					currentState = (currentState + 1) % DEVICE_STATES.length;
					demoResult.setParameter("state", DEVICE_STATES[currentState]);
					final upd = demoResult.getUpdatable("stateText");
					if (upd != null) upd.updateText('state: ${DEVICE_STATES[currentState]}');
				}
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		cycleModeButton = null;
		cycleLevelButton = null;
		cycleStateButton = null;
	}
}
