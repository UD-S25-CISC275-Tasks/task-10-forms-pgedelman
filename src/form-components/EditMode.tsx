import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): React.JSX.Element {
    const [studentInfo, setStudentInfo] = useState<[string, boolean]>([
        "Your Name",
        true,
    ]);
    const [editMode, setEditMode] = useState<boolean>(false);

    return (
        <div>
            <h3>Edit Mode</h3>
            <span>
                {studentInfo[0]} is {studentInfo[1] ? "" : "not "}a student
            </span>
            {editMode && (
                <>
                    <Form.Group controlId="studentForm">
                        <Form.Label>Are you a student? </Form.Label>
                        <Form.Check
                            type="switch"
                            checked={studentInfo[1]}
                            onChange={(event) => {
                                setStudentInfo([
                                    studentInfo[0],
                                    event.target.checked,
                                ]);
                            }}
                        />
                    </Form.Group>
                    <Form.Group controlId="studentNameForm">
                        <Form.Label>What is your Name </Form.Label>
                        <Form.Control
                            type="text"
                            value={studentInfo[0]}
                            onChange={(event) => {
                                setStudentInfo([
                                    event.target.value,
                                    studentInfo[1],
                                ]);
                            }}
                        />
                    </Form.Group>
                </>
            )}
            <Form.Group controlId="editModeForm">
                <Form.Switch
                    type="checkbox"
                    checked={editMode}
                    label="Edit Information"
                    onChange={(event) => {
                        setEditMode(event.target.checked);
                    }}
                />
            </Form.Group>
        </div>
    );
}
