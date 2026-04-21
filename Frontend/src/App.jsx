import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/SignupPages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Login/>
    </div>
  )
}

export default App
