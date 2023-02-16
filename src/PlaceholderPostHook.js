import React, { useState, Component, useEffect } from "react";


export default function PlaceholderPostHook() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/posts')
        .then(response => response.json())
            .then(data => {
            console.log(data)
            setData(data);
    })
}, []) 

    return (
        <>
            {data.map((item, index) => (
                <section key={item.id}>
                    <h2> {index+1 }.{item.title}</h2>
                    <p>{item.body }</p>
                </section>
            ))}
        </>
        
    )
 }
