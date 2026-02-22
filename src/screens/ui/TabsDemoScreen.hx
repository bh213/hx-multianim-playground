package screens.ui;

import bh.ui.UIElement;
import bh.ui.*;
import bh.ui.UIMultiAnimCheckbox.UIStandardMultiCheckbox;
import bh.ui.UIMultiAnimTabs;
import bh.multianim.MultiAnimBuilder;
import bh.ui.screens.UIScreen;
import bh.ui.screens.ScreenManager;
import bh.base.MacroUtils;

class TabsDemoScreen extends DemoScreenBase {
	var demoBuilder:Null<MultiAnimBuilder>;
	var demoResult:Null<BuilderResult>;
	var basicTabs:Null<UIMultiAnimTabs>;
	var wideTabs:Null<UIMultiAnimTabs>;
	var disabledTabs:Null<UIMultiAnimTabs>;
	var disableToggle:Null<UIStandardMultiCheckbox>;

	static final BASIC_ITEMS:Array<UIElementListItem> = [
		{name: "Inventory"},
		{name: "Stats"},
		{name: "Skills"},
	];

	static final WIDE_ITEMS:Array<UIElementListItem> = [
		{name: "Overview"},
		{name: "Details"},
		{name: "Settings"},
		{name: "About"},
	];

	static final DISABLED_ITEMS:Array<UIElementListItem> = [
		{name: "Active"},
		{name: "Disabled"},
		{name: "Also Active"},
	];

	override public function load():Void {
		setupDemo("Tabs", "Tab bars with content switching, custom sizes, and disabled state");

		demoBuilder = screenManager.buildFromResourceName("demos/ui/tabs-demo.manim", false);

		var ui = MacroUtils.macroBuildWithParameters(demoBuilder, "tabsDemo", [], [
			basicTabs => addTabs(stdBuilder, BASIC_ITEMS, 0),
			wideTabs => addTabs(stdBuilder, WIDE_ITEMS, 0),
			disabledTabs => addTabs(stdBuilder, DISABLED_ITEMS, 0),
			disableToggle => addCheckbox(stdBuilder, false),
		]);

		demoResult = ui.builderResults;
		basicTabs = ui.basicTabs;
		wideTabs = ui.wideTabs;
		disabledTabs = ui.disabledTabs;
		disableToggle = ui.disableToggle;

		// Disable the middle tab
		DISABLED_ITEMS[1].disabled = true;
		disabledTabs.refreshDisabledState();

		addBuilderResult(demoResult);

		updateBasicContent(0);
		updateWideContent(0);
		updateDisabledContent(0);
	}

	override public function onScreenEvent(event:UIScreenEvent, source:Null<UIElement>):Void {
		switch event {
			case UIChangeItem(index, items):
				if (source == basicTabs) {
					updateBasicContent(index);
				} else if (source == wideTabs) {
					updateWideContent(index);
				} else if (source == disabledTabs) {
					updateDisabledContent(index);
				}
			case UIToggle(pressed):
				if (source == disableToggle) {
					if (basicTabs != null)
						basicTabs.disabled = pressed;
					if (wideTabs != null)
						wideTabs.disabled = pressed;
					if (disabledTabs != null)
						disabledTabs.disabled = pressed;
				}
			default:
		}
		super.onScreenEvent(event, source);
	}

	function updateBasicContent(index:Int) {
		if (demoResult == null) return;
		final updatable = demoResult.getUpdatable("basicContent");
		if (updatable != null) {
			final contents = [
				"Inventory: Manage your items, equipment, and resources.\nDrag items to equip them or use consumables.",
				"Stats: View character attributes and modifiers.\nStrength, Agility, Intelligence, and derived stats.",
				"Skills: Browse and upgrade your abilities.\nSpend skill points to unlock new powers.",
			];
			if (index >= 0 && index < contents.length)
				updatable.updateText(contents[index]);
		}
	}

	function updateWideContent(index:Int) {
		if (demoResult == null) return;
		final updatable = demoResult.getUpdatable("wideContent");
		if (updatable != null) {
			final contents = [
				"Overview: A summary of your current progress and status.",
				"Details: In-depth information about the selected item.",
				"Settings: Configure game options, controls, and preferences.",
				"About: Credits, version info, and helpful links.",
			];
			if (index >= 0 && index < contents.length)
				updatable.updateText(contents[index]);
		}
	}

	function updateDisabledContent(index:Int) {
		if (demoResult == null) return;
		final updatable = demoResult.getUpdatable("disabledContent");
		if (updatable != null) {
			final contents = [
				"First tab is active and selectable.",
				"This tab is disabled and cannot be selected.",
				"Third tab is also active and selectable.",
			];
			if (index >= 0 && index < contents.length)
				updatable.updateText(contents[index]);
		}
	}

	override public function onClear():Void {
		super.onClear();
		demoBuilder = null;
		demoResult = null;
		basicTabs = null;
		wideTabs = null;
		disabledTabs = null;
		disableToggle = null;
	}
}
