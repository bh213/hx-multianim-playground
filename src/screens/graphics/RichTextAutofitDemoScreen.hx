package screens.graphics;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.ui.UIMultiAnimRadioButtons;
import bh.ui.UIMultiAnimTextInput;
import bh.multianim.MultiAnimBuilder;
import bh.multianim.ProgrammableBuilder;
import bh.base.MacroUtils;
import bh.base.FontManager;

class RichTextAutofitDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var radioBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;

	// Controls
	var modeRadio:Null<UIMultiAnimRadioButtons>;
	var widthSlider:Null<UIStandardMultiAnimSlider>;
	var heightSlider:Null<UIStandardMultiAnimSlider>;
	var chkPixellari:Null<UIStandardMultiCheckbox>;
	var chkDd:Null<UIStandardMultiCheckbox>;
	var chkM6x11:Null<UIStandardMultiCheckbox>;
	var chkM5x7:Null<UIStandardMultiCheckbox>;
	var chkM3x6:Null<UIStandardMultiCheckbox>;
	var chkF7x5:Null<UIStandardMultiCheckbox>;
	var chkRichText:Null<UIStandardMultiCheckbox>;
	var textInput:Null<UIMultiAnimTextInput>;

	// Display
	var displayContainer:Null<h2d.Object>;
	var boundsGraphics:Null<h2d.Graphics>;
	var currentText:Null<h2d.Text>;
	var selectedFontName:String = "";
	var overflow:Bool = false;

	// State
	var currentMode:Int = 0;
	var currentTextStr:String = "Deal 50 fire damage to all enemies\nwithin a 3 meter radius, then\nburn them for 10 turns.";
	var needsRebuild:Bool = true;

	static final MODE_ITEMS:Array<UIElementListItem> = [
		{name: "Width"},
		{name: "Box"},
		{name: "Fill"},
		{name: "Fill Box"},
	];

	// Font names ordered large → small
	static final FONT_NAMES:Array<String> = ["pixellari", "dd", "m6x11", "m5x7", "m3x6", "f7x5"];

	static inline final DISPLAY_X = 40;
	static inline final DISPLAY_Y = 315;
	// Visual box height used in Width / Fill modes (where height is not a fit constraint).
	static inline final UNBOUNDED_BOX_H = 80;

	override public function load():Void {
		setupDemo("Rich Text AutoFit", "Interactive autoFit explorer: choose bounds, fill mode, fonts, and text");

		demoBuilder = screenManager.buildFromResourceName("demos/graphics/rich-text-autofit.manim", false);
		radioBuilder = screenManager.buildFromResourceName("radio.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "richTextAutofitDemo", [], [
			modeRadio => addRadio(radioBuilder, MODE_ITEMS, false, 0),
			widthSlider => addSlider(stdBuilder, 200),
			heightSlider => addSlider(stdBuilder, 40),
			chkPixellari => addCheckbox(stdBuilder, true),
			chkDd => addCheckbox(stdBuilder, true),
			chkM6x11 => addCheckbox(stdBuilder, true),
			chkM5x7 => addCheckbox(stdBuilder, true),
			chkM3x6 => addCheckbox(stdBuilder, true),
			chkF7x5 => addCheckbox(stdBuilder, true),
			chkRichText => addCheckbox(stdBuilder, false),
			textInput => addTextInput(stdBuilder, "Deal 50 fire damage to all enemies\nwithin a 3 meter radius, then\nburn them for 10 turns."),
		]);

		demoResult = ui.builderResults;
		addBuilderResult(demoResult);
		modeRadio = ui.modeRadio;
		widthSlider = ui.widthSlider;
		heightSlider = ui.heightSlider;
		chkPixellari = ui.chkPixellari;
		chkDd = ui.chkDd;
		chkM6x11 = ui.chkM6x11;
		chkM5x7 = ui.chkM5x7;
		chkM3x6 = ui.chkM3x6;
		chkF7x5 = ui.chkF7x5;
		chkRichText = ui.chkRichText;
		textInput = ui.textInput;

		// Create display container
		displayContainer = new h2d.Object();
		displayContainer.setPosition(DISPLAY_X, DISPLAY_Y);
		addObjectToLayer(displayContainer, DefaultLayer);

		boundsGraphics = new h2d.Graphics(displayContainer);

		updateHeightDisabled();
		needsRebuild = true;
	}

	// Height bound is only used by Box (1) and Fill Box (3) — disable the slider otherwise.
	function updateHeightDisabled():Void {
		if (heightSlider != null)
			heightSlider.disabled = !(currentMode == 1 || currentMode == 3);
	}

	function getSelectedFonts():Array<h2d.Font> {
		var fonts:Array<h2d.Font> = [];
		var checks = [chkPixellari, chkDd, chkM6x11, chkM5x7, chkM3x6, chkF7x5];
		for (i in 0...FONT_NAMES.length) {
			if (checks[i] != null && checks[i].selected) {
				var f = FontManager.getFontByName(FONT_NAMES[i]);
				if (f != null)
					fonts.push(f);
			}
		}
		return fonts;
	}

	function getSelectedFontNames():Array<String> {
		var names:Array<String> = [];
		var checks = [chkPixellari, chkDd, chkM6x11, chkM5x7, chkM3x6, chkF7x5];
		for (i in 0...FONT_NAMES.length) {
			if (checks[i] != null && checks[i].selected)
				names.push(FONT_NAMES[i]);
		}
		return names;
	}

	function rebuildText():Void {
		needsRebuild = false;

		// Remove old text
		if (currentText != null) {
			currentText.remove();
			currentText = null;
		}
		selectedFontName = "";

		overflow = false;

		var fonts = getSelectedFonts();
		if (fonts.length == 0) {
			updateStatus("No fonts selected");
			drawBounds();
			return;
		}

		var fitW:Float = widthSlider != null ? widthSlider.getIntValue() : 200;
		var fitH:Float = heightSlider != null ? heightSlider.getIntValue() : 40;
		var isRich = chkRichText != null && chkRichText.selected;

		// Create text element with first font
		var primaryFont = fonts[0];
		var t:h2d.Text;

		if (isRich) {
			var ht = new h2d.HtmlText(primaryFont, displayContainer);
			ht.text = currentTextStr;
			ht.maxWidth = fitW;
			t = ht;
		} else {
			t = new h2d.Text(primaryFont, displayContainer);
			t.text = currentTextStr;
			t.maxWidth = fitW;
		}

		// Determine constraints based on mode
		var fitWidth:Null<Float> = fitW;
		var fitHeight:Null<Float> = null;
		var isFill = false;

		switch (currentMode) {
			case 0: // Width
				fitHeight = null;
				isFill = false;
			case 1: // Box
				fitHeight = fitH;
				isFill = false;
			case 2: // Fill
				fitHeight = null;
				isFill = true;
			case 3: // Fill Box
				fitHeight = fitH;
				isFill = true;
			default:
		}

		// Apply autoFit
		if (isFill)
			ProgrammableBuilder.autoFitFill(t, fonts, fitWidth, fitHeight);
		else
			ProgrammableBuilder.autoFitFirstFit(t, fonts, fitWidth, fitHeight);

		currentText = t;

		// Determine which font was selected
		selectedFontName = identifyFont(t.font, fonts);

		// Detect overflow: even the smallest font may not fit the box.
		// In Width / Fill modes height is not a fit constraint, so check against the visual box.
		var boxH:Float = (currentMode == 1 || currentMode == 3) ? fitH : UNBOUNDED_BOX_H;
		overflow = (t.textWidth > fitW + 0.5) || (t.textHeight > boxH + 0.5);

		drawBounds();
		updateStatus(null);
	}

	function identifyFont(font:h2d.Font, fonts:Array<h2d.Font>):String {
		var fontNames = getSelectedFontNames();
		for (i in 0...fonts.length) {
			if (fonts[i] == font)
				return fontNames[i];
		}
		return "?";
	}

	function drawBounds():Void {
		if (boundsGraphics == null)
			return;
		boundsGraphics.clear();

		var w:Float = widthSlider != null ? widthSlider.getIntValue() : 200;
		var h:Float = heightSlider != null ? heightSlider.getIntValue() : 40;
		var showHeight = currentMode == 1 || currentMode == 3; // Box or Fill Box
		var boxH:Float = showHeight ? h : UNBOUNDED_BOX_H;

		// Background (tinted red when overflowing)
		boundsGraphics.beginFill(overflow ? 0xFF402222 : 0xFF222240, 1.0);
		boundsGraphics.drawRect(0, 0, w, boxH);
		boundsGraphics.endFill();

		// Border (red when overflowing)
		boundsGraphics.lineStyle(1, overflow ? 0xFFFF5555 : 0xFF555588);
		boundsGraphics.drawRect(0, 0, w, boxH);
		boundsGraphics.lineStyle();
	}

	function updateStatus(msg:Null<String>):Void {
		if (demoResult == null)
			return;
		var updatable = demoResult.getUpdatable("statusText");
		if (updatable == null)
			return;

		if (msg != null) {
			updatable.updateText(msg);
			return;
		}

		var modeName = MODE_ITEMS[currentMode].name;
		var w:Int = widthSlider != null ? widthSlider.getIntValue() : 200;
		var h:Int = heightSlider != null ? heightSlider.getIntValue() : 40;
		var fontNames = getSelectedFontNames();
		var fontsStr = fontNames.join(", ");
		var boundsStr = if (currentMode == 1 || currentMode == 3) '${w}x${h}' else '$w';
		var richStr = (chkRichText != null && chkRichText.selected) ? " | Rich: ON" : "";
		var overflowStr = overflow ? " | OVERFLOW: text exceeds bounds" : "";

		updatable.updateText('Mode: $modeName | Bounds: $boundsStr | Fonts: $fontsStr | Selected: $selectedFontName$richStr$overflowStr');
	}

	function updateWidthLabel():Void {
		if (demoResult == null)
			return;
		var u = demoResult.getUpdatable("widthValue");
		if (u != null)
			u.updateText('${widthSlider != null ? widthSlider.getIntValue() : 200}');
	}

	function updateHeightLabel():Void {
		if (demoResult == null)
			return;
		var u = demoResult.getUpdatable("heightValue");
		if (u != null)
			u.updateText('${heightSlider != null ? heightSlider.getIntValue() : 40}');
	}

	override public function update(dt:Float):Void {
		super.update(dt);
		if (needsRebuild)
			rebuildText();
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIChangeItem(index, items):
				if (source == modeRadio && index >= 0 && index < MODE_ITEMS.length) {
					currentMode = index;
					updateHeightDisabled();
					needsRebuild = true;
				}
			case UIChangeValue(value):
				if (source == widthSlider || source == heightSlider) {
					updateWidthLabel();
					updateHeightLabel();
					needsRebuild = true;
				}
			case UIChangeFloatValue(value):
				if (source == widthSlider || source == heightSlider) {
					updateWidthLabel();
					updateHeightLabel();
					needsRebuild = true;
				}
			case UIToggle(pressed):
				if (source == chkPixellari || source == chkDd || source == chkM6x11 || source == chkM5x7 || source == chkM3x6
					|| source == chkF7x5 || source == chkRichText) {
					needsRebuild = true;
				}
			case UITextChange(text):
				if (source == textInput) {
					currentTextStr = text;
					needsRebuild = true;
				}
			case UITextSubmit(text):
				if (source == textInput) {
					currentTextStr = text;
					needsRebuild = true;
				}
			default:
		}
	}

	override public function onClear():Void {
		super.onClear();
		if (currentText != null) {
			currentText.remove();
			currentText = null;
		}
		if (displayContainer != null) {
			displayContainer.remove();
			displayContainer = null;
		}
		boundsGraphics = null;
		demoBuilder = null;
		radioBuilder = null;
		demoResult = null;
		modeRadio = null;
		widthSlider = null;
		heightSlider = null;
		chkPixellari = null;
		chkDd = null;
		chkM6x11 = null;
		chkM5x7 = null;
		chkM3x6 = null;
		chkF7x5 = null;
		chkRichText = null;
		textInput = null;
	}
}
