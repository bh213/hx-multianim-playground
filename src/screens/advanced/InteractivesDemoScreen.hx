package screens.advanced;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIRichInteractiveHelper;
import bh.multianim.MultiAnimBuilder;
import bh.multianim.MultiAnimBuilder.BuilderResolvedSettings;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;

class InteractivesDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var richHelper:Null<UIRichInteractiveHelper>;
	var cardsDisabled:Bool = false;

	override public function load():Void {
		setupDemo("Interactives", "Hit regions with typed metadata, cursors, rich highlights, event filters, and autoStatus auto-wiring");

		demoBuilder = screenManager.buildFromResourceName("demos/advanced/interactives.manim", false);

		// Build with incremental mode for setParameter() support (bind)
		demoResult = demoBuilder.buildWithParameters("interactivesDemo", [], null, null, true);
		demoResult.object.setPosition(50, 100);
		addBuilderResult(demoResult);

		// Register interactives from the builder result
		addInteractives(demoResult);

		// Rich interactive helper — auto-binds all interactives with bind metadata
		richHelper = new UIRichInteractiveHelper(this);
		richHelper.register(demoResult);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		// Forward to rich helper first (drives visual state transitions)
		if (richHelper != null)
			richHelper.handleEvent(event);

		switch event {
			case UIInteractiveEvent(UIClick, id, metadata):
				handleClick(id, metadata);
			case UIInteractiveEvent(UIEntering, id, metadata):
				updateStatus("statusText", 'Hovering: $id ${formatMeta(metadata)}');
			case UIInteractiveEvent(UILeaving, _, _):
				updateStatus("statusText", "Hover or click any interactive region");
			default:
		}
	}

	function handleClick(id:String, metadata:BuilderResolvedSettings):Void {
		if (id == "toggleDisable") {
			cardsDisabled = !cardsDisabled;
			if (richHelper != null) {
				richHelper.setDisabled("card1", cardsDisabled);
				richHelper.setDisabled("card2", cardsDisabled);
				richHelper.setDisabled("card3", cardsDisabled);
			}
			updateStatus("clickText", 'Cards ${cardsDisabled ? "disabled" : "enabled"}');
			return;
		}
		updateStatus("clickText", 'Clicked: "$id" ${formatMeta(metadata)}');
	}

	function formatMeta(metadata:BuilderResolvedSettings):String {
		@:nullSafety(Off) if (!metadata.hasSettings())
			return "";
		var parts:Array<String> = [];
		@:nullSafety(Off) for (key in metadata.keys()) {
			// Skip internal keys (bind, events, cursor.*)
			if (key == "bind" || key == "autoStatus" || key == "events" || StringTools.startsWith(key, "cursor"))
				continue;
			parts.push('$key=${metadata.getStringOrDefault(key, "?")}');
		}
		return parts.length > 0 ? "{ " + parts.join(", ") + " }" : "";
	}

	function updateStatus(fieldName:String, text:String):Void {
		if (demoResult == null)
			return;
		final updatable = demoResult.getUpdatable(fieldName);
		if (updatable != null)
			updatable.updateText(text);
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		richHelper = null;
	}
}
