import React, {useEffect, useState} from "react";
import TriviaTable from "./TriviaTable";
import CategoryList from "../features/categories/CategoryList";

export default function TriviaSearch(props) {

    const [items, setItems] = useState();

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10")
            .then(res => res.json())
            .then(r => {
                console.log("questions", r);
                setItems(r.results);
            })
    }, []);

    return (
        <>
            <h2>Trivia Search</h2>

            <CategoryList />

            {items ?
                <TriviaTable items={items}></TriviaTable>
                :
                <div>Loading results...</div>
            }
        </>
    );
}
