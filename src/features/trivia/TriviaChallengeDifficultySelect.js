import React, {useCallback} from "react";
import {Col, Form, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {chooseChallengeDifficulty, selectChallengeDifficulty} from "./triviaSlice";

export default function TriviaChallengeDifficultySelect() {
    const dispatch = useDispatch();
    const options = ["easy", "medium", "hard"];
    const difficulty = useSelector(selectChallengeDifficulty);
    const handleChange = useCallback((event) => {
        dispatch(chooseChallengeDifficulty(event.target.value));
    }, [dispatch]);
    return (
        <Form.Group controlId={"trivialChallengeDifficulty"}>
            <Form.Label>
                Difficulty:
            </Form.Label>
            <Form.Select aria-label="Trivia Challenge Difficulty"
                value={difficulty}
                onChange={handleChange}
            >
                <option value="">(any)</option>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </Form.Select>
        </Form.Group>
    );
}
