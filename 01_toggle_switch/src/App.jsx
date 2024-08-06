import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { ToogleSwitch } from './components/ToogleSwitch'

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <section className='container'>
      <h2>Toogle Switch</h2>
      <ToogleSwitch />
    </section>
  )
}

export default App
