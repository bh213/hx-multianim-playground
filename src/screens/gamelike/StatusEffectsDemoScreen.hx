package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;

private typedef StatusEffect = {
	name:String,
	desc:String,
	color:Int,
	duration:Float,
	remaining:Float,
	isBuff:Bool,
};

class StatusEffectsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var addBuffButton:Null<UIStandardMultiAnimButton>;
	var addDebuffButton:Null<UIStandardMultiAnimButton>;
	var clearAllButton:Null<UIStandardMultiAnimButton>;

	static inline var MAX_SLOTS = 8;
	static inline var SLOT_SIZE = 50;
	static inline var SLOT_GAP = 20;

	var effects:Array<StatusEffect>;
	var slotBitmaps:Array<h2d.Bitmap>;
	var slotTimerTexts:Array<h2d.Text>;
	var slotInteractives:Array<h2d.Interactive>;
	var hoveredSlot:Int = -1;

	static final BUFF_DEFS:Array<{name:String, desc:String, color:Int, duration:Float}> = [
		{name: "Regeneration", desc: "Restores 5 HP/sec", color: 0xFF4CAF50, duration: 8.0},
		{name: "Strength Up", desc: "ATK +20%", color: 0xFFFF7F50, duration: 10.0},
		{name: "Shield", desc: "DEF +15", color: 0xFF4A90A4, duration: 6.0},
		{name: "Haste", desc: "Speed +30%", color: 0xFFFFEB3B, duration: 5.0},
	];

	static final DEBUFF_DEFS:Array<{name:String, desc:String, color:Int, duration:Float}> = [
		{name: "Poison", desc: "Lose 3 HP/sec", color: 0xFF8B00FF, duration: 7.0},
		{name: "Slow", desc: "Speed -25%", color: 0xFF666666, duration: 6.0},
		{name: "Weakness", desc: "ATK -15%", color: 0xFFFF4444, duration: 8.0},
		{name: "Curse", desc: "All stats -10%", color: 0xFF440044, duration: 12.0},
	];

	override public function load():Void {
		setupDemo("Status Effects", "Buff/debuff slots with countdown timers and hover tooltip");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/status-effects.manim", false);

		addBuffButton = addButtonWithSingleBuilder(stdBuilder, "button", null, "Add Buff");
		addElement(addBuffButton, null);
		addDebuffButton = addButtonWithSingleBuilder(stdBuilder, "button", null, "Add Debuff");
		addElement(addDebuffButton, null);
		clearAllButton = addButtonWithSingleBuilder(stdBuilder, "button", null, "Clear All");
		addElement(clearAllButton, null);

		demoResult = demoBuilder.buildWithParameters("statusEffectsDemo", [], {
			placeholderObjects: [
				"addBuffButton" => PVObject(addBuffButton.getObject()),
				"addDebuffButton" => PVObject(addDebuffButton.getObject()),
				"clearAllButton" => PVObject(clearAllButton.getObject()),
			]
		});
		addBuilderResult(demoResult);

		effects = [];
		slotBitmaps = [];
		slotTimerTexts = [];
		slotInteractives = [];

		// Build slot visuals
		final container = demoResult.getSingleItemByName("slotContainer").object.toh2dObject();

		for (i in 0...MAX_SLOTS) {
			final x = i * (SLOT_SIZE + SLOT_GAP);

			// Empty slot background
			final bmp = new h2d.Bitmap(h2d.Tile.fromColor(0xFF333333, SLOT_SIZE, SLOT_SIZE));
			bmp.setPosition(x, 0);
			container.addChild(bmp);
			slotBitmaps.push(bmp);

			// Timer text below slot
			final timerText = new h2d.Text(bh.base.FontManager.getFontByName("exo2_light_12"));
			timerText.text = "";
			timerText.textColor = 0xFFFFFF;
			timerText.setPosition(x + 10, SLOT_SIZE + 2);
			container.addChild(timerText);
			slotTimerTexts.push(timerText);

			// Interactive for hover
			final inter = new h2d.Interactive(SLOT_SIZE, SLOT_SIZE, container);
			inter.setPosition(x, 0);
			final idx = i;
			inter.onOver = function(_) {
				hoveredSlot = idx;
				updateTooltip();
			};
			inter.onOut = function(_) {
				if (hoveredSlot == idx) {
					hoveredSlot = -1;
					clearTooltip();
				}
			};
			slotInteractives.push(inter);
		}

		refreshSlots();
	}

	function addEffect(isBuff:Bool):Void {
		if (effects.length >= MAX_SLOTS) {
			setLog("All effect slots are full!");
			return;
		}

		final defs = isBuff ? BUFF_DEFS : DEBUFF_DEFS;
		final def = defs[Std.int(Math.random() * defs.length)];

		// Check if already active
		for (e in effects) {
			if (e.name == def.name) {
				// Refresh duration
				e.remaining = def.duration;
				setLog('Refreshed ${def.name}!');
				refreshSlots();
				return;
			}
		}

		effects.push({
			name: def.name,
			desc: def.desc,
			color: def.color,
			duration: def.duration,
			remaining: def.duration,
			isBuff: isBuff,
		});

		final type = isBuff ? "buff" : "debuff";
		setLog('Added $type: ${def.name} (${def.duration}s)');
		refreshSlots();
	}

	function clearAll():Void {
		effects = [];
		hoveredSlot = -1;
		clearTooltip();
		setLog("All effects cleared.");
		refreshSlots();
	}

	function refreshSlots():Void {
		for (i in 0...MAX_SLOTS) {
			if (i < effects.length) {
				final e = effects[i];
				slotBitmaps[i].tile = h2d.Tile.fromColor(e.color, SLOT_SIZE, SLOT_SIZE);
				slotTimerTexts[i].text = '${Std.int(e.remaining)}s';
			} else {
				slotBitmaps[i].tile = h2d.Tile.fromColor(0xFF333333, SLOT_SIZE, SLOT_SIZE);
				slotTimerTexts[i].text = "";
			}
		}

		if (demoResult != null) {
			demoResult.getUpdatable("effectCountText").updateText('Effects: ${effects.length} / $MAX_SLOTS');
		}
	}

	function updateTooltip():Void {
		if (demoResult == null) return;
		if (hoveredSlot >= 0 && hoveredSlot < effects.length) {
			final e = effects[hoveredSlot];
			final type = e.isBuff ? "[Buff]" : "[Debuff]";
			demoResult.getUpdatable("tooltipName").updateText('${e.name} $type');
			demoResult.getUpdatable("tooltipDesc").updateText(e.desc);
			final secs = Math.round(e.remaining * 10) / 10;
			demoResult.getUpdatable("tooltipTimer").updateText('${secs}s left');
		}
	}

	function clearTooltip():Void {
		if (demoResult == null) return;
		demoResult.getUpdatable("tooltipName").updateText("Hover over an effect");
		demoResult.getUpdatable("tooltipDesc").updateText("");
		demoResult.getUpdatable("tooltipTimer").updateText("");
	}

	function setLog(text:String):Void {
		if (demoResult != null) {
			demoResult.getUpdatable("logText").updateText(text);
		}
	}

	override public function update(dt:Float):Void {
		super.update(dt);

		// Tick down effect timers
		var changed = false;
		var i = effects.length - 1;
		while (i >= 0) {
			effects[i].remaining -= dt;
			if (effects[i].remaining <= 0) {
				final name = effects[i].name;
				effects.splice(i, 1);
				setLog('${name} has expired.');
				changed = true;
				if (hoveredSlot >= effects.length) {
					hoveredSlot = -1;
					clearTooltip();
				}
			}
			i--;
		}

		if (changed || effects.length > 0) {
			refreshSlots();
		}

		// Update hovered tooltip timer in real-time
		if (hoveredSlot >= 0 && hoveredSlot < effects.length && demoResult != null) {
			final secs = Math.round(effects[hoveredSlot].remaining * 10) / 10;
			demoResult.getUpdatable("tooltipTimer").updateText('${secs}s left');
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == addBuffButton) {
					addEffect(true);
				} else if (source == addDebuffButton) {
					addEffect(false);
				} else if (source == clearAllButton) {
					clearAll();
				}
			default:
		}
		super.onScreenEvent(event, source);
	}

	override public function onClear():Void {
		super.onClear();
		if (slotInteractives != null) {
			for (inter in slotInteractives) inter.remove();
			slotInteractives = null;
		}
		demoBuilder = null;
		demoResult = null;
		addBuffButton = null;
		addDebuffButton = null;
		clearAllButton = null;
		effects = null;
		slotBitmaps = null;
		slotTimerTexts = null;
		hoveredSlot = -1;
	}
}
