import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attemptsValue, setAttempts] = useState<number>(4);
    const [progressValue, setProgress] = useState<boolean>(false);

    return (
        <span>
            <Button
                onClick={() => {
                    setAttempts(attemptsValue - 1);
                    setProgress(true);
                }}
                disabled={progressValue || attemptsValue <= 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setProgress(false);
                }}
                disabled={!progressValue}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attemptsValue + 1);
                }}
                disabled={progressValue}
            >
                Mulligan
            </Button>
            <div>Available Attempts: {attemptsValue}</div>
        </span>
    );
}
