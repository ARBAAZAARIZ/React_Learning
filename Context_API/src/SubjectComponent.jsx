import { useContext } from "react";
import { SubContext } from "./SubjectContext";

export default function SubjectComponent (){

    const subject = useContext(SubContext)


    return (
        <div style={{background:'red', padding:10} }>
            <h1>subject : {subject}</h1>
        </div>
    );
}