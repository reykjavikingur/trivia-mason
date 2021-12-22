import React, {useCallback} from "react";
import {useSelector} from "react-redux";
import {selectCountdownSeconds} from "./timerSlice";

export default function TimerText() {
    const countdownSeconds = useSelector(selectCountdownSeconds);

    const formatTime = useCallback((n) => {
        const m = Math.floor(n / 60);
        const s = n % 60;
        let min = m.toString(10);
        let sec = s.toString(10);
        while (sec.length < 2) {
            sec = "0" + sec;
        }
        return min + ":" + sec;
    }, []);

    return formatTime(countdownSeconds);
}
