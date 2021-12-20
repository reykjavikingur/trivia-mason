import React, {useCallback} from "react";
import {Button, Col, Container, Row, Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getChallenges, selectChallenges, selectChallengesLoading} from "./triviaSlice";
import TriviaTable from "../../components/TriviaTable";

export default function TriviaRandomChallengeList() {

    const dispatch = useDispatch();

    const challenges = useSelector(selectChallenges);

    const challengesLoading = useSelector(selectChallengesLoading);

    const handleClick = useCallback(() => {
        dispatch(getChallenges({ amount: 10 }));
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
                        <Col>
                            {challenges ?
                                <TriviaTable items={challenges} />
                                :
                                null
                            }
                        </Col>
                    </Row>
                </>

            }
        </Container>
    );
}
