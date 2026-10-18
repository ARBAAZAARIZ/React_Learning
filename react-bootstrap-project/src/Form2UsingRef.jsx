import { useRef } from "react";

function Form2UsingRef() {



const name = useRef('');
const password = useRef('');
const checkThis = useRef('');


const handleNameChange = ()=>{
    console.log(name.current.value)
}
const handlePasswordChnage = ()=>{
    console.log(password.current.value);
    
}

const handleCheckBoxChange = ()=>{

    console.log(checkThis.current.checked);

}

const handleSubmit=()=>{
const formObj = {
    name:name.current.value,
    password:password.current.value,
    CheckBox:checkThis.current.checked
}

console.log(JSON.stringify(formObj,null,4));


}
    return (
        <div>
              <br /><br />
            <label htmlFor="name">Give your Full Name: </label>
            <input type="text" id="name" ref={name} onChange={handleNameChange} />

            <br /><br />

            <label htmlFor="password">Enter Your Password : </label>
            <input type="password" id="password" ref={password} onChange={handlePasswordChnage} />
              <br /><br />

            <label htmlFor="checkThis">Check This Box: </label>
            <input type="checkBox" id="checkThis" ref={checkThis} onChange={handleCheckBoxChange}/>
              <br /><br />

              <button onClick={handleSubmit}>Submit</button>

        </div>

    );

}



export default Form2UsingRef;