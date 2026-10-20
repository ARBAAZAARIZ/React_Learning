import { useState } from "react";

function UnderstandingPureComponent() {


    const [users, setUser] = useState([]);
    const [user, setUserName] = useState("");

    return (<>

        <h2>Total Users : {users.length}</h2>
        <h2>Last user : {users[users.length - 1]}</h2>
        <h2>Unique users: {[...new Set(users)].length}</h2>
        <br />

        <input placeholder="Enter user name" onChange={(event) => {
            setUserName(event.target.value);
        }} />
        <br />
        <br />

        <button onClick={() => {
            setUser([...users, user]);
        }}>click me to add new user</button>
        <br />
        <br />

        <ul>{users.map((u) => {
          return(  <li> {u} </li>)
        })}</ul>

    </>);

}

export default UnderstandingPureComponent;

