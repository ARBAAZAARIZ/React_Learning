import { useState } from "react";

export default function HandleCheckBoxValue() {

    const [language, setLanguage] = useState([]);

    const handleCheckBoxValue = (event) => {

        let value = event.target.value;
        let isChecked = event.target.checked;// return true false

        if (isChecked) {
            setLanguage(previousLanguage =>[...previousLanguage,value]);
        } else {
            setLanguage(previousLanguage =>previousLanguage.filter(lang=>lang!==value));
        }

    }

    return (

        <>
            <h2>Handle CheckBox Value</h2>
            <br /><br />
            <label htmlFor="java">JAVA</label>
            <input type='checkbox' id="java" onChange={handleCheckBoxValue} value='JAVA' />
            <br /><br />
            <label htmlFor="python">Python</label>
            <input type='checkbox' id="python" onChange={handleCheckBoxValue} value='Python' />
            <br /><br />
            <label htmlFor="javascript">JavaScript</label>
            <input type='checkbox' id="javascript" onChange={handleCheckBoxValue} value='JavaScript' />
            <br /><br />
            <label htmlFor="c++">C++</label>
            <input type='checkbox' id="c++" onChange={handleCheckBoxValue} value='C++' />

            <br /><br />
            <h2>Selected Language: {language}</h2>

        </>
    )
}