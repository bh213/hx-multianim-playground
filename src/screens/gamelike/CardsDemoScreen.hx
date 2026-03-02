package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimTabs;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.ui.UIMultiAnimDropdown.UIStandardMultiAnimDropdown;
import bh.ui.UIMultiAnimSlider.UIStandardMultiAnimSlider;
import bh.ui.UICardHandHelper;
import bh.ui.UICardHandTypes;
import bh.ui.UICardHandTypes.HandLayoutMode;
import bh.ui.UICardHandTypes.PathDistribution;
import bh.ui.UICardHandTypes.PathOrientation;
import bh.ui.UIInteractiveWrapper;
import bh.ui.UITooltipHelper;
import bh.ui.UITooltipHelper.TooltipPosition;
import bh.multianim.MultiAnimBuilder;
import bh.base.MacroUtils;
import bh.base.FPoint;
import h2d.col.Point;

class CardsDemoScreen extends DemoScreenBase {
	// === Tabs ===
	var tabs:Null<UIMultiAnimTabs> = null;
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var activeTab:Int = 0;

	// Shared builders
	var cardBuilder:Null<MultiAnimBuilder>;
	var statesBuilder:Null<MultiAnimBuilder>;

	// === Tab 0: Card States ===
	var statesResult:Null<BuilderResult>;
	var tooltipHelper:Null<UITooltipHelper>;
	var stateCardResults:Array<BuilderResult> = [];

	// === Tab 1: Card Hand ===
	var handResult:Null<BuilderResult>;
	var cardHand:Null<UICardHandHelper>;
	var handTooltipHelper:Null<UITooltipHelper>;
	var drawButton:Null<UIStandardMultiAnimButton>;
	var discardButton:Null<UIStandardMultiAnimButton>;
	var resetButton:Null<UIStandardMultiAnimButton>;
	var disableButton:Null<UIStandardMultiAnimButton>;
	var layoutDropdown:Null<UIStandardMultiAnimDropdown>;
	var arrowToggle:Null<UIStandardMultiCheckbox>;
	var c2cToggle:Null<UIStandardMultiCheckbox>;
	var c2cHoverPopToggle:Null<UIStandardMultiCheckbox>;
	var c2cHoverScaleToggle:Null<UIStandardMultiCheckbox>;
	var c2cSpreadToggle:Null<UIStandardMultiCheckbox>;
	var handPathDropdown:Null<UIStandardMultiAnimDropdown>;
	var drawDropdown:Null<UIStandardMultiAnimDropdown>;
	var discardDropdown:Null<UIStandardMultiAnimDropdown>;
	var returnDropdown:Null<UIStandardMultiAnimDropdown>;
	var rearrangeDropdown:Null<UIStandardMultiAnimDropdown>;
	var pathDistDropdown:Null<UIStandardMultiAnimDropdown>;
	var pathOrientDropdown:Null<UIStandardMultiAnimDropdown>;
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
	var targetResults:Array<BuilderResult> = [];
	var nextCardId:Int = 0;
	var handCardIds:Array<String> = [];
	var currentLayoutMode:HandLayoutMode = Fan;
	var disabledCardIndex:Int = -1;
	var currentPathDist:PathDistribution = EvenArcLength;
	var currentPathOrient:PathOrientation = Tangent;
	var currentHandPath:String = "handCurve";

	// === Tab items ===
	static final TAB_ITEMS:Array<UIElementListItem> = [
		{name: "Card States"},
		{name: "Card Hand"},
	];

	static final TAB_DESCRIPTIONS = [
		"Visual states a card passes through in the Card Hand system",
		"Interactive card hand — drag to play, target enemies, combine cards",
	];

