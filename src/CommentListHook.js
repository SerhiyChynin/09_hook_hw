
import { useState, useEffect } from "react"

export default function CommentsListHook (props) {

    /**
     * В данном компоненте мы получаем данные из Comment2Hook как props
     * кладем данные в state (data)
     * и дальше выводим их на страницу
     * Функция onlyEven фильтрует стейт
     */

    const [data, setData] = useState([]);

    function onlyEven() {
        console.log(data)
        const filteredArticle = data.filter((item, index) => index % 2 === 0);
        setData(filteredArticle);
    }

    useEffect(() => {
	    console.log('effect');
	    if (props.data.length > 0) setData(props.data);
    }, [props]);

    return (
        <div>    
            <div>
                <button onClick={onlyEven}>Only even comments</button>
            </div>
            {data.map((el, index) => (
                <section key={el.id}>
                    <p><b>{index + 1}. {el.email}</b></p>
                    <p>{el.body}</p>
                </section>
            ))}
        </div>
    )
}