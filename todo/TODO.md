- Dialogs: add dialogs with more options, not just confirm
- slots: parametrized slots are weird, don't auto update them, write status with text so it is obvious what is going on. Add some text that describes how slots work
- particles need more work, buttons don't work correctly. Maybe wait until animPaths are used for particles
- inventory: colors of the slots are strange. Maybe use text to describe state instead of just color. X is great though.
- dialog box - need to review
- status effects - need to review, maybe this should demonstrate status bar in a game, with horizontal flow and adding/removing and updates - incremental or macros.
- settings - no idea what this is supposed to show, text is fine though
- dropdowns - initial settings doesn't apply if clicked again
- interactives need revisit/rework

## Positioning: relativeLayouts & code vs .manim

### Problem: duplicated position constants between .hx and .manim

Many screens define pixel offsets in Haxe code (`static inline var BX = 30`) that must stay
in sync with positions declared in `.manim` files (`pos: 30, 70`). If either side changes,
the other breaks silently — drop zones misalign, elements overlap, etc.

Worst offender: **InventoryDemoScreen.hx** has 8 position constants (BX, BY, INV_X, INV_Y,
EQ_X, EQ_Y, SHOP_X, SHOP_Y) plus 4 helper functions (invSlotScreenX/Y, equipScreenX/Y)
that all duplicate what inventory.manim already knows.

### Current relativeLayouts capabilities
- `single` — one named point
- `list` — explicit point array (`#positions list { point: 160, 380; ... }`)
- `sequence(var, from, to)` — parametric generated points
- Supports grid/hex coordinate systems and offsets
- Consumed at runtime via `builder.getLayouts().getPoint(name, index)`
- Consumed at build-time via `repeatable($i, layout("main", "invGrid"))` iterator

### What works well (keep as-is)
- **BattleHudDemoScreen**: each HUD variant owns its `pos:` in .manim, code just calls
  `addBuilderResult()` with no manual positioning — ideal pattern
- **Particles**: `relativeLayouts #positions` cleanly separates emitter coordinates from code
- **Inventory .manim**: already uses `repeatable($i, layout("main", "invGrid"))` for the
  grid slots — the .manim side is clean

### Suggested improvements

#### 1. Inventory: read drop-zone positions from relativeLayouts instead of constants
The .manim already has `#invGrid` layout. Add equipment positions too:
```
relativeLayouts {
    #invGrid list { ... }          // already exists
    #equipSlots list {             // NEW — equipment slot positions
        point: 368, 155            // head  (310+58, 155+0)
        point: 310, 221            // larm  (310+0, 155+66)
        point: 368, 221            // armor (310+58, 155+66)
        point: 426, 221            // rarm  (310+116, 155+66)
        point: 368, 287            // legs  (310+58, 155+132)
    }
    #shopSlots sequence($s, 0, 9) point: $s * 56, 30
}
```
Then in InventoryDemoScreen.hx, replace `invSlotScreenX/Y` and `equipScreenX/Y` with
`layouts.getPoint("invGrid", idx)` and `layouts.getPoint("equipSlots", eqIdx)`.
This eliminates BX/BY/INV_X/INV_Y/EQ_X/EQ_Y constants and the 4 helper functions.

The remaining question is the root offset (BX=30, BY=70) — the .manim programmable already
has `pos: 30, 70`, so the layout points are relative to that. Code needs to add the root
object's screen position. Options:
  a) Store the root pos in a separate layout `#root single { point: 30, 70 }`
  b) Read it from `demoResult.object.x / .y` at runtime
  c) Make the layout points absolute (include the 30,70 offset in every point) — simplest

#### 2. Flow layout screen: move setPosition into .manim
FlowLayoutDemoScreen has BASE_X=40, BASE_Y=80, SHOWCASE_Y=130. Instead, add `pos:` to the
.manim programmables:
```
#flowControls programmable() {
    pos: 40, 80             // was set in code
    text(m6x11, ...)
}
#flowLayoutShowcase programmable(count: ...) {
    pos: 40, 130            // was set in code
    ...
}
```
Then just `addBuilderResult()` — no setPosition needed.

