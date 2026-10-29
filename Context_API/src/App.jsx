
import { useState } from 'react';
import './App.css'
import SchoolComponent from './SchoolComponent';

import { SubContext } from './SubjectContext';

function App() {

  const [subject,setSubject]=useState('English');



  return (
    <div style={{background:'yellow', padding:10}}>
      <h1 style={{color:'black'}}>Use Context Api</h1>

      <SubContext.Provider value={subject}>

        <select onChange={(event)=>{setSubject(event.target.value)}} style={{height:'40px',width:'80px',padding:10}}>

          <option value=''>Select</option>
          <option value='maths'>Maths</option>
          <option value='history'>Hostory</option>
          <option value='biology'>Biology</option>


        </select>

        <SchoolComponent/>  

      </SubContext.Provider>
    </div>
  );
}

export default App
