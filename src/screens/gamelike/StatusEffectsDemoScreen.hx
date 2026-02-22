package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

private typedef StatusEffect = {
	name:String,
	desc:String,
	duration:Float,
	remaining:Float,
	isBuff:Bool,
	cardResult:Null<BuilderResult>,
	particleObj:Null<h2d.Object>,
	fadeAlpha:Float,
	fading:Bool,
};

private typedef RefreshAnim = {
	text:h2d.Text,
	burst:h2d.Object,
	elapsed:Float,
};

class StatusEffectsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var addBuffButton:Null<UIStandardMultiAnimButton>;
	var addDebuffButton:Null<UIStandardMultiAnimButton>;
	var clearAllButton:Null<UIStandardMultiAnimButton>;

	static inline var MAX_SLOTS = 8;
	static inline var CARD_WIDTH = 64;
	static inline var CARD_HEIGHT = 88;
	static inline var CARD_SPACING = 8;
	static inline var FADE_SPEED = 4.0; // alpha per second (0.25s fade)

	var effects:Array<StatusEffect>;
	var slotInteractives:Array<h2d.Interactive>;
	var hoveredSlot:Int = -1;
	var refreshAnims:Array<RefreshAnim>;
	static inline var REFRESH_DURATION = 0.8;

	// Effect name → effectIcon programmable type
	static final ICON_TYPE_MAP:Map<String, String> = [
		"Regeneration" => "regen",
		"Strength Up" => "strength",
		"Shield" => "shield",
		"Haste" => "haste",
		"Poison" => "poison",
		"Slow" => "slow",
		"Weakness" => "weakness",
		"Curse" => "curse",
	];

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
		setupDemo("Status Bar", "Flow layout with buff/debuff cards, progress bars, and particles");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/status-effects.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "statusBarDemo", [], [
			addBuffButton => addButtonWithSingleBuilder(stdBuilder, "button", "Add Buff"),
			addDebuffButton => addButtonWithSingleBuilder(stdBuilder, "button", "Add Debuff"),
			clearAllButton => addButtonWithSingleBuilder(stdBuilder, "button", "Clear All"),
		]);

		demoResult = ui.builderResults;
		addBuffButton = ui.addBuffButton;
		addDebuffButton = ui.addDebuffButton;
		clearAllButton = ui.clearAllButton;
		addBuilderResult(demoResult);

		effects = [];
		slotInteractives = [];
		refreshAnims = [];

		// Create hover interactives for each slot position
		final container = demoResult.getSingleItemByName("particleContainer").object.toh2dObject();
		for (i in 0...MAX_SLOTS) {
			final x = i * (CARD_WIDTH + CARD_SPACING);
			final inter = new h2d.Interactive(CARD_WIDTH, CARD_HEIGHT, container);
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

		// Refresh existing effect if same name
		for (idx in 0...effects.length) {
			final e = effects[idx];
			if (e.name == def.name) {
				e.remaining = def.duration;
				if (e.cardResult != null) {
					e.cardResult.setParameter("pct", 100);
					e.cardResult.getUpdatable("cardTimer").updateText('${Std.int(def.duration)}s');
				}
				spawnRefreshAnim(idx, e.isBuff);
				setLog('Refreshed ${def.name}!');
				return;
			}
		}

		// Build the card with incremental mode for progress bar updates
		final kind = isBuff ? "buff" : "debuff";
		final cardResult = demoBuilder.buildWithParameters("statusCard", ["kind" => kind, "pct" => 100], null, null, true);

		// Set card name and timer text
		cardResult.getUpdatable("cardName").updateText(def.name);
		cardResult.getUpdatable("cardTimer").updateText('${Std.int(def.duration)}s');

		// Build icon via .manim and insert into card's icon slot
		final iconType = ICON_TYPE_MAP.get(def.name);
		if (iconType != null) {
			final iconResult = demoBuilder.buildWithParameters("effectIcon", ["effectType" => iconType]);
			iconResult.object.setPosition(8, 6);
			cardResult.getSlot("cardIcon").setContent(iconResult.object);
		}

		// Create particle effect
		final particleName = isBuff ? "buffSparkle" : "debuffSmoke";
		final particles = demoBuilder.createParticles(particleName);
		final particleContainer = demoResult.getSingleItemByName("particleContainer").object.toh2dObject();
		particleContainer.addChild(particles);

		final effect:StatusEffect = {
			name: def.name,
			desc: def.desc,
			duration: def.duration,
			remaining: def.duration,
			isBuff: isBuff,
			cardResult: cardResult,
			particleObj: particles,
			fadeAlpha: 1.0,
			fading: false,
		};

		effects.push(effect);

		// Insert card into slot
		final slotIndex = effects.length - 1;
		demoResult.getSlot("effectSlot", slotIndex).setContent(cardResult.object);

		// Position particles: buff at card center, debuff at top edge
		final px = slotIndex * (CARD_WIDTH + CARD_SPACING) + CARD_WIDTH / 2;
		final py = isBuff ? CARD_HEIGHT / 2 : 0;
		particles.setPosition(px, py);

		final type = isBuff ? "buff" : "debuff";
		setLog('Added $type: ${def.name} (${def.duration}s)');
		updateEffectCount();
	}

	function clearAll():Void {
		for (i in 0...effects.length) {
			final e = effects[i];
			demoResult.getSlot("effectSlot", i).clear();
			if (e.particleObj != null)
				e.particleObj.remove();
		}
		effects = [];
		hoveredSlot = -1;
		clearTooltip();
		setLog("All effects cleared.");
		updateEffectCount();
	}

	function removeEffect(index:Int):Void {
		final e = effects[index];

		// Clear slot and remove particle
		demoResult.getSlot("effectSlot", index).clear();
		if (e.particleObj != null)
			e.particleObj.remove();

		effects.splice(index, 1);

		// Shift remaining effects into correct slots
		reassignSlots();

		if (hoveredSlot >= effects.length) {
			hoveredSlot = -1;
			clearTooltip();
		}
		updateEffectCount();
	}

	function reassignSlots():Void {
		// Clear all slots first
		for (i in 0...MAX_SLOTS) {
			demoResult.getSlot("effectSlot", i).clear();
		}
		// Re-insert all effects into contiguous slots
		for (i in 0...effects.length) {
			final e = effects[i];
			if (e.cardResult != null) {
				demoResult.getSlot("effectSlot", i).setContent(e.cardResult.object);
			}
			// Reposition particles: buff at center, debuff at top
			if (e.particleObj != null) {
				final py = e.isBuff ? CARD_HEIGHT / 2 : 0;
				e.particleObj.setPosition(i * (CARD_WIDTH + CARD_SPACING) + CARD_WIDTH / 2, py);
			}
		}
	}

	function updateEffectCount():Void {
		if (demoResult != null) {
			demoResult.getUpdatable("effectCountText").updateText('Effects: ${effects.length} / $MAX_SLOTS');
		}
		updateButtonStates();
	}

	function updateTooltip():Void {
		if (demoResult == null) return;
		if (hoveredSlot >= 0 && hoveredSlot < effects.length) {
			final e = effects[hoveredSlot];
			if (e.fading) return;
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

	function updateButtonStates():Void {
		final full = effects.length >= MAX_SLOTS;
		final empty = effects.length == 0;
		if (addBuffButton != null) addBuffButton.disabled = full;
		if (addDebuffButton != null) addDebuffButton.disabled = full;
		if (clearAllButton != null) clearAllButton.disabled = empty;
	}

	function spawnRefreshAnim(slotIndex:Int, isBuff:Bool):Void {
		final particleContainer = demoResult.getSingleItemByName("particleContainer").object.toh2dObject();
		final cx = slotIndex * (CARD_WIDTH + CARD_SPACING) + CARD_WIDTH / 2;
		final cy = CARD_HEIGHT / 2;

		// Burst particles (one-shot, color matches effect type)
		final burstName = isBuff ? "buffRefreshBurst" : "debuffRefreshBurst";
		final burst = demoBuilder.createParticles(burstName);
		burst.setPosition(cx, cy);
		particleContainer.addChild(burst);

		// "Refreshed!" text
		final font = hxd.Res.load("font/m5x7.fnt").to(hxd.res.BitmapFont).toFont();
		final txt = new h2d.Text(font, particleContainer);
		txt.text = "Refreshed!";
		txt.textColor = 0xFFEE44;
		txt.textAlign = Center;
		txt.setPosition(cx, cy - 20);
		txt.setScale(0.01);

		refreshAnims.push({text: txt, burst: burst, elapsed: 0.0});
	}

	function updateRefreshAnims(dt:Float):Void {
		var i = refreshAnims.length - 1;
		while (i >= 0) {
			final a = refreshAnims[i];
			a.elapsed += dt;
			final t = a.elapsed / REFRESH_DURATION;
			if (t >= 1.0) {
				a.text.remove();
				a.burst.remove();
				refreshAnims.splice(i, 1);
			} else {
				// Scale: easeOutBack in first 40%, then hold at 1.0
				final st = Math.min(t / 0.4, 1.0);
				final c1 = 1.70158;
				final c3 = c1 + 1.0;
				final scale = 1.0 + c3 * (st - 1.0) * (st - 1.0) * (st - 1.0) + c1 * (st - 1.0) * (st - 1.0);
				a.text.setScale(scale);
				// Fade out in last 50%
				a.text.alpha = if (t > 0.5) 1.0 - (t - 0.5) * 2.0 else 1.0;
				// Float upward
				a.text.y -= 30.0 * dt;
			}
			i--;
		}
	}

	function refreshSlots():Void {
		updateEffectCount();
		updateButtonStates();
	}

	override public function update(dt:Float):Void {
		super.update(dt);

		var changed = false;
		var i = effects.length - 1;
		while (i >= 0) {
			final e = effects[i];

			if (e.fading) {
				// Animate fade-out
				e.fadeAlpha -= FADE_SPEED * dt;
				if (e.fadeAlpha <= 0) {
					final name = e.name;
					removeEffect(i);
					setLog('${name} has expired.');
					changed = true;
				} else {
					// Apply alpha to card
					if (e.cardResult != null) {
						e.cardResult.object.alpha = e.fadeAlpha;
					}
					if (e.particleObj != null) {
						e.particleObj.alpha = e.fadeAlpha;
					}
				}
			} else {
				// Tick down timer
				e.remaining -= dt;
				if (e.remaining <= 0) {
					e.remaining = 0;
					e.fading = true;
					e.fadeAlpha = 1.0;
				}

				// Update progress bar via incremental parameter
				if (e.cardResult != null) {
					final pct = Std.int(Math.max(0, Math.min(100, e.remaining / e.duration * 100)));
					e.cardResult.setParameter("pct", pct);

					// Update timer text
					final secs = Math.max(0, Math.round(e.remaining * 10) / 10);
					e.cardResult.getUpdatable("cardTimer").updateText('${secs}s');
				}
			}

			i--;
		}

		// Update refresh animations
		updateRefreshAnims(dt);

		// Update hovered tooltip timer
		if (hoveredSlot >= 0 && hoveredSlot < effects.length && demoResult != null) {
			final e = effects[hoveredSlot];
			if (!e.fading) {
				final secs = Math.round(e.remaining * 10) / 10;
				demoResult.getUpdatable("tooltipTimer").updateText('${secs}s left');
			}
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
		if (effects != null) {
			for (e in effects) {
				if (e.particleObj != null)
					e.particleObj.remove();
			}
		}
		if (refreshAnims != null) {
			for (a in refreshAnims) {
				a.text.remove();
				a.burst.remove();
			}
			refreshAnims = null;
		}
		demoBuilder = null;
		demoResult = null;
		addBuffButton = null;
		addDebuffButton = null;
		clearAllButton = null;
		effects = null;
		hoveredSlot = -1;
	}
}
