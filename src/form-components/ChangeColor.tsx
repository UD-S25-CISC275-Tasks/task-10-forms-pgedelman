import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function ChangeColor(): React.JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>("red");
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "pink",
        "white",
        "purple",
    ];
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color: string) => (
                <Form.Check
                    type="radio"
                    key="color"
                    id="colors"
                    inline={true}
                    label={color}
                    value={color}
                    checked={chosenColor === color}
                    style={{ backgroundColor: color }}
                    onChange={(event) => {
                        setChosenColor(event.target.value);
                    }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{ backgroundColor: chosenColor }}
            >
                You have chosen {chosenColor}.
            </div>
        </div>
    );
}
