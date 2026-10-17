import { useState } from "react";

const Counter = ()=>{

    const [count,setCount]=useState(0);



    return (
        <>
        <div>Counter:{count}</div>

        <button onClick={()=>{
            if(count==10){
                setCount(0);
            }else{
                setCount(count+1);
            }
        }}>click to increase count</button>

        </>
    );
}

export default Counter;