import { useEffect, useState } from "react";

const Clock = ({color}) => {


    const [time, setTime] = useState(new Date());

    useEffect(() => {

        console.log(time)

        setInterval(
            () => {
                setTime(new Date());
            }, 1000
        );
    }, []);




    return (
        <div style={{background:'black', 
        color:color,
         width:'130px', 
         borderRadius:'10px',
          height:'50px',
          alignItems:'center',padding:'5px'}}>
            <h2>{time.toLocaleTimeString()}</h2>

        </div>
    );
}

export default Clock;