import { useState } from "react";

export default function Object1_With_State() {

    const [obj1, setObj1] = useState(
        {
            name: 'arbaaz',
            address: {
                city: 'mumbai',
                country: 'india'
            }
        }
    );

    const handleNameChange = (event) => {

        obj1.name = event.target.value

        setObj1({...obj1});

    }

    const handleCityChange = (event) => {
        obj1.address.city = event.target.value

        console.log( obj1.address.city );
        

        setObj1({...obj1,address:{...obj1.address}})

    }

        const handleCountryChange = (event) => {
        obj1.address.country = event.target.value

        console.log( obj1.address.country );
        

        setObj1({...obj1,address:{...obj1.address}})

    }





    return (

        <>

            <input type="text" placeholder="enter name" onChange={handleNameChange} />

            <br />
            <br />

            <input type="text" placeholder="enter city" onChange={handleCityChange} />

            <br />

            <br />

             <input type="text" placeholder="enter city" onChange={handleCountryChange} />

            <br />

            <br />



            <p>Object name : {obj1.name}</p>
            <p>Object city : {obj1.address.city}</p>
            <p>Object country : {obj1.address.country}</p>

        </>

    );
}

