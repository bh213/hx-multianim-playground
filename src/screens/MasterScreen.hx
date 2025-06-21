package screens;

import bh.ui.UIElement;
import bh.ui.UIMultiAnimDropdown;
import bh.multianim.MultiAnimBuilder;
import bh.multianim.MultiAnimBuilder;
import bh.ui.UIMultiAnimSlider;
import bh.ui.UIMultiAnimCheckbox;
import bh.ui.UIMultiAnimButton;
import bh.ui.*;
import bh.ui.screens.UIScreen;


class MasterScreen extends UIScreenBase {

	var radioBox:UIMultiAnimRadioButtons;
	var builder:Null<MultiAnimBuilder>;
	public function load() {
			this.builder = this.screenManager.buildFromResource(hxd.Res.std, true);
			var masterBuilder = this.screenManager.buildFromResource(hxd.Res.master, true);

			final layouts = masterBuilder.getLayouts();
			var buttonsPos = layouts.getIterator("topButtons");


			final list = [{name:"components"}, {name:"stateAnim"}, {name:"room1"}, {name:"dialogStart"}, {name:"examples1"}, {name:"settings"}, {name:"paths"}, {name:"particles"}, {name:"fonts"}];

			this.radioBox = UIMultiAnimRadioButtons.create(builder, "radioButtonsHorizontal", "tab", list, 0);
			
			addElementWithPoint(radioBox, layouts.getPoint("tabs"));


			var res = bh.base.MacroUtils.macroBuildWithParameters(masterBuilder, "ui", [], [
				radioButtons=>radioBox,
			]);
			var ui = res.builderResults;
			addBuilderResult(ui);
	


			// addElementWithIterator(UIStandardMultiAnimButton.create(builder, "button", "components"), buttonsPos).onClick = ()->screenManager.updateScreenMode(MasterAndSingle(this, screenManager.getScreen("components")));
			// addElementWithIterator(UIStandardMultiAnimButton.create(builder, "button", "state-anim"), buttonsPos).onClick = ()->screenManager.updateScreenMode(MasterAndSingle(this, screenManager.getScreen("stateAnim")));
			// addElementWithIterator(UIStandardMultiAnimButton.create(builder, "button", "room1"), buttonsPos).onClick = ()->screenManager.updateScreenMode(MasterAndSingle(this, screenManager.getScreen("room1")));
			// addElementWithIterator(UIStandardMultiAnimButton.create(builder, "button", "dialogStart"), buttonsPos).onClick = ()->screenManager.updateScreenMode(MasterAndSingle(this,screenManager.getScreen("dialogStart")));
			// addElementWithIterator(UIStandardMultiAnimButton.create(builder, "button", "examples1"), buttonsPos).onClick = ()->screenManager.updateScreenMode(MasterAndSingle(this,screenManager.getScreen("examples1")));
			// addElementWithIterator(UIStandardMultiAnimButton.create(builder, "button", "settings"), buttonsPos).onClick = ()->);
	}

	public function onScreenEvent(event:UIScreenEvent, source:UIElement) {
		switch event {
			case UIClick:
			case UIToggle(pressed):
			case UIChangeValue(value):
			case UIChangeItem(index, items):
				if (source == this.radioBox) {
					
					screenManager.updateScreenMode(MasterAndSingle(this,screenManager.getScreen(items[index].name)));
				}
			case UIKeyPress(keyCode, release):
			case UIOnControllerEvent(event):
			case UICustomEvent(eventName, data):
		}
	}

}