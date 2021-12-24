import React, {useCallback, useEffect} from "react";
import {Button, Col, Row, Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getChallenges, selectChallenges, selectChallengesLoading} from "./triviaSlice";
import TriviaChallenge from "./TriviaChallenge";

export default function TriviaRandomChallengeList() {

    const amount = 1;

    const dispatch = useDispatch();

    const challenges = useSelector(selectChallenges);

    const challengesLoading = useSelector(selectChallengesLoading);

    useEffect(() => {
        if (!challenges && !challengesLoading) {
            dispatch(getChallenges({ amount }));
        }
    }, [dispatch, challenges, challengesLoading]);

    const handleClick = useCallback(() => {
        dispatch(getChallenges({ amount }));
    }, [dispatch]);

    return (
        <>
            {challengesLoading ?

                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>

                :

                <>
                    <Row>
                        <Col className="mb-2 text-center">
                            <Button size={"lg"} onClick={handleClick}>Refresh</Button>
                        </Col>
                    </Row>
                    <Row>
                        {challenges ?
                            challenges.map((challenge, i) => (
                                <Col key={i} xs={12} sm={12} md={6} lg={4} xl={3}
                                    className="mb-3 align-content-stretch"
                                >
                                    <TriviaChallenge challenge={challenge} />
                                </Col>
                            ))
                            :
                            null
                        }
                    </Row>
                </>

            }
        </>
    );
}
