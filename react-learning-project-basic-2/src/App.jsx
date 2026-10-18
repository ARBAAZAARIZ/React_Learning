import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Loops from './Loops'
import Clock from './Clock'
import NestedLoops from './NestedLoops'

function App() {

  const [colour,setColour]=useState('white');


  return (
    <>

      <Loops />

      Clock Colour Changing by props Dynamically <br />

      <select name="colour" id="color" onChange={(event)=>setColour(event.target.value)} >

        <option value='blue'>Blue</option>
        <option value='white'>White</option>
        <option value='green'>Green</option>
        <option value='red'>Red</option>
        <option value='yellow'>Yellow</option>

      </select>

      <Clock color={colour}/>
      <NestedLoops/>

      


    </>
  )
}

export default App
