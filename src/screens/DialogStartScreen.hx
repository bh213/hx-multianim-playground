package screens;

import bh.base.MacroUtils;
import sys.FileSystem;
import sys.io.File;
import bh.ui.UIElement;
import bh.ui.UIMultiAnimDropdown;
import bh.multianim.MultiAnimBuilder;
import bh.ui.UIMultiAnimSlider;
import bh.ui.UIMultiAnimCheckbox;
import bh.ui.UIMultiAnimButton;
import bh.ui.*;
import bh.ui.screens.UIScreen;
using bh.base.BitUtils;
@:nullSafety
class DialogStartScreen extends UIScreenBase {

	var builder:Null<MultiAnimBuilder>;

	public function load() {

			this.builder = this.screenManager.buildFromResource(hxd.Res.dialog_start, false);
			var stdBuilder = this.screenManager.buildFromResource(hxd.Res.std, false);

			var yesNoDialog = UIStandardMultiAnimButton.create(stdBuilder, "button", 'Yes/No Dialog');
			yesNoDialog.onClick = () -> {
			
				var dialog = new screens.YesNoDialogScreen(screenManager, "Are you sure?");
				dialog.load();
				this.screenManager.modalDialog(dialog, this, "yesNoDialog");
			}
			
			var fileDialog = UIStandardMultiAnimButton.create(stdBuilder, "button", 'File select Dialog');
			fileDialog.onClick = () -> {
			
				var files = FileSystem.readDirectory("files");
				var dialog = new screens.FileDialogScreen(screenManager, files);
				dialog.load();
				this.screenManager.modalDialog(dialog, this, "fileDialog");
			}
			
			var res = MacroUtils.macroBuildWithParameters(builder, "ui", [], [dialog1=>yesNoDialog, dialog2=> fileDialog]);
			addBuilderResult(res.builderResults);
		
	}

	public function onScreenEvent(event:UIScreenEvent, source:UIElement) {
		switch event {
			case UIOnControllerEvent(event):
				trace(event);
			default:
		}
	}
}