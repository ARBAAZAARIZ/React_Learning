import { useActionState } from "react";

export default function USeActionStateHook() {





    const handleSubmit = (previousData, formData) => {

        let name = formData.get('name');
        let password = formData.get('password');

        console.log("Handle Submit Called ", name, password);

        setInterval(() => { }, 2000);

        if (name && password) {

            return { successMsg: 'Data Submitted Successfully!!' }

        } else {
            return { errorMsg: 'Please Fill the data Properly' }
        }

    }

    const [data, formAction1, pending] = useActionState(handleSubmit, undefined);


    return (
        <div>

            <hr />

            <h1>useActionState Hook example</h1>

            <form action={formAction1}>

                <label htmlFor="name">Enter name </label>
                <input type="text" id="name" name="name" placeholder="enter name" />

                <br /><br />

                <label htmlFor="password">Enter name </label>
                <input type="password" id="password" name="password" placeholder="enter Password" />

                <br /><br />

                <button disabled={pending}>Submit Data</button>

                {/* <h1>{data ? data.successMsg||data.errorMsg:""}</h1> */}

                <h3>

                    <span style={{color:'green'}}>{data?data.successMsg:''}</span>
                    <span style={{color:'red'}}>{data?data.errorMsg:''}</span>

                </h3>





            </form>


        </div>
    );

}