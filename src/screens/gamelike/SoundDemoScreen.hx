package screens.gamelike;

import bh.ui.*;
import bh.ui.UIElement;
import bh.ui.UIElement.UIElementListItem;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.ui.UIMultiAnimDropdown.UIStandardMultiAnimDropdown;
import bh.multianim.MultiAnimBuilder;
import bh.audio.Audio.SoundInstance;
import bh.base.MacroUtils;

/**
 * Sound: the `sounds`, `mix` blocks of sound.manim taken by the screen manager's audio as the
 * file loads; the widgets' sounds with no code; sounds fired by name; an engine held while a box
 * is checked, its hum driven by a throttle; a VCA on a slider; the clock's pause and slow motion;
 * and the audio's history shown as it is written.
 */
class SoundDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var panel:Null<BuilderResult>;
	var coinButton:Null<UIStandardMultiAnimButton>;
	var jumpButton:Null<UIStandardMultiAnimButton>;
	var hitButton:Null<UIStandardMultiAnimButton>;
	var boomButton:Null<UIStandardMultiAnimButton>;
	var dropdown:Null<UIStandardMultiAnimDropdown>;
	var engineBox:Null<UIStandardMultiCheckbox>;
	var throttleSlider:Null<UIStandardMultiAnimSlider>;
	var volumeSlider:Null<UIStandardMultiAnimSlider>;
	var pauseBox:Null<UIStandardMultiCheckbox>;
	var slowBox:Null<UIStandardMultiCheckbox>;
	/** The engine's play while the box is checked: a looping hum the throttle drives, stopped with its stop layer. */
	var engine:Null<SoundInstance> = null;
	var throttle:Float = 0.5;
	var lastHistoryId:Int = 0;
	var lines:Array<String> = [];

	static final ITEMS:Array<UIElementListItem> = [{name: "Stone"}, {name: "Grass"}, {name: "Wood"}, {name: "Water"}];

	override public function load():Void {
		setupDemo("Sound",
			"Six CC0 sounds and a generated engine: the widgets sound by themselves, the buttons fire sounds by name, the engine is held and driven, the slider is a VCA, pause and slow motion are the clock");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/sound.manim", false);

		final ui = MacroUtils.macroBuildWithParameters(demoBuilder, "soundDemo", [], [
			coinButton => addButtonWithSingleBuilder(stdBuilder, "button", "Coin"),
			jumpButton => addButtonWithSingleBuilder(stdBuilder, "button", "Jump"),
			hitButton => addButtonWithSingleBuilder(stdBuilder, "button", "Hit"),
			boomButton => addButtonWithSingleBuilder(stdBuilder, "button", "Explosion"),
			dropdown => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar", ITEMS, 0),
			engineBox => addCheckbox(stdBuilder, false),
			throttleSlider => addSlider(stdBuilder, 50),
			volumeSlider => addSlider(stdBuilder, 100),
			pauseBox => addCheckbox(stdBuilder, false),
			slowBox => addCheckbox(stdBuilder, false),
		]);
		addBuilderResult(ui.builderResults);
		// the history lines, incremental so setParameter changes them in place
		panel = demoBuilder.buildWithParameters("soundLog", [], null, null, true);
		addBuilderResult(panel);
		coinButton = ui.coinButton;
		jumpButton = ui.jumpButton;
		hitButton = ui.hitButton;
		boomButton = ui.boomButton;
		dropdown = ui.dropdown;
		engineBox = ui.engineBox;
		throttleSlider = ui.throttleSlider;
		volumeSlider = ui.volumeSlider;
		pauseBox = ui.pauseBox;
		slowBox = ui.slowBox;

		final audio = screenManager.audio;
		coinButton.onClick = () -> audio.play("fx.coin");
		jumpButton.onClick = () -> audio.play("fx.jump");
		hitButton.onClick = () -> audio.play("fx.hit");
		boomButton.onClick = () -> audio.play("fx.explosion");
	}

	/** The throttle on the engine's play: the hum pitched from 0.7 to 1.5 of its rate and from half to full volume. */
	function applyThrottle():Void {
		final e = engine;
		if (e == null)
			return;
		e.setPitch(0.7 + 0.8 * throttle);
		e.setVolume(0.5 + 0.5 * throttle, 0.1);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIToggle(on) if (source == engineBox):
				if (on) {
					// one play kept: the start layer, then the hum round and round until stop()
					engine = screenManager.audio.play("fx.engine");
					applyThrottle();
				} else if (engine != null) {
					// the hum fades out, the stop layer plays; the voice is free at once
					engine.stop();
					engine = null;
				}
			case UIChangeFloatValue(v) if (source == throttleSlider):
				throttle = v / 100;
				applyThrottle();
			case UIChangeFloatValue(v) if (source == volumeSlider):
				screenManager.audio.setVca("Effects", v / 100);
			case UIToggle(on) if (source == pauseBox):
				screenManager.clock.paused = on;
			case UIToggle(on) if (source == slowBox):
				screenManager.clock.scale = on ? 0.5 : 1.0;
				screenManager.audio.snapshot("slow", on);
			default:
		}
	}

	override public function update(dt:Float):Void {
		super.update(dt);
		if (panel == null)
			return;
		var changed = false;
		for (e in screenManager.audio.historySince(lastHistoryId)) {
			lastHistoryId = e.id;
			final t = Std.string(Math.round(e.time * 100) / 100);
			lines.push('$t  ${e.kind}  ${e.name}  ${e.detail}');
			changed = true;
		}
		while (lines.length > 6) {
			lines.shift();
			changed = true;
		}
		if (changed)
			for (i in 0...6)
				panel.setParameter('log${i + 1}', i < lines.length ? lines[i] : "");
	}

	public override function onClear():Void {
		super.onClear();
		if (engine != null) {
			engine.stop();
			engine = null;
		}
		screenManager.clock.paused = false;
		screenManager.clock.scale = 1.0;
		if (screenManager.audio.hasSnapshot("slow"))
			screenManager.audio.snapshot("slow", false);
		panel = null;
		demoBuilder = null;
	}
}
