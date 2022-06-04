import React from "react";
import "./App.css"


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
                        <picture>
                            <img
                                src={data.picture.large}
                                alt={`${data.name.first} profile`}
                            />
                        </picture>
                    <li>Tytuł: {data.name.title}</li>
                    <li>Imię: {data.name.first}</li>
                    <li>Nazwisko: {data.name.last}</li>
                    <li>Narodowość: {data.nat}</li>
                    <li>Miasto: {data.location.city}</li>
                    <li>Numer telefonu: {data.phone}</li>
                    <li>Email: {data.email}</li>
                </ul>
            ) : ("")}

            <button onClick={handleRandomUserFormAPI}>Generate random user</button>
        </section>
    );
}
