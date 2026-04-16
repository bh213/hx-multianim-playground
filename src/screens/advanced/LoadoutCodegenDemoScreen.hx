package screens.advanced;

import bh.ui.UIInteractiveSource;
import bh.multianim.MultiAnimBuilder.PlaceholderValues;

class LoadoutCodegenDemoScreen extends LoadoutLabDemoBase {
	var codegen:Null<LoadoutCodegenProgrammables>;
	var inst:Null<Dynamic>;

	override function buildLoadout():UIInteractiveSource {
		setupDemo("Loadout Lab (codegen)",
			"Codegen path: same .manim file, but classes are generated at compile time via @:build. UIInteractiveSource interface unifies the runtime and codegen surfaces - state writes go through the same setParameter. Editing the .manim has no visible effect until Haxe recompiles.");

		codegen = new LoadoutCodegenProgrammables(screenManager.loader);

		// Build a Map<String, PlaceholderValues> with PVFactory closures.
		// Each closure creates the widget *with* the .manim settings block
		// (passed as the callback arg) and stores the handle on the base
		// class so the shared event handler can identity-match it.
		final placeholders = new Map<String, PlaceholderValues>();

		placeholders.set("sliderX", PVFactory((settings) -> {
			sliderX = addSlider(stdBuilder, settings, 8);
			sliderX.min = 1; sliderX.max = 18; sliderX.step = 1;
			addElement(sliderX, DefaultLayer);
			return sliderX.getObject();
		}));
		placeholders.set("sliderY", PVFactory((settings) -> {
			sliderY = addSlider(stdBuilder, settings, 5);
			sliderY.min = 1; sliderY.max = 8; sliderY.step = 1;
			addElement(sliderY, DefaultLayer);
			return sliderY.getObject();
		}));
		placeholders.set("btnThemeA", PVFactory((settings) -> {
			btnThemeA = addButtonWithSingleBuilder(stdBuilder, "button", settings, "A");
			addElement(btnThemeA, DefaultLayer);
			return btnThemeA.getObject();
		}));
		placeholders.set("btnThemeB", PVFactory((settings) -> {
			btnThemeB = addButtonWithSingleBuilder(stdBuilder, "button", settings, "B");
			addElement(btnThemeB, DefaultLayer);
			return btnThemeB.getObject();
		}));
		placeholders.set("btnThemeC", PVFactory((settings) -> {
			btnThemeC = addButtonWithSingleBuilder(stdBuilder, "button", settings, "C");
			addElement(btnThemeC, DefaultLayer);
			return btnThemeC.getObject();
		}));
		placeholders.set("btnLayoutRow", PVFactory((settings) -> {
			btnLayoutRow = addButtonWithSingleBuilder(stdBuilder, "button", settings, "Row");
			addElement(btnLayoutRow, DefaultLayer);
			return btnLayoutRow.getObject();
		}));
		placeholders.set("btnLayoutGrid", PVFactory((settings) -> {
			btnLayoutGrid = addButtonWithSingleBuilder(stdBuilder, "button", settings, "Grid");
			addElement(btnLayoutGrid, DefaultLayer);
			return btnLayoutGrid.getObject();
		}));
		placeholders.set("btnLayoutNested", PVFactory((settings) -> {
			btnLayoutNested = addButtonWithSingleBuilder(stdBuilder, "button", settings, "Nested");
			addElement(btnLayoutNested, DefaultLayer);
			return btnLayoutNested.getObject();
		}));

		inst = codegen.loadoutLab.createFrom({}, placeholders);
		addObjectToLayer(inst, DefaultLayer);
		return cast inst;
	}

	override function setUpdatableText(name:String, text:String):Void {
		// Codegen generates a separate `get_<name>()` accessor per named element.
		// Dispatch by name via reflection so this helper can take the same String
		// key shape as the runtime path's getUpdatable.
		final getter = Reflect.field(inst, "get_" + name);
		if (getter == null) return;
		final obj:h2d.Object = Reflect.callMethod(inst, getter, []);
		if (Std.isOfType(obj, h2d.Text)) (cast obj : h2d.Text).text = text;
	}

	override function setIndexedText1D(name:String, idx:Int, text:String):Void {
		// Cells are declared inside the @switch(layout) arm, so the static
		// `get_<name>(idx)` accessor isn't generated. Codegen emits the
		// sink-backed `getUpdatableByIndex(name, idx)` for us instead when any
		// @switch exists in the programmable.
		final obj = inst.getUpdatableByIndex(name, idx);
		if (obj != null && Std.isOfType(obj, h2d.Text)) (cast obj : h2d.Text).text = text;
	}

	override function setIndexedText2D(name:String, x:Int, y:Int, text:String):Void {
		final obj = inst.getUpdatable2D(name, x, y);
		if (obj != null && Std.isOfType(obj, h2d.Text)) (cast obj : h2d.Text).text = text;
	}

	override function disposeLoadout():Void {
		if (inst != null) (inst : h2d.Object).remove();
		inst = null;
		codegen = null;
	}
}
