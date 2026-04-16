package screens.advanced;

import bh.ui.UIElement;
import bh.ui.UIInteractiveSource;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.multianim.MultiAnimBuilder.BuilderResolvedSettings;

/** Shared logic for the Loadout Lab demo pair. Exercises repeatable /
 *  repeatable2d / nested repeatable / @switch / conditionals — the .manim
 *  layout switch picks between three different repeatable constructs, and
 *  X/Y sliders drive the `countX` / `countY` params that feed the step() iter.
 *
 *  Subclasses differ only in how the .manim instance is constructed (runtime
 *  MultiAnimBuilder vs @:manim codegen) and how updatable text is addressed. */
class LoadoutLabDemoBase extends DemoScreenBase {
	static final THEMES = ["a", "b", "c"];
	static final LAYOUTS = ["row", "grid", "nested"];

	var loadout:Null<UIInteractiveSource>;

	// Widget handles — populated by subclass buildLoadout() so the shared
	// event handler below can identity-match event sources.
	var sliderX:Null<UIStandardMultiAnimSlider>;
	var sliderY:Null<UIStandardMultiAnimSlider>;
	var btnThemeA:Null<UIStandardMultiAnimButton>;
	var btnThemeB:Null<UIStandardMultiAnimButton>;
	var btnThemeC:Null<UIStandardMultiAnimButton>;
	var btnLayoutRow:Null<UIStandardMultiAnimButton>;
	var btnLayoutGrid:Null<UIStandardMultiAnimButton>;
	var btnLayoutNested:Null<UIStandardMultiAnimButton>;

	var themeIdx:Int = 1; // b
	var layoutIdx:Int = 1; // grid
	var countX:Int = 8;
	var countY:Int = 5;

	// Auto-tick: every TICK_INTERVAL seconds pick a random cell in the
	// current layout and bump its counter. Counts live here so they persist
	// across layout rebuilds (cell text resets to "0" on rebuild, we re-push).
	static inline var TICK_INTERVAL = 0.25;
	var tickAcc:Float = 0;
	var rowCellCounts:Array<Int> = [];
	var gridCellCounts:Array<Array<Int>> = [];
	var nestedCellCounts:Array<Array<Int>> = [];

	// --- Subclass hooks ------------------------------------------------------

	function buildLoadout():UIInteractiveSource {
		throw "LoadoutLabDemoBase.buildLoadout must be overridden";
	}

	/** Write `text` into the named `(updatable)` element. Runtime path uses
	 *  `BuilderResult.getUpdatable`; codegen path casts `instance.get_name()`. */
	function setUpdatableText(name:String, text:String):Void {
		throw "LoadoutLabDemoBase.setUpdatableText must be overridden";
	}

	/** Write text into an indexed updatable `#name[$x]` inside a repeatable.
	 *  Runtime constructs the `'name x'` key; codegen calls `inst.get_name(x)`
	 *  and casts to h2d.Text. */
	function setIndexedText1D(name:String, idx:Int, text:String):Void {
		throw "LoadoutLabDemoBase.setIndexedText1D must be overridden";
	}

	/** Write text into an indexed updatable `#name[$x, $y]` inside a
	 *  repeatable2d (or nested repeatables). */
	function setIndexedText2D(name:String, x:Int, y:Int, text:String):Void {
		throw "LoadoutLabDemoBase.setIndexedText2D must be overridden";
	}

	function disposeLoadout():Void {}

	// --- Lifecycle -----------------------------------------------------------

	override public function load():Void {
		loadout = buildLoadout();
		addInteractives(loadout);
		applyAllParams();
		refreshTexts();
	}

	override public function update(dt:Float):Void {
		super.update(dt);
		if (loadout == null) return;
		tickAcc += dt;
		while (tickAcc >= TICK_INTERVAL) {
			tickAcc -= TICK_INTERVAL;
			tickRandomCell();
		}
	}

	function tickRandomCell():Void {
		switch (layoutIdx) {
			case 0: // row — 1D, ignores countY
				final x = Std.random(countX);
				while (rowCellCounts.length < countX) rowCellCounts.push(0);
				rowCellCounts[x]++;
				setIndexedText1D("rowCell", x, '${rowCellCounts[x]}');
			case 1: // grid
				final x = Std.random(countX);
				final y = Std.random(countY);
				while (gridCellCounts.length <= y) gridCellCounts.push([]);
				while (gridCellCounts[y].length <= x) gridCellCounts[y].push(0);
				gridCellCounts[y][x]++;
				setIndexedText2D("gridCell", x, y, '${gridCellCounts[y][x]}');
			case 2: // nested
				final x = Std.random(countX);
				final y = Std.random(countY);
				while (nestedCellCounts.length <= y) nestedCellCounts.push([]);
				while (nestedCellCounts[y].length <= x) nestedCellCounts[y].push(0);
				nestedCellCounts[y][x]++;
				setIndexedText2D("nestedCell", x, y, '${nestedCellCounts[y][x]}');
			default:
		}
	}

	/** Re-push every remembered cell count into the freshly-rebuilt cells.
	 *  Called after a param change rebuilds the repeatable pool — cell text
	 *  defaults back to "0" and we want to restore counts visually. */
	function repaintCellCounts():Void {
		if (loadout == null) return;
		switch (layoutIdx) {
			case 0:
				final n = rowCellCounts.length < countX ? rowCellCounts.length : countX;
				for (x in 0...n)
					if (rowCellCounts[x] != 0) setIndexedText1D("rowCell", x, '${rowCellCounts[x]}');
			case 1:
				repaint2D("gridCell", gridCellCounts);
			case 2:
				repaint2D("nestedCell", nestedCellCounts);
			default:
		}
	}

