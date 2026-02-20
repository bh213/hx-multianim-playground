package screens;

import bh.ui.UIElementBuilder;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.base.MacroUtils;
import bh.ui.UIElement;
import bh.multianim.MultiAnimBuilder;

using bh.ui.screens.UIScreen.UIScreenBase;

@:nullSafety
class ColorPickerDialog extends UIScreenBase {
	final initialColor:Int;
	final dialogTitle:String;
	var okButton:Null<UIStandardMultiAnimButton>;
	var cancelButton:Null<UIStandardMultiAnimButton>;
	var sliderR:Null<UIStandardMultiAnimSlider>;
	var sliderG:Null<UIStandardMultiAnimSlider>;
	var sliderB:Null<UIStandardMultiAnimSlider>;
	var dialogBuilder:UIElementBuilder;
	var okButtonBuilder:UIElementBuilder;
	var cancelButtonBuilder:UIElementBuilder;
	var sliderBuilder:MultiAnimBuilder;
	var dialogResult:Null<BuilderResult>;

	public function new(screenManager, dialogBuilder:UIElementBuilder, okButtonBuilder:UIElementBuilder, cancelButtonBuilder:UIElementBuilder,
			sliderBuilder:MultiAnimBuilder, dialogTitle:String, initialColor:Int) {
		super(screenManager);
		this.dialogBuilder = dialogBuilder;
		this.okButtonBuilder = okButtonBuilder;
		this.cancelButtonBuilder = cancelButtonBuilder;
		this.sliderBuilder = sliderBuilder;
		this.dialogTitle = dialogTitle;
		this.initialColor = initialColor;
	}

	public function load() {
		var dialog = MacroUtils.macroBuildWithParameters(dialogBuilder.builder, dialogBuilder.name, ["dialogTitle" => dialogTitle], [
			ok => addButton(okButtonBuilder, "OK"),
			cancel => addButton(cancelButtonBuilder, "Cancel"),
			sliderR => addSlider(sliderBuilder, 0),
			sliderG => addSlider(sliderBuilder, 0),
			sliderB => addSlider(sliderBuilder, 0),
		]);

		addBuilderResult(dialog.builderResults);
		this.okButton = dialog.ok;
		this.cancelButton = dialog.cancel;
		this.sliderR = dialog.sliderR;
		this.sliderG = dialog.sliderG;
		this.sliderB = dialog.sliderB;
		this.dialogResult = dialog.builderResults;

		// Set initial color
		final r = (initialColor >> 16) & 0xFF;
		final g = (initialColor >> 8) & 0xFF;
		final b = initialColor & 0xFF;
		if (sliderR != null) sliderR.setFloatValue(r);
		if (sliderG != null) sliderG.setFloatValue(g);
		if (sliderB != null) sliderB.setFloatValue(b);
		updatePreview();
	}

	function getCurrentColor():Int {
		final r = sliderR != null ? Std.int(sliderR.getFloatValue()) : 0;
		final g = sliderG != null ? Std.int(sliderG.getFloatValue()) : 0;
		final b = sliderB != null ? Std.int(sliderB.getFloatValue()) : 0;
		return (r << 16) | (g << 8) | b;
	}

	function updatePreview():Void {
		if (dialogResult == null) return;
		final color = getCurrentColor();

		final previewUpdatable = dialogResult.getUpdatable("colorPreview");
		if (previewUpdatable != null)
			previewUpdatable.updateTile(h2d.Tile.fromColor(color, 100, 60));

		final hexUpdatable = dialogResult.getUpdatable("hexValue");
		if (hexUpdatable != null)
			hexUpdatable.updateText("#" + StringTools.hex(color, 6));

		final rUpdatable = dialogResult.getUpdatable("rValue");
		if (rUpdatable != null) rUpdatable.updateText(Std.string(sliderR != null ? Std.int(sliderR.getFloatValue()) : 0));
		final gUpdatable = dialogResult.getUpdatable("gValue");
		if (gUpdatable != null) gUpdatable.updateText(Std.string(sliderG != null ? Std.int(sliderG.getFloatValue()) : 0));
		final bUpdatable = dialogResult.getUpdatable("bValue");
		if (bUpdatable != null) bUpdatable.updateText(Std.string(sliderB != null ? Std.int(sliderB.getFloatValue()) : 0));
	}

	public function onScreenEvent(event:UIScreenEvent, source:UIElement) {
		switch event {
			case UIKeyPress(keyCode, release):
				if (keyCode == hxd.Key.ENTER) {
					this.getController().exitResponse = getCurrentColor();
				} else if (keyCode == hxd.Key.ESCAPE) {
					this.getController().exitResponse = false;
				}
			case UIClick:
				if (source == this.okButton) {
					this.getController().exitResponse = getCurrentColor();
				} else if (source == this.cancelButton) {
					this.getController().exitResponse = false;
				}
			case UIChangeValue(value):
				if (source == sliderR || source == sliderG || source == sliderB)
					updatePreview();
			case UIChangeFloatValue(value):
				if (source == sliderR || source == sliderG || source == sliderB)
					updatePreview();
			default:
		}
	}
}
