package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.ui.UIMultiAnimDropdown.UIStandardMultiAnimDropdown;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.ui.UICardHandHelper;
import bh.ui.UICardHandTypes;
import bh.ui.UICardHandTypes.HandLayoutMode;
import bh.ui.UICardHandTypes.PathDistribution;
import bh.ui.UICardHandTypes.PathOrientation;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;
import bh.base.FPoint;
import h2d.col.Bounds;
import h2d.col.Point;

class CardHandDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var cardHand:Null<UICardHandHelper>;

	// Action buttons
	var drawButton:Null<UIStandardMultiAnimButton>;
	var discardButton:Null<UIStandardMultiAnimButton>;
	var resetButton:Null<UIStandardMultiAnimButton>;
	var disableButton:Null<UIStandardMultiAnimButton>;

	// Layout dropdown
	var layoutDropdown:Null<UIStandardMultiAnimDropdown>;

	// Toggles
	var arrowToggle:Null<UIStandardMultiCheckbox>;
	var c2cToggle:Null<UIStandardMultiCheckbox>;

	// Dropdowns
	var handPathDropdown:Null<UIStandardMultiAnimDropdown>;
	var drawDropdown:Null<UIStandardMultiAnimDropdown>;
	var discardDropdown:Null<UIStandardMultiAnimDropdown>;
	var returnDropdown:Null<UIStandardMultiAnimDropdown>;
	var rearrangeDropdown:Null<UIStandardMultiAnimDropdown>;
	var pathDistDropdown:Null<UIStandardMultiAnimDropdown>;
	var pathOrientDropdown:Null<UIStandardMultiAnimDropdown>;

	// Sliders
	var drawSlider:Null<UIStandardMultiAnimSlider>;
	var discardSlider:Null<UIStandardMultiAnimSlider>;
	var returnSlider:Null<UIStandardMultiAnimSlider>;
	var rearrangeSlider:Null<UIStandardMultiAnimSlider>;
	var hoverScaleSlider:Null<UIStandardMultiAnimSlider>;
	var fanAngleSlider:Null<UIStandardMultiAnimSlider>;
	var thresholdSlider:Null<UIStandardMultiAnimSlider>;
	var hoverPopSlider:Null<UIStandardMultiAnimSlider>;
	var spreadSlider:Null<UIStandardMultiAnimSlider>;
	var fanRadiusSlider:Null<UIStandardMultiAnimSlider>;

	// Target zone visuals
	var targetResults:Array<BuilderResult> = [];

	var nextCardId:Int = 0;
	var handCardIds:Array<String> = [];
	var currentLayoutMode:HandLayoutMode = Fan;
	var disabledCardIndex:Int = -1; // -1 = none disabled

	// Current path config
	var currentPathDist:PathDistribution = EvenArcLength;
	var currentPathOrient:PathOrientation = Tangent;
	var currentHandPath:String = "handCurve";

	static final CARD_DEFS:Array<{name:String, desc:String, cost:Int, color:Int, artColor:Int, image:String}> = [
		{name: "Fireball", desc: "Deal 3 fire damage", cost: 3, color: 0xCC4422, artColor: 0x882211, image: "potion_r"},
		{name: "Shield", desc: "Block 4 damage", cost: 2, color: 0x2266CC, artColor: 0x113366, image: "shield_i"},
		{name: "Heal", desc: "Restore 5 health", cost: 1, color: 0x22CC44, artColor: 0x116622, image: "potion_b"},
		{name: "Lightning", desc: "Deal 4 to random", cost: 4, color: 0xCCCC22, artColor: 0x666611, image: "sword_l"},
		{name: "Poison", desc: "2 damage per turn", cost: 2, color: 0x66CC22, artColor: 0x336611, image: "ring_i"},
		{name: "Ice Bolt", desc: "Freeze 1 turn", cost: 3, color: 0x22CCCC, artColor: 0x116666, image: "scroll_i"},
		{name: "Rage", desc: "Double attack", cost: 5, color: 0xCC2222, artColor: 0x661111, image: "helmet_i"},
		{name: "Bless", desc: "Draw 2 cards", cost: 1, color: 0xCCCC88, artColor: 0x666644, image: "armor_i"},
	];

	static final DRAW_EASINGS:Array<UIElementListItem> = [
		{name: "linear"}, {name: "easeOutQuad"}, {name: "easeOutCubic"}, {name: "easeOutBack"},
		{name: "easeOutElastic"}, {name: "easeOutBounce"}, {name: "easeInOutCubic"},
		{name: "easeInOutBack"}, {name: "easeInOutQuad"}, {name: "easeInBack"},
		{name: "easeInCubic"}, {name: "easeInQuad"},
	];

	static final DISCARD_EASINGS:Array<UIElementListItem> = [
		{name: "linear"}, {name: "easeInQuad"}, {name: "easeInCubic"}, {name: "easeInBack"},
		{name: "easeOutQuad"}, {name: "easeOutCubic"}, {name: "easeOutBack"},
		{name: "easeOutBounce"}, {name: "easeOutElastic"}, {name: "easeInOutCubic"},
		{name: "easeInOutQuad"}, {name: "easeInOutBack"},
	];

	static final RETURN_EASINGS:Array<UIElementListItem> = [
		{name: "linear"}, {name: "easeOutCubic"}, {name: "easeOutQuad"}, {name: "easeOutBack"},
		{name: "easeOutElastic"}, {name: "easeOutBounce"}, {name: "easeInOutCubic"},
		{name: "easeInOutBack"},
	];

	static final REARRANGE_EASINGS:Array<UIElementListItem> = [
		{name: "linear"}, {name: "easeInOutCubic"}, {name: "easeOutQuad"}, {name: "easeOutCubic"},
		{name: "easeOutBack"}, {name: "easeOutBounce"}, {name: "easeOutElastic"},
		{name: "easeInOutQuad"},
	];

	static final HAND_PATHS:Array<UIElementListItem> = [
		{name: "handCurve"}, {name: "handFlat"}, {name: "handDeep"},
		{name: "handWave"}, {name: "handTight"},
	];

	static final PATH_DISTS:Array<UIElementListItem> = [
		{name: "EvenArcLength"}, {name: "EvenRate"},
	];

	static final PATH_ORIENTS:Array<UIElementListItem> = [
		{name: "Tangent"}, {name: "Straight"},
	];

	static final LAYOUT_MODES:Array<UIElementListItem> = [
		{name: "Fan"}, {name: "Linear"}, {name: "Path"},
	];

	override public function load():Void {
		setupDemo("Card Hand", "Slay the Spire-style card hand with fan layout, drag-to-play & targeting");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/card-hand.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "cardHandDemo", [], [
			drawBtn => addButtonWithSingleBuilder(stdBuilder, "button", "Draw"),
			discardBtn => addButtonWithSingleBuilder(stdBuilder, "button", "Discard"),
			resetBtn => addButtonWithSingleBuilder(stdBuilder, "button", "Reset"),
			disableBtn => addButtonWithSingleBuilder(stdBuilder, "button", "Disable"),
			layoutDropdown => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar",
				LAYOUT_MODES, 0),
			arrowToggle => addCheckbox(stdBuilder, true),
			c2cToggle => addCheckbox(stdBuilder, true),
			handPathDropdown => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar",
				HAND_PATHS, 0),
			drawDropdown => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar",
				DRAW_EASINGS, 3),
			discardDropdown => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar",
				DISCARD_EASINGS, 1),
			returnDropdown => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar",
				RETURN_EASINGS, 1),
			rearrangeDropdown => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar",
				REARRANGE_EASINGS, 1),
			drawSlider => addSlider(stdBuilder, 100),
			discardSlider => addSlider(stdBuilder, 100),
			returnSlider => addSlider(stdBuilder, 20),
			rearrangeSlider => addSlider(stdBuilder, 15),
			hoverScaleSlider => addSlider(stdBuilder, 120),
			fanAngleSlider => addSlider(stdBuilder, 45),
			thresholdSlider => addSlider(stdBuilder, 240),
			hoverPopSlider => addSlider(stdBuilder, 40),
			spreadSlider => addSlider(stdBuilder, 20),
			fanRadiusSlider => addSlider(stdBuilder, 600),
			pathDistDropdown => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar",
				PATH_DISTS, 0),
			pathOrientDropdown => addDropdownWithSingleBuilder(stdBuilder, "dropdown", "list-panel", "list-item-120", "scrollbar", "scrollbar",
				PATH_ORIENTS, 0),
		]);
		demoResult = ui.builderResults;

		// Store references
		drawButton = ui.drawBtn;
		discardButton = ui.discardBtn;
		resetButton = ui.resetBtn;
		disableButton = ui.disableBtn;
		layoutDropdown = ui.layoutDropdown;
		arrowToggle = ui.arrowToggle;
		c2cToggle = ui.c2cToggle;
		handPathDropdown = ui.handPathDropdown;
		drawDropdown = ui.drawDropdown;
		discardDropdown = ui.discardDropdown;
		returnDropdown = ui.returnDropdown;
		rearrangeDropdown = ui.rearrangeDropdown;
		drawSlider = ui.drawSlider;
		discardSlider = ui.discardSlider;
		returnSlider = ui.returnSlider;
		rearrangeSlider = ui.rearrangeSlider;
		hoverScaleSlider = ui.hoverScaleSlider;
		fanAngleSlider = ui.fanAngleSlider;
		thresholdSlider = ui.thresholdSlider;
		hoverPopSlider = ui.hoverPopSlider;
		spreadSlider = ui.spreadSlider;
		fanRadiusSlider = ui.fanRadiusSlider;
		pathDistDropdown = ui.pathDistDropdown;
		pathOrientDropdown = ui.pathOrientDropdown;

		addBuilderResult(demoResult);

		// Configure sliders
		configureSlider(drawSlider, 10, 300, 5);
		configureSlider(discardSlider, 10, 300, 5);
		configureSlider(returnSlider, 5, 200, 5);
		configureSlider(rearrangeSlider, 5, 200, 5);
		configureSlider(hoverScaleSlider, 100, 200, 5);
		configureSlider(fanAngleSlider, 10, 90, 5);
		configureSlider(thresholdSlider, 50, 400, 10);
		configureSlider(hoverPopSlider, 0, 80, 5);
		configureSlider(spreadSlider, 0, 60, 5);
		configureSlider(fanRadiusSlider, 200, 1200, 50);

		// Create target zones
		createTargetZones();

		// Create card hand helper
		createCardHand();

		// Draw initial hand of 5 cards
		for (_ in 0...5)
			drawRandomCard();

		updateUI();
	}

	function configureSlider(slider:Null<UIStandardMultiAnimSlider>, min:Int, max:Int, step:Int):Void {
		if (slider == null) return;
		slider.min = min;
		slider.max = max;
		slider.step = step;
	}

	function createCardHand():Void {
		if (demoBuilder == null) return;

		var ax = if (currentLayoutMode == PathLayout) 200.0 else 640.0;
		var hScale = getSliderVal(hoverScaleSlider, 120) / 100.0;
		var fAngle = getSliderVal(fanAngleSlider, 45) * 1.0;
		var threshold = getSliderVal(thresholdSlider, 240) * 1.0;
		var hPop = getSliderVal(hoverPopSlider, 40) * 1.0;
		var nSpread = getSliderVal(spreadSlider, 20) * 1.0;
		var fRadius = getSliderVal(fanRadiusSlider, 600) * 1.0;
		var c2c = if (c2cToggle != null) c2cToggle.selected else true;

		cardHand = new UICardHandHelper(this, demoBuilder, {
			layoutMode: currentLayoutMode,
			anchorX: ax,
			anchorY: 620.0,
			cardWidth: 140.0,
			cardHeight: 200.0,
			fanRadius: fRadius,
			fanMaxAngle: fAngle,
			hoverPopDistance: hPop,
			hoverScale: hScale,
			hoverNeighborSpread: nSpread,
			targetingThresholdY: threshold,
			drawPilePosition: new FPoint(45.0, 615.0),
			discardPilePosition: new FPoint(1210.0, 615.0),
			drawPathName: "draw_easeOutBack",
			discardPathName: "discard_easeInQuad",
			returnPathName: "return_easeOutCubic",
			rearrangePathName: "rearrange_easeInOutCubic",
			targetingArrowName: "targetingArrow",
			allowCardToCard: c2c,
			layoutPathName: currentHandPath,
			pathDistribution: currentPathDist,
			pathOrientation: currentPathOrient,
		});

		cardHand.drawDuration = getSliderVal(drawSlider, 100) / 100.0;
		cardHand.discardDuration = getSliderVal(discardSlider, 100) / 100.0;
		cardHand.returnDuration = getSliderVal(returnSlider, 20) / 100.0;
		cardHand.rearrangeDuration = getSliderVal(rearrangeSlider, 15) / 100.0;

		cardHand.onCardEvent = onCardEvent;
		cardHand.canPlayCard = (cardId, target) -> true;

		registerTargets();
	}

	function switchLayoutMode(mode:HandLayoutMode):Void {
		if (mode == currentLayoutMode) return;
		currentLayoutMode = mode;
		recreateCardHand();
	}

	function recreateCardHand():Void {
		var savedCards = handCardIds.copy();

		if (cardHand != null) {
			cardHand.dispose();
			cardHand = null;
		}

		createCardHand();

		handCardIds = [];
		var descriptors:Array<CardDescriptor> = [];
		for (id in savedCards) {
			var idx = Std.parseInt(id.split("_").pop());
			if (idx == null) continue;
			var def = CARD_DEFS[idx % CARD_DEFS.length];
			handCardIds.push(id);
			descriptors.push({
				id: id,
				buildName: "card",
				params: [
					"cardName" => (def.name : Dynamic),
					"description" => (def.desc : Dynamic),
					"cost" => (def.cost : Dynamic),
					"cardColor" => (def.color : Dynamic),
					"artColor" => (def.artColor : Dynamic),
					"cardImage" => (def.image : Dynamic),
				],
				canTarget: true,
				canCombineWith: (targetCardId) -> true,
			});
		}
		if (cardHand != null)
			cardHand.setHand(descriptors);

		setStatus('Layout: ${currentLayoutMode == Fan ? "Fan" : currentLayoutMode == Linear ? "Linear" : "Path"}');
		updateUI();
	}

	function createTargetZones():Void {
		if (demoBuilder == null) return;

		for (i in 0...3) {
			var result = demoBuilder.buildWithParameters("targetZone", ["highlighted" => false], null, null, true);
			var x = 20.0 + i * 200.0;
			var y = 100.0;
			result.object.setPosition(x, y);
			addObjectToLayer(result.object, DefaultLayer);
			targetResults.push(result);
		}
	}

	function registerTargets():Void {
		if (cardHand == null) return;
		for (i in 0...targetResults.length) {
			final x = 20.0 + i * 200.0;
			final y = 100.0;
			cardHand.registerTarget({
				id: 'target_$i',
				boundsProvider: () -> Bounds.fromValues(x, y, 180, 180),
			});
		}
		cardHand.setTargetHighlightCallback((targetId, highlight) -> {
			var idx = Std.parseInt(targetId.split("_").pop());
			if (idx != null && idx < targetResults.length) {
				targetResults[idx].setParameter("highlighted", highlight);
			}
		});
	}

	function drawRandomCard():Void {
		if (cardHand == null) return;
		var def = CARD_DEFS[nextCardId % CARD_DEFS.length];
		var id = 'card_$nextCardId';
		nextCardId++;
		handCardIds.push(id);

		cardHand.drawCard({
			id: id,
			buildName: "card",
			params: [
				"cardName" => (def.name : Dynamic),
				"description" => (def.desc : Dynamic),
				"cost" => (def.cost : Dynamic),
				"cardColor" => (def.color : Dynamic),
				"artColor" => (def.artColor : Dynamic),
				"cardImage" => (def.image : Dynamic),
			],
			canTarget: true,
			canCombineWith: (targetCardId) -> true,
		});
	}

	function onCardEvent(event:CardHandEvent):Void {
		switch event {
			case CardPlayed(cardId, TargetZone(targetId)):
				handCardIds.remove(cardId);
				setStatus('Played $cardId on $targetId');
				setEvent('Play -> $targetId');
			case CardPlayed(cardId, TargetCard(targetCardId)):
				handCardIds.remove(cardId);
				setStatus('Played $cardId on card $targetCardId');
				setEvent('Play -> card');
			case CardPlayed(cardId, NoTarget):
				handCardIds.remove(cardId);
				setStatus('Played $cardId (no target)');
				setEvent("Play (no target)");
			case CardCombined(source, target):
				setStatus('Combined $source + $target');
				setEvent("Combined");
			case CardHoverStart(cardId):
				setStatus('Hovering $cardId');
			case CardHoverEnd(_):
				setStatus("Ready");
			case CardDragStart(cardId):
				setStatus('Dragging $cardId');
				setEvent("Drag start");
			case CardDragEnd(_):
				setEvent("Drag end");
			case DrawAnimComplete(cardId):
				setStatus('Drew $cardId');
			case DiscardAnimComplete(cardId):
				setStatus('Discarded $cardId');
		}
		updateUI();
	}

	function setStatus(text:String):Void {
		if (demoResult != null)
			demoResult.getUpdatable("statusText").updateText(text);
	}

	function setEvent(text:String):Void {
		if (demoResult != null)
			demoResult.getUpdatable("eventText").updateText(text);
	}

	function updateUI():Void {
		if (demoResult == null) return;
		var count = if (cardHand != null) cardHand.getCardCount() else 0;
		demoResult.getUpdatable("handCount").updateText('Hand: $count');
	}

	function toggleDisableCard():Void {
		if (cardHand == null || handCardIds.length == 0) return;

		// Re-enable previously disabled card
		if (disabledCardIndex >= 0 && disabledCardIndex < handCardIds.length) {
			cardHand.setCardEnabled(handCardIds[disabledCardIndex], true);
		}

		// Cycle to next card
		disabledCardIndex++;
		if (disabledCardIndex >= handCardIds.length) {
			disabledCardIndex = -1;
			setStatus("All cards enabled");
			return;
		}

		cardHand.setCardEnabled(handCardIds[disabledCardIndex], false);
		setStatus('Disabled ${handCardIds[disabledCardIndex]}');
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		// Forward to card hand helper first
		if (cardHand != null && cardHand.handleScreenEvent(event))
			return;

		switch event {
			case UIClick:
				if (source == drawButton) {
					drawRandomCard();
					updateUI();
				} else if (source == discardButton) {
					if (handCardIds.length > 0 && cardHand != null) {
						var id = handCardIds[0];
						handCardIds.remove(id);
						cardHand.discardCard(id);
						updateUI();
					}
				} else if (source == resetButton) {
					resetHand();
				} else if (source == disableButton) {
					toggleDisableCard();
				}
			case UIToggle(pressed):
				if (source == arrowToggle && cardHand != null) {
					cardHand.setArrowVisible(pressed);
				} else if (source == c2cToggle) {
					// Need to recreate to change allowCardToCard
					recreateCardHand();
				}
			case UIChangeItem(index, items):
				if (cardHand != null && index >= 0 && index < items.length) {
					if (source == drawDropdown) {
						cardHand.drawPathName = 'draw_${items[index].name}';
						setEvent('Draw: ${items[index].name}');
					} else if (source == discardDropdown) {
						cardHand.discardPathName = 'discard_${items[index].name}';
						setEvent('Disc: ${items[index].name}');
					} else if (source == returnDropdown) {
						cardHand.returnPathName = 'return_${items[index].name}';
						setEvent('Ret: ${items[index].name}');
					} else if (source == rearrangeDropdown) {
						cardHand.rearrangePathName = 'rearrange_${items[index].name}';
						setEvent('Rearr: ${items[index].name}');
					} else if (source == handPathDropdown) {
						currentHandPath = items[index].name;
						recreateCardHand();
						setEvent('Path: ${items[index].name}');
					} else if (source == pathDistDropdown) {
						currentPathDist = if (index == 0) EvenArcLength else EvenRate;
						recreateCardHand();
					} else if (source == pathOrientDropdown) {
						currentPathOrient = if (index == 0) Tangent else Straight;
						recreateCardHand();
					} else if (source == layoutDropdown) {
						switchLayoutMode(switch (index) {
							case 0: Fan;
							case 1: Linear;
							case 2: PathLayout;
							default: Fan;
						});
						setEvent('Layout: ${items[index].name}');
					}
				}
			case UIChangeValue(value):
				if (cardHand != null) {
					if (source == drawSlider) {
						cardHand.drawDuration = value / 100.0;
						updateLabel("drawDurLabel", '${value / 100.0}');
					} else if (source == discardSlider) {
						cardHand.discardDuration = value / 100.0;
						updateLabel("discardDurLabel", '${value / 100.0}');
					} else if (source == returnSlider) {
						cardHand.returnDuration = value / 100.0;
						updateLabel("returnDurLabel", '${value / 100.0}');
					} else if (source == rearrangeSlider) {
						cardHand.rearrangeDuration = value / 100.0;
						updateLabel("rearrangeDurLabel", '${value / 100.0}');
					} else if (source == hoverScaleSlider) {
						// hoverScale stored as percentage: 120 = 1.2x
						// Need to recreate to apply
						recreateCardHand();
						updateLabel("hoverScaleLabel", '${value / 100.0}');
					} else if (source == fanAngleSlider) {
						recreateCardHand();
						updateLabel("fanAngleLabel", '$value');
					} else if (source == thresholdSlider) {
						recreateCardHand();
						updateLabel("thresholdLabel", '$value');
					} else if (source == hoverPopSlider) {
						recreateCardHand();
						updateLabel("hoverPopLabel", '$value');
					} else if (source == spreadSlider) {
						recreateCardHand();
						updateLabel("spreadLabel", '$value');
					} else if (source == fanRadiusSlider) {
						recreateCardHand();
						updateLabel("fanRadiusLabel", '$value');
					}
				}
			default:
		}

		super.onScreenEvent(event, source);
	}

	function updateLabel(name:String, value:String):Void {
		if (demoResult != null) {
			var u = demoResult.getUpdatable(name);
			if (u != null) u.updateText(value);
		}
	}

	function getSliderVal(slider:Null<UIStandardMultiAnimSlider>, defaultVal:Int):Int {
		if (slider == null) return defaultVal;
		final s:UIStandardMultiAnimSlider = slider;
		return s.getIntValue();
	}

	function resetHand():Void {
		if (cardHand == null) return;
		cardHand.setHand([]);
		handCardIds = [];
		nextCardId = 0;
		disabledCardIndex = -1;

		for (_ in 0...5)
			drawRandomCard();

		setStatus("Reset!");
		updateUI();
	}

	override public function onMouseMove(pos:Point):Bool {
		if (cardHand != null && cardHand.onMouseMove(pos.x, pos.y))
			return false;
		return super.onMouseMove(pos);
	}

	override public function onMouseClick(pos:Point, button:Int, release:Bool):Bool {
		if (release && cardHand != null && cardHand.onMouseRelease(pos.x, pos.y))
			return false;
		return super.onMouseClick(pos, button, release);
	}

	override public function update(dt:Float):Void {
		super.update(dt);
		if (cardHand != null)
			cardHand.update(dt);
	}

	override public function onClear():Void {
		super.onClear();
		if (cardHand != null) {
			cardHand.dispose();
			cardHand = null;
		}
		demoBuilder = null;
		demoResult = null;
		drawButton = null;
		discardButton = null;
		resetButton = null;
		disableButton = null;
		arrowToggle = null;
		layoutDropdown = null;
		c2cToggle = null;
		handPathDropdown = null;
		drawDropdown = null;
		discardDropdown = null;
		returnDropdown = null;
		rearrangeDropdown = null;
		drawSlider = null;
		discardSlider = null;
		returnSlider = null;
		rearrangeSlider = null;
		hoverScaleSlider = null;
		fanAngleSlider = null;
		thresholdSlider = null;
		hoverPopSlider = null;
		spreadSlider = null;
		fanRadiusSlider = null;
		pathDistDropdown = null;
		pathOrientDropdown = null;
		targetResults = [];
		handCardIds = [];
		nextCardId = 0;
		disabledCardIndex = -1;
	}
}
