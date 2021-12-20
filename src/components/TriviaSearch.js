import React from "react";
import CategoryList from "../features/categories/CategoryList";
import TriviaRandomChallengeList from "../features/trivia/TriviaRandomChallengeList";

export default function TriviaSearch(props) {

    return (
        <>
            <h2>Trivia Search</h2>

            <CategoryList />

            <TriviaRandomChallengeList />
        </>
    );
}
