# Playground Improvement Ideas

## Settings Page — Rework Suggestions

### Current State
The Settings demo is mostly static text explaining `settings{key:type=>value}` syntax with
three theme buttons that update a status label. It doesn't actually *apply* the settings to
anything visual — the "themes" are just labels.

### What It Should Demo
The `settings{}` block attaches typed metadata to `.manim` components. A good demo should
show settings being **read back and used** to drive visible behavior.

### Proposal: "Live Component Configurator"

**Concept:** A `.manim` component (e.g., a styled panel/card) whose appearance is driven
entirely by its own `settings{}` values. The user changes settings via controls, and the
component re-renders with the new values in real time.

**Sections:**

1. **Settings Inspector** (read-only, non-interactive)
   - Display a `.manim` component that has several `settings{}` blocks attached.
   - Show a panel listing all discovered settings with their types and current values
     (use `getSettings()` / builder result metadata).
   - Purpose: demonstrate that settings are introspectable metadata, not just comments.

2. **Theme Switcher** (interactive)
   - Three preset themes (dark / light / blue) each defined as a separate `.manim`
     programmable with different `settings{}` values for colors, font sizes, border style.
   - Clicking a theme button swaps via `slot` or `dynamicRef`, showing the new component
     with its settings applied.
   - Key .manim features: `slot`, `dynamicRef`, `settings{}`, conditionals `@(theme=>dark)`.

3. **Dotted-Key Sub-Component Settings** (interactive)
   - Show a composite component (e.g., a list with a scrollbar) where `settings{}` uses
     dotted keys like `scrollbar.thickness:int => 4`, `item.fontColor => #fff`.
   - Buttons to toggle between "compact" and "comfortable" presets that change these
     sub-component settings.
   - Purpose: demonstrate hierarchical/scoped settings.

4. **Settings + Conditionals Combo** (interactive)
   - A component with `@(settingName=>value)` conditionals that show/hide elements based
     on its own settings.
   - Toggle buttons flip a bool setting, causing parts of the UI to appear/disappear.
   - Purpose: show that settings integrate with the conditional system.

**Interactivity level:** Medium. 3-4 buttons that switch presets. The point is showing
settings *doing something*, not building a full property editor.

**Key .manim features showcased:**
- `settings{key:type=>value}` — all types (string, int, float, bool, color)
- Dotted keys for sub-components
- Settings read-back via builder API
- Integration with conditionals and dynamicRef


---

## New Status Effects Page — Suggestions

### Current State
The existing Status Effects demo under "Game-Like Demos" is heavily programmatic Haxe:
- Slot rendering uses raw `h2d.Bitmap`, `h2d.Text`, `h2d.Interactive` created in code
- Timer countdown is a Haxe `update(dt)` loop modifying h2d objects directly
- The `.manim` file is just a static layout shell with placeholders for buttons
- Very little of the actual effect display uses .manim features

### Problem
This doesn't showcase .manim's strengths. It's essentially a Haxe demo with a .manim
wrapper. The playground should demonstrate how `.manim` itself handles dynamic,
data-driven UI.

### Proposal: Rebuild Using Pure .manim Features

**Concept:** A status effects bar where each effect slot is a `.manim` programmable
driven by parameters, conditionals, and dynamic updates — no raw h2d objects.

**Key .manim Features to Showcase:**

1. **`repeatable` with dynamic data**
   - Each effect slot rendered via `repeatable($i, range(0, $maxSlots))` or array iterator
   - Slot appearance driven by parameters: `$effectType`, `$color`, `$timerPct`
   - Shows how repeatable can create a dynamic-length list of complex items

2. **Conditionals for effect states**
   - `@(effectType=>poison)` shows poison icon/color
   - `@(effectType=>shield)` shows shield icon/color
   - `@(active=>false)` shows empty/grayed slot
   - `@else` fallback for unknown types
   - Demonstrates the full conditional system with enums

3. **Expressions for timer display**
   - Timer bar width: `$slotWidth * $timerPct` (expression-driven sizing)
   - Timer text: string interpolation `'${$remaining}s'`
   - Color interpolation: green→yellow→red as timer decreases

4. **`dynamicRef` for live updates**
   - Each slot is a `dynamicRef` so `setParameter("timerPct", newValue)` updates the
     timer bar without rebuilding the entire UI
   - Effect tooltip as a `dynamicRef` updated on hover

5. **Filters for visual feedback**
   - `glow` filter on active buffs (green glow for buffs, red for debuffs)
   - `grayscale(1)` filter on expired/empty slots
   - `saturate` animated as timer runs low
   - `pixelOutline` on the hovered slot

6. **`ninepatch` for styled containers**
   - Effect bar background, tooltip panel, and individual slot frames all using ninepatch
   - Already partially present, but extend to per-slot frames

7. **`layers` for z-ordering**
   - Tooltip renders above all slots using layer ordering
   - Glow effects render behind icons

**Interactivity:**
- "Add Buff" / "Add Debuff" buttons (keep from current version)
- Click an active effect to remove it early
- Hover shows tooltip (driven by `dynamicRef` parameter updates, not h2d.Interactive)
- Timer auto-countdown using `setParameter` in `update()` — minimal Haxe, max .manim

**What the Haxe code should do (minimal):**
- `update(dt)` decrements timers and calls `setParameter("timerPct", ...)` on each slot's dynamicRef
- Button handlers add/remove effects by updating parameters
- Everything visual is in .manim

**Implementation Notes:**
- Move from `screens/gamelike/` to stay there (it's a good fit for the category)
- The .manim file should be the star — aim for 80%+ of the visual logic in .manim
- Haxe screen class should be < 100 lines (currently 250)
- This becomes a flagship demo of "look how much UI logic .manim handles"
