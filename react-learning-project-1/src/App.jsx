import { useState } from 'react'
import Header from "./Header"
import './App.css'
import Login,{Profile,Setting,UserKey} from './Login'

 function transport(name){
    alert(name);
  }

function App() {
  const [count, setCount] = useState(0)
  let a=10;
  let b=20;

  let name = "Jhon Doe";
  let age = undefined;
   let name2 = "Doe Jhon"

   const userObj = {
    name: "Jhon Doe",
    age: 30,
    email: "jhoneDoe@gmail.com"
   }

   const path = "https://th.bing.com/th?id=OIF.Mo9G22off7d%2bh6NGzoN%2bug&r=0&rs=1&pid=ImgDetMain&o=7&rm=3";

   const userArray = ["Jhon Doe", "Doe Jhon", "Jhon Smith", "Smith Jhon"];

  function fruit(){
    return "apple";
  }

  function sum(x,y){
    return x+y;
  }

  function callFun(){
    alert("hello");
  }

  function transport(name){
    alert(name);
  }

    const transportDummy = ()=>{
    alert("Dummy Transport");
  }
  

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

      <h1>{fruit()}</h1>

      <h1>{sum(10,90)}</h1>

      <h1>{name}</h1>
      <h1>{age!=null? age : "Age not Specified"}</h1>
      <h1>{name2 ? name2 : "Name 2 not specified"}</h1>


      <h1>{userObj.email}</h1>
      <h1>{userObj.name}</h1>
      <h1>{userObj.age}</h1>
      <h1>{userArray[3]}</h1>

      <img src={path} alt="" height="200" width="200"  />

      <input type="text" name="" id="" placeholder='please click' onClick={callFun} />

      <button onClick={transportDummy}>Dummy button</button>
      <br />

      <button onClick={()=>transport("Car")} > Car</button>
      <br />
      <button onClick={()=>transport("Bike")}>Bike</button>

    </>
  )
}


export default App
