import bh.ui.UIElement;
import bh.ui.UIElement.TileRef;
import h2d.Bitmap;
import h2d.Tile;

using bh.base.Atlas2;

class TestBitmaps {
	public static inline final SHEET = "crew2";
	static inline final ICON_SIZE = 15;

	public static final ALL_TYPES:Array<String> = [
		"rectBlack", "rectWhite", "rectGreen",
		"circleBlack", "circleWhite", "circleRed",
		"star", "skull", "marine", "dice"
	];

	static final ALL_NAMES:Array<String> = [
		"Black Rect", "White Rect", "Green Rect",
		"Black Circle", "White Circle", "Red Circle",
		"Star", "Skull", "Marine", "Dice"
	];

	static var _allItems:Null<Array<UIElementListItem>>;
	static var _rectItems:Null<Array<UIElementListItem>>;
	static var _circleItems:Null<Array<UIElementListItem>>;
	static var _spriteItems:Null<Array<UIElementListItem>>;

	public static var ALL_ITEMS(get, never):Array<UIElementListItem>;
	public static var RECT_ITEMS(get, never):Array<UIElementListItem>;
	public static var CIRCLE_ITEMS(get, never):Array<UIElementListItem>;
	public static var SPRITE_ITEMS(get, never):Array<UIElementListItem>;

	static function get_ALL_ITEMS():Array<UIElementListItem> {
		if (_allItems == null) init();
		return _allItems;
	}

	static function get_RECT_ITEMS():Array<UIElementListItem> {
		if (_allItems == null) init();
		return _rectItems;
	}

	static function get_CIRCLE_ITEMS():Array<UIElementListItem> {
		if (_allItems == null) init();
		return _circleItems;
	}

	static function get_SPRITE_ITEMS():Array<UIElementListItem> {
		if (_allItems == null) init();
		return _spriteItems;
	}

	static function init():Void {
		final atlas = hxd.Res.load("crew2.atlas2").toAtlas2();
		final circleTile = hxd.Res.load("circle_soft.png").toTile();
		final starTile = hxd.Res.load("star.png").toTile();
		final skullTile = atlas.get("icon-skull").tile;
		final marineTile = atlas.get("marine_r_standing").tile;
		final diceTile = atlas.getAnim("dice")[0].tile;

		_allItems = [
			{name: "Black Rect", tileRef: TRTile(Tile.fromColor(0x000000, ICON_SIZE, ICON_SIZE))},
			{name: "White Rect", tileRef: TRTile(Tile.fromColor(0xFFFFFF, ICON_SIZE, ICON_SIZE))},
			{name: "Green Rect", tileRef: TRTile(Tile.fromColor(0x00CC00, ICON_SIZE, ICON_SIZE))},
			{name: "Black Circle", tileRef: TRTile(bakeTile(circleTile, 0xFF000000))},
			{name: "White Circle", tileRef: TRTile(bakeTile(circleTile))},
			{name: "Red Circle", tileRef: TRTile(bakeTile(circleTile, 0xFFFF0000))},
			{name: "Star", tileRef: TRTile(bakeTile(starTile))},
			{name: "Skull", tileRef: TRTile(bakeTile(skullTile))},
			{name: "Marine", tileRef: TRTile(bakeTile(marineTile))},
			{name: "Dice", tileRef: TRTile(bakeTile(diceTile))},
		];

		_rectItems = _allItems.slice(0, 3);
		_circleItems = _allItems.slice(3, 6);
		_spriteItems = _allItems.slice(6);
	}

	static function bakeTile(source:Tile, ?tintColor:Null<Int>):Tile {
		final sw = source.width;
		final sh = source.height;
		final clean = source.sub(0, 0, sw, sh, 0, 0);

		final scale = Math.min(ICON_SIZE / sw, ICON_SIZE / sh);
		final scaledW = sw * scale;
		final scaledH = sh * scale;
		final ox = (ICON_SIZE - scaledW) / 2;
		final oy = (ICON_SIZE - scaledH) / 2;

		final container = new h2d.Object();
		final bmp = new Bitmap(clean, container);
		bmp.setScale(scale);
		bmp.setPosition(ox, oy);

		if (tintColor != null) {
			bmp.color.setColor(tintColor);
		}

		final tex = new h3d.mat.Texture(ICON_SIZE, ICON_SIZE, [Target]);
		container.drawTo(tex);
		final pixels = tex.capturePixels();
		container.remove();
		tex.dispose();

		return Tile.fromPixels(pixels);
	}

	public static function getType(index:Int):String {
		return index >= 0 && index < ALL_TYPES.length ? ALL_TYPES[index] : ALL_TYPES[0];
	}

	public static function getName(bitmapType:String):String {
		final idx = ALL_TYPES.indexOf(bitmapType);
		return idx >= 0 ? ALL_NAMES[idx] : bitmapType;
	}
}
