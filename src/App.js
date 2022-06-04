import React from "react";


export default function App() {

    const [data, setData] = React.useState();

    React.useEffect(() => {
        fetch("https://randomuser.me/api/")
            .then((result) => result.json())
            .then((data) => setData(data.results[0]));
    }, []);

    const handleRandomUserFormAPI = () => {
        fetch("https://randomuser.me/api/")
            .then((result) => result.json())
            .then((data) => setData(data.results[0]));
    };

    return (
        <section>
            {data !== undefined ? (
                <ul>
                    <li>
                        {data.name.title} {data.name.first} {data.name.last}
                    </li>
                    <li>Nationality: {data.nat}</li>
                    <li>City: {data.location.city}</li>
                    <li>Phone number: {data.phone}</li>
                    <li>Email: {data.email}</li>

                    <li>
                        <picture>
                            <img
                                src={data.picture.large}
                                alt={`${data.name.first} profile`}
                            />
                        </picture>
                    </li>
                </ul>
            ) : ("")}

            <button onClick={handleRandomUserFormAPI}>Generate random user</button>
        </section>
    );
}
