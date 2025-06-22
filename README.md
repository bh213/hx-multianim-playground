# hx-multianim Demo

A comprehensive demonstration of the [hx-multianim](https://github.com/bh213/hx-multianim) library, showcasing its powerful multi-animation system for Haxe/Heaps applications.

## Overview

This demo showcases the capabilities of the hx-multianim library, which provides a sophisticated animation system for creating rich, interactive UI components and game elements. The demo includes multiple screens demonstrating various features:

- **Master Screen**: Overview and navigation hub
- **Components Test**: Interactive UI components (buttons, checkboxes, sliders, dropdowns)
- **State Animations**: Complex state-based animations
- **Particles**: Particle system demonstrations
- **Paths**: Path-based animations and motion
- **Fonts**: Various font rendering examples
- **Room 1**: 3D room environment with animations
- **Examples 1**: Basic animation examples
- **Settings**: Configuration and customization options
- **Dialog Start**: Dialog system demonstrations

## Features Demonstrated

### UI Components
- Multi-state buttons with hover/press animations
- Checkboxes with custom animations
- Sliders with visual feedback
- Dropdown menus with smooth transitions
- Scrollable lists with custom styling

### Animation Systems
- State-based animations
- Particle effects
- Path-following animations
- Font rendering with SDF support
- Multi-layer sprite animations

### Technical Features
- Cross-platform support (JavaScript and HashLink)
- Live resource reloading
- Custom font management
- Atlas-based sprite management
- Tween-based animations

## Prerequisites

- [Haxe](https://haxe.org/) (4.0 or later)
- [Heaps](https://heaps.io/) library
- [HashLink](https://hashlink.haxe.org/) (for native builds)
- [lix](https://github.com/lix-pm/lix.client) (for dependency management)

## Installation

1. Clone this repository:
```bash
git clone https://github.com/gorazd/hx-multianim-demo.git
cd hx-multianim-demo
```

2. Install dependencies using lix:
```bash
lix install
```

## Building and Running

### JavaScript Target
```bash
js.bat
```

Or manually:
```bash
haxe demo-js.hxml
```

Then open `index.html` in a web browser, or serve the directory with a local web server.

### HashLink Target (Native)
```bash
haxe demo-hl.hxml
hl build/demo.hl
```

## Controls

- **R**: Reload resources (live update)
- **Q**: Quit (HashLink only)
- **Mouse**: Navigate through UI components
- **Arrow Keys**: Navigate between screens (in some contexts)

## Dependencies

- **hx-multianim**: Core animation library
- **heaps**: Graphics and game framework
- **hxparse**: Parsing utilities
- **tweenxcore**: Animation tweening

## Fonts

The demo includes various fonts for testing the font rendering system. See [ATTRIBUTION.md](ATTRIBUTION.md) for font sources and licensing information.

## Contributing

This is a demo project for the hx-multianim library. For contributions to the core library, please visit the [hx-multianim repository](https://github.com/gorazd/hx-multianim).


## Related Projects

- **[hx-multianim](https://github.com/bh213/hx-multianim)**: The main library this demo showcases
- **[Heaps](https://heaps.io/)**: The graphics framework used
- **[Haxe](https://haxe.org/)**: The programming language

