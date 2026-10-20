import { useFormStatus } from "react-dom";

function FormStatusHookUsing() {


    const handleSubmit = async () => {
        console.log("Submitting...");
        await new Promise((resolve) => setTimeout(resolve, 3000));

    }

    const UserForm = () => {

        const { pending } = useFormStatus();


        console.log(`Form submission status: ${pending}`);
        return (
            <>

                <input type="text" placeholder="Enter your name" />
                <br /><br />
                <input type="text" placeholder="Enter your email" />

                <br />
                <br />

                <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
            </>);
    }


    return (
        <>

            <form action={handleSubmit} >


                <UserForm />
            </form>

        </>
    );

}


export default FormStatusHookUsing;