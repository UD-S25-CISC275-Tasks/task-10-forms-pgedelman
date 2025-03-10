//import { BlobOptions } from "buffer";
//import { setUncaughtExceptionCaptureCallback } from "process";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [value, setValue] = useState<boolean>(false);
    return (
        <span>
            <Button
                onClick={() => {
                    setValue(!value);
                }}
            >
                Reveal Answer
            </Button>
            <div>{value ? "42" : ""}</div>
        </span>
    );
}
