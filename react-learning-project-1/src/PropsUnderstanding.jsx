function PropsUnderstanding({user,
    collegeNames,
    name,
    age=20,
    children,colour='green'}){


    return (
        <>

        <h3>{name}</h3>
        <h3>{age}</h3>
        <hr />



        <h2>name : {user.name}</h2>
        <h3>age : {user.age}</h3>
        <h3>email : {user.email}</h3>
        <h3>College Names: {collegeNames}</h3>
<div style={{color:colour,width:'300px', border:'5px solid red'}}>

     {children}
</div>
       
        </>
    )
}

export default PropsUnderstanding;