export default function Child1 ({adUser}){

    return(

        <>

        <h1>Adding user from child 1</h1>

        <input type="text" onChange={(event)=>{
            adUser(event.target.value)
        }} />
        
        </>
    );

}