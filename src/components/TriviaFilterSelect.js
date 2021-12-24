import React from 'react';
import {Col, Form, Row} from "react-bootstrap";

export default function TriviaFilterSelect({controlId, label, children}) {
    return (
        <Form.Group as={Row} controlId={controlId} className={"mb-1"}>
            <Form.Label column xs={2} md={12}>
                {label}
            </Form.Label>
            <Col>
                {children}
            </Col>
        </Form.Group>
    )
}
