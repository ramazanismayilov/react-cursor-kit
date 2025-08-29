# React Cursor Kit

A powerful and highly customizable cursor component for React applications. Create beautiful, smooth cursor effects that enhance your website's user experience with dynamic animations and interactive hover states.

## ✨ Features

- 🎨 **Fully Customizable** - Control every aspect of your cursor's appearance
- ⚡ **Smooth Animations** - GPU-accelerated with 60fps performance
- 🖱️ **Smart Hover Detection** - Automatically detects and responds to clickable elements
- 📱 **Mobile Optimized** - Gracefully handles touch devices
- 🎭 **Zero Dependencies** - Lightweight and self-contained
- 🛠️ **TypeScript Ready** - Full type definitions included
- 🔧 **Performance Focused** - Uses React.memo and optimized hooks

## 🚀 Installation

```bash
npm install react-cursor-kit
# or
yarn add react-cursor-kit
# or
pnpm add react-cursor-kit
```

## 📖 Basic Usage

The simplest way to get started:

```tsx
import React from 'react';
import CursorKit from 'react-cursor-kit';

function App() {
  return (
    <div>
      <CursorKit />
      <h1>Welcome to my website!</h1>
      <button>Hover me to see the magic!</button>
    </div>
  );
}

export default App;
```

## 🎛️ Props Reference

### Inner Cursor Properties

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `innerSize` | `number` | `7` | Diameter of the inner cursor circle in pixels |
| `innerColor` | `string` | `'rgba(255, 0, 0, 1)'` | Background color of the inner cursor |
| `innerBorderWidth` | `number` | `0` | Border thickness of the inner cursor in pixels |
| `innerBorderStyle` | `string` | `''` | CSS border style (`solid`, `dashed`, `dotted`, etc.) |
| `innerBorderColor` | `string` | `''` | Color of the inner cursor border |
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
| `outerBorderColor` | `string` | `'rgba(255, 0, 0, 1)'` | Color of the outer cursor border |
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
  innerSize={6}
  innerColor="#00ff88"
  outerSize={40}
  outerColor="transparent"
  outerBorderWidth={2}
  outerBorderStyle="solid"
  outerBorderColor="#00ff88"
  outerStyle={{
    boxShadow: '0 0 20px #00ff88, inset 0 0 20px #00ff8844'
  }}
  trailingSpeed={8}
/>
```

### Minimal Dot

```tsx
<CursorKit
  innerSize={4}
  innerColor="#333"
  outerSize={30}
  outerColor="transparent"
  outerBorderWidth={1}
  outerBorderStyle="solid"
  outerBorderColor="#33333350"
  trailingSpeed={12}
/>
```

### Colorful Gradient

```tsx
<CursorKit
  innerSize={8}
  innerColor="white"
  outerSize={45}
  outerColor="transparent"
  outerStyle={{
    background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)',
    borderRadius: '50%'
  }}
  outerOpacity={0.6}
  trailingSpeed={6}
/>
```

## 🏗️ TypeScript Support

Full TypeScript definitions included:

```tsx
export interface CursorFollowProps {
  // Inner cursor properties
  innerSize?: number;
  innerColor?: string;
  innerBorderWidth?: number;
  innerBorderStyle?: string;
  innerBorderColor?: string;
  innerBorderRadius?: number | string;
  innerStyle?: React.CSSProperties;

  // Outer cursor properties
  outerSize?: number;
  outerColor?: string;
  outerOpacity?: number;
  outerScale?: number;
  outerBorderWidth?: number;
  outerBorderStyle?: string;
  outerBorderColor?: string;
  outerBorderRadius?: number | string;
  outerStyle?: React.CSSProperties;

  // Behavior properties
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
