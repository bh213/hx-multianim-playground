package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

/**
 * Tile maps with no rows written, from demos/gamelike/tilemap-fill.manim: `tilemap(fill(…))` makes a
 * map of one terrain where it is placed, its terrain and size parameters of the programmable. The
 * buttons and sliders only call `setParameter`: the maps are made again in place.
 */
class TilemapFillDemoScreen extends DemoScreenBase {
	var builder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var waterButton:Null<UIStandardMultiAnimButton>;
	var dirtButton:Null<UIStandardMultiAnimButton>;
	var grassButton:Null<UIStandardMultiAnimButton>;
	var colsSlider:Null<UIStandardMultiAnimSlider>;
	var rowsSlider:Null<UIStandardMultiAnimSlider>;

	override public function load():Void {
		setupDemo("Tile Fill", "tilemap(fill(...)): a map of one terrain made where it is placed, its terrain and size parameters; change one and it is made again in place");

		builder = screenManager.buildFromResourceName("demos/gamelike/tilemap-fill.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(builder, "tilemapFillDemo", [], [
			waterBtn => addButtonWithSingleBuilder(stdBuilder, "button", "Water"),
			dirtBtn => addButtonWithSingleBuilder(stdBuilder, "button", "Dirt"),
			grassBtn => addButtonWithSingleBuilder(stdBuilder, "button", "Grass"),
			colsSlider => addSlider(stdBuilder, 8),
			rowsSlider => addSlider(stdBuilder, 4),
		], true);
		demoResult = ui.builderResults;
		waterButton = ui.waterBtn;
		dirtButton = ui.dirtBtn;
		grassButton = ui.grassBtn;
		colsSlider = ui.colsSlider;
		rowsSlider = ui.rowsSlider;

		colsSlider.min = 1; colsSlider.max = 16; colsSlider.step = 1;
		rowsSlider.min = 1; rowsSlider.max = 8; rowsSlider.step = 1;

		addBuilderResult(demoResult);
		updateSelection("water");
	}

	function setTerrain(terrain:String):Void {
		if (demoResult != null)
			demoResult.setParameter("terrain", terrain);
		updateSelection(terrain);
	}

	function updateSelection(terrain:String):Void {
		if (waterButton != null) waterButton.getObject().alpha = terrain == "water" ? 1.0 : 0.4;
		if (dirtButton != null) dirtButton.getObject().alpha = terrain == "dirt" ? 1.0 : 0.4;
		if (grassButton != null) grassButton.getObject().alpha = terrain == "grass" ? 1.0 : 0.4;
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == waterButton)
					setTerrain("water");
				else if (source == dirtButton)
					setTerrain("dirt");
				else if (source == grassButton)
					setTerrain("grass");
			case UIChangeValue(value):
				if (demoResult == null)
					return;
				if (source == colsSlider)
					demoResult.setParameter("cols", value);
				else if (source == rowsSlider)
					demoResult.setParameter("rows", value);
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		builder = null;
		demoResult = null;
		waterButton = null;
		dirtButton = null;
		grassButton = null;
		colsSlider = null;
		rowsSlider = null;
	}
}
