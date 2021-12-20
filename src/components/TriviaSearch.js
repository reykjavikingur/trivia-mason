import React from "react";
import CategoryList from "../features/categories/CategoryList";
import TriviaRandomChallengeList from "../features/trivia/TriviaRandomChallengeList";
import TriviaChallengeDifficultySelect from "../features/trivia/TriviaChallengeDifficultySelect";
import TriviaChallengeTypeSelect from "../features/trivia/TriviaChallengeTypeSelect";
import {Col, Row} from "react-bootstrap";

export default function TriviaSearch(props) {

    return (
        <>
            <h2>Trivia Search</h2>
            <Row className="mb-3">
                <Col md={4}>
                    <CategoryList />
                </Col>
                <Col md={4}>
                    <TriviaChallengeDifficultySelect />
                </Col>
                <Col md={4}>
                    <TriviaChallengeTypeSelect />
                </Col>
            </Row>

            <TriviaRandomChallengeList />
        </>
    );
}
