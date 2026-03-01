package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UITooltipHelper;
import bh.ui.UITooltipHelper.TooltipPosition;
import bh.multianim.MultiAnimBuilder;

class CardStatesDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var cardBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var tooltipHelper:Null<UITooltipHelper>;
	var cardResults:Array<BuilderResult> = [];

	override public function load():Void {
		setupDemo("Card States", "Visual states a card passes through in the Card Hand system");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/card-states.manim", false);
		cardBuilder = screenManager.buildFromResourceName("demos/gamelike/card-hand.manim", false);

		// Build layout (titles, labels, status)
		demoResult = demoBuilder.buildWithParameters("cardStatesDemo", []);
		addBuilderResult(demoResult);

		// Tooltip helper — Right for row 1, overridden to Above for row 2
		tooltipHelper = new UITooltipHelper(this, demoBuilder, {delay: 0.15, position: Right, offset: 8});

		buildStatusCards();
		buildBehaviorCards();
	}

	function buildStatusCards():Void {
		// Row 1: Same card design in each interactive status state
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
			cardResults.push(result);
		}
	}

	function buildBehaviorCards():Void {
		// Hover Pop: scaled up + offset up (simulates hoverPopDistance + hoverScale)
		var hoverPop = buildCard("Fireball", "Deal 3 fire damage", 3, 0xCC4422, 0x882211, "potion_r");
		hoverPop.object.setPosition(60, 350);
		hoverPop.object.setScale(1.15);
		addObjectToLayer(hoverPop.object, DefaultLayer);
		addInteractives(hoverPop, "sHoverPop");
		tooltipHelper.setPosition("sHoverPop.card", Above);
		cardResults.push(hoverPop);

		// Dragging: rotated (simulates card following cursor, rotation reset to 0)
		var dragging = buildCard("Lightning", "Deal 4 to random", 4, 0xCCCC22, 0x666611, "sword_l");
		dragging.object.setPosition(250, 370);
		dragging.object.rotation = -0.14;
		addObjectToLayer(dragging.object, DefaultLayer);
		addInteractives(dragging, "sDragging");
		tooltipHelper.setPosition("sDragging.card", Above);
		cardResults.push(dragging);

		// Targeting: elevated + arrows showing valid/invalid targets
		var targeting = buildCard("Poison", "2 damage per turn", 2, 0x66CC22, 0x336611, "ring_i");
		targeting.object.setPosition(430, 348);
		targeting.object.setScale(1.1);
		addObjectToLayer(targeting.object, DefaultLayer);
		addInteractives(targeting, "sTargeting");
		tooltipHelper.setPosition("sTargeting.card", Above);
		cardResults.push(targeting);

		// Targeting arrows (valid=green, invalid=red faded)
		var arrowValid = cardBuilder.buildWithParameters("targetingArrow", ["valid" => (true : Dynamic)]);
		arrowValid.object.setPosition(590, 430);
		arrowValid.object.rotation = -0.3;
		arrowValid.object.setScale(1.5);
		addObjectToLayer(arrowValid.object, DefaultLayer);

		var arrowInvalid = cardBuilder.buildWithParameters("targetingArrow", ["valid" => (false : Dynamic)]);
		arrowInvalid.object.setPosition(590, 480);
		arrowInvalid.object.rotation = 0.3;
		arrowInvalid.object.setScale(1.2);
		arrowInvalid.object.alpha = 0.5;
		addObjectToLayer(arrowInvalid.object, DefaultLayer);

		// Animating: ghost copy + main card (simulates motion along path)
		var ghost = buildCard("Ice Bolt", "Freeze 1 turn", 3, 0x22CCCC, 0x116666, "scroll_i");
		ghost.object.setPosition(770, 365);
		ghost.object.alpha = 0.25;
		addObjectToLayer(ghost.object, DefaultLayer);

		var animCard = buildCard("Ice Bolt", "Freeze 1 turn", 3, 0x22CCCC, 0x116666, "scroll_i");
		animCard.object.setPosition(795, 390);
		addObjectToLayer(animCard.object, DefaultLayer);
		addInteractives(animCard, "sAnimating");
		tooltipHelper.setPosition("sAnimating.card", Above);
		cardResults.push(animCard);
	}

	function buildCard(name:String, desc:String, cost:Int, color:Int, artColor:Int, image:String):BuilderResult {
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

	override public function update(dt:Float):Void {
		super.update(dt);
		if (tooltipHelper != null)
			tooltipHelper.update(dt);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
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
				if (demoResult != null && data != null)
					demoResult.getUpdatable("statusText").updateText('State: ${data.title}');
			case UIInteractiveEvent(UILeaving, id, _):
				if (tooltipHelper != null)
					tooltipHelper.cancelHover(id);
				if (demoResult != null)
					demoResult.getUpdatable("statusText").updateText("Hover a card to see state description");
			default:
		}
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

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		cardBuilder = null;
		demoResult = null;
		tooltipHelper = null;
		cardResults = [];
	}
}
