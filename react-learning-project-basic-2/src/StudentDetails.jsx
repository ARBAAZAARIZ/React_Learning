const StudentDetails = ({student}) =>{


    return (
        <div style={{
            border:'2px solid black',background:'yellow'
        }}>
            
            <h2>Student name : {student.name}</h2>
            <h2>Student age  : {student.age}</h2>
            <h2>Student city : {student.city}</h2>
        </div>
    )
}

export default StudentDetails;