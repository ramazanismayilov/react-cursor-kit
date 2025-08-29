import React from 'react'
import CursorKit from './CursorKit'

const Example = () => {
  return (
    <div>
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
        <button>Click</button>
        <a href="">Click</a>
    </div>
  )
}

export default Example