import { useState } from 'react'
import './App.css'
import { Button } from 'react-bootstrap'
import Form1 from './Form1'
import Form2UsingRef from './Form2UsingRef'
import PassingFunctionInProps from './PassingFunctionInProps'
import FormStatusHookUsing from './FormStatusHookUsing'
import UseTransactionUsing from './UseTransactionUsing'
import UnderstandingPureComponent from './UnderstandingPureComponent'
import Parent from './LiftingStateUp/Parent'
import Object1_With_State from './ObjectWithState/Object1_With_State'
import Array1 from './ArrayWithStateAndArrayOfObjectWithState/Array1'
import USeActionStateHook from './handling_formgs/UseActionStateHook'
import useToggleHook from './customHooks/useToggleHook'

function App() {
  const [count, setCount] = useState(0)

  const [tValue,setTValue] = useToggleHook(true);


  function passThisFunctionToChild(dynamicName){
    alert(`This function is passed from parent to child component\n  ${dynamicName}"Dynamic name passed`);
  }

  return (
    <>
      <Button variant='danger'>Click to show alert</Button>
      <Form1/>
      <hr />
      <Form2UsingRef/>

      <hr />

      <PassingFunctionInProps function1={passThisFunctionToChild} dynamicName="John Doe"/>

      <hr/>

      <FormStatusHookUsing/>

      <UseTransactionUsing/>

      <hr />

      <UnderstandingPureComponent/>

      <hr />
      <h3>Understanding how to pass
         the value from one child to another child at same level not from parent to child</h3>

         <Parent/>

         <hr />

         <Object1_With_State/>


         <br />

         <Array1/>

         <USeActionStateHook/>

         <hr />
         <hr />

         {
          tValue? <h1>ON</h1>:<h1>OF</h1>
         }


         <h2>Text Displayed</h2>
         <button onClick={setTValue}>toggle</button>

    </>
  )
}

export default App
