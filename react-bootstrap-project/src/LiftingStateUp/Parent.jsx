import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default function Parent (){

    const [user,adUser] = useState('');

    return(

        <>
        <Child1 adUser={adUser}/>
        <Child2 user={user}/>
        </>
    );

}