package screens.graphics;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

/**
 * Text centred in a box, from demos/graphics/text-centring.manim: each font placed by
 * `$ctx.font(f).lineHeight` and by the capitals' box (`$ctx.font(f).capTop` / `.capHeight`).
 * The slider only calls `setParameter("h", …)`; the rows are dynamicRefs that follow it.
 */
class TextCentringDemoScreen extends DemoScreenBase {
	var builder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var heightSlider:Null<UIStandardMultiAnimSlider>;

	override public function load():Void {
		setupDemo("Text Centring", "A label centred in a box by lineHeight and by the capitals' box ($ctx.font(f).capTop / .capHeight), for pixel and distance-field fonts");

		builder = screenManager.buildFromResourceName("demos/graphics/text-centring.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(builder, "textCentringDemo", [], [
			heightSlider => addSlider(stdBuilder, 24),
		], true);
		demoResult = ui.builderResults;
		heightSlider = ui.heightSlider;

		heightSlider.min = 12;
		heightSlider.max = 40;
		heightSlider.step = 1;
		heightSlider.setIntValue(24);

		addBuilderResult(demoResult);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIChangeValue(value):
				if (demoResult != null && source == heightSlider)
					demoResult.setParameter("h", value);
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		builder = null;
		demoResult = null;
		heightSlider = null;
	}
}
