package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;

private typedef StatusEffect = {
	name:String,
	desc:String,
	color:String,
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
	static inline var FADE_SPEED = 4.0;
	static inline var GLOW_THRESHOLD = 2.0;

	var effects:Array<StatusEffect>;
	var slotInteractives:Array<h2d.Interactive>;
	var hoveredSlot:Int = -1;
	var refreshAnims:Array<RefreshAnim>;
	static inline var REFRESH_DURATION = 0.8;

	// Tooltip popup
	var tooltipResult:Null<BuilderResult> = null;
	var tooltipSlot:Int = -1;

	// Glow pulse timer
	var glowTimer:Float = 0;

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

	static final BUFF_DEFS:Array<{name:String, desc:String, color:String, duration:Float}> = [
		{name: "Regeneration", desc: "Restores 5 HP/sec", color: "#4CAF50", duration: 8.0},
		{name: "Strength Up", desc: "ATK +20%", color: "#FF7F50", duration: 10.0},
		{name: "Shield", desc: "DEF +15", color: "#4A90A4", duration: 6.0},
		{name: "Haste", desc: "Speed +30%", color: "#CCBB33", duration: 5.0},
	];

	static final DEBUFF_DEFS:Array<{name:String, desc:String, color:String, duration:Float}> = [
		{name: "Poison", desc: "Lose 3 HP/sec", color: "#8B00FF", duration: 7.0},
		{name: "Slow", desc: "Speed -25%", color: "#666666", duration: 6.0},
		{name: "Weakness", desc: "ATK -15%", color: "#FF4444", duration: 8.0},
		{name: "Curse", desc: "All stats -10%", color: "#440044", duration: 12.0},
	];

	override public function load():Void {
		setupDemo("Status Bar", "Flow layout with buff/debuff cards, progress bars, particles, and hover tooltips");

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
				showTooltip(idx);
			};
			inter.onOut = function(_) {
				if (hoveredSlot == idx) {
					hoveredSlot = -1;
					hideTooltip();
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

		// Build card with per-effect accent color
		final kind = isBuff ? "buff" : "debuff";
		final cardResult = demoBuilder.buildWithParameters("statusCard", [
			"kind" => kind,
			"pct" => 100,
			"accentColor" => def.color
		], null, null, true);

		cardResult.getUpdatable("cardName").updateText(def.name);
		cardResult.getUpdatable("cardTimer").updateText('${Std.int(def.duration)}s');

		// Build icon and insert into card slot
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
			color: def.color,
			duration: def.duration,
			remaining: def.duration,
			isBuff: isBuff,
			cardResult: cardResult,
			particleObj: particles,
			fadeAlpha: 1.0,
			fading: false,
		};

		effects.push(effect);

		final slotIndex = effects.length - 1;
		demoResult.getSlot("effectSlot", slotIndex).setContent(cardResult.object);

		final px = slotIndex * (CARD_WIDTH + CARD_SPACING) + CARD_WIDTH / 2;
		final py = isBuff ? CARD_HEIGHT / 2 : 0;
		particles.setPosition(px, py);

		final type = isBuff ? "buff" : "debuff";
		setLog('Added $type: ${def.name} (${def.duration}s)');
		updateEffectCount();
	}

	function clearAll():Void {
		hideTooltip();
		for (i in 0...effects.length) {
			final e = effects[i];
			demoResult.getSlot("effectSlot", i).clear();
			if (e.particleObj != null)
				e.particleObj.remove();
			if (e.cardResult != null)
				e.cardResult.object.filter = null;
		}
		effects = [];
		hoveredSlot = -1;
		setLog("All effects cleared.");
		updateEffectCount();
	}

	function removeEffect(index:Int):Void {
		final e = effects[index];

		if (tooltipSlot == index)
			hideTooltip()
		else if (tooltipSlot > index)
			tooltipSlot--;

		demoResult.getSlot("effectSlot", index).clear();
		if (e.particleObj != null)
			e.particleObj.remove();
		if (e.cardResult != null)
			e.cardResult.object.filter = null;

		effects.splice(index, 1);
		reassignSlots();

		if (hoveredSlot >= effects.length) {
			hoveredSlot = -1;
			hideTooltip();
		}
		updateEffectCount();
	}

	function reassignSlots():Void {
		for (i in 0...MAX_SLOTS) {
			demoResult.getSlot("effectSlot", i).clear();
		}
		for (i in 0...effects.length) {
			final e = effects[i];
			if (e.cardResult != null) {
				demoResult.getSlot("effectSlot", i).setContent(e.cardResult.object);
			}
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

	// ── Hover Tooltip Popup ──

	function showTooltip(slotIndex:Int):Void {
		if (slotIndex < 0 || slotIndex >= effects.length)
			return;
		final e = effects[slotIndex];
		if (e.fading)
			return;

		hideTooltip();

		final pct = Std.int(Math.max(0, Math.min(100, e.remaining / e.duration * 100)));
		final result = demoBuilder.buildWithParameters("effectTooltip", [
			"accentColor" => e.color,
			"pct" => pct
		], null, null, true);

		result.getUpdatable("ttName").updateText(e.name);
		result.getUpdatable("ttType").updateText(e.isBuff ? "[Buff]" : "[Debuff]");
		result.getUpdatable("ttDesc").updateText(e.desc);
		final secs = Math.round(e.remaining * 10) / 10;
		result.getUpdatable("ttTimer").updateText('${secs}s remaining');

		// Position above the hovered card
		if (e.cardResult != null) {
			final cardBounds = e.cardResult.object.getBounds();
			final tooltipSize = result.object.getSize();
			result.object.x = cardBounds.x + (cardBounds.width - tooltipSize.width) / 2;
			result.object.y = cardBounds.y - tooltipSize.height - 4;
		}

		addObjectToLayer(result.object, ModalLayer);
		tooltipResult = result;
		tooltipSlot = slotIndex;
	}

	function hideTooltip():Void {
		if (tooltipResult != null) {
			tooltipResult.object.remove();
			tooltipResult = null;
		}
		tooltipSlot = -1;
	}

	function updateTooltipLive():Void {
		if (tooltipResult == null || tooltipSlot < 0 || tooltipSlot >= effects.length)
			return;
		final e = effects[tooltipSlot];
		if (e.fading) {
			hideTooltip();
			return;
		}
		final pct = Std.int(Math.max(0, Math.min(100, e.remaining / e.duration * 100)));
		tooltipResult.setParameter("pct", pct);
		final secs = Math.round(e.remaining * 10) / 10;
		tooltipResult.getUpdatable("ttTimer").updateText('${secs}s remaining');
	}

	// ── Low-TTL Pulsing Glow ──

	function updateGlowEffects(dt:Float):Void {
		glowTimer += dt;
		for (e in effects) {
			if (e.cardResult == null || e.fading)
				continue;
			if (e.remaining <= GLOW_THRESHOLD) {
				// Pulse faster as TTL approaches 0
				final urgency = 1.0 - (e.remaining / GLOW_THRESHOLD);
				final speed = 4.0 + urgency * 4.0;
				final pulse = 0.3 + 0.3 * Math.sin(glowTimer * speed);
				final glowColor = colorStringToInt(e.color);
				e.cardResult.object.filter = new h2d.filter.Glow(glowColor, pulse, 4, 1, 1);
			} else if (e.cardResult.object.filter != null) {
				e.cardResult.object.filter = null;
			}
		}
	}

	static function colorStringToInt(color:String):Int {
		if (color.charAt(0) == "#")
			return Std.parseInt("0x" + color.substr(1));
		return 0xFFFFFF;
	}

	// ── Shared Utilities ──

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

		final burstName = isBuff ? "buffRefreshBurst" : "debuffRefreshBurst";
		final burst = demoBuilder.createParticles(burstName);
		burst.setPosition(cx, cy);
		particleContainer.addChild(burst);

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
				final st = Math.min(t / 0.4, 1.0);
				final c1 = 1.70158;
				final c3 = c1 + 1.0;
				final scale = 1.0 + c3 * (st - 1.0) * (st - 1.0) * (st - 1.0) + c1 * (st - 1.0) * (st - 1.0);
				a.text.setScale(scale);
				a.text.alpha = if (t > 0.5) 1.0 - (t - 0.5) * 2.0 else 1.0;
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

		var i = effects.length - 1;
		while (i >= 0) {
			final e = effects[i];

			if (e.fading) {
				e.fadeAlpha -= FADE_SPEED * dt;
				if (e.fadeAlpha <= 0) {
					final name = e.name;
					removeEffect(i);
					setLog('${name} has expired.');
				} else {
					if (e.cardResult != null) {
						e.cardResult.object.alpha = e.fadeAlpha;
						e.cardResult.object.filter = null;
					}
					if (e.particleObj != null) {
						e.particleObj.alpha = e.fadeAlpha;
					}
				}
			} else {
				e.remaining -= dt;
				if (e.remaining <= 0) {
					e.remaining = 0;
					e.fading = true;
					e.fadeAlpha = 1.0;
				}

				if (e.cardResult != null) {
					final pct = Std.int(Math.max(0, Math.min(100, e.remaining / e.duration * 100)));
					e.cardResult.setParameter("pct", pct);
					final secs = Math.max(0, Math.round(e.remaining * 10) / 10);
					e.cardResult.getUpdatable("cardTimer").updateText('${secs}s');
				}
			}

			i--;
		}

		updateRefreshAnims(dt);
		updateTooltipLive();
		updateGlowEffects(dt);
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
		hideTooltip();
		if (slotInteractives != null) {
			for (inter in slotInteractives) inter.remove();
			slotInteractives = null;
		}
		if (effects != null) {
			for (e in effects) {
				if (e.particleObj != null)
					e.particleObj.remove();
				if (e.cardResult != null)
					e.cardResult.object.filter = null;
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
