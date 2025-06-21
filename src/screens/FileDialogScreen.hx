package screens;

import bh.base.MacroUtils;
import bh.ui.UIElement;
import bh.ui.UIMultiAnimDropdown;
import bh.multianim.MultiAnimBuilder;
import bh.multianim.MultiAnimBuilder;
import bh.ui.UIMultiAnimSlider;
import bh.ui.UIMultiAnimCheckbox;
import bh.ui.UIMultiAnimButton;
import bh.ui.*;
import bh.ui.screens.UIScreen;
using bh.base.BitUtils;
@:nullSafety
class FileDialogScreen extends DualButtonDialogBaseScreen {
	var files:Array<String>;
	var selected:Null<String> = null;

	public function new(screenManager, files:Array<String>) {
		super(screenManager, "fileDialog", "OK", "Cancel");
		this.files = files;
		
	}
	
	@:nullSafety(Off) public override function load() {
		super.load();

		var list:Array<UIElementListItem> = cast files.map(x-> {name:x});
		var scrollList = UIMultiAnimScrollableList.create(stdBuilder, DefaultUIElementItemBuilder.create(stdBuilder, "list-item-120"), "list-panel", 300, 200, list, 0, 0);

		if (builder != null) {
			var res = MacroUtils.macroBuildWithParameters(builder, this.builderDialogName, [], [button1=>addButton(stdBuilder, button1Name), button2=> addButton(stdBuilder, button2Name), filelist=>scrollList]);

			this.button1 = res.button1;
			this.button2 = res.button2;
			addBuilderResult(res.builderResults);
		}

		scrollList.onItemChanged = (newIndex, items, wrapper) -> {
			selected = items[newIndex].name;
			button1.disabled = false;
		}
		scrollList.onItemDoubleClicked = (newIndex, items,wrapper) -> {
			selected = items[newIndex].name;
			this.getController().exitResponse = selected;	
		}

		button1.onClick =()-> {
			if (selected == null) throw 'filename should have been selected';
			this.getController().exitResponse = selected;
		}
		button2.onClick =()-> this.getController().exitResponse = false;

		button1.disabled = true;
		

		

	}


	public override function onScreenEvent(event:UIScreenEvent, source:UIElement) {
		switch event {
			case UIClick:
			case UIToggle(pressed):
			case UIChangeValue(value):
			case UIChangeItem(index, items):
			case UIKeyPress(keyCode, release):
			case UIOnControllerEvent(event):
			case UICustomEvent(eventName, data):
		}
	}
}