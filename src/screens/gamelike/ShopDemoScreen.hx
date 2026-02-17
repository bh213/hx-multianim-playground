package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;

class ShopDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var buyButton:Null<UIStandardMultiAnimButton>;
	var sellButton:Null<UIStandardMultiAnimButton>;

	var gold:Int = 500;
	var selectedIdx:Int = -1;
	var playerInventory:Array<String>;
	var itemInteractives:Array<h2d.Interactive>;
	var itemHighlight:Null<h2d.Bitmap>;

	static final SHOP_ITEMS:Array<{name:String, price:Int, color:Int, desc:String}> = [
		{name: "Health Potion", price: 50, color: 0xFFFF4444, desc: "Restores 50 HP"},
		{name: "Mana Potion", price: 40, color: 0xFF4A90A4, desc: "Restores 30 MP"},
		{name: "Iron Sword", price: 150, color: 0xFFB0B0B0, desc: "ATK +10"},
		{name: "Leather Armor", price: 120, color: 0xFF8B6914, desc: "DEF +8"},
		{name: "Magic Ring", price: 200, color: 0xFFFFEB3B, desc: "INT +5"},
		{name: "Speed Boots", price: 180, color: 0xFF4CAF50, desc: "DEX +6"},
	];

	override public function load():Void {
		setupDemo("Shop UI", "Item shop with buy/sell, gold tracking, and inventory");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/shop.manim", false);

		buyButton = addButtonWithSingleBuilder(stdBuilder, "button", null, "Buy");
		sellButton = addButtonWithSingleBuilder(stdBuilder, "button", null, "Sell");

		demoResult = demoBuilder.buildWithParameters("shopDemo", [], {
			placeholderObjects: [
				"buyButton" => PVObject(buyButton.getObject()),
				"sellButton" => PVObject(sellButton.getObject()),
			]
		});
		addBuilderResult(demoResult);

		playerInventory = [];
		itemInteractives = [];

		// Build item list rows
		final container = demoResult.getSingleItemByName("itemContainer").object.toh2dObject();

		// Selection highlight
		itemHighlight = new h2d.Bitmap(h2d.Tile.fromColor(0x337FDBDA, 330, 32));
		itemHighlight.visible = false;
		container.addChild(itemHighlight);

		for (i in 0...SHOP_ITEMS.length) {
			final item = SHOP_ITEMS[i];
			final y = i * 36;

			// Item color indicator
			final colorBmp = new h2d.Bitmap(h2d.Tile.fromColor(item.color, 20, 20));
			colorBmp.setPosition(0, y + 6);
			container.addChild(colorBmp);

			// Item name
			final nameText = new h2d.Text(bh.base.FontManager.getFontByName("exo2_14"));
			nameText.text = item.name;
			nameText.textColor = 0xFFFFFF;
			nameText.setPosition(30, y + 4);
			container.addChild(nameText);

			// Price
			final priceText = new h2d.Text(bh.base.FontManager.getFontByName("exo2_14"));
			priceText.text = '${item.price}g';
			priceText.textColor = 0xFFEB3B;
			priceText.setPosition(250, y + 4);
			container.addChild(priceText);

			// Interactive
			final inter = new h2d.Interactive(330, 32, container);
			inter.setPosition(0, y);
			final idx = i;
			inter.onClick = function(_) {
				selectItem(idx);
			};
			itemInteractives.push(inter);
		}

		refreshGold();
	}

	function selectItem(idx:Int):Void {
		if (demoResult == null) return;
		selectedIdx = idx;
		final item = SHOP_ITEMS[idx];

		demoResult.getUpdatable("selectedNameText").updateText(item.name);
		demoResult.getUpdatable("selectedPriceText").updateText('Price: ${item.price}g');
		demoResult.getUpdatable("selectedDescText").updateText(item.desc);
		demoResult.getUpdatable("feedbackText").updateText("");

		if (itemHighlight != null) {
			itemHighlight.visible = true;
			itemHighlight.setPosition(0, idx * 36);
		}
	}

	function buyItem():Void {
		if (selectedIdx < 0 || demoResult == null) return;
		final item = SHOP_ITEMS[selectedIdx];

		if (gold < item.price) {
			demoResult.getUpdatable("feedbackText").updateText("Insufficient funds!");
			return;
		}

		gold -= item.price;
		playerInventory.push(item.name);
		demoResult.getUpdatable("feedbackText").updateText('Bought ${item.name}!');
		refreshGold();
		refreshInventory();
	}

	function sellItem():Void {
		if (selectedIdx < 0 || demoResult == null) return;
		final item = SHOP_ITEMS[selectedIdx];

		// Find item in inventory
		final invIdx = playerInventory.indexOf(item.name);
		if (invIdx < 0) {
			demoResult.getUpdatable("feedbackText").updateText("You don't have that item!");
			return;
		}

		playerInventory.splice(invIdx, 1);
		final sellPrice = Std.int(item.price / 2);
		gold += sellPrice;
		demoResult.getUpdatable("feedbackText").updateText('Sold ${item.name} for ${sellPrice}g!');
		refreshGold();
		refreshInventory();
	}

	function refreshGold():Void {
		if (demoResult != null) {
			demoResult.getUpdatable("goldText").updateText('$gold');
		}
	}

	function refreshInventory():Void {
		if (demoResult == null) return;
		if (playerInventory.length == 0) {
			demoResult.getUpdatable("inventoryText").updateText("(empty)");
		} else {
			// Count items
			var counts = new Map<String, Int>();
			for (item in playerInventory) {
				final cur = counts.exists(item) ? counts.get(item) : 0;
				counts.set(item, cur + 1);
			}
			var parts:Array<String> = [];
			for (name => count in counts) {
				parts.push(if (count > 1) '$name x$count' else name);
			}
			demoResult.getUpdatable("inventoryText").updateText(parts.join(", "));
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == buyButton) {
					buyItem();
				} else if (source == sellButton) {
					sellItem();
				}
			default:
		}
		super.onScreenEvent(event, source);
	}

	override public function onClear():Void {
		super.onClear();
		if (itemInteractives != null) {
			for (inter in itemInteractives) inter.remove();
			itemInteractives = null;
		}
		demoBuilder = null;
		demoResult = null;
		buyButton = null;
		sellButton = null;
		playerInventory = null;
		itemHighlight = null;
		selectedIdx = -1;
		gold = 500;
	}
}
