import { useState } from "react";

export default function HandleRadioAndOptionValue(){


    const [gender,setGender] = useState('male');
    const [city,setCity] = useState('hydrebad');

    const handleCityChnage = (event)=>{

        setCity(event.target.value);
    }


    return (
        <>

        <hr />

        Handling Option value
<br /><br />
<label htmlFor="male">Male</label>
        <input type="radio" name='gender' id='male' value='male' 
        checked={gender=='male'}
         onChange={(event)=>setGender(event.target.value)}/>

        <label htmlFor="female">Female</label>
        <input type="radio" name='gender' id='female' value='female'
         checked={gender=='female'}
         onChange={(event)=>setGender(event.target.value)}/>

         <br />

         Selected Gender :{gender}


         <hr />

         <br />

         <select name="city" id="city" defaultValue={city}
         onChange={handleCityChnage}>

            <option value="mumbai">Mumbai</option>
             <option value="delhi">Delhi</option>
              <option value="rourkela">Rourkela</option>
               <option value="hydrebad">Hydrebad</option>
         </select>
<br /><br />
         selected City : {city}
        
        </>
    );
}