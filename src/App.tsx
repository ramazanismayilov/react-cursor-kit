import React from 'react'
import CursorKit from './CursorKit'

const App: React.FC = () => {
  return (
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

  )
}

export default App