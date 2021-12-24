import React, {useCallback, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPlayer, removePlayer, selectPlayerScores, setPlayerScore} from "./scoringSlice";
import {Button, Col, Form, Row} from "react-bootstrap";

export default function PlayerScoreboard() {
    const dispatch = useDispatch();
    const playerScores = useSelector(selectPlayerScores);

    const [playerName, setPlayerName] = useState("");

    const players = useMemo(() => {
        return Object.keys(playerScores);
    }, [playerScores]);

    const adjustPlayerScore = useCallback((player, delta) => {
        const score = playerScores[player];
        dispatch(setPlayerScore({ name: player, score: score + delta }));
    }, [playerScores]);

    return (
        <>
            <Row>
                <Col>
                    <h2>Scoreboard</h2>
                </Col>
            </Row>
            {players.map((player, i) => (
                <Row key={i} className={"my-2"}>
                    <Col xs={"auto"}>
                        <span className="lead">{player}</span>
                    </Col>
                    <Col className={"d-flex align-items-baseline"}>
                        <Button size={"sm"}
                            onClick={() => adjustPlayerScore(player, -1)}
                        >-</Button>
                        <span className={"lead mx-2"}>{playerScores[player]}</span>
                        <Button size={"sm"}
                            onClick={() => adjustPlayerScore(player, +1)}
                        >+</Button>
                    </Col>
                    <Col xs={"auto"}>
                        <Button
                            onClick={() => {
                                dispatch(removePlayer(player));
                            }}
                        >remove</Button>
                    </Col>
                </Row>
            ))}
            <Row className={"my-2"}>
                <Col>
                    <Form.Control
                        type={"text"}
                        placeholder={"Player name"}
                        value={playerName}
                        onChange={(event) => setPlayerName(event.target.value)}
                    />
                </Col>
                <Col xs={"auto"}>
                    <Button
                        onClick={() => {
                            dispatch(addPlayer(playerName));
                            setPlayerName("");
                        }}
                        disabled={!playerName}
                    >add</Button>
                </Col>
            </Row>
        </>
    )
}
