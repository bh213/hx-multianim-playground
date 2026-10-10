package screens.ui;

import bh.base.CursorManager;
import bh.base.MacroUtils;
import bh.multianim.MultiAnimBuilder;
import bh.multianim.MultiAnimBuilder.BuilderResolvedSettings;
import bh.ui.UIElement;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;

/** Bitmap cursors from the file's `cursor { }` block, over interactives that name them. */
class CursorsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var button:Null<UIStandardMultiAnimButton>;

	override public function load():Void {
		setupDemo("Cursors", "Cursors from atlas cells and images: a cursor { } block, registered when the file loads, named by cursor => metadata");

		// buildFromResourceName registers the file's cursor block, so the interactives below find
		// their cursors by name as they are wired.
		demoBuilder = screenManager.buildFromResourceName("demos/ui/cursors.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "cursorsDemo", [], [
			button => addButtonWithSingleBuilder(stdBuilder, "button", "OS pointer"),
		]);
		demoResult = ui.builderResults;
		button = ui.button;
		addBuilderResult(demoResult);
		addInteractives(demoResult);

		final names = demoResult.getUpdatable("namesText");
		if (names != null)
			names.updateText(CursorManager.getRegisteredCursorNames().join(", "));
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIInteractiveEvent(UIEntering(_), id, metadata):
				updateStatus('Hovering $id: ' + describe(metadata));
			case UIInteractiveEvent(UILeaving, _, _):
				updateStatus("Hover a region");
			default:
		}
		super.onScreenEvent(event, source);
	}

	static function describe(metadata:BuilderResolvedSettings):String {
		final parts:Array<String> = [];
		for (key in ["cursor", "cursor.hover", "cursor.disabled"])
			if (metadata.hasSettings() && metadata.has(key)) {
				final name = metadata.getStringOrDefault(key, "");
				final tile = CursorManager.getTileCursor(name);
				parts.push(tile != null ? '$key => $name (${tile.tile.iwidth}x${tile.tile.iheight}, hot ${tile.hotX}, ${tile.hotY})' : '$key => $name (OS cursor)');
			}
		return parts.join("; ");
	}

	function updateStatus(text:String):Void {
		if (demoResult == null) return;
		final updatable = demoResult.getUpdatable("statusText");
		if (updatable != null)
			updatable.updateText(text);
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		button = null;
	}
}
