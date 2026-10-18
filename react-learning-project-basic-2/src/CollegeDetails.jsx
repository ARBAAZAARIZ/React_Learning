import StudentDetails from "./StudentDetails";

const CollegeDetails = ({college}) => {

    let index =0;


    return (
        <div style={{border:'2px solid black',margin:'10px',width:'600px'}}>

        <h1>College Name    : {college.name}</h1>
        <h1>College City    : {college.city}</h1>
        <h1>College Website : {college.website}</h1>
        <h1>Student Details : </h1>
        <hr />
        {
            college.students.map((student)=>{
               return( <StudentDetails key={index++} student={student}/>)
            })
        }

        </div>

    );
}

export default CollegeDetails;