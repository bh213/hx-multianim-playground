# Demo Suggestions & Rework Plan

## Immediate Fixes (bugs)

- Combo States: fix overlapping text in rows 2/3, add description text
- Conditionals: fix multiple text at #4
- Skill Tree: fix broken functionality

## Rework Existing Demos

### Status Effects → "Status Bar"
- Rework into horizontal flow layout demo
- Adding/removing status icons dynamically into a flow container
- Timer-based expiration with animated removal
- Incremental updates for countdown text
- Showcase: flow layout + incremental + slots together

### Minimap → "Tile Grid / Procedural Map"
- Integrate autotile system (cross/blob47 formats)
- Animated fog-of-war reveal
- Interactive terrain editing

### Battle HUD → "Game HUD Composition"
- Focus on composing a game HUD rather than simulating combat
- Health/mana bars using progress bars
- Cooldown indicators using anim paths
- Action bar with flow layout
- Dynamic text updates with incremental mode

### Shop → Remove
- Redundant with Inventory demo (which has drag-drop, equipment, weight)
- Broken and ugly per TODO

## New Demos — High Value (no coverage)

### Autotile
- autotileDemo.manim already exists, just needs a screen
- Show cross/blob47 terrain generation
- Interactive tile painting

### Tabs
- std.manim defines tab components, no demo exists
- Tab widget, content switching, tab states

### Data Blocks
- @:data annotations and typed data definitions from .manim
- Compile-time codegen showcase

### Programmables / @:manim
- Compile-time factory generation via ProgrammableCodeGen
- Typed component reuse, factory and instance classes

## New Demos — Medium Value

### Tooltips & Hover
- Dedicated demo for interactive metadata, hover zones, tooltip positioning
- Currently used ad-hoc in several demos

### Theme / Palette Swap
- Palette replacement shader with interactive controls
- Skin switching demo

### Animated Transitions
- AnimPath applied to UI element enter/exit
- Screen transitions, easing curves for UI

### Form / Input Panel
- Combine sliders + checkboxes + dropdowns + buttons
- Settings-like form with validation pattern

## New Demos — Nice to Have

### Notification System
- Toast/notification pattern using flow layout + timed removal

### Loading / Splash
- Progress bar + animated path for a loading screen pattern

### Crafting UI
- Drag items into slots to produce result
- Combines drag-drop + slots + conditional
