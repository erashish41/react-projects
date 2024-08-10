import { useState } from 'react'

import './App.css'
import { Extra } from './components/Extra'
import { TodoApp } from './components/TodoApp'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoApp />
      {/* <Extra /> */}
    </>
  )
}

export default App
