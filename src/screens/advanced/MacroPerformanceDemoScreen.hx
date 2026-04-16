package screens.advanced;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.ui.UIMultiAnimDropdown.UIStandardMultiAnimDropdown;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.base.MacroUtils;

@:access(bh.ui.screens.ScreenManager)
class MacroPerformanceDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var controlsResult:Null<BuilderResult>;
	var countDropdown:Null<UIStandardMultiAnimDropdown>;
	var addSimpleBtn:Null<UIStandardMultiAnimButton>;
	var addComplexBtn:Null<UIStandardMultiAnimButton>;
	var addRepeatableBtn:Null<UIStandardMultiAnimButton>;
	var updateBtn:Null<UIStandardMultiAnimButton>;
	var clearBtn:Null<UIStandardMultiAnimButton>;

	var builderContainer:Null<h2d.Object>;
	var incrementalContainer:Null<h2d.Object>;
	var macroContainer:Null<h2d.Object>;

	var builderResults:Array<BuilderResult> = [];
	var incrementalResults:Array<BuilderResult> = [];
	var macroSimpleInstances:Array<Dynamic> = [];
	var macroComplexInstances:Array<Dynamic> = [];
	var macroRepeatableInstances:Array<Dynamic> = [];

	var perfProg:Null<PerfProgrammables>;

	var selectedCount:Int = 100;
	var currentType:String = "simple";
	var repeatableValue:Int = 0;

	static inline final OBJ_AREA_X = 0;
	static inline final OBJ_AREA_Y = 340;
	static inline final OBJ_AREA_W = 1200;
	static inline final OBJ_AREA_H = 360;

	static final COUNT_ITEMS:Array<UIElementListItem> = [
		{name: "1"},
		{name: "100"},
		{name: "1000"},
		{name: "10000"},
	];

	static final COUNT_VALUES:Array<Int> = [1, 100, 1000, 10000];

	static final COLORS:Array<Int> = [0xFF446688, 0xFF884466, 0xFF668844, 0xFF886644, 0xFF448866, 0xFF664488];

	override public function load():Void {
		setupDemo("Macro Performance", "Benchmark: builder vs builder+incremental vs @:manim codegen");

		demoBuilder = screenManager.buildFromResourceName("demos/advanced/macro-performance.manim", false);
		perfProg = new PerfProgrammables(screenManager.loader);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "perfControls", [], [
			countDropdown => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar",
				COUNT_ITEMS, 1),
			addSimpleBtn => addButtonWithSingleBuilder(demoBuilder, "perfButton", "Add Simple"),
			addComplexBtn => addButtonWithSingleBuilder(demoBuilder, "perfButton", "Add Complex"),
			addRepeatableBtn => addButtonWithSingleBuilder(demoBuilder, "perfButton", "Add Repeat"),
			updateBtn => addButtonWithSingleBuilder(demoBuilder, "perfButton", "Update"),
			clearBtn => addButtonWithSingleBuilder(demoBuilder, "perfButton", "Clear"),
		]);

		controlsResult = ui.builderResults;
		countDropdown = ui.countDropdown;
		addSimpleBtn = ui.addSimpleBtn;
		addComplexBtn = ui.addComplexBtn;
		addRepeatableBtn = ui.addRepeatableBtn;
		updateBtn = ui.updateBtn;
		clearBtn = ui.clearBtn;
		addBuilderResult(controlsResult);

		builderContainer = new h2d.Object();
		addObjectToLayer(builderContainer, DefaultLayer);

		incrementalContainer = new h2d.Object();
		addObjectToLayer(incrementalContainer, DefaultLayer);

		macroContainer = new h2d.Object();
		addObjectToLayer(macroContainer, DefaultLayer);
	}

	function addObjects(type:String):Void {
		final count = selectedCount;
		currentType = type;

		if (type == "repeatable") {
			addRepeatableObjects(count);
			return;
		}

		final componentName = type == "simple" ? "perfSimple" : "perfComplex";

		// 1) Builder (non-incremental)
		final t0 = haxe.Timer.stamp();
		for (i in 0...count) {
			final result = demoBuilder.buildWithParameters(componentName, makeParams(type));
			result.object.setPosition(randomX(i), randomY(i));
			builderContainer.addChild(result.object);
			builderResults.push(result);
		}
		final builderMs = (haxe.Timer.stamp() - t0) * 1000;

		// 2) Builder+Incremental
		final t1 = haxe.Timer.stamp();
		for (i in 0...count) {
			final result = demoBuilder.buildWithParameters(componentName, makeParams(type), null, null, true);
			result.object.setPosition(randomX(i + 7919), randomY(i + 7919));
			incrementalContainer.addChild(result.object);
			incrementalResults.push(result);
		}
		final incrMs = (haxe.Timer.stamp() - t1) * 1000;

		// 3) @:manim codegen
		final t2 = haxe.Timer.stamp();
		if (type == "simple") {
			for (i in 0...count) {
				final inst = perfProg.perfSimple.create(Std.random(999), COLORS[Std.random(COLORS.length)]);
				inst.setPosition(randomX(i + 15383), randomY(i + 15383));
				macroContainer.addChild(inst);
				macroSimpleInstances.push(inst);
			}
		} else {
			for (i in 0...count) {
				final inst = perfProg.perfComplex.create(Std.random(100), 100, Std.random(50), 50, 'Unit${Std.random(100)}', 1 + Std.random(20));
				inst.setPosition(randomX(i + 15383), randomY(i + 15383));
				macroContainer.addChild(inst);
				macroComplexInstances.push(inst);
			}
		}
		final macroMs = (haxe.Timer.stamp() - t2) * 1000;

		updateTimingText("createBuilderTime", 'Builder: ${formatMs(builderMs)} ($count)');
		updateTimingText("createIncrTime", 'Incr: ${formatMs(incrMs)} ($count)');
		updateTimingText("createMacroTime", 'Macro: ${formatMs(macroMs)} ($count)');
		updateObjectCount();
	}

	function addRepeatableObjects(count:Int):Void {
		repeatableValue = 0;
		final initialValue = repeatableValue;

		// 1) Builder (non-incremental)
		final t0 = haxe.Timer.stamp();
		for (i in 0...count) {
			final result = demoBuilder.buildWithParameters("perfRepeatable", ["value" => initialValue]);
			result.object.setPosition(randomX(i), randomY(i));
			builderContainer.addChild(result.object);
			builderResults.push(result);
		}
		final builderMs = (haxe.Timer.stamp() - t0) * 1000;

		// 2) Builder+Incremental
		final t1 = haxe.Timer.stamp();
		for (i in 0...count) {
			final result = demoBuilder.buildWithParameters("perfRepeatable", ["value" => initialValue], null, null, true);
			result.object.setPosition(randomX(i + 7919), randomY(i + 7919));
			incrementalContainer.addChild(result.object);
			incrementalResults.push(result);
		}
		final incrMs = (haxe.Timer.stamp() - t1) * 1000;

		// 3) @:manim codegen
		final t2 = haxe.Timer.stamp();
		for (i in 0...count) {
			final inst = perfProg.perfRepeatable.create(initialValue);
			inst.setPosition(randomX(i + 15383), randomY(i + 15383));
			macroContainer.addChild(inst);
			macroRepeatableInstances.push(inst);
		}
		final macroMs = (haxe.Timer.stamp() - t2) * 1000;

		updateTimingText("createBuilderTime", 'Builder: ${formatMs(builderMs)} ($count)');
		updateTimingText("createIncrTime", 'Incr: ${formatMs(incrMs)} ($count)');
		updateTimingText("createMacroTime", 'Macro: ${formatMs(macroMs)} ($count)');
		updateObjectCount();
	}

	function updateObjects():Void {
		final hasObjects = builderResults.length > 0 || incrementalResults.length > 0 || macroSimpleInstances.length > 0
			|| macroComplexInstances.length > 0 || macroRepeatableInstances.length > 0;
		if (!hasObjects) return;

		final type = currentType;

		if (type == "repeatable") {
			updateRepeatableObjects();
			return;
		}

		final componentName = type == "simple" ? "perfSimple" : "perfComplex";

		// 1) Builder: remove + rebuild
		final t0 = haxe.Timer.stamp();
		for (i in 0...builderResults.length) {
			final old = builderResults[i];
			final x = old.object.x;
			final y = old.object.y;
			old.object.remove();
			final result = demoBuilder.buildWithParameters(componentName, makeParams(type));
			result.object.setPosition(x, y);
			builderContainer.addChild(result.object);
			builderResults[i] = result;
		}
		final builderMs = (haxe.Timer.stamp() - t0) * 1000;

		// 2) Incremental: setParameter
		final t1 = haxe.Timer.stamp();
		for (i in 0...incrementalResults.length) {
			final result = incrementalResults[i];
			if (type == "simple") {
				result.setParameter("value", Std.random(999));
				result.setParameter("color", COLORS[Std.random(COLORS.length)]);
			} else {
				result.setParameter("hp", Std.random(100));
				result.setParameter("mp", Std.random(50));
				result.setParameter("level", 1 + Std.random(20));
			}
		}
		final incrMs = (haxe.Timer.stamp() - t1) * 1000;

		// 3) @:manim codegen: typed setters
		final t2 = haxe.Timer.stamp();
		if (type == "simple") {
			for (i in 0...macroSimpleInstances.length) {
				final inst = macroSimpleInstances[i];
				inst.setValue(Std.random(999));
				inst.setColor(COLORS[Std.random(COLORS.length)]);
			}
		} else {
			for (i in 0...macroComplexInstances.length) {
				final inst = macroComplexInstances[i];
				inst.setHp(Std.random(100));
				inst.setMp(Std.random(50));
				inst.setLevel(1 + Std.random(20));
			}
		}
		final macroMs = (haxe.Timer.stamp() - t2) * 1000;

		final macroCount = macroSimpleInstances.length + macroComplexInstances.length;
		updateTimingText("updateBuilderTime", 'Builder: ${formatMs(builderMs)} (${builderResults.length})');
		updateTimingText("updateIncrTime", 'Incr: ${formatMs(incrMs)} (${incrementalResults.length})');
		updateTimingText("updateMacroTime", 'Macro: ${formatMs(macroMs)} ($macroCount)');
	}

	function updateRepeatableObjects():Void {
		repeatableValue = (repeatableValue + 1) % 6;
		final newValue = repeatableValue;

		// 1) Builder: remove + rebuild
		final t0 = haxe.Timer.stamp();
		for (i in 0...builderResults.length) {
			final old = builderResults[i];
			final x = old.object.x;
			final y = old.object.y;
			old.object.remove();
			final result = demoBuilder.buildWithParameters("perfRepeatable", ["value" => newValue]);
			result.object.setPosition(x, y);
			builderContainer.addChild(result.object);
			builderResults[i] = result;
		}
		final builderMs = (haxe.Timer.stamp() - t0) * 1000;

		// 2) Incremental: setParameter (triggers structural rebuild of repeatable)
		final t1 = haxe.Timer.stamp();
		for (i in 0...incrementalResults.length) {
			incrementalResults[i].setParameter("value", newValue);
		}
		final incrMs = (haxe.Timer.stamp() - t1) * 1000;

		// 3) @:manim codegen: typed setter
		final t2 = haxe.Timer.stamp();
		for (i in 0...macroRepeatableInstances.length) {
			macroRepeatableInstances[i].setValue(newValue);
		}
		final macroMs = (haxe.Timer.stamp() - t2) * 1000;

		updateTimingText("updateBuilderTime", 'Builder: ${formatMs(builderMs)} (${builderResults.length}) val=$newValue');
		updateTimingText("updateIncrTime", 'Incr: ${formatMs(incrMs)} (${incrementalResults.length}) val=$newValue');
		updateTimingText("updateMacroTime", 'Macro: ${formatMs(macroMs)} (${macroRepeatableInstances.length}) val=$newValue');
	}

	function clearObjects():Void {
		for (r in builderResults)
			r.object.remove();
		for (r in incrementalResults)
			r.object.remove();
		for (inst in macroSimpleInstances)
			(inst : h2d.Object).remove();
		for (inst in macroComplexInstances)
			(inst : h2d.Object).remove();
		for (inst in macroRepeatableInstances)
			(inst : h2d.Object).remove();
		builderResults = [];
		incrementalResults = [];
		macroSimpleInstances = [];
		macroComplexInstances = [];
		macroRepeatableInstances = [];
		repeatableValue = 0;

		updateTimingText("createBuilderTime", "Builder: --");
		updateTimingText("createIncrTime", "Incr: --");
		updateTimingText("createMacroTime", "Macro: --");
		updateTimingText("updateBuilderTime", "Builder: --");
		updateTimingText("updateIncrTime", "Incr: --");
		updateTimingText("updateMacroTime", "Macro: --");
		updateObjectCount();
	}

	function updateObjectCount():Void {
		final macroCount = macroSimpleInstances.length + macroComplexInstances.length + macroRepeatableInstances.length;
		updateTimingText("objectCount", 'Builder: ${builderResults.length} | Incr: ${incrementalResults.length} | Macro: $macroCount');
	}

	function randomX(seed:Int):Float {
		var h = seed * 31 + 17;
		h = (h ^ (h >> 15)) * 101;
		return OBJ_AREA_X + (h & 0x7FFFFFFF) % OBJ_AREA_W;
	}

	function randomY(seed:Int):Float {
		var h = seed * 37 + 59;
		h = (h ^ (h >> 13)) * 79;
		return OBJ_AREA_Y + (h & 0x7FFFFFFF) % OBJ_AREA_H;
	}

	function makeParams(type:String):Map<String, Dynamic> {
		if (type == "simple") {
			return ["value" => Std.random(999), "color" => COLORS[Std.random(COLORS.length)]];
		} else {
			return [
				"hp" => Std.random(100),
				"maxHp" => 100,
				"mp" => Std.random(50),
				"maxMp" => 50,
				"name" => 'Unit${Std.random(100)}',
				"level" => 1 + Std.random(20),
			];
		}
	}

	function updateTimingText(name:String, text:String):Void {
		if (controlsResult == null) return;
		final upd = controlsResult.getUpdatable(name);
		if (upd != null) upd.updateText(text);
	}

	function formatMs(ms:Float):String {
		if (ms < 1) return '${Std.int(ms * 1000)}us';
		if (ms < 1000) return '${Std.int(ms * 10) / 10}ms';
		return '${Std.int(ms / 100) / 10}s';
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == addSimpleBtn) {
					addObjects("simple");
				} else if (source == addComplexBtn) {
					addObjects("complex");
				} else if (source == addRepeatableBtn) {
					addObjects("repeatable");
				} else if (source == updateBtn) {
					updateObjects();
				} else if (source == clearBtn) {
					clearObjects();
				}
			case UIChangeItem(index, _):
				if (source == countDropdown && index >= 0 && index < COUNT_VALUES.length) {
					selectedCount = COUNT_VALUES[index];
				}
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		for (r in builderResults)
			r.object.remove();
		for (r in incrementalResults)
			r.object.remove();
		for (inst in macroSimpleInstances)
			(inst : h2d.Object).remove();
		for (inst in macroComplexInstances)
			(inst : h2d.Object).remove();
		for (inst in macroRepeatableInstances)
			(inst : h2d.Object).remove();
		demoBuilder = null;
		controlsResult = null;
		countDropdown = null;
		addSimpleBtn = null;
		addComplexBtn = null;
		addRepeatableBtn = null;
		updateBtn = null;
		clearBtn = null;
		builderContainer = null;
		incrementalContainer = null;
		macroContainer = null;
		perfProg = null;
		builderResults = [];
		incrementalResults = [];
		macroSimpleInstances = [];
		macroComplexInstances = [];
		macroRepeatableInstances = [];
	}
}