#### 3. Particles: move tab button positions to .manim
ParticlesDemoScreen hardcodes `btn.setPosition(50 + i * 120, 70)` for tab buttons and
`descText.setPosition(50, 105)`. These could be a sequence layout or the tab bar could be
built as a .manim programmable with flow layout.

#### 4. Possible library improvement: `getLayoutPointAbsolute()`
A helper that returns layout points already offset by the programmable's root `pos:` would
eliminate the need to track root position separately. This is the pattern:
```haxe
// Instead of:
var pos = layouts.getPoint("invGrid", i);
var absX = demoResult.object.x + pos.x;
// Just:
var absPos = demoResult.getLayoutPointAbsolute("invGrid", i);
```

#### 5. Possible library improvement: expose slot screen bounds
For drag-drop, what code really needs is the screen-space bounding rect of each slot.
If BuilderResult could expose `getSlotBounds(name, index): Bounds` that accounts for
the full position chain (root pos + parent offsets + slot position), the Haxe side
wouldn't need any position knowledge at all.

### Rule of thumb going forward
| What | Where |
|------|-------|
| Static visual layout, child positions | `.manim` `pos:` and `flow` |
| Named position data for runtime placement | `.manim` `relativeLayouts` |
| Code `setPosition()` | Only for truly dynamic positions (mouse, camera, animation) |
| Code position constants | Avoid — read from relativeLayouts or let .manim own it |

---

## relativeLayouts: library-level improvements

### Current state
relativeLayouts are pixel-only named point stores: `single`, `list`, `sequence`. They support
grid/hex coordinate systems and expression math (`$s * 56`), but nothing viewport-aware or
flow-integrated. Positions resolve to FPoint via `calculatePosition()` which handles all
coordinate types but has no concept of screen size, anchoring, or relative-to-parent sizing.

The expression system (`ReferenceableValue`) already supports `+`, `-`, `*`, `/`, `%`,
ternaries, parameter refs, and `$ctx.callback()` — so it's extensible. But there's no
built-in `$ctx.screenWidth` or `$ctx.screenHeight`.

### Improvement ideas (roughly ordered by impact vs effort)

#### A. `SlotHandle.getScreenBounds()` — highest impact, simplest
SlotHandle already holds a reference to its `container: h2d.Object`. The h2d scene graph
knows the full transform chain. Adding a method:
```haxe
// SlotHandle
public function getScreenBounds():h2d.col.Bounds {
    return container.getBounds();  // h2d.Object.getBounds() walks parents
}
```
This immediately solves inventory drag-drop — code asks each slot for its bounds directly,
no position math needed at all. The slot knows where it is on screen because h2d propagates
transforms through the scene graph.

Drag-drop setup becomes:
```haxe
var slot = demoResult.getSlot("inv", i);
var bounds = slot.getScreenBounds();
drag.addDropZone({ id: 'p_$i', bounds: bounds, snapX: bounds.x, snapY: bounds.y, slot: slot });
```
All BX/BY/INV_X/INV_Y constants and helper functions vanish.

#### B. `BuilderResult.getLayoutPoint()` — convenience wrapper
Shorthand that reads from the builder's layouts with the root object offset already applied:
```haxe
// BuilderResult
public function getLayoutPoint(name:String, index:Int = 0):FPoint {
    var pt = builder.getLayouts().getPoint(name, index);
    return new FPoint(object.x + pt.x, object.y + pt.y);
}
```
Useful for positioning non-slot runtime objects (particles, h2d.Graphics overlays) without
manually tracking root position.

