import User from "./User";

export default function Loops() {


    const students = [
        {
            name: "Arbaaz",
            age: 22,
            city: "Mumbai",
            id: 1
        }, {
            name: "Rohit",
            age: 23,
            city: "Delhi",
            id: 2
        }, {
            name: "Arzoo",
            age: 24,
            city: "Rourkela",
            id: 3
        }, {
            name: "Suresh",
            age: 25,
            city: "Chennai",
            id: 4
        }
    ];

    return (
        <main className="students-page">
            <h1 className="students-title">List of Students</h1>
            <div className="students-table-wrap">
                <table className="students-table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td className="student-name">{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <hr />


        Passing userdetails to differen6 component

            {
                students.map(
                    (student)=>
                        <User key={student.id} student={student}/>

                    
                )
            }


        </main>
    );

}