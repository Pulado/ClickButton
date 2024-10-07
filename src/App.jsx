import { useState } from 'react'
import ClickButton from './ClickButton'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ClickButton />
    </div>
  )
}

export default App
