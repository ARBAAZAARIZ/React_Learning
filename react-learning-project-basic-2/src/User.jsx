const User = ({student})=>{


    return(
        <div style={{color:'green',
         border:'3px solid black',
         borderRadius:'10px',
         width:'300px',
          margin:'4px',
           }}>
        <h2>Id: {student.id}</h2>
         <h2>Name: {student.name}</h2>
          <h2>Age: {student.age}</h2>
           <h2>City: {student.city}</h2>

        </div>
    );

}


export default User;