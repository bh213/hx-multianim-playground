package screens.advanced;

import bh.ui.UIInteractiveSource;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class LoadoutRuntimeDemoScreen extends LoadoutLabDemoBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;

	override function buildLoadout():UIInteractiveSource {
		setupDemo("Loadout Lab (runtime)",
			"Hot-reload path: .manim is parsed at runtime. Edit the file - changes appear without a Haxe rebuild. Pair this with 'Loadout Lab (codegen)' to compare.");

		demoBuilder = screenManager.buildFromResourceName("demos/advanced/loadout-lab.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "loadoutLab", [], [
			sliderX          => addSlider(stdBuilder, 8),
			sliderY          => addSlider(stdBuilder, 5),
			btnThemeA        => addButtonWithSingleBuilder(stdBuilder, "button", "A"),
			btnThemeB        => addButtonWithSingleBuilder(stdBuilder, "button", "B"),
			btnThemeC        => addButtonWithSingleBuilder(stdBuilder, "button", "C"),
			btnLayoutRow     => addButtonWithSingleBuilder(stdBuilder, "button", "Row"),
			btnLayoutGrid    => addButtonWithSingleBuilder(stdBuilder, "button", "Grid"),
			btnLayoutNested  => addButtonWithSingleBuilder(stdBuilder, "button", "Nested"),
		], true);

		demoResult = ui.builderResults;
		this.sliderX = ui.sliderX;
		this.sliderY = ui.sliderY;
		this.btnThemeA = ui.btnThemeA;
		this.btnThemeB = ui.btnThemeB;
		this.btnThemeC = ui.btnThemeC;
		this.btnLayoutRow = ui.btnLayoutRow;
		this.btnLayoutGrid = ui.btnLayoutGrid;
		this.btnLayoutNested = ui.btnLayoutNested;

		sliderX.min = 1; sliderX.max = 18; sliderX.step = 1;
		sliderY.min = 1; sliderY.max = 8;  sliderY.step = 1;

		addBuilderResult(demoResult);
		return demoResult;
	}

	override function setUpdatableText(name:String, text:String):Void {
		if (demoResult == null) return;
		final u = demoResult.getUpdatable(name);
		if (u != null) u.updateText(text);
	}

	override function setIndexedText1D(name:String, idx:Int, text:String):Void {
		// Runtime keys 1D indexed names as `"$name $idx"` in the internal map.
		if (demoResult == null) return;
		final key = '$name $idx';
		if (demoResult.hasName(key)) {
			final u = demoResult.getUpdatable(key);
			if (u != null) u.updateText(text);
		}
	}

	override function setIndexedText2D(name:String, x:Int, y:Int, text:String):Void {
		if (demoResult == null) return;
		final key = '$name $x $y';
		if (demoResult.hasName(key)) {
			final u = demoResult.getUpdatable(key);
			if (u != null) u.updateText(text);
		}
	}

	override function disposeLoadout():Void {
		demoBuilder = null;
		demoResult = null;
	}
}
