import React from "react";
import {Col, Form, Row} from "react-bootstrap";

export default function CategorySelector({ categories }) {
    return (
        <div>
            <Form.Group as={Row} controlId={"triviaCategory"}>
                <Form.Label column sm={2}>
                    Category
                </Form.Label>
                <Col sm={10}>
                    <Form.Select aria-label="Trivia Category">
                        <option>All</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </Form.Select>
                </Col>
            </Form.Group>
        </div>
    )
}
