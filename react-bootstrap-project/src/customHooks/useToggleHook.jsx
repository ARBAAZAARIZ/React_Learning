import { useState } from "react";

export default function useToggleHook(initialVal = false) {


    const [toggle, setToggle] = useState(initialVal);

    const setToggleValue = () => {

        console.log(initialVal + 'Calling from Hook');
        

        setToggle((previous)=>{return !previous});
        

    }

    return [toggle,setToggleValue];

}

