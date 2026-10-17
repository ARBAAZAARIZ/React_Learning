import { useState } from "react";

function Toogle(){

    const [isToggled,setToggle] = useState(false);
    
    return (
        
        <>
        

        {isToggled ? <h1>Toggle is shown</h1>: <h1>Toggle is hidden</h1>}

        <button onClick={()=>setToggle(!isToggled)}>Click to toggle</button>
       
        </>
    );
}

export default Toogle;