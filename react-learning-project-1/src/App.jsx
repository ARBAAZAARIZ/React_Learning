import { useState } from 'react'
import Header from "./Header"
import './App.css'
import Login,{Profile,Setting,UserKey} from './Login'

function App() {
  const [count, setCount] = useState(0)
  let a=10;
  let b=20;

  

  return (
    <>
    <Header/>
    <Login/>
    <Profile/>
    <Setting/>

    <button onClick={()=>alert("hello")}>Click</button>
    
      <h1>hello react world</h1>
      <h2>User Key{UserKey}</h2>
      <p>{a+b*2}</p>
    </>
  )
}


export default App
