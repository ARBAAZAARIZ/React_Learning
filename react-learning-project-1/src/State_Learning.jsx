import { useState } from "react";
import Counter from "./Counter";
import Toogle from "./Toogle";

function State_Learning(){


//     let fruit = 'apple';

//    function chnageFruitName(fruitName){
//         fruit = fruitName;
//         console.log(fruit);
//     }

    const [fruit,setFruit]=useState('Apple');

    const handleFruitName = ()=>{

        if(fruit=='Apple'){
            setFruit('Banana');
        }else{
            setFruit('Apple');
        }

    }

     


    return (
    <>

        <h1>{fruit}</h1>

        {/* <button onClick={()=>chnageFruitName("Banana")}>chnage fruit name to -  Banana</button> */}
        
        <button onClick={handleFruitName}>Click to change Fruit name</button>

        <br /><br />

        <Counter/>

        <Toogle/>

    </>
    )
}

 

export default State_Learning ;