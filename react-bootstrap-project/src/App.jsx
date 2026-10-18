import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Button } from 'react-bootstrap'
import Form1 from './Form1'
import Form2UsingRef from './Form2UsingRef'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant='danger'>Click to show alert</Button>
      <Form1/>
      <hr />
      <Form2UsingRef/>
    </>
  )
}

export default App
