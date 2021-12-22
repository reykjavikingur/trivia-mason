import React, {useCallback, useEffect} from "react";
import {Button, Col, Container, Row, Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getChallenges, selectChallenges, selectChallengesLoading} from "./triviaSlice";
import TriviaTable from "../../components/TriviaTable";
import TriviaChallenge from "./TriviaChallenge";

export default function TriviaRandomChallengeList() {

    const amount = 10;

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
        <Container fluid>
            {challengesLoading ?

                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>

                :

                <>
                    <Row>
                        <Col>
                            <h2>Challenges</h2>
                        </Col>
                        <Col>
                            <Button onClick={handleClick}>Refresh</Button>
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
        </Container>
    );
}
