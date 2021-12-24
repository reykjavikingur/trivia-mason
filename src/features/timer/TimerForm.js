import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    clearTimer,
    selectCountdownSeconds,
    selectCountingDown,
    setTimer,
    startTimer
} from "./timerSlice";
import {Button, Col, Row} from "react-bootstrap";
import TimerText from "./TimerText";

/**
 * The UI for the form to edit the timer countdown seconds.
 */
export default function TimerForm() {
    const dispatch = useDispatch();

    const countdownSeconds = useSelector(selectCountdownSeconds);
    const countingDown = useSelector(selectCountingDown);

    const updateCountdownSeconds = useCallback((delta) => {
        const n = Math.max(0, Math.min(600, countdownSeconds + delta));
        dispatch(setTimer(n));
    }, [dispatch, countdownSeconds]);

    return (
        <>
            <Row>
                <Col>
                    <h2>Timer</h2>
                </Col>
            </Row>
            <Row className={"my-5"}>
                <Col className={"d-flex justify-content-end"}>
                    <Button
                        onClick={() => updateCountdownSeconds(-15)}
                        disabled={countingDown}
                    >-15s</Button>
                </Col>
                <Col className={"d-flex justify-content-center"}>
                    <div className="lead font-monospace">
                        &nbsp;
                        <TimerText />
                        &nbsp;
                    </div>
                </Col>
                <Col className={"d-flex justify-content-start"}>
                    <Button
                        onClick={() => updateCountdownSeconds(15)}
                        disabled={countingDown}
                    >+15s</Button>
                </Col>
            </Row>
            <Row className={"my-5"}>
                <Col className={"d-flex justify-content-end"}>
                    <Button
                        onClick={() => dispatch(startTimer())}
                        disabled={countingDown}
                    >start</Button>
                </Col>
                <Col className="d-flex justify-content-between">
                </Col>
                <Col className={"d-flex justify-content-start"}>
                    <Button
                        onClick={() => dispatch(clearTimer())}
                    >clear</Button>
                </Col>
            </Row>
        </>
    )
}
