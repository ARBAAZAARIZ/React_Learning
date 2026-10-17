import { useState } from "react";

function TakeInputField() {

    const [inputField1, setInputField1] = useState(null);

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);

    const [result, setResult] = useState(0);



    return (
        <>

            Input Field 1: <input type="text" value={inputField1} onChange={(event) => setInputField1(event.target.value)} />

            value of Input field 1 is {inputField1}

            <button onClick={() => setInputField1('')}>clear field</button>
            <br />

            Add two three number dynamically
            <br />
            <br />

            number 1 : <input type='number' onChange={(event) => setNum1(Number(event.target.value))} placeholder="input field number 1" value={num1} />
            <br />
            <br />
            number 2 : <input type='number' onChange={(event) => setNum2(Number(event.target.value))} placeholder="input field number 2" value={num2} />
            <br />
            <br />
            number 3 : <input type='number' onChange={(event) => setNum3(Number(event.target.value))} placeholder="input field number 3" value={num3} />
            <br /><br />

            <button onClick={() => setResult(num1 + num2 + num3)}>Submit</button>
            <br />
            <br />

            <button onClick={() => { setNum1(0); setNum2(0); setNum3(0); setResult(0) }} >Clear/Reset</button>
            <br />

            <h2>Result: {result != null ? result : 'Please Click on submit button to see the addition'}</h2>

            <hr />
            <hr />

            Calcullation on OnChange value

            number 1 : <input type='number' value={num1} onChange={(event) => {
                const value = Number(event.target.value)
                setNum1(value);
                setResult(value + num2 + num3)
            }} placeholder="input field number 1" />
            <br />
            <br />
            number 2 : <input type='number' value={num2} onChange={(event) => {
                const value = Number(event.target.value)
                setNum2(value);
                setResult(num1 + value + num3)
            }} placeholder="input field number 2" />
            <br />
            <br />
            number 3 : <input type='number' value={num3} onChange={(event) => {
                const value = Number(event.target.value)
                setNum3(value);
                setResult(num1 + num2 + value)
            }} placeholder="input field number 3" /> 
            <br /><br />

            <h2>Result: {result != 0 ? result : 'Please enter numbers into input fields'}</h2>

        </>
    );

}

export default TakeInputField;