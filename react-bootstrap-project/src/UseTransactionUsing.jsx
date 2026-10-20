import { useTransition } from "react";
import { Button } from "react-bootstrap";

function UseTransactionUsing() {

    const [pending, setPendingTransition] = useTransition();

   const  handleOnClickOnSubmitButton = () =>{

    setPendingTransition(async ()=>{
            await new Promise (
        (res)=> setTimeout(res,2000)
    );
    });
   }

    return (
        <>

            <hr />
            <h1>UseTransition Hook Example</h1>
            <p>UseTransition is a hook that allows you to mark a state update as non-urgent.
                This means that the update can be interrupted by other updates, such as user
                input or animations. This can help to improve the performance of your application
                by allowing the browser to prioritize more important updates.
            </p>
            <p>In this example, we will use the useTransition hook to mark a state update as non-urgent.
                We will then use the pending variable to
                determine whether the update is still in progress
                .</p>

                {pending ? <img width="100" src="https://media1.tenor.com/m/WX_LDjYUrMsAAAAC/loading.gif" alt="" />  : null}

                <Button variant="warning" disabled={pending}  onClick = {handleOnClickOnSubmitButton}>Use Transaction Click</Button>

                <br /><br /><br /><br /><br />
        </>
    );

}

export default UseTransactionUsing;