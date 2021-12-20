import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {chooseChallengeType, selectChallengeType} from "./triviaSlice";
import {Form} from "react-bootstrap";

export default function TriviaChallengeTypeSelect() {
    const options = ["multiple", "boolean"];
    const dispatch = useDispatch();
    const handleChange = useCallback((event) => {
        dispatch(chooseChallengeType(event.target.value));
    }, [dispatch]);
    const type = useSelector(selectChallengeType);
    return (
        <Form.Group controlId={"trivialChallengeType"}>
            <Form.Label>
                Type:
            </Form.Label>
            <Form.Select aria-label="Trivia Challenge Type"
                value={type}
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
