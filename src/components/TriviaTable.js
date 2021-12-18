import React from "react";
import {Table} from "react-bootstrap";

export default function TriviaTable({ items }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Difficulty</th>
                    <th>Type</th>
                    <th>Question</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => (
                    <tr key={i}>
                        <td>{item.difficulty}</td>
                        <td>{item.type}</td>
                        <td dangerouslySetInnerHTML={{ __html: item.question }}></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
