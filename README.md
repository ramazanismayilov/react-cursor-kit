# React Cursor Kit

A customizable cursor kit component for React applications. This package provides a smooth, customizable cursor effect with an inner and outer circle that follows the user's mouse movements.

## Features

- 🎨 Fully customizable colors, sizes, and behavior
- ⚡ Smooth animation with configurable speed
- 🖱️ Automatic handling of clickable elements
- 📱 Mobile-friendly
- 🎭 Works with any React application
- 🛠️ Written in TypeScript with full type definitions

## Installation

```bash
npm install react-cursor-kit
# or
yarn add react-cursor-kit
```

## Basic Usage

```tsx
import React from 'react';
import CursorKit from 'react-cursor-kit';

function App() {
  return (
    <div>
      <CursorKit />
      {/* Your app content */}
    </div>
  );
}

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `innerSize` | `number` | `8` | Size of the inner circle in pixels |
| `innerColor` | `string` | `'#fff'` | Color of the inner circle (any valid CSS color) |
| `outerSize` | `number` | `32` | Size of the outer circle in pixels |
| `outerColor` | `string` | `'#fff'` | Color of the outer circle (any valid CSS color) |
| `outerOpacity` | `number` | `0.4` | Opacity of the outer circle (0 to 1) |
| `outerScale` | `number` | `1` | Scale factor for the outer circle when hovering over clickable elements |
| `trailingSpeed` | `number` | `8` | Speed of the outer circle follow effect (higher = slower) |
| `showSystemCursor` | `boolean` | `false` | Whether to show the default system cursor |
| `clickables` | `string[]` | `['a', 'button', 'input', 'textarea', 'select', 'label', '[role="button"]']` | Array of CSS selectors for elements that should be treated as clickable |
| `outerStyle` | `CSSProperties` | `{}` | Additional styles for the outer circle |
| `innerStyle` | `CSSProperties` | `{}` | Additional styles for the inner circle |

## Advanced Usage

```tsx
import React from 'react';
import CursorKit from 'react-cursor-kit';

function App() {
  return (
    <div>
      <CursorKit 
        innerSize={10}
        innerColor="#ff3366"
        outerSize={40}
        outerColor="#3366ff"
        outerOpacity={0.3}
        outerScale={1.5}
        trailingSpeed={6}
        showSystemCursor={false}
        clickables={['a', 'button', '.custom-clickable']}
        outerStyle={{
          border: '2px solid #3366ff',
          mixBlendMode: 'difference'
        }}
      />
      
      <h1>Your App Content</h1>
      <button>Hover me!</button>
      <a href="#">Click me!</a>
      <div className="custom-clickable">Custom clickable</div>
    </div>
  );
}

export default App;
```

## Running the Example

1. Navigate to the example directory:
   ```bash
   cd example
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Link the local package:
   ```bash
   npm link ..
   # or
   yarn link ..
   ```

4. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## Building for Production

To build the package for production:

```bash
npm run build
# or
yarn build
```

## License

MIT © [Your Name]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
