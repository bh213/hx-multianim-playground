import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
import bh.base.FontManager;

class NavScreen extends UIScreenBase {
	var commonBuilder:Null<MultiAnimBuilder>;
	var cards:Array<{button:UIStandardMultiAnimButton, screenName:String}>;

	static final CATEGORIES:Array<{name:String, screens:Array<{id:String, title:String}>}> = [
		{
			name: "UI Components",
			screens: [
				{id: "buttons", title: "Buttons"},
				{id: "checkboxes", title: "Checkboxes"},
				{id: "sliders", title: "Sliders"},
				{id: "dropdowns", title: "Dropdowns"},
				{id: "scrollableList", title: "Scrollable List"},
				{id: "radio", title: "Radio Buttons"},
				{id: "progressBar", title: "Progress Bars"},
				{id: "draggable", title: "Draggable"},
				{id: "dialogs", title: "Dialogs"},
			]
		},
		{
			name: "Layout & Composition",
			screens: [
				{id: "staticRefs", title: "Static Refs"},
				{id: "dynamicRefs", title: "Dynamic Refs"},
				{id: "flowLayout", title: "Flow Layout"},
				{id: "repeatable", title: "Repeatable"},
				{id: "slots", title: "Slots"},
				{id: "comboStates", title: "Combo States"},
			]
		},
		{
			name: "Graphics & Rendering",
			screens: [
				{id: "bitmapsAtlas", title: "Bitmaps & Atlas"},
				{id: "ninepatch", title: "Ninepatch"},
				{id: "textFonts", title: "Text & Fonts"},
				{id: "pixelsGraphics", title: "Pixels & Graphics"},
			]
		},
		{
			name: "Animation & Effects",
			screens: [
				{id: "stateAnim", title: "State Animations"},
				{id: "particles", title: "Particles"},
				{id: "paths", title: "Paths"},
				{id: "curves", title: "Curves"},
				{id: "filters", title: "Filters"},
			]
		},
		{
			name: "Game-Like Demos",
			screens: [
				{id: "inventory", title: "Inventory Grid"},
				{id: "characterSheet", title: "Character Sheet"},
				{id: "minimap", title: "Minimap"},
				{id: "battleHud", title: "Battle HUD"},
				{id: "skillTree", title: "Skill Tree"},
				{id: "shop", title: "Shop UI"},
				{id: "dialogue", title: "Dialogue Box"},
				{id: "statusEffects", title: "Status Effects"},
			]
		},
		{
			name: "Advanced Features",
			screens: [
				{id: "incremental", title: "Incremental"},
				{id: "interactives", title: "Interactives"},
				{id: "conditionals", title: "Conditionals"},
				{id: "expressions", title: "Expressions"},
				{id: "settings", title: "Settings"},
			]
		}
	];

	public function load():Void {
		commonBuilder = screenManager.buildFromResourceName("demo-common.manim", false);
		cards = [];

		// Title
		var titleText = new h2d.Text(FontManager.getFontByName("exo2_black_30"));
		titleText.text = "hx-multianim Showcase";
		titleText.textColor = 0xFFFFFF;
		titleText.setPosition(40, 15);
		addObjectToLayer(titleText, DefaultLayer);

		var subtitleText = new h2d.Text(FontManager.getFontByName("exo2_light_14"));
		subtitleText.text = "Click any demo to explore";
		subtitleText.textColor = 0x888888;
		subtitleText.setPosition(40, 50);
		addObjectToLayer(subtitleText, DefaultLayer);

		var yPos:Float = 80;
		var colWidth:Float = 200;
		var cardHeight:Float = 60;
		var cardSpacingX:Float = 10;
		var cardSpacingY:Float = 8;
		var categorySpacing:Float = 30;
		var xStart:Float = 40;

		for (cat in CATEGORIES) {
			// Category header
			var headerResult = commonBuilder.buildWithParameters("categoryHeader", ["title" => cat.name]);
			headerResult.object.setPosition(xStart, yPos);
			addBuilderResult(headerResult);
			yPos += categorySpacing;

			var xPos:Float = xStart;
			var rowHeight:Float = 0;
			for (screen in cat.screens) {
				if (xPos + colWidth > 1240) {
					xPos = xStart;
					yPos += cardHeight + cardSpacingY;
				}

				var cardButton = addButtonWithSingleBuilder(commonBuilder, "navCard", null, screen.title);
				addElement(cardButton, DefaultLayer);
				cardButton.getObject().setPosition(xPos, yPos);
				cards.push({button: cardButton, screenName: screen.id});

				xPos += colWidth + cardSpacingX;
				rowHeight = cardHeight;
			}
			yPos += rowHeight + cardSpacingY + 10;
		}
	}

	public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				for (card in cards) {
					if (source == card.button) {
						final targetScreen = screenManager.getScreen(card.screenName);
						final masterScreen:DemoMasterScreen = cast(screenManager.getScreen("demoMaster"), DemoMasterScreen);
						if (Std.isOfType(targetScreen, DemoScreenBase)) {
							final demo:DemoScreenBase = cast targetScreen;
							masterScreen.setDemoInfo(demo.demoTitle, demo.demoDescription);
						}
						screenManager.updateScreenMode(MasterAndSingle(masterScreen, targetScreen));
						#if js
						js.Browser.window.location.hash = 'screen=${card.screenName}';
						#end
						return;
					}
				}
			default:
		}
	}

	public override function onClear():Void {
		commonBuilder = null;
		cards = [];
	}
}