#### C. ~~Viewport-aware expressions~~ — ALREADY EXISTS as `$ctx.width`, `$ctx.height`
`$ctx.width` and `$ctx.height` already resolve to h2d.Scene dimensions via
`builderParams.scene` (MultiAnimBuilder.hx:961-966). Can be used in any expression context:
```
relativeLayouts {
    #centered single { point: $ctx.width / 2, $ctx.height / 2 }
    #rightPanel single { point: $ctx.width - 220, 60 }
}
#hud programmable() {
    pos: $ctx.width - 420, 20
    flow(maxWidth: $ctx.width - 40, layout: vertical) { ... }
}
```
Also available: `$ctx.grid.width/height`, `$ctx.hex.*`, `$ctx.random(min, max)`.
Requires `scene` in BuilderParameters (throws otherwise).
**No work needed** — just use it and document it in playground demos.

#### D. Anchor/origin system for layout points
Currently all positions are top-left origin. An anchor modifier would let positions mean
"center of this element" or "right edge":
```
relativeLayouts {
    #panels list {
        point: 640, 360, anchor: center         // centered at this coordinate
        point: 1280, 0, anchor: topRight         // right-aligned
        point: 0, 720, anchor: bottomLeft
    }
}
```
At resolve time, the anchor shifts the final position by the element's computed size.
Requires knowing element dimensions, which is only available after build — so this would
only work for `getLayoutPoint()` calls that pass in a size, or as a flow alignment property.

**Simpler alternative**: add `halign` and `valign` as layout-level properties:
```
relativeLayouts {
    #centered list {
        halign: center
        valign: middle
        point: 640, 360
    }
}
```
The layout stores the alignment and `getPoint()` takes an optional `width, height` to
apply the offset.

#### E. Flow-integrated position queries
h2d.Flow positions children internally, but their final `.x/.y` are readable on the child
objects after layout. A new layout type could reference flow children:
```
relativeLayouts {
    #shopPositions flowChildren("shopFlow")   // reads positions from named flow
}
```
At runtime, `getPoint("shopPositions", i)` would return the ith child's position in the
named flow container. This bridges the gap between flow auto-layout and code that needs
to create drop zones at flow-computed positions.

**Simpler alternative**: since `SlotHandle.getScreenBounds()` (idea A) already solves the
drop-zone case, this is mainly useful for non-slot scenarios where code needs to know where
flow placed something. Could be deferred.

#### F. Parametric layout with `step` shorthand
relativeLayouts already have `sequence`, but for grids the syntax is verbose. A `grid`
layout type would cover common cases:
```
relativeLayouts {
    #invGrid grid(cols: 4, rows: 3, cellW: 58, cellH: 58, origin: 0, 155)
    #shopSlots grid(cols: 10, rows: 1, cellW: 56, cellH: 52, origin: 0, 30)
}
```
Desugars to the equivalent list of points. More readable than a 12-point `list` block
and more capable than a 1D `sequence`.

#### G. ~~Named layout references in `pos:`~~ — ALREADY EXISTS
`pos: layout(name, index)` already works everywhere. The parser's `parseXY()` handles
`layout(name)` and `layout(name, index)` → `LAYOUT` coordinate type, and `pos:` calls
`parseXY()`. The builder resolves it via `getLayouts().getPoint(name, idx)`.
```
#panel programmable() {
    pos: layout("positions", 2)     // use 3rd point from "positions" layout
}
text(exo2_14, "hello"): layout("labels", 0)   // inline position also works
```
**No work needed** — just use it.

### Priority recommendation
1. **A (slot bounds)** — eliminates the worst code-side duplication, minimal library change
2. **B (BuilderResult.getLayoutPoint)** — small convenience, useful immediately
3. **F (grid layout shorthand)** — reduces boilerplate for grid-based layouts
4. **C (screen expressions)** — already exists (`$ctx.width/height`), just needs demo coverage
5. **G (layout in pos:)** — already exists, just needs demo coverage
6. **D/E** — nice to have, lower priority
