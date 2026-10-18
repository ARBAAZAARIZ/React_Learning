import CollegeDetails from "./CollegeDetails";

function NestedLoops() {


    const colleges = [
        {
            name: "IIT Rourkela",
            city: "Rourkela",
            website: "www.iitRourkela.com",
            students: [
                {
                    name: "Arzoo",
                    age: 24,
                    city: "Rourkela",
                },
                {
                    name: "Suresh",
                    age: 25,
                    city: "Chennai",
                }, {
                    name: "Ramesh",
                    age: 26,
                    city: "Delhi",
                }
            ]
        },
        {
            name: "IIT Delhi",
            city: "Delhi",
            website: "www.iitDelhi.com",
            students: [
                {
                    name: "Ramesh",
                    age: 26,
                    city: "Delhi",

                },
                {
                    name: "Arbaaz",
                    age: 25,
                    city: "Delhi",
                }
            ]
        },
        {
            name: "IIT Bombay",
            city: "Mumbai",
            website: "www.iitMumbai.com",
            students: [
                {
                    name: "Sufiyan",
                    age: 22,
                    city: "Mumbai",
                }, {
                    name: "Rohit",
                    age: 23,
                    city: "Mumbai",
                }, {
                    name: "Rakesh",
                    age: 25,
                    city: "Noida",
                }, {
                    name: "Ramesh",
                    age: 26,
                    city: "Lakhnau",
                }
            ]
        },
        {
            name: "IIT Chennai",
            city: "Chennai",
            website: "www.iitChennai.com",
            students: [
                {
                    name: "Aariz",
                    age: 25,
                    city: "Rourkela",
                },
                {
                    name: "Shamia",
                    age: 26,
                    city: "Bhubaneshwar",
                },
                {
                    name: "Naziya",
                    age: 20,
                    city: "Nagpur",

                }, {
                    name: "Razi",
                    age: 22,
                    city: "Noida",
                }
            ]
        }
    ]

    return (
        <div>

            {
                colleges.map((college) =>
                    <CollegeDetails college={college} />
                )
            }


        </div>
    );

}

export default NestedLoops;