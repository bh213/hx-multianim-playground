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

	var cellResults:Array<Null<BuilderResult>> = [];
	var cellPreviews:Array<Null<BuilderResult>> = [];
	var cellSliders:Array<Array<UIStandardMultiAnimSlider>> = [];
	var cellChecks:Array<Array<UIStandardMultiCheckbox>> = [];

	static final NUM_FILTERS = 9;
	static final PREVIEW_NAMES = [
		"outlinePreview", "glowPreview", "blurPreview", "saturatePreview", "brightnessPreview", "dropShadowPreview",
		"grayscalePreview", "huePreview", "pixelOutlinePreview",
	];
	static final SLIDER_PARAMS = [
		["outlineSize"],
		["glowAlpha", "glowRadius"],
		["blurRadius", "blurGain"],
		["satValue"],
		["brightValue"],
		["dsDist", "dsAngle", "dsAlpha", "dsRadius"],
		["gsValue"],
		["hueValue"],
		["poStrength"],
	];
	static final CHECK_PARAMS:Array<Array<String>> = [
		[],
		["glowSmooth", "glowKnockout"],
		[],
		[],
		[],
		["dsSmooth"],
		[],
		[],
		[],
	];
	static final VALUE_LABELS = [
		["sizeValue"],
		["alphaValue", "radiusValue"],
		["radiusValue", "gainValue"],
		["valueText"],
		["valueText"],
		["distValue", "angleValue", "alphaValue", "radiusValue"],
		["valueText"],
		["valueText"],
		["strengthValue"],
	];
	static final SLIDER_DEFAULTS:Array<Array<Float>> = [
		[1.0],
		[0.8, 8],
		[4, 1.0],
		[0.0],
		[1.5],
		[3, 30, 0.5, 6],
		[1.0],
		[0.0],
		[0.5],
	];

	override public function load():Void {
		setupDemo("Filters", "Visual filters on sprites: outline, glow, blur, saturate, brightness, dropShadow, grayscale, hue, pixelOutline");

		demoBuilder = screenManager.buildFromResourceName("demos/animation/filters.manim", false);
		checkboxBuilder = screenManager.buildFromResourceName("checkbox.manim", false);

		scrollableList = addScrollableListWithSingleBuilder(stdBuilder, "list-panel", "list-item-120", "scrollbar", "scrollbar", TestBitmaps.ALL_ITEMS,
			null, 0, 160, 200);
		addElement(scrollableList, null);

		for (i in 0...NUM_FILTERS) {
			cellResults.push(null);
			cellPreviews.push(null);
			cellSliders.push([]);
			cellChecks.push([]);
		}

		// Build each filter cell with its specific sliders/checkboxes
		var o = MacroUtils.macroBuildWithParameters(demoBuilder, "outlineCell", [], [sSize => addSlider(stdBuilder, 0)]);
		cellResults[0] = o.builderResults;
		cellSliders[0] = [o.sSize];

		var g = MacroUtils.macroBuildWithParameters(demoBuilder, "glowCell", [], [
			sAlpha => addSlider(stdBuilder, 0),
			sRadius => addSlider(stdBuilder, 0),
			cSmooth => addCheckbox(checkboxBuilder, null),
			cKnockout => addCheckbox(checkboxBuilder, null),
		]);
		cellResults[1] = g.builderResults;
		cellSliders[1] = [g.sAlpha, g.sRadius];
		cellChecks[1] = [g.cSmooth, g.cKnockout];

		var b = MacroUtils.macroBuildWithParameters(demoBuilder, "blurCell", [], [
			sRadius => addSlider(stdBuilder, 0),
			sGain => addSlider(stdBuilder, 0),
		]);
		cellResults[2] = b.builderResults;
		cellSliders[2] = [b.sRadius, b.sGain];

		var s = MacroUtils.macroBuildWithParameters(demoBuilder, "saturateCell", [], [sValue => addSlider(stdBuilder, 0)]);
		cellResults[3] = s.builderResults;
		cellSliders[3] = [s.sValue];

		var br = MacroUtils.macroBuildWithParameters(demoBuilder, "brightnessCell", [], [sValue => addSlider(stdBuilder, 0)]);
		cellResults[4] = br.builderResults;
		cellSliders[4] = [br.sValue];

		var ds = MacroUtils.macroBuildWithParameters(demoBuilder, "dropShadowCell", [], [
			sDist => addSlider(stdBuilder, 0),
			sAngle => addSlider(stdBuilder, 0),
			sAlpha => addSlider(stdBuilder, 0),
			sRadius => addSlider(stdBuilder, 0),
			cSmooth => addCheckbox(checkboxBuilder, null),
		]);
		cellResults[5] = ds.builderResults;
		cellSliders[5] = [ds.sDist, ds.sAngle, ds.sAlpha, ds.sRadius];
		cellChecks[5] = [ds.cSmooth];

		var gs = MacroUtils.macroBuildWithParameters(demoBuilder, "grayscaleCell", [], [sValue => addSlider(stdBuilder, 0)]);
		cellResults[6] = gs.builderResults;
		cellSliders[6] = [gs.sValue];

		var hu = MacroUtils.macroBuildWithParameters(demoBuilder, "hueCell", [], [sValue => addSlider(stdBuilder, 0)]);
		cellResults[7] = hu.builderResults;
		cellSliders[7] = [hu.sValue];

		var po = MacroUtils.macroBuildWithParameters(demoBuilder, "pixelOutlineCell", [], [sStrength => addSlider(stdBuilder, 0)]);
		cellResults[8] = po.builderResults;
		cellSliders[8] = [po.sStrength];

		// Set initial slider values (after min/max/step configured from manim settings)
		for (cellIdx in 0...NUM_FILTERS)
			for (sIdx in 0...cellSliders[cellIdx].length)
				cellSliders[cellIdx][sIdx].setFloatValue(SLIDER_DEFAULTS[cellIdx][sIdx]);

		// Build layout with all cells
		layoutResult = demoBuilder.buildWithParameters("filtersLayout", [], {
			placeholderObjects: [
				"bitmapList" => PVObject(scrollableList.getObject()),
				"cell0" => PVObject(cellResults[0].object),
				"cell1" => PVObject(cellResults[1].object),
				"cell2" => PVObject(cellResults[2].object),
				"cell3" => PVObject(cellResults[3].object),
				"cell4" => PVObject(cellResults[4].object),
				"cell5" => PVObject(cellResults[5].object),
				"cell6" => PVObject(cellResults[6].object),
				"cell7" => PVObject(cellResults[7].object),
				"cell8" => PVObject(cellResults[8].object),
			]
		});
		addBuilderResult(layoutResult);

		for (i in 0...NUM_FILTERS)
			buildPreview(i);
	}

	function buildPreview(cellIdx:Int):Void {
		if (cellPreviews[cellIdx] != null)
			cellPreviews[cellIdx].object.remove();
		final result = cellResults[cellIdx];
		if (result == null) return;

		var params:Map<String, Dynamic> = ["bitmapType" => activeBitmapType];
		for (i in 0...cellSliders[cellIdx].length)
			params.set(SLIDER_PARAMS[cellIdx][i], cellSliders[cellIdx][i].getFloatValue());
		for (i in 0...cellChecks[cellIdx].length)
			params.set(CHECK_PARAMS[cellIdx][i], cellChecks[cellIdx][i].selected ? 1 : 0);

		var preview = demoBuilder.buildWithParameters(PREVIEW_NAMES[cellIdx], params);
		preview.object.setPosition(10, 14);
		result.object.addChild(preview.object);
		cellPreviews[cellIdx] = preview;
	}

	function findCellForSource(source:Null<UIElement>):Int {
		for (cellIdx in 0...NUM_FILTERS) {
			for (s in cellSliders[cellIdx])
				if (source == s) return cellIdx;
			for (c in cellChecks[cellIdx])
				if (source == c) return cellIdx;
		}
		return -1;
	}

	function findSliderIdx(cellIdx:Int, source:Null<UIElement>):Int {
		for (i in 0...cellSliders[cellIdx].length)
			if (source == cellSliders[cellIdx][i]) return i;
		return -1;
	}

	function formatFloat(v:Float):String {
		return Std.string(Math.round(v * 100) / 100);
	}

	function setCellText(cellIdx:Int, name:String, text:String):Void {
		final result = cellResults[cellIdx];
		if (result == null) return;
		final updatable = result.getUpdatable(name);
		if (updatable != null) updatable.updateText(text);
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
					buildPreview(cellIdx);
					final sIdx = findSliderIdx(cellIdx, source);
					if (sIdx >= 0)
						setCellText(cellIdx, VALUE_LABELS[cellIdx][sIdx], formatFloat(cellSliders[cellIdx][sIdx].getFloatValue()));
				}
			case UIChangeFloatValue(value):
				final cellIdx = findCellForSource(source);
				if (cellIdx >= 0) {
					buildPreview(cellIdx);
					final sIdx = findSliderIdx(cellIdx, source);
					if (sIdx >= 0)
						setCellText(cellIdx, VALUE_LABELS[cellIdx][sIdx], formatFloat(cellSliders[cellIdx][sIdx].getFloatValue()));
				}
			case UIToggle(pressed):
				final cellIdx = findCellForSource(source);
				if (cellIdx >= 0)
					buildPreview(cellIdx);
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