	// === Card Hand data ===
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
		{name: "spiral"}, {name: "wave"}, {name: "highArc"}, {name: "zigzag"},
		{name: "spinFlip"}, {name: "loop"}, {name: "bouncyArc"}, {name: "flicker"},
	];

	static final DISCARD_EASINGS:Array<UIElementListItem> = [
		{name: "linear"}, {name: "easeInQuad"}, {name: "easeInCubic"}, {name: "easeInBack"},
		{name: "easeOutQuad"}, {name: "easeOutCubic"}, {name: "easeOutBack"},
		{name: "easeOutBounce"}, {name: "easeOutElastic"}, {name: "easeInOutCubic"},
		{name: "easeInOutQuad"}, {name: "easeInOutBack"},
		{name: "spiral"}, {name: "wave"}, {name: "highArc"}, {name: "zigzag"},
		{name: "spinFlip"}, {name: "loop"}, {name: "bouncyArc"}, {name: "flicker"},
	];

	static final RETURN_EASINGS:Array<UIElementListItem> = [
		{name: "linear"}, {name: "easeOutCubic"}, {name: "easeOutQuad"}, {name: "easeOutBack"},
		{name: "easeOutElastic"}, {name: "easeOutBounce"}, {name: "easeInOutCubic"},
		{name: "easeInOutBack"},
		{name: "spiral"}, {name: "wave"}, {name: "highArc"}, {name: "zigzag"},
		{name: "spinFlip"}, {name: "loop"}, {name: "bouncyArc"}, {name: "flicker"},
	];

	static final REARRANGE_EASINGS:Array<UIElementListItem> = [
		{name: "linear"}, {name: "easeInOutCubic"}, {name: "easeOutQuad"}, {name: "easeOutCubic"},
		{name: "easeOutBack"}, {name: "easeOutBounce"}, {name: "easeOutElastic"},
		{name: "easeInOutQuad"},
		{name: "spiral"}, {name: "wave"}, {name: "highArc"}, {name: "zigzag"},
		{name: "spinFlip"}, {name: "loop"}, {name: "bouncyArc"}, {name: "flicker"},
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

	// ========== Load ==========

	override public function load():Void {
		autoSyncInitialState = true;
		setupDemo("Cards", "Card visual states and interactive card hand");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/cards-demo.manim", false);
		cardBuilder = screenManager.buildFromResourceName("demos/gamelike/card-hand.manim", false);
		statesBuilder = screenManager.buildFromResourceName("demos/gamelike/card-states.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "cardsDemo", [], [
			cardTabs => addTabs(stdBuilder, TAB_ITEMS, 0),
		]);

		demoResult = ui.builderResults;
		tabs = ui.cardTabs;
		addBuilderResult(demoResult);

		// Set initial description
		if (demoResult != null) {
			var updatable = demoResult.getUpdatable("description");
			if (updatable != null)
				updatable.updateText(TAB_DESCRIPTIONS[0]);
		}

		loadCardStatesTab();
		loadCardHandTab();
	}

	// ========== Tab 0: Card States ==========

	function loadCardStatesTab():Void {
		tabs.beginTab(0);

		// Build layout (titles, labels, status)
		statesResult = statesBuilder.buildWithParameters("cardStatesDemo", []);
		addBuilderResult(statesResult);

		// Tooltip helper — Right for row 1, overridden to Above for row 2
		tooltipHelper = new UITooltipHelper(this, statesBuilder, {delay: 0.15, position: Right, offset: 8});

		buildStatusCards();
		buildBehaviorCards();

		tabs.endTab();
	}

	function buildStatusCards():Void {
		var positions = [
			{prefix: "sNormal", status: "normal", x: 90.0, y: 92.0},
			{prefix: "sHover", status: "hover", x: 280.0, y: 92.0},
			{prefix: "sPressed", status: "pressed", x: 470.0, y: 92.0},
			{prefix: "sDisabled", status: "disabled", x: 660.0, y: 92.0},
		];

		for (p in positions) {
			var result = cardBuilder.buildWithParameters("card", [
				"status" => (p.status : Dynamic),
				"cardName" => ("Shield" : Dynamic),
				"description" => ("Block 4 damage" : Dynamic),
				"cost" => (2 : Dynamic),
				"cardColor" => (0x2266CC : Dynamic),
				"artColor" => (0x113366 : Dynamic),
				"cardImage" => ("shield_i" : Dynamic),
			], null, null, true);
			result.object.setPosition(p.x, p.y);
			addObjectToLayer(result.object, DefaultLayer);
			addInteractives(result, p.prefix);
			stateCardResults.push(result);
		}
	}

	function buildBehaviorCards():Void {
		// Hover Pop
		var hoverPop = buildStateCard("Fireball", "Deal 3 fire damage", 3, 0xCC4422, 0x882211, "potion_r");
		hoverPop.object.setPosition(60, 350);
		hoverPop.object.setScale(1.15);
		addObjectToLayer(hoverPop.object, DefaultLayer);
		addInteractives(hoverPop, "sHoverPop");
		tooltipHelper.setPosition("sHoverPop.card", Above);
		stateCardResults.push(hoverPop);

		// Dragging
		var dragging = buildStateCard("Lightning", "Deal 4 to random", 4, 0xCCCC22, 0x666611, "sword_l");
		dragging.object.setPosition(250, 370);
		dragging.object.rotation = -0.14;
		addObjectToLayer(dragging.object, DefaultLayer);
		addInteractives(dragging, "sDragging");
		tooltipHelper.setPosition("sDragging.card", Above);
		stateCardResults.push(dragging);

		// Targeting
		var targeting = buildStateCard("Poison", "2 damage per turn", 2, 0x66CC22, 0x336611, "ring_i");
		targeting.object.setPosition(430, 348);
		targeting.object.setScale(1.1);
		addObjectToLayer(targeting.object, DefaultLayer);
		addInteractives(targeting, "sTargeting");
		tooltipHelper.setPosition("sTargeting.card", Above);
		stateCardResults.push(targeting);

		// Targeting arrows (segment + head examples)
		var segValid = cardBuilder.buildWithParameters("arrowSegment", ["valid" => (true : Dynamic)]);
		segValid.object.setPosition(590, 430);
		segValid.object.rotation = -0.3;
		segValid.object.setScale(2.0);
		addObjectToLayer(segValid.object, DefaultLayer);

		var headValid = cardBuilder.buildWithParameters("arrowHead", ["valid" => (true : Dynamic)]);
		headValid.object.setPosition(620, 425);
		headValid.object.rotation = -0.3;
		headValid.object.setScale(2.0);
		addObjectToLayer(headValid.object, DefaultLayer);

		var segInvalid = cardBuilder.buildWithParameters("arrowSegment", ["valid" => (false : Dynamic)]);
		segInvalid.object.setPosition(590, 480);
		segInvalid.object.rotation = 0.3;
		segInvalid.object.setScale(2.0);
		segInvalid.object.alpha = 0.5;
		addObjectToLayer(segInvalid.object, DefaultLayer);

		var headInvalid = cardBuilder.buildWithParameters("arrowHead", ["valid" => (false : Dynamic)]);
		headInvalid.object.setPosition(620, 485);
		headInvalid.object.rotation = 0.3;
		headInvalid.object.setScale(2.0);
		headInvalid.object.alpha = 0.5;
		addObjectToLayer(headInvalid.object, DefaultLayer);

		// Animating: ghost + main
		var ghost = buildStateCard("Ice Bolt", "Freeze 1 turn", 3, 0x22CCCC, 0x116666, "scroll_i");
		ghost.object.setPosition(770, 365);
		ghost.object.alpha = 0.25;
		addObjectToLayer(ghost.object, DefaultLayer);

		var animCard = buildStateCard("Ice Bolt", "Freeze 1 turn", 3, 0x22CCCC, 0x116666, "scroll_i");
		animCard.object.setPosition(795, 390);
		addObjectToLayer(animCard.object, DefaultLayer);
		addInteractives(animCard, "sAnimating");
		tooltipHelper.setPosition("sAnimating.card", Above);
		stateCardResults.push(animCard);
	}

	function buildStateCard(name:String, desc:String, cost:Int, color:Int, artColor:Int, image:String):BuilderResult {
		return cardBuilder.buildWithParameters("card", [
			"status" => ("normal" : Dynamic),
			"cardName" => (name : Dynamic),
			"description" => (desc : Dynamic),
			"cost" => (cost : Dynamic),
			"cardColor" => (color : Dynamic),
			"artColor" => (artColor : Dynamic),
			"cardImage" => (image : Dynamic),
		], null, null, true);
	}

	function getTooltipData(id:String):Null<{title:String, desc:String, detail:String}> {
		if (id == "sNormal.card")
			return {title: "Normal (idle)", desc: "Default card appearance. Thin border, base colors.", detail: "status=normal. No user interaction occurring."};
		if (id == "sHover.card")
			return {title: "Hover", desc: "Golden border when mouse enters the card area.", detail: "status=hover. Driven by UIRichInteractiveHelper."};
		if (id == "sPressed.card")
			return {title: "Pressed", desc: "White border while mouse button is held down.", detail: "status=pressed. Triggers on UIPush event."};
		if (id == "sDisabled.card")
			return {title: "Disabled", desc: "Dark overlay and dim border. Card unplayable.", detail: "status=disabled. setCardEnabled(id, false)."};
		if (id == "sHoverPop.card")
			return {title: "Hover Pop (in hand)", desc: "Card pops up above hand and scales when hovered.", detail: "Config: hoverPopDistance, hoverScale, neighborSpread."};
		if (id == "sDragging.card")
			return {title: "Dragging", desc: "Card follows cursor. Reparented to drag layer.", detail: "Rotation resets to 0. Only one card dragged at a time."};
		if (id == "sTargeting.card")
			return {title: "Targeting", desc: "Drag past threshold. Arrow connects to cursor.", detail: "Green = valid target. Red = no target in range."};
		if (id == "sAnimating.card")
			return {title: "Animating", desc: "Card traveling along animatedPath bezier curve.", detail: "Draw, discard, rearrange, return. Input blocked."};
		return null;
	}

	// ========== Tab 1: Card Hand ==========

	function loadCardHandTab():Void {
		tabs.beginTab(1);

		var ui = MacroUtils.macroBuildWithParameters(cardBuilder, "cardHandDemo", [], [
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
			c2cHoverPopToggle => addCheckbox(stdBuilder, false),
			c2cHoverScaleToggle => addCheckbox(stdBuilder, false),
			c2cSpreadToggle => addCheckbox(stdBuilder, false),
		]);
		handResult = ui.builderResults;

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
		c2cHoverPopToggle = ui.c2cHoverPopToggle;
		c2cHoverScaleToggle = ui.c2cHoverScaleToggle;
		c2cSpreadToggle = ui.c2cSpreadToggle;

		addBuilderResult(handResult);
		addInteractives(handResult);
		handTooltipHelper = new UITooltipHelper(this, cardBuilder, {delay: 0.15, position: Above, offset: 6});

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

		// Draw initial hand
		for (_ in 0...5)
			drawRandomCard();

		updateControlStates();
		updateHandUI();

		// Card hand starts hidden (Tab 0 is active initially)
		if (cardHand != null)
			cardHand.setVisible(false);

		tabs.endTab();
	}

	// ========== Card Hand helpers ==========

	function configureSlider(slider:Null<UIStandardMultiAnimSlider>, min:Int, max:Int, step:Int):Void {
		if (slider == null) return;
		slider.min = min;
		slider.max = max;
		slider.step = step;
	}

	function createCardHand():Void {
		if (cardBuilder == null) return;

		var ax = if (currentLayoutMode == PathLayout) 200.0 else 640.0;
		var hScale = getSliderVal(hoverScaleSlider, 120) / 100.0;
		var fAngle = getSliderVal(fanAngleSlider, 45) * 1.0;
		var threshold = getSliderVal(thresholdSlider, 240) * 1.0;
		var hPop = getSliderVal(hoverPopSlider, 40) * 1.0;
		var nSpread = getSliderVal(spreadSlider, 20) * 1.0;
		var fRadius = getSliderVal(fanRadiusSlider, 600) * 1.0;
		var c2c = if (c2cToggle != null) c2cToggle.selected else true;
		var c2cPop = if (c2cHoverPopToggle != null) c2cHoverPopToggle.selected else false;
		var c2cScale = if (c2cHoverScaleToggle != null) c2cHoverScaleToggle.selected else false;
		var c2cSpr = if (c2cSpreadToggle != null) c2cSpreadToggle.selected else false;

		cardHand = new UICardHandHelper(this, cardBuilder, {
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
			arrowSegmentName: "arrowSegment",
			arrowHeadName: "arrowHead",
			arrowPathName: "arrowCurve",
			allowCardToCard: c2c,
			cardToCardHoverPop: c2cPop,
			cardToCardHoverScale: c2cScale,
			cardToCardSpread: c2cSpr,
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
		cardHand.setArrowVisible(if (arrowToggle != null) arrowToggle.selected else true);

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

		setHandStatus('Layout: ${currentLayoutMode == Fan ? "Fan" : currentLayoutMode == Linear ? "Linear" : "Path"}');
		updateControlStates();
		updateHandUI();
	}

	function createTargetZones():Void {
		if (cardBuilder == null) return;

		for (i in 0...3) {
			var result = cardBuilder.buildWithParameters("targetZone", ["highlighted" => false], null, null, true);
			var x = 20.0 + i * 200.0;
			var y = 100.0;
			result.object.setPosition(x, y);
			addObjectToLayer(result.object, DefaultLayer);
			targetResults.push(result);
		}
	}

	function registerTargets():Void {
		if (cardHand == null) return;
		// Register interactive wrappers from the built target zone results
		var wrappers:Array<UIInteractiveWrapper> = [];
		for (i in 0...targetResults.length) {
			var resultWrappers = addInteractives(targetResults[i], 'target_$i');
			for (w in resultWrappers)
				wrappers.push(w);
		}
		cardHand.registerTargetInteractives(wrappers);
		cardHand.setTargetHighlightCallback((targetId, highlight, metadata) -> {
			// Interactive IDs are "target_N.target" — extract the index
			for (i in 0...targetResults.length) {
				if (targetId == 'target_$i.target') {
					targetResults[i].setParameter("highlighted", highlight);
					break;
				}
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
				setHandStatus('Played $cardId on $targetId');
				setHandEvent('Play -> $targetId');
			case CardPlayed(cardId, TargetCard(targetCardId)):
				handCardIds.remove(cardId);
				setHandStatus('Played $cardId on card $targetCardId');
				setHandEvent('Play -> card');
			case CardPlayed(cardId, NoTarget):
				handCardIds.remove(cardId);
				setHandStatus('Played $cardId (no target)');
				setHandEvent("Play (no target)");
			case CardCombined(source, target):
				setHandStatus('Combined $source + $target');
				setHandEvent("Combined");
			case CardHoverStart(cardId):
				setHandStatus('Hovering $cardId');
			case CardHoverEnd(_):
				setHandStatus("Ready");
			case CardDragStart(cardId):
				setHandStatus('Dragging $cardId');
				setHandEvent("Drag start");
			case CardDragEnd(_):
				setHandEvent("Drag end");
			case DrawAnimComplete(cardId):
				setHandStatus('Drew $cardId');
			case DiscardAnimComplete(cardId):
				setHandStatus('Discarded $cardId');
		}
		updateHandUI();
	}

	function setHandStatus(text:String):Void {
		if (handResult != null)
			handResult.getUpdatable("statusText").updateText(text);
	}

	function setHandEvent(text:String):Void {
		if (handResult != null)
			handResult.getUpdatable("eventText").updateText(text);
	}

	function updateHandUI():Void {
		if (handResult == null) return;
		var count = if (cardHand != null) cardHand.getCardCount() else 0;
		handResult.getUpdatable("handCount").updateText('Hand: $count');
	}

	function updateControlStates():Void {
		var isFan = currentLayoutMode == Fan;
		var isPath = currentLayoutMode == PathLayout;

		// Fan-only controls
		if (fanAngleSlider != null) fanAngleSlider.disabled = !isFan;
		if (fanRadiusSlider != null) fanRadiusSlider.disabled = !isFan;

		// Path-only controls
		if (handPathDropdown != null) handPathDropdown.disabled = !isPath;
		if (pathDistDropdown != null) pathDistDropdown.disabled = !isPath;
		if (pathOrientDropdown != null) pathOrientDropdown.disabled = !isPath;

		// C2C-only controls
		var c2cEnabled = if (c2cToggle != null) c2cToggle.selected else false;
		if (c2cHoverPopToggle != null) c2cHoverPopToggle.disabled = !c2cEnabled;
		if (c2cHoverScaleToggle != null) c2cHoverScaleToggle.disabled = !c2cEnabled;
		if (c2cSpreadToggle != null) c2cSpreadToggle.disabled = !c2cEnabled;
	}

	function toggleDisableCard():Void {
		if (cardHand == null || handCardIds.length == 0) return;

		if (disabledCardIndex >= 0 && disabledCardIndex < handCardIds.length) {
			cardHand.setCardEnabled(handCardIds[disabledCardIndex], true);
		}

		disabledCardIndex++;
		if (disabledCardIndex >= handCardIds.length) {
			disabledCardIndex = -1;
			setHandStatus("All cards enabled");
			return;
		}

		cardHand.setCardEnabled(handCardIds[disabledCardIndex], false);
		setHandStatus('Disabled ${handCardIds[disabledCardIndex]}');
	}

	function updateLabel(name:String, value:String):Void {
		if (handResult != null) {
			var u = handResult.getUpdatable(name);
			if (u != null) u.updateText(value);
		}
	}

	function getSliderVal(slider:Null<UIStandardMultiAnimSlider>, defaultVal:Int):Int {
		if (slider == null) return defaultVal;
		final s:UIStandardMultiAnimSlider = slider;
		return s.getIntValue();
	}

	function getHelpText(id:String):Null<String> {
		return switch (id) {
			case "hlpLayout": "Fan: arc layout. Linear: side-by-side. Path: follow a bezier curve";
			case "hlpArrow": "Show/hide targeting arrow when dragging cards";
			case "hlpC2C": "Card-to-Card: allow playing a card onto another card";
			case "hlpHandPath": "Bezier curve shape used in Path layout mode";
			case "hlpDraw": "Easing for draw animation (draw pile to hand)";
			case "hlpDiscard": "Easing for discard animation (hand to discard pile)";
			case "hlpReturn": "Easing for snap-back after cancelled drag";
			case "hlpRearr": "Easing for cards sliding to fill gaps";
			case "hlpHoverScale": "Scale multiplier applied when hovering a card";
			case "hlpFanAngle": "Maximum angle spread in Fan layout (degrees)";
			case "hlpThreshold": "Y distance to drag before targeting mode activates";
			case "hlpHoverPop": "Distance card pops up when hovered (pixels)";
			case "hlpSpread": "Neighbor cards shift apart when hovering (pixels)";
			case "hlpFanRadius": "Arc radius for Fan layout (pixels)";
			case "hlpPathDist": "EvenArcLength: equal visual spacing. EvenRate: equal parametric spacing";
			case "hlpOrient": "Tangent: rotate with curve. Straight: no rotation";
			case "hlpC2CPop": "Apply hover pop to card-to-card target";
			case "hlpC2CScale": "Use hover scale (instead of highlight scale) for C2C target";
			case "hlpC2CSpread": "Spread neighbors when hovering C2C target";
			default: null;
		};
	}

	function resetHand():Void {
		if (cardHand == null) return;
		cardHand.setHand([]);
		handCardIds = [];
		nextCardId = 0;
		disabledCardIndex = -1;

		for (_ in 0...5)
			drawRandomCard();

		setHandStatus("Reset!");
		updateHandUI();
	}

	// ========== Events ==========

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		// Tab change
		switch event {
			case UIChangeItem(index, items):
				if (source == tabs) {
					activeTab = index;
					if (demoResult != null) {
						var updatable = demoResult.getUpdatable("description");
						if (updatable != null && index < TAB_DESCRIPTIONS.length)
							updatable.updateText(TAB_DESCRIPTIONS[index]);
					}
					if (cardHand != null)
						cardHand.setVisible(index == 1);
					return;
				}
			default:
		}

		// Tab 0: Card States events
		if (activeTab == 0) {
			switch event {
				case UIInteractiveEvent(UIEntering, id, _):
					var data = getTooltipData(id);
					if (data != null && tooltipHelper != null) {
						var params = new Map<String, Dynamic>();
						params.set("title", data.title);
						params.set("desc", data.desc);
						params.set("detail", data.detail);
						tooltipHelper.startHover(id, "stateTooltip", params);
					}
					if (statesResult != null && data != null)
						statesResult.getUpdatable("statusText").updateText('State: ${data.title}');
				case UIInteractiveEvent(UILeaving, id, _):
					if (tooltipHelper != null)
						tooltipHelper.cancelHover(id);
					if (statesResult != null)
						statesResult.getUpdatable("statusText").updateText("Hover a card to see state description");
				default:
			}
			return;
		}

		// Tab 1: Card Hand events
		if (activeTab == 1) {
			// Forward to card hand helper first
			if (cardHand != null && cardHand.handleScreenEvent(event))
				return;

			switch event {
				case UIClick:
					if (source == drawButton) {
						drawRandomCard();
						updateHandUI();
					} else if (source == discardButton) {
						if (handCardIds.length > 0 && cardHand != null) {
							var id = handCardIds[0];
							handCardIds.remove(id);
							cardHand.discardCard(id);
							updateHandUI();
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
						recreateCardHand();
					} else if (source == c2cHoverPopToggle || source == c2cHoverScaleToggle || source == c2cSpreadToggle) {
						recreateCardHand();
					}
				case UIChangeItem(index, items):
					if (cardHand != null && index >= 0 && index < items.length) {
						if (source == drawDropdown) {
							cardHand.drawPathName = 'draw_${items[index].name}';
							setHandEvent('Draw: ${items[index].name}');
						} else if (source == discardDropdown) {
							cardHand.discardPathName = 'discard_${items[index].name}';
							setHandEvent('Disc: ${items[index].name}');
						} else if (source == returnDropdown) {
							cardHand.returnPathName = 'return_${items[index].name}';
							setHandEvent('Ret: ${items[index].name}');
						} else if (source == rearrangeDropdown) {
							cardHand.rearrangePathName = 'rearrange_${items[index].name}';
							setHandEvent('Rearr: ${items[index].name}');
						} else if (source == handPathDropdown) {
							currentHandPath = items[index].name;
							recreateCardHand();
							setHandEvent('Path: ${items[index].name}');
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
							setHandEvent('Layout: ${items[index].name}');
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
				case UIInteractiveEvent(UIEntering, id, _):
					var desc = getHelpText(id);
					if (desc != null && handTooltipHelper != null) {
						var params = new Map<String, Dynamic>();
						params.set("desc", desc);
						handTooltipHelper.startHover(id, "helpTip", params);
					}
				case UIInteractiveEvent(UILeaving, id, _):
					if (handTooltipHelper != null)
						handTooltipHelper.cancelHover(id);
				default:
			}

			super.onScreenEvent(event, source);
		}
	}

	// ========== Mouse & Update ==========

	override public function onMouseMove(pos:Point):Bool {
		if (activeTab == 1 && cardHand != null && cardHand.onMouseMove(pos.x, pos.y))
			return false;
		return super.onMouseMove(pos);
	}

	override public function onMouseClick(pos:Point, button:Int, release:Bool):Bool {
		if (activeTab == 1 && release && cardHand != null && cardHand.onMouseRelease(pos.x, pos.y))
			return false;
		return super.onMouseClick(pos, button, release);
	}

	override public function update(dt:Float):Void {
		super.update(dt);
		if (activeTab == 0 && tooltipHelper != null)
			tooltipHelper.update(dt);
		if (activeTab == 1 && cardHand != null)
			cardHand.update(dt);
		if (activeTab == 1 && handTooltipHelper != null)
			handTooltipHelper.update(dt);
	}

	// ========== Cleanup ==========

	override public function onClear():Void {
		super.onClear();

		if (cardHand != null) {
			cardHand.dispose();
			cardHand = null;
		}

		tabs = null;
		demoBuilder = null;
		demoResult = null;
		cardBuilder = null;
		statesBuilder = null;

		// Tab 0
		statesResult = null;
		tooltipHelper = null;
		stateCardResults = [];

		// Tab 1
		handResult = null;
		handTooltipHelper = null;
		drawButton = null;
		discardButton = null;
		resetButton = null;
		disableButton = null;
		arrowToggle = null;
		layoutDropdown = null;
		c2cToggle = null;
		c2cHoverPopToggle = null;
		c2cHoverScaleToggle = null;
		c2cSpreadToggle = null;
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
