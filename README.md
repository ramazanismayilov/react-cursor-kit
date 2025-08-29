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

### Gaming Style

```tsx
<CursorKit
  innerSize={2}
  innerColor="#ff0040"
  outerSize={60}
  outerColor="#ff004020"
  outerBorderWidth={3}
  outerBorderStyle="dashed"
  outerBorderColor="#ff0040"
  outerScale={1.3}
  trailingSpeed={5}
/>
```

## 🔧 Advanced Configuration

### Custom Clickable Elements

By default, the cursor automatically detects standard clickable elements like `<a>`, `<button>`, form inputs, and elements with `onclick` handlers. When hovering over these elements:

- Outer cursor size increases by 20%
- Border width increases by 1px
- Smooth transition animations apply

You can also add custom clickable behavior by using CSS classes or data attributes:

```tsx
// These elements will trigger hover effects
<div className="cursor-pointer">Custom clickable</div>
<div data-clickable="true">Another clickable element</div>
```

### Performance Optimization

The component is optimized for performance with:

- **React.memo** - Prevents unnecessary re-renders
- **useCallback** - Memoizes event handlers
- **useMemo** - Caches expensive calculations
- **RequestAnimationFrame** - Smooth 60fps animations
- **GPU Acceleration** - Uses `translate3d` for hardware acceleration

### Responsive Design

The cursor automatically adapts to:

- Window resizing
- Viewport boundaries
- Mobile devices (gracefully hides on touch screens)
- Tab visibility changes

## 🎯 Interactive Hover Effects

The cursor automatically enhances user interaction by:

1. **Detecting clickable elements** - Links, buttons, form controls
2. **Visual feedback** - Size and border changes on hover
3. **Smooth transitions** - 200ms CSS transitions for elegant effects

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

## 🎮 Demo & Examples

Visit our [interactive demo](https://react-cursor-kit-demo.vercel.app) to see all the features in action.

### Running the Example Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-cursor-kit.git
   cd react-cursor-kit
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the example:
   ```bash
   cd example
   npm install
   npm start
   ```

## 🛠️ Development

To contribute to this project:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Building the Package

```bash
npm run build     # Build the package
npm run dev       # Development mode
npm run type-check # TypeScript validation
npm run lint      # ESLint check
```

## ⚠️ Browser Support

- **Chrome** 60+
- **Firefox** 55+
- **Safari** 12+
- **Edge** 79+

## 🎯 Use Cases

Perfect for:

- **Creative portfolios** - Add artistic flair to your work
- **Gaming websites** - Create immersive experiences
- **Modern web apps** - Enhance user interaction
- **Landing pages** - Make a memorable first impression
- **Interactive demos** - Guide user attention

## 📱 Mobile Behavior

On touch devices, the cursor component automatically:
- Hides itself to avoid conflicts
- Preserves native touch interactions
- Maintains performance

## 🎨 Customization Tips

1. **Blend modes** - Use `mixBlendMode` in styles for creative effects
2. **Shadows** - Add `boxShadow` for glow effects
3. **Gradients** - Use CSS gradients for colorful cursors
4. **Animations** - Combine with CSS animations for complex effects

## 🐛 Troubleshooting

### Cursor not appearing?
- Ensure the component is rendered at the top level
- Check that `showSystemCursor` is set to `false`
- Verify no CSS is overriding the cursor styles

### Performance issues?
- Reduce `trailingSpeed` value
- Use simpler colors (avoid complex gradients)
- Check for other animation conflicts

### Mobile conflicts?
- The component automatically hides on mobile
- Use media queries if you need custom mobile behavior

## 📄 License

MIT © 2024 React Cursor Kit. See [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- Inspired by modern web design trends
- Built with performance and accessibility in mind
- Community feedback and contributions welcome

---

**Made with ❤️ for the React community**