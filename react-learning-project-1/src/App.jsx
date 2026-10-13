import { useState } from 'react'
import Header from "./Header"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <h1>hello react world</h1>
    </>
  )
}

export default App
