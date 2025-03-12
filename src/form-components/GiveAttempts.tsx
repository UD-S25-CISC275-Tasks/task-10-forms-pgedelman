import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    function gain() {
        if (!isNaN(parseInt(requestedAttempts)))
            setAttempts(attempts + parseInt(requestedAttempts));
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Attempts Left: {attempts}</span>
            <Form.Group controlId="formRequestAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event) => {
                        setRequestedAttempts(event.target.value);
                    }}
                />
                <Button
                    onClick={() => {
                        gain();
                    }}
                >
                    Gain
                </Button>
                <Button
                    disabled={attempts === 0}
                    onClick={() => {
                        setAttempts(attempts - 1);
                    }}
                >
                    Use
                </Button>
            </Form.Group>
        </div>
    );
}
