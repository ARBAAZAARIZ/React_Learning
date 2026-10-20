import { useState } from "react";

export default function Array1() {






    const [arr1, setArray1] = useState(['arbaaz', 'aariz', 'arzoo']);

    const [objArry1, setObjArray1] = useState([

        {
            name: 'arbaaz',
            age: 24
        }, {
            name: 'shamia',
            age: 23
        }, {
            name: 'naziya',
            age: 22
        }
    ]);



    const changeLastDataOfArray1 = (event) => {

        arr1[arr1.length - 1] = event.target.value

        setArray1([...arr1])

    }

    const changeLastDataAge = (event) =>{
        objArry1[objArry1.length-1].age = event.target.value

        setObjArray1([...objArry1])
    }


    return (
        <>

            <hr />

            <input type="text" onChange={changeLastDataOfArray1}
                placeholder="Enter name to chnahge the last data" />

            {arr1.map((a, index) => {
                return (

                    <h2 key={index}>{a}</h2>

                );
            })}


            <div>

                <input type="text" onChange={changeLastDataAge}
                    placeholder="Enter name to chnahge the last data" />

                {objArry1.map(
                    (oa,index) => {
                        return (
                            <h2 key={index}>name : {oa.name}  age : {oa.age}</h2>
                        );
                    }
                )}


            </div>


        </>
    );
}