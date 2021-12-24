import React, {useCallback, useState} from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import TriviaSearch from "./components/TriviaSearch";
import {Badge, Col, Container, Nav, Row} from "react-bootstrap";
import TriviaScore from "./components/TriviaScore";
import TriviaTimer from "./components/TriviaTimer";
import TimerBadge from "./features/timer/TimerBadge";
import ScoringBadge from "./features/scoring/ScoringBadge";

function App() {

    return (
        <Router>
            <Container fluid>
                <Row>
                    <Col>
                        <h1>Trivia Mason</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Nav variant={"tabs"} defaultActiveKey={window.location.hash}>
                            <Nav.Item>
                                <Nav.Link href={"#/"}>
                                    Challenge
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={"#/score"}>
                                    Score&nbsp;<ScoringBadge />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={"#/timer"}>
                                    Timer&nbsp;<TimerBadge />
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Routes>
                            <Route exact path={"/"} element={<TriviaSearch />}>
                            </Route>
                            <Route path={"/score"} element={<TriviaScore />}>
                            </Route>
                            <Route path={"/timer"} element={<TriviaTimer />}>
                            </Route>
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

export default App;
