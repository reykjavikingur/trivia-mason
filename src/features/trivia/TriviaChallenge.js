import React, {useMemo, useState} from "react";
import {Badge, Button, Card} from "react-bootstrap";

const classNames = require("classnames");

export default function TriviaChallenge({ challenge }) {

    const [showingCorrect, setShowingCorrect] = useState(false);

    const options = useMemo(() => {
        if (challenge.type === "boolean") {
            return ["True", "False"];
        }
        else if (challenge.type === "multiple") {
            const responses = [...challenge.incorrect_answers, challenge.correct_answer];
            responses.sort((a, b) => Math.random() < 0.5 ? -1 : 1);
            return responses;
        }
        else {
            return [];
        }
    }, [challenge]);

    return (
        <Card className={classNames("h-100", {})}>
            <Card.Body>
                <Card.Subtitle className="mb-1 text-muted">
                    {challenge.category}
                </Card.Subtitle>
                <Card.Title>
                    <span dangerouslySetInnerHTML={{ __html: challenge.question }}></span>
                </Card.Title>
                <Card.Text as={"div"}>
                    <ul>
                        {options.map((option, i) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: option }}
                                className={showingCorrect && option === challenge.correct_answer ? "text-decoration-underline" : ""}
                            ></li>
                        ))}
                    </ul>
                </Card.Text>
                <div className="d-flex">

                    <Button size="sm"
                        onClick={() => setShowingCorrect(!showingCorrect)}
                    >
                        {showingCorrect ? "hide answer" : "show answer"}
                    </Button>

                </div>
                <div className="d-flex justify-content-end">
                    <Badge pill
                        bg={getDifficultyBG(challenge.difficulty)}>{challenge.difficulty}</Badge>
                </div>

            </Card.Body>
        </Card>
    );
}

function getDifficultyBG(difficulty) {
    switch (difficulty) {
        case "easy":
            return "success";
        case "medium":
            return "warning";
        case "hard":
            return "danger";
        default:
            return "info";
    }
}
