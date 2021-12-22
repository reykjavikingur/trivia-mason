import React from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import TriviaSearch from "./components/TriviaSearch";
import {Col, Container, Nav, Row} from "react-bootstrap";
import TriviaScore from "./components/TriviaScore";
import TriviaTimer from "./components/TriviaTimer";

function App() {
    return (
        <Router>
            <Container fluid>
                <Row>
                    <Col>
                        <Nav variant={"tabs"} defaultActiveKey={"#/"}>
                            <Nav.Item>
                                <Nav.Link href={"#/"}>Challenge</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={"#/score"}>Score</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={"#/timer"}>Timer</Nav.Link>
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
