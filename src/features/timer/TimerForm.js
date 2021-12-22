import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    clearTimer,
    selectCountdownSeconds,
    selectCountingDown,
    setTimer,
    startTimer
} from "./timerSlice";
import {Button} from "react-bootstrap";
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
            <div className="d-flex my-1">
                <Button
                    onClick={() => updateCountdownSeconds(-15)}
                    disabled={countingDown}
                >-15s</Button>
                <div className="lead font-monospace">
                    &nbsp;
                    <TimerText />
                    &nbsp;
                </div>
                <Button
                    onClick={() => updateCountdownSeconds(15)}
                    disabled={countingDown}
                >+15s</Button>
            </div>
            <div className="d-flex my-1">

                <Button
                    onClick={() => dispatch(startTimer())}
                    disabled={countingDown}
                >start</Button>

                <Button
                    onClick={() => dispatch(clearTimer())}
                >clear</Button>

            </div>
        </>
    )
}
