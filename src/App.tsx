import { useState } from 'react'
import './App.css'
import JokeComponent from './components/JokeComponent'
import JokerEntrance from './components/JokerEntrance'
import TestingDiv from './components/TestingDiv'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TestingDiv />
    </>
  )
}

export default App
