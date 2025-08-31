# React Cursor Kit

A powerful and highly customizable cursor component for React applications. Create beautiful, smooth cursor effects that enhance your website's user experience with dynamic animations and interactive hover states.

## ✨ Features

- 🎨 **Fully Customizable** - Control every aspect of your cursor's appearance
- 🖱️ **Smart Hover Detection** - Automatically detects and responds to clickable elements
- 📱 **Mobile Optimized** - Gracefully handles touch devices
- 🛠️ **TypeScript Ready** - Full type definitions included

## 🚀 Installation

```bash
npm install @ri-dev/react-cursor-kit
# or
yarn add @ri-dev/react-cursor-kit
# or
pnpm add @ri-dev/react-cursor-kit
```

## 📖 Basic Usage

The simplest way to get started:

```tsx
import React from 'react';
import CursorKit from '@ri-dev/react-cursor-kit';

function App() {
  return (
    <>
      <CursorKit />
      <h1>Custom CursorKit!</h1>
      <button>Hover me to see the magic!</button>
    </>
  );
}

export default App;
```

## 🎛️ Props Reference

### Inner Cursor Properties

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `innerSize` | `number` | `7` | Diameter of the inner cursor circle in pixels |
| `innerColor` | `string` | `'#ff0000'` | Background color of the inner cursor |
| `innerOpacity` | `number` | `1` | Opacity of the inner cursor (0.0 - 1.0) |
| `innerBorderWidth` | `number` | `1` | Border thickness of the inner cursor in pixels |
| `innerBorderStyle` | `string` | `'solid'` | CSS border style (`solid`, `dashed`, `dotted`, etc.) |
| `innerBorderColor` | `string` | `'#ff0000'` | Color of the inner cursor border |
| `innerBorderRadius` | `number \| string` | `'50%'` | Border radius of the inner cursor |
| `innerStyle` | `CSSProperties` | `{}` | Additional custom styles for the inner cursor |

### Outer Cursor Properties

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `outerSize` | `number` | `50` | Diameter of the outer cursor circle in pixels |
| `outerColor` | `string` | `'transparent'` | Background color of the outer cursor |
| `outerOpacity` | `number` | `0.8` | Opacity of the outer cursor (0.0 - 1.0) |
| `outerScale` | `number` | `1` | Scale multiplier for the outer cursor |
| `outerBorderWidth` | `number` | `1` | Border thickness of the outer cursor in pixels |
| `outerBorderStyle` | `string` | `'solid'` | CSS border style for the outer cursor |
| `outerBorderColor` | `string` | `'#ff0000'` | Color of the outer cursor border |
| `outerBorderRadius` | `number \| string` | `'50%'` | Border radius of the outer cursor |
| `outerStyle` | `CSSProperties` | `{}` | Additional custom styles for the outer cursor |

### Behavior Properties

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `trailingSpeed` | `number` | `10` | Animation speed of the trailing effect (higher = slower) |
| `showSystemCursor` | `boolean` | `false` | Whether to keep the default system cursor visible |

## 🎨 Styling Examples

### Neon Glow Effect

```tsx
  <CursorKit
    innerSize={8}
    innerColor="#00ffcc"
    innerBorderWidth={0}
    innerStyle={{
      boxShadow: '0 0 15px #00ffcc, 0 0 30px #00ffcc, 0 0 60px #00ffcc',
      borderRadius: '50%'
    }}
    outerSize={50}
    outerColor="transparent"
    outerBorderWidth={2}
    outerBorderStyle="solid"
    outerBorderColor="#00ffcc"
    outerStyle={{
      boxShadow: '0 0 20px #00ffcc, 0 0 40px #00ffcc',
      borderRadius: '50%'
    }}
    trailingSpeed={12}
  />
```

### Fire Cursor

```tsx
<CursorKit
  innerSize={6}
  innerColor="#ff3c00"
  innerStyle={{
    boxShadow: '0 0 15px #ff3c00, 0 0 30px #ff9a00',
    borderRadius: '50%'
  }}
  outerSize={45}
  outerColor="transparent"
  outerBorderWidth={2}
  outerBorderStyle="solid"
  outerBorderColor="#ff9a00"
  outerStyle={{
    boxShadow: '0 0 25px #ff3c00, 0 0 50px #ff9a00',
    borderRadius: '50%'
  }}
  trailingSpeed={10}
/>
```

## ⸆⸉ TypeScript Support

Full TypeScript definitions included:

```tsx
export interface CursorKitType {
  innerSize?: number;
  innerColor?: string;
  innerOpacity?: number;
  innerBorderWidth?: number;
  innerBorderStyle?: string;
  innerBorderColor?: string;
  innerBorderRadius?: number | string;
  innerStyle?: CSSProperties;

  outerSize?: number;
  outerColor?: string;
  outerOpacity?: number;
  outerBorderWidth?: number;
  outerBorderStyle?: string;
  outerBorderColor?: string;
  outerBorderRadius?: number | string;
  outerStyle?: CSSProperties;

  trailingSpeed?: number;
  showSystemCursor?: boolean;
}

export interface PositionType {
  x: number;
  y: number;
}
```

## 📄 License

MIT © 2025 React Cursor Kit