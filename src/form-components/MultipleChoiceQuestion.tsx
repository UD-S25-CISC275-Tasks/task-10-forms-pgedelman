import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [currentChoice, setCurrentChoice] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multiple-choice-form">
                <Form.Label>Choose your answer</Form.Label>
                <Form.Select
                    value={currentChoice}
                    onChange={(event) => {
                        setCurrentChoice(event.target.value);
                    }}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{currentChoice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
