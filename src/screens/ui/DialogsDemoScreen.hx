package screens.ui;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.ui.screens.ScreenTransition;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;
import screens.OkCancelDialog;

class DialogsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var openButton1:Null<UIStandardMultiAnimButton>;
	var openButton2:Null<UIStandardMultiAnimButton>;
	var openButton3:Null<UIStandardMultiAnimButton>;
	var openButton4:Null<UIStandardMultiAnimButton>;
	var openButton5:Null<UIStandardMultiAnimButton>;
	var history:Array<String> = [];

	override public function load():Void {
		setupDemo("Dialogs", "Modal OK/Cancel dialogs with overlay variants");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/dialogs.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "dialogsDemo", [], [
			openButton1 => addButtonWithSingleBuilder(stdBuilder, "button", "Instant Open"),
			openButton2 => addButtonWithSingleBuilder(stdBuilder, "button", "Fade In"),
			openButton3 => addButtonWithSingleBuilder(stdBuilder, "button", "Slide Down"),
			openButton4 => addButtonWithSingleBuilder(stdBuilder, "button", "Fade In"),
			openButton5 => addButtonWithSingleBuilder(stdBuilder, "button", "Slide Up"),
		]);

		demoResult = ui.builderResults;
		openButton1 = ui.openButton1;
		openButton2 = ui.openButton2;
		openButton3 = ui.openButton3;
		openButton4 = ui.openButton4;
		openButton5 = ui.openButton5;
		addBuilderResult(demoResult);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == openButton1) {
					openDialog("noOverlay", "dialogNoOverlay", "No overlay - dialog appears instantly");
				} else if (source == openButton2) {
					openDialog("darkOverlay", "dialogDarkOverlay", "Dark overlay fades in with dialog",
						Fade(0.3, EaseOutCubic), Fade(0.2, EaseInQuad));
				} else if (source == openButton3) {
					openDialog("blueOverlay", "dialogBlueOverlay", "Blue-tinted overlay with slide",
						SlideDown(0.3, EaseOutCubic), SlideUp(0.2, EaseInQuad));
				} else if (source == openButton4) {
					openDialog("heavyOverlay", "dialogHeavyOverlay", "Heavy dark overlay (85% opacity)",
						Fade(0.5, EaseOutCubic), Fade(0.3, EaseInQuad));
				} else if (source == openButton5) {
					openDialog("redWarning", "dialogRedOverlay", "Red warning overlay with slide",
						SlideUp(0.3, EaseOutCubic), SlideDown(0.2, EaseInQuad));
				}
			case UIOnControllerEvent(controllerEvent):
				switch controllerEvent {
					case OnDialogResult(dialogName, result):
						final resultStr = result == true ? "OK" : "Cancel";
						updateResult('$dialogName: $resultStr');
						addHistoryEntry('$dialogName -> $resultStr');
					default:
				}
			default:
		}
		super.onScreenEvent(event, source);
	}

	function openDialog(dialogName:String, dialogProgrammable:String, text:String, ?openTransition:ScreenTransition,
			?closeTransition:ScreenTransition):Void {
		if (demoBuilder == null || stdBuilder == null) return;
		final okBuilder = stdBuilder.createElementBuilder("button");
		final cancelBuilder = stdBuilder.createElementBuilder("button");
		final dialogScreenBuilder = demoBuilder.createElementBuilder(dialogProgrammable);
		final dialog = new OkCancelDialog(screenManager, dialogScreenBuilder, okBuilder, cancelBuilder, "OK", "Cancel", text);
		dialog.closeTransition = closeTransition;
		if (openTransition != null) {
			screenManager.modalDialogWithTransition(dialog, this, dialogName, null, openTransition);
		} else {
			screenManager.modalDialog(dialog, this, dialogName);
		}
	}

	function updateResult(text:String):Void {
		if (demoResult == null) return;
		final updatable = demoResult.getUpdatable("resultText");
		if (updatable != null) {
			updatable.updateText(text);
		}
	}

	function addHistoryEntry(entry:String):Void {
		history.insert(0, entry);
		if (history.length > 5) history.pop();

		if (demoResult == null) return;
		for (i in 0...5) {
			final fieldName = 'historyText${i + 1}';
			final updatable = demoResult.getUpdatable(fieldName);
			if (updatable != null) {
				if (i < history.length) {
					updatable.updateText(history[i]);
				} else {
					updatable.updateText("");
				}
			}
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		openButton1 = null;
		openButton2 = null;
		openButton3 = null;
		openButton4 = null;
		openButton5 = null;
		history = [];
	}
}
