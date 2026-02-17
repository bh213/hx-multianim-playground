package screens.gamelike;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimButton.UIStandardMultiAnimButton;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;

private typedef DialogueNode = {
	speaker:String,
	text:String,
	portraitColor:Int,
	scene:String,
	choice1:Null<{text:String, next:String}>,
	choice2:Null<{text:String, next:String}>,
	next:Null<String>,
};

class DialogueDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var choice1Button:Null<UIStandardMultiAnimButton>;
	var choice2Button:Null<UIStandardMultiAnimButton>;

	// Dialogue state machine
	var nodes:Map<String, DialogueNode>;
	var currentNodeId:String = "intro";
	var currentNode:Null<DialogueNode>;

	// Typewriter effect
	var fullText:String = "";
	var displayedChars:Int = 0;
	var charTimer:Float = 0;
	var textComplete:Bool = false;

	static inline var CHAR_SPEED = 0.03; // seconds per character

	override public function load():Void {
		setupDemo("Dialogue Box", "Branching dialogue with typewriter text effect and choices");

		demoBuilder = screenManager.buildFromResourceName("demos/gamelike/dialogue.manim", false);

		choice1Button = addButtonWithSingleBuilder(stdBuilder, "button", null, "Choice 1");
		choice2Button = addButtonWithSingleBuilder(stdBuilder, "button", null, "Choice 2");

		demoResult = demoBuilder.buildWithParameters("dialogueDemo", [], {
			placeholderObjects: [
				"choice1Button" => PVObject(choice1Button.getObject()),
				"choice2Button" => PVObject(choice2Button.getObject()),
			]
		});
		addBuilderResult(demoResult);

		initDialogueNodes();
		startNode("intro");
	}

	function initDialogueNodes():Void {
		nodes = new Map();

		nodes.set("intro", {
			speaker: "Old Man",
			text: "Greetings, traveler. These roads have become dangerous lately. Are you heading north?",
			portraitColor: 0xFF4A90A4,
			scene: "You enter a dimly lit tavern. An old man sits in the corner.",
			choice1: {text: "Yes, I seek the Dragon's Keep.", next: "dragon_path"},
			choice2: {text: "No, I'm looking for work.", next: "work_path"},
			next: null,
		});

		nodes.set("dragon_path", {
			speaker: "Old Man",
			text: "The Dragon's Keep? You're either very brave or very foolish. Take the mountain pass, but beware the frost wolves.",
			portraitColor: 0xFF4A90A4,
			scene: "The old man leans forward, eyes wide with concern.",
			choice1: {text: "Thank you for the warning.", next: "dragon_thanks"},
			choice2: {text: "I fear no wolves.", next: "dragon_brave"},
			next: null,
		});

		nodes.set("work_path", {
			speaker: "Bartender",
			text: "Work, you say? The mine east of town needs guards. Goblins have been raiding the entrance. Pays 100 gold.",
			portraitColor: 0xFFFF7F50,
			scene: "The bartender overhears and walks over, polishing a mug.",
			choice1: {text: "I'll take the job.", next: "accept_job"},
			choice2: {text: "Too dangerous for that pay.", next: "decline_job"},
			next: null,
		});

		nodes.set("dragon_thanks", {
			speaker: "Old Man",
			text: "Safe travels, young one. May the winds guide your path. Here, take this charm - it may protect you from the cold.",
			portraitColor: 0xFF4A90A4,
			scene: "The old man reaches into his cloak and produces a small amulet.",
			choice1: null,
			choice2: null,
			next: "ending_charm",
		});

		nodes.set("dragon_brave", {
			speaker: "Old Man",
			text: "Ha! Youth and courage - a dangerous combination. Very well, but remember: the dragon respects strength, not recklessness.",
			portraitColor: 0xFF4A90A4,
			scene: "The old man chuckles and shakes his head slowly.",
			choice1: null,
			choice2: null,
			next: "ending_wisdom",
		});

		nodes.set("accept_job", {
			speaker: "Bartender",
			text: "Excellent! Report to Foreman Grigg at the mine entrance at dawn. He'll give you the details. Here's an advance.",
			portraitColor: 0xFFFF7F50,
			scene: "The bartender slides a pouch of coins across the counter with a grin.",
			choice1: null,
			choice2: null,
			next: "ending_job",
		});

		nodes.set("decline_job", {
			speaker: "Bartender",
			text: "Suit yourself. But mark my words - opportunities like this don't come often in these parts. Another ale then?",
			portraitColor: 0xFFFF7F50,
			scene: "The bartender shrugs and returns to polishing glasses.",
			choice1: {text: "Actually, I'll reconsider.", next: "accept_job"},
			choice2: {text: "No thanks. Farewell.", next: "ending_farewell"},
			next: null,
		});

		nodes.set("ending_charm", {
			speaker: "Narrator",
			text: "You received a Frost Charm! The road ahead will be perilous, but you feel a warmth in your heart. [End of Demo]",
			portraitColor: 0xFF7FDBDA,
			scene: "You pocket the amulet and step back into the cold night air.",
			choice1: {text: "Restart", next: "intro"},
			choice2: null,
			next: null,
		});

		nodes.set("ending_wisdom", {
			speaker: "Narrator",
			text: "The old man's words echo in your mind as you set out. Perhaps wisdom comes from listening. [End of Demo]",
			portraitColor: 0xFF7FDBDA,
			scene: "You leave the tavern with renewed determination.",
			choice1: {text: "Restart", next: "intro"},
			choice2: null,
			next: null,
		});

		nodes.set("ending_job", {
			speaker: "Narrator",
			text: "You accepted the mining guard job. 50 gold in advance! Adventure awaits underground. [End of Demo]",
			portraitColor: 0xFF7FDBDA,
			scene: "You check your coin pouch and head for the inn to rest before dawn.",
			choice1: {text: "Restart", next: "intro"},
			choice2: null,
			next: null,
		});

		nodes.set("ending_farewell", {
			speaker: "Narrator",
			text: "You leave the tavern without purpose. The cold night air greets you. Perhaps another town, another chance. [End of Demo]",
			portraitColor: 0xFF7FDBDA,
			scene: "The tavern door closes behind you. The road stretches into darkness.",
			choice1: {text: "Restart", next: "intro"},
			choice2: null,
			next: null,
		});
	}

	function startNode(nodeId:String):Void {
		if (demoResult == null) return;

		currentNodeId = nodeId;
		currentNode = nodes.get(nodeId);
		if (currentNode == null) return;

		// Set speaker
		demoResult.getUpdatable("speakerText").updateText(currentNode.speaker);

		// Set scene
		demoResult.getUpdatable("sceneText").updateText(currentNode.scene);

		// Set portrait color
		final portraitObj = demoResult.getSingleItemByName("portraitColor").object.toh2dObject();
		if (Std.isOfType(portraitObj, h2d.Bitmap)) {
			var bmp:h2d.Bitmap = cast portraitObj;
			bmp.tile = h2d.Tile.fromColor(currentNode.portraitColor, 80, 80);
		}

		// Start typewriter
		fullText = currentNode.text;
		displayedChars = 0;
		charTimer = 0;
		textComplete = false;
		demoResult.getUpdatable("dialogueText").updateText("");
		demoResult.getUpdatable("continueText").updateText("");

		// Hide choices
		choice1Button.getObject().visible = false;
		choice2Button.getObject().visible = false;

		// Update state info
		demoResult.getUpdatable("stateText").updateText('Node: $currentNodeId');
	}

	function showChoices():Void {
		if (currentNode == null || demoResult == null) return;

		if (currentNode.choice1 != null) {
			choice1Button.getObject().visible = true;
		}
		if (currentNode.choice2 != null) {
			choice2Button.getObject().visible = true;
		}

		// If no choices, show continue prompt for linked next
		if (currentNode.choice1 == null && currentNode.choice2 == null && currentNode.next != null) {
			demoResult.getUpdatable("continueText").updateText("[Click to continue]");
		}
	}

	override public function update(dt:Float):Void {
		super.update(dt);

		if (!textComplete && demoResult != null) {
			charTimer += dt;
			while (charTimer >= CHAR_SPEED && displayedChars < fullText.length) {
				displayedChars++;
				charTimer -= CHAR_SPEED;
			}

			demoResult.getUpdatable("dialogueText").updateText(fullText.substr(0, displayedChars));

			if (displayedChars >= fullText.length) {
				textComplete = true;
				showChoices();
			}
		}
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIClick:
				if (source == choice1Button && currentNode != null && currentNode.choice1 != null) {
					startNode(currentNode.choice1.next);
				} else if (source == choice2Button && currentNode != null && currentNode.choice2 != null) {
					startNode(currentNode.choice2.next);
				}
			default:
		}
		super.onScreenEvent(event, source);
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		choice1Button = null;
		choice2Button = null;
		nodes = null;
		currentNode = null;
	}
}
