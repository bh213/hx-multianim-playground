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

#### 1. Inventory: use `cells` layout + `addDropZonesFromSlots` to eliminate ALL position code

**Key new features that change the approach:**
- `cells(cols, rows, cellWidth, cellHeight)` layout — generates grid points automatically
- `addDropZonesFromSlots(baseName, result, ?accepts)` — auto-creates drop zones from slot
  container bounds. No manual position calculation needed.
- `offset: x, y { ... }` blocks in layouts — group offsets cleanly
- Indexed `#equip[$e] slot` via repeatable + layout — enables batch drop zone creation
- `slot.container.localToGlobal()` — gives screen position for draggable placement

**Step A — .manim layout changes:**
```
layouts {
    // Replace 12 hand-listed points with cells (row-major 4x3 grid)
    offset: 0, 155 {
        #invGrid cells(cols: 4, rows: 3, cellWidth: 58, cellHeight: 58)
    }
    // Equipment slot positions (non-uniform, need explicit list)
    offset: 310, 155 {
        #equipSlots list {
            point: 58, 0              // head
            point: 0, 66              // larm
            point: 58, 66             // armor
            point: 116, 66            // rarm
            point: 58, 132            // legs
        }
    }
}
```

**Step B — convert equipment slots to indexed `#equip[$e]` via repeatable:**
Replace the 5 copy-pasted `point { ... #eq_head slot ... }` blocks with:
```
point {
    pos: 310, 155
    // stick figure bitmaps stay here...

    repeatable($e, layout("main", "equipSlots")) {
        bitmap(generated(color(52, 52, #1a1a2e88))): 0, 0
        @($e => 0) text(m5x7, "HEAD",  #333355, center, 52): 0, 20
        @($e => 1) text(m5x7, "L.ARM", #333355, center, 52): 0, 20
        @($e => 2) text(m5x7, "ARMOR", #333355, center, 52): 0, 20
        @($e => 3) text(m5x7, "R.ARM", #333355, center, 52): 0, 20
        @($e => 4) text(m5x7, "LEGS",  #333355, center, 52): 0, 20
        #equip[$e] slot(state:[normal, disabled, highlight, unavailable] = normal) {
            @(state => normal)      bitmap(generated(color(52, 52, #2a2a4400))): 0, 0
            @(state => disabled)    bitmap(generated(color(52, 52, #55555599))): 0, 0
            @(state => highlight)   graphics(
                line(#ffffff, 1, 0, 0, 51, 0);
                line(#ffffff, 1, 0, 51, 51, 51);
                line(#ffffff, 1, 0, 0, 0, 51);
                line(#ffffff, 1, 51, 0, 51, 51);
            ): 0, 0
            @(state => unavailable) graphics(
                line(#cc4444, 2, 6, 6, 46, 46);
                line(#cc4444, 2, 46, 6, 6, 46);
            ): 0, 0
        }
    }
}
```
This eliminates ~100 lines of duplicated slot definitions.

**Step C — Haxe code: replace manual drop zones with `addDropZonesFromSlots`:**
```haxe
// BEFORE — manual bounds calculation with 8 constants + 4 helpers:
// addDropZone({ id: 'p_${i}', bounds: Bounds.fromValues(x, y, ...), snapX: x, snapY: y })

// AFTER — one line per zone group:
drag.addDropZonesFromSlots("inv", demoResult);
drag.addDropZonesFromSlots("equip", demoResult,
    (d, zone) -> EQUIP_ACCEPTS[zone.slot.index] == itemDef(d.data).equip);
```
Delete `addInvDropZones()`, `addEquipDropZones()`, and ALL position helper functions.

**Step D — Haxe code: position draggables from slot containers:**
```haxe
// BEFORE:
// addElementWithPos(drag, BX + SHOP_X + shopIdx * SHOP_STEP, BY + SHOP_Y, DefaultLayer);

// AFTER — read position from the slot itself:
final pos = slot.container.localToGlobal(new Point(0, 0));
addElementWithPos(drag, pos.x, pos.y, DefaultLayer);
```
Root offset question is now moot — `localToGlobal` accounts for `pos: 30, 70` automatically.

**Constants eliminated:** BX, BY, INV_X, INV_Y, EQ_X, EQ_Y, SHOP_X, SHOP_Y, CELL_STEP,
CELL_SIZE (10 constants), plus `invSlotScreenX/Y`, `equipScreenX/Y` (4 functions),
plus `addInvDropZones`, `addEquipDropZones` (2 functions).

**EQUIP_DEFS simplifies to just an accepts mapping:**
```haxe
static final EQUIP_ACCEPTS = ["head", "arm", "armor", "arm", "legs"];
```

#### 2. Flow layout screen: move setPosition into .manim
FlowLayoutDemoScreen has BASE_X=40, BASE_Y=80, SHOWCASE_Y=130. Add `pos:` to the
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
Then just `addBuilderResult()` — no `setPosition()` needed. Delete all 3 constants.

#### ~~4. Possible library improvement: `getLayoutPointAbsolute()`~~
**Resolved** — `addDropZonesFromSlots` reads positions from slot containers via
`localToGlobal()` internally, so absolute layout points are never needed in user code.

#### ~~5. Possible library improvement: expose slot screen bounds~~
**Resolved** — `addDropZonesFromSlots` already does exactly this. Each drop zone gets a
`boundsProvider` that dynamically reads `slot.container.getBounds()` and a `snapProvider`
from `slot.container.localToGlobal()`. No manual position knowledge needed.

### Rule of thumb going forward
| What | Where |
|------|-------|
| Static visual layout, child positions | `.manim` `pos:` and `flow` |
| Grid positions for repeatable elements | `.manim` `layouts` with `cells` / `sequence` |
| Named position data for runtime placement | `.manim` `layouts` (was `relativeLayouts`) |
| Drop zone setup | `addDropZonesFromSlots(baseName, result)` — reads from slots |
| Code `setPosition()` | Only for truly dynamic positions (mouse, camera, animation) |
| Code position constants | Avoid — `.manim` owns all positions |

