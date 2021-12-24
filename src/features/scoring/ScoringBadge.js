import React, {useMemo} from "react";
import {Badge} from "react-bootstrap";
import {useSelector} from "react-redux";
import {selectPlayerScores} from "./scoringSlice";

export default function ScoringBadge() {
    const playerScores = useSelector(selectPlayerScores);
    const numPlayers = useMemo(() => {
        return Object.keys(playerScores).length;
    }, [playerScores]);
    return (
        <Badge>{numPlayers}</Badge>
    );
}
