import { Button } from "react-bootstrap";

function PassingFunctionInProps({function1,dynamicName}){


    return (
        <>

        <Button variant="danger " onClick={()=>{
            function1(dynamicName);
        }}>Click me to pass the function from one component to another component</Button>
        
        </>
    );
}

export default PassingFunctionInProps;