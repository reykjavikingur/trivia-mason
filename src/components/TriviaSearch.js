import React, {useEffect, useState} from "react";
import TriviaTable from "./TriviaTable";
import CategorySelector from "./CategorySelector";

export default function TriviaSearch(props) {

    const [items, setItems] = useState();
    const [categories, setCategories] = useState();

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10")
            .then(res => res.json())
            .then(r => {
                console.log("questions", r);
                setItems(r.results);
            })
    }, []);

    useEffect(() => {
        fetch("https://opentdb.com/api_category.php")
            .then(res => res.json())
            .then(r => {
                console.log("categories", r);
                setCategories(r.trivia_categories);
            })
    }, []);

    return (
        <>
            <h2>Trivia Search</h2>
            {categories ?
                <CategorySelector categories={categories}></CategorySelector>
                :
                <div>Loading categories...</div>
            }
            {items ?
                <TriviaTable items={items}></TriviaTable>
                :
                <div>Loading results...</div>
            }
        </>
    );
}
