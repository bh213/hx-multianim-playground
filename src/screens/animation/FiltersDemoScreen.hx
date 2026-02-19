package screens.animation;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimScrollableList;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

class FiltersDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var checkboxBuilder:Null<MultiAnimBuilder>;
	var layoutResult:Null<BuilderResult>;
	var scrollableList:Null<UIMultiAnimScrollableList>;
	var activeBitmapType:String = "rectBlack";

	// 6 filter cells (outline, glow, blur, saturate, brightness, dropShadow)
	var cellResults:Array<Null<BuilderResult>> = [];
	var cellPreviews:Array<Null<BuilderResult>> = [];
	var cellSliders:Array<Array<UIStandardMultiAnimSlider>> = [];
	var cellChecks:Array<Array<UIStandardMultiCheckbox>> = [];

	static final NUM_FILTERS = 6;
	static final FILTER_NAMES = ["outline", "glow", "blur", "saturate", "brightness", "dropShadow"];

	override public function load():Void {
		setupDemo("Filters", "Visual filters on sprites: outline, glow, blur, saturate, brightness, dropShadow");

		demoBuilder = screenManager.buildFromResourceName("demos/animation/filters.manim", false);
		checkboxBuilder = screenManager.buildFromResourceName("checkbox.manim", false);

		// Build scrollable list for bitmap selection
		scrollableList = addScrollableListWithSingleBuilder(stdBuilder, "list-panel", "list-item-120", "scrollbar", "scrollbar", TestBitmaps.ALL_ITEMS,
			null, 0, 160, 200);
		addElement(scrollableList, null);

		// Initialize cell arrays
		for (i in 0...NUM_FILTERS) {
			cellResults.push(null);
			cellPreviews.push(null);
			cellSliders.push([]);
			cellChecks.push([]);
		}

		// Build all 6 filter cells first (registers sliders/checkboxes for events via macro)
		for (i in 0...NUM_FILTERS)
			buildFilterCell(i);

		// Build layout with bitmap list + all 6 cells injected into grid placeholders
		layoutResult = demoBuilder.buildWithParameters("filtersLayout", [], {
			placeholderObjects: [
				"bitmapList" => PVObject(scrollableList.getObject()),
				"cell0" => PVObject(cellResults[0].object),
				"cell1" => PVObject(cellResults[1].object),
				"cell2" => PVObject(cellResults[2].object),
				"cell3" => PVObject(cellResults[3].object),
				"cell4" => PVObject(cellResults[4].object),
				"cell5" => PVObject(cellResults[5].object),
			]
		});
		addBuilderResult(layoutResult);

		// Configure cells and build previews
		for (i in 0...NUM_FILTERS) {
			configureCell(i);
			buildPreview(i);
		}
	}

	function buildFilterCell(idx:Int):Void {
		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "filterCell", [], [
			s1 => addSlider(stdBuilder, 0),
			s2 => addSlider(stdBuilder, 0),
			s3 => addSlider(stdBuilder, 0),
			s4 => addSlider(stdBuilder, 0),
			c1 => addCheckbox(checkboxBuilder, false),
			c2 => addCheckbox(checkboxBuilder, false),
		]);

		cellResults[idx] = ui.builderResults;
		cellSliders[idx] = [ui.s1, ui.s2, ui.s3, ui.s4];
		cellChecks[idx] = [ui.c1, ui.c2];
	}

	function configureCell(idx:Int):Void {
		final result = cellResults[idx];
		if (result == null) return;
		final sliders = cellSliders[idx];
		final checks = cellChecks[idx];

		// Set filter name
		setCellText(idx, "cellName", FILTER_NAMES[idx]);

		// Hide all controls first
		for (i in 0...4)
			setSliderVisible(sliders[i], false);
		for (i in 0...2)
			setCheckVisible(checks[i], false);

		// Clear all labels
		for (i in 1...5) {
			setCellText(idx, 's${i}Label', "");
			setCellText(idx, 's${i}Value', "");
		}
		setCellText(idx, "c1Label", "");
		setCellText(idx, "c2Label", "");

		switch (FILTER_NAMES[idx]) {
			case "outline":
				configSlider(idx, 0, "Size", 0, 5, 0.1, 1.0);
			case "glow":
				configSlider(idx, 0, "Alpha", 0, 1, 0.05, 0.8);
				configSlider(idx, 1, "Radius", 0, 50, 1, 8);
				configCheck(idx, 0, "Smooth", true);
				configCheck(idx, 1, "Knockout", false);
			case "blur":
				configSlider(idx, 0, "Radius", 0, 20, 0.5, 4);
				configSlider(idx, 1, "Gain", 0, 5, 0.1, 1.0);
			case "saturate":
				configSlider(idx, 0, "Value", 0, 2, 0.05, 0.0);
			case "brightness":
				configSlider(idx, 0, "Value", 0, 3, 0.05, 1.5);
			case "dropShadow":
				configSlider(idx, 0, "Dist", 0, 20, 0.5, 3);
				configSlider(idx, 1, "Angle", 0, 360, 5, 30);
				configSlider(idx, 2, "Alpha", 0, 1, 0.05, 0.5);
				configSlider(idx, 3, "Radius", 0, 20, 0.5, 6);
				configCheck(idx, 0, "Smooth", false);
			default:
		}
	}

	function configSlider(cellIdx:Int, sliderIdx:Int, label:String, min:Float, max:Float, step:Float, initial:Float):Void {
		final slider = cellSliders[cellIdx][sliderIdx];
		slider.min = min;
		slider.max = max;
		slider.step = step;
		slider.setFloatValue(initial);
		setSliderVisible(slider, true);
		setCellText(cellIdx, 's${sliderIdx + 1}Label', label);
		setCellText(cellIdx, 's${sliderIdx + 1}Value', formatFloat(initial));
	}

	function configCheck(cellIdx:Int, checkIdx:Int, label:String, initial:Bool):Void {
		final cb = cellChecks[cellIdx][checkIdx];
		cb.selected = initial;
		setCheckVisible(cb, true);
		setCellText(cellIdx, 'c${checkIdx + 1}Label', label);
	}

	function setSliderVisible(slider:UIStandardMultiAnimSlider, visible:Bool):Void {
		slider.getObject().visible = visible;
	}

	function setCheckVisible(cb:UIStandardMultiCheckbox, visible:Bool):Void {
		cb.getObject().visible = visible;
	}

	function setCellText(cellIdx:Int, name:String, text:String):Void {
		final result = cellResults[cellIdx];
		if (result == null) return;
		final updatable = result.getUpdatable(name);
		if (updatable != null) updatable.updateText(text);
	}

	function buildPreview(cellIdx:Int):Void {
		if (cellPreviews[cellIdx] != null) {
			cellPreviews[cellIdx].object.remove();
		}
		final result = cellResults[cellIdx];
		if (result == null) return;

		var preview = demoBuilder.buildWithParameters("bitmapPreview", ["bitmapType" => activeBitmapType]);
		preview.object.setPosition(10, 20);
		result.object.addChild(preview.object);
		cellPreviews[cellIdx] = preview;
		applyFilter(cellIdx);
	}

	function applyFilter(cellIdx:Int):Void {
		final preview = cellPreviews[cellIdx];
		if (preview == null) return;
		final obj = preview.object;
		final sliders = cellSliders[cellIdx];
		final checks = cellChecks[cellIdx];

		switch (FILTER_NAMES[cellIdx]) {
			case "outline":
				obj.filter = new h2d.filter.Outline(sliders[0].getFloatValue(), 0xff0000);
			case "glow":
				final f = new h2d.filter.Glow(0xffaa00, sliders[0].getFloatValue(), sliders[1].getFloatValue(), 1.0, 1.0, checks[0].selected);
				f.knockout = checks[1].selected;
				obj.filter = f;
			case "blur":
				obj.filter = new h2d.filter.Blur(sliders[0].getFloatValue(), sliders[1].getFloatValue(), 1.0, 0.0);
			case "saturate":
				var m = new h3d.Matrix();
				m.identity();
				m.colorSaturate(sliders[0].getFloatValue());
				obj.filter = new h2d.filter.ColorMatrix(m);
			case "brightness":
				var m = new h3d.Matrix();
				m.identity();
				m.colorLightness(sliders[0].getFloatValue());
				obj.filter = new h2d.filter.ColorMatrix(m);
			case "dropShadow":
				obj.filter = new h2d.filter.DropShadow(sliders[0].getFloatValue(), hxd.Math.degToRad(sliders[1].getFloatValue()),
					0x000000, sliders[2].getFloatValue(), sliders[3].getFloatValue(), 1.0, 1.0, checks[0].selected);
			default:
		}
	}

	function findCellForSource(source:Null<UIElement>):Int {
		for (cellIdx in 0...NUM_FILTERS) {
			for (s in cellSliders[cellIdx]) {
				if (source == s) return cellIdx;
			}
			for (c in cellChecks[cellIdx]) {
				if (source == c) return cellIdx;
			}
		}
		return -1;
	}

	function findSliderIdx(cellIdx:Int, source:Null<UIElement>):Int {
		for (i in 0...cellSliders[cellIdx].length) {
			if (source == cellSliders[cellIdx][i]) return i;
		}
		return -1;
	}

	function formatFloat(v:Float):String {
		final rounded = Math.round(v * 100) / 100;
		return Std.string(rounded);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIDoubleClickItem(index, items):
				if (source == scrollableList && index >= 0 && index < TestBitmaps.ALL_TYPES.length) {
					activeBitmapType = TestBitmaps.ALL_TYPES[index];
					for (i in 0...NUM_FILTERS)
						buildPreview(i);
					if (layoutResult != null) {
						final updatable = layoutResult.getUpdatable("selectedText");
						if (updatable != null) updatable.updateText('Active: ${TestBitmaps.getName(activeBitmapType)}');
					}
				}
			case UIChangeValue(value):
				final cellIdx = findCellForSource(source);
				if (cellIdx >= 0) {
					applyFilter(cellIdx);
					final sIdx = findSliderIdx(cellIdx, source);
					if (sIdx >= 0)
						setCellText(cellIdx, 's${sIdx + 1}Value', formatFloat(cellSliders[cellIdx][sIdx].getFloatValue()));
				}
			case UIChangeFloatValue(value):
				final cellIdx = findCellForSource(source);
				if (cellIdx >= 0) {
					applyFilter(cellIdx);
					final sIdx = findSliderIdx(cellIdx, source);
					if (sIdx >= 0)
						setCellText(cellIdx, 's${sIdx + 1}Value', formatFloat(cellSliders[cellIdx][sIdx].getFloatValue()));
				}
			case UIToggle(pressed):
				final cellIdx = findCellForSource(source);
				if (cellIdx >= 0)
					applyFilter(cellIdx);
			default:
		}
		super.onScreenEvent(event, source);
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		checkboxBuilder = null;
		layoutResult = null;
		scrollableList = null;
		cellResults = [];
		cellPreviews = [];
		cellSliders = [];
		cellChecks = [];
	}
}
