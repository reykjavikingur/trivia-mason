import React, {useMemo} from "react";
import {Badge} from "react-bootstrap";
import TimerText from "./TimerText";
import {useSelector} from "react-redux";
import {selectCountdownSeconds, selectCountingDown} from "./timerSlice";

export default function TimerBadge() {
    const countingDown = useSelector(selectCountingDown);
    const countdownSeconds = useSelector(selectCountdownSeconds);

    const bg = useMemo(() => {
        if (countingDown) {
            if (countdownSeconds < 10) {
                return "danger";
            }
            else {
                return "primary";
            }
        }
        else {
            return "secondary";
        }
    }, [countingDown, countdownSeconds]);

    return (
        <Badge bg={bg}>
            <TimerText />
        </Badge>
    )
}
