import { useState } from "react";


export default function CommentHook() {

    const [data, setData] = useState([]);
    
    let selectHandler = (event) => {
        console.log(event.target.value)
        fetch('https://jsonplaceholder.typicode.com/posts/' + event.target.value + '/comments')
            .then(responce => responce.json())
            .then(data => {
                console.log(data)
                setData(data)
        })
        
}

    return (
        <>
            <select onChange={selectHandler}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            
            {data.map((item, index) => (
                    <section key={item.id}>
                        <p><b>{index + 1}. {item.email}</b></p>
                        <p>{item.body}</p>
                    </section>
                ))}
        </>
    )
}