	function repaint2D(name:String, counts:Array<Array<Int>>):Void {
		final ny = counts.length < countY ? counts.length : countY;
		for (y in 0...ny) {
			final row = counts[y];
			if (row == null) continue;
			final nx = row.length < countX ? row.length : countX;
			for (x in 0...nx)
				if (row[x] != 0) setIndexedText2D(name, x, y, '${row[x]}');
		}
	}

	override public function onClear():Void {
		super.onClear();
		disposeLoadout();
		loadout = null;
		sliderX = null;
		sliderY = null;
		btnThemeA = null;
		btnThemeB = null;
		btnThemeC = null;
		btnLayoutRow = null;
		btnLayoutGrid = null;
		btnLayoutNested = null;
	}

	// --- Shared state writes (via UIInteractiveSource.setParameter) ---------

	function applyAllParams():Void {
		if (loadout == null) return;
		loadout.setParameter("theme", THEMES[themeIdx]);
		loadout.setParameter("layout", LAYOUTS[layoutIdx]);
		loadout.setParameter("countX", countX);
		loadout.setParameter("countY", countY);
	}

	function refreshTexts():Void {
		setUpdatableText("xValue", '$countX');
		setUpdatableText("yValue", '$countY');
		applyDisabledStates();
		clearHover();
	}

	function buildStatusText():String {
		final t = THEMES[themeIdx];
		final l = LAYOUTS[layoutIdx];
		// Row layout ignores Y, so don't show it as "active".
		final ySuffix = layoutIdx == 0 ? "(n/a)" : '$countY';
		return 'theme=$t  |  layout=$l  |  x=$countX  |  y=$ySuffix';
	}

	function clearHover():Void {
		setUpdatableText("hoverText", buildStatusText());
	}

	function showHover(id:String, metadata:Null<BuilderResolvedSettings>):Void {
		final type = metadata != null ? metadata.getStringOrDefault("type", "") : "";
		final action = metadata != null ? metadata.getStringOrDefault("action", "") : "";
		final label = if (type != "") {
			'${buildStatusText()}   -   hover $type $id';
		} else if (action != "") {
			'${buildStatusText()}   -   hover $id';
		} else {
			'${buildStatusText()}   -   hover $id';
		};
		setUpdatableText("hoverText", label);
	}

	/** Disable the currently-selected theme/layout button so the user can tell
	 *  which one is active, and disable the Y slider when the row layout ignores
	 *  it. Called from refreshTexts() and whenever theme/layout changes. */
	function applyDisabledStates():Void {
		if (btnThemeA != null) btnThemeA.disabled = (themeIdx == 0);
		if (btnThemeB != null) btnThemeB.disabled = (themeIdx == 1);
		if (btnThemeC != null) btnThemeC.disabled = (themeIdx == 2);
		if (btnLayoutRow != null) btnLayoutRow.disabled = (layoutIdx == 0);
		if (btnLayoutGrid != null) btnLayoutGrid.disabled = (layoutIdx == 1);
		if (btnLayoutNested != null) btnLayoutNested.disabled = (layoutIdx == 2);
		if (sliderY != null) sliderY.disabled = (layoutIdx == 0);
	}

	// --- Event dispatch ------------------------------------------------------

	override public function onScreenEvent(event:UIScreenEvent, src:Null<UIElement>):Void {
		switch event {
			case UIInteractiveEvent(UIClick, id, _):
				handleClick(id);
			case UIInteractiveEvent(UIEntering(_), id, metadata):
				showHover(id, metadata);
			case UIInteractiveEvent(UILeaving, _, _):
				clearHover();
			case UIClick:
				handleWidgetClick(src);
			case UIChangeValue(value):
				handleSliderChange(src, value);
			default:
		}
		super.onScreenEvent(event, src);
	}

	function handleWidgetClick(src:Null<UIElement>):Void {
		if (src == null) return;
		if (src == btnThemeA)            setTheme(0);
		else if (src == btnThemeB)       setTheme(1);
		else if (src == btnThemeC)       setTheme(2);
		else if (src == btnLayoutRow)    setLayout(0);
		else if (src == btnLayoutGrid)   setLayout(1);
		else if (src == btnLayoutNested) setLayout(2);
	}

	function handleSliderChange(src:Null<UIElement>, value:Float):Void {
		if (src == null || loadout == null) return;
		if (src == sliderX) {
			countX = Std.int(value);
			loadout.setParameter("countX", countX);
			setUpdatableText("xValue", '$countX');
			repaintCellCounts();
			clearHover();
		} else if (src == sliderY) {
			countY = Std.int(value);
			loadout.setParameter("countY", countY);
			setUpdatableText("yValue", '$countY');
			repaintCellCounts();
			clearHover();
		}
	}

	function handleClick(id:String):Void {
		if (id == "btnReset") resetAll();
	}

	// --- State transitions ---------------------------------------------------

	function setTheme(idx:Int):Void {
		themeIdx = idx;
		if (loadout != null) loadout.setParameter("theme", THEMES[idx]);
		applyDisabledStates();
		repaintCellCounts();
		clearHover();
	}

	function setLayout(idx:Int):Void {
		layoutIdx = idx;
		if (loadout != null) loadout.setParameter("layout", LAYOUTS[idx]);
		applyDisabledStates();
		repaintCellCounts();
		clearHover();
	}

	function resetAll():Void {
		themeIdx = 1;
		layoutIdx = 1;
		countX = 8;
		countY = 5;
		rowCellCounts = [];
		gridCellCounts = [];
		nestedCellCounts = [];
		tickAcc = 0;
		applyAllParams();
		refreshTexts();
		if (sliderX != null) sliderX.setIntValue(countX);
		if (sliderY != null) sliderY.setIntValue(countY);
	}
}
