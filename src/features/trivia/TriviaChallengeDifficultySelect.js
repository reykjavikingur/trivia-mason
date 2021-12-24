import React, {useCallback} from "react";
import {Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {chooseChallengeDifficulty, selectChallengeDifficulty} from "./triviaSlice";
import TriviaFilterSelect from "../../components/TriviaFilterSelect";

export default function TriviaChallengeDifficultySelect() {
    const dispatch = useDispatch();
    const options = ["easy", "medium", "hard"];
    const difficulty = useSelector(selectChallengeDifficulty);
    const handleChange = useCallback((event) => {
        dispatch(chooseChallengeDifficulty(event.target.value));
    }, [dispatch]);
    return (
        <TriviaFilterSelect controlId={"trivialChallengeDifficulty"} label={"Difficulty:"}>

            <Form.Select aria-label="Trivia Challenge Difficulty"
                value={difficulty}
                onChange={handleChange}
            >
                <option value="">(any)</option>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </Form.Select>

        </TriviaFilterSelect>
    );
}
