package screens.ui;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
import screens.OkCancelDialog;

class DialogsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var dialogBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var openButton1:Null<UIStandardMultiAnimButton>;
	var openButton2:Null<UIStandardMultiAnimButton>;
	var history:Array<String> = [];

	override public function load():Void {
		setupDemo("Dialogs", "Modal OK/Cancel dialogs with result tracking");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/dialogs.manim", false);
		dialogBuilder = demoBuilder;

		openButton1 = addButtonWithSingleBuilder(stdBuilder, "button", null, "Open Dialog");
		openButton2 = addButtonWithSingleBuilder(stdBuilder, "button", null, "Confirm Action");

		demoResult = demoBuilder.buildWithParameters("dialogsDemo", [], {
			placeholderObjects: [
				"openButton1" => PVObject(openButton1.getObject()),
				"openButton2" => PVObject(openButton2.getObject()),
			]
		});

		addBuilderResult(demoResult);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == openButton1) {
					openDialog("dialog1", "Do you want to proceed with this action?");
				} else if (source == openButton2) {
					openDialog("dialog2", "Are you sure you want to confirm?");
				}
			case UIOnControllerEvent(controllerEvent):
				switch controllerEvent {
					case OnDialogResult(dialogName, result):
						final resultStr = result == true ? "OK" : "Cancel";
						final displayName = dialogName == "dialog1" ? "Dialog 1" : "Dialog 2";
						updateResult('$displayName result: $resultStr');
						addHistoryEntry('$displayName -> $resultStr');
					default:
				}
			default:
		}
		super.onScreenEvent(event, source);
	}

	function openDialog(dialogName:String, text:String):Void {
		if (dialogBuilder == null || stdBuilder == null) return;
		final okBuilder = stdBuilder.createElementBuilder("button");
		final cancelBuilder = stdBuilder.createElementBuilder("button");
		final dialogScreenBuilder = dialogBuilder.createElementBuilder("okCancelDemoDialog");
		final dialog = new OkCancelDialog(screenManager, dialogScreenBuilder, okBuilder, cancelBuilder, "OK", "Cancel", text);
		screenManager.modalDialog(dialog, this, dialogName);
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
		dialogBuilder = null;
		demoResult = null;
		openButton1 = null;
		openButton2 = null;
		history = [];
	}
}
