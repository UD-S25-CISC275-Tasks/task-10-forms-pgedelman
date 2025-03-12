import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("St.Pattys Day ☘️");

    function nextHolidayByAlphabet(currentHoliday: string) {
        const holidays: string[] = [
            "Christmas 🎄",
            "Fourth of July 💥",
            "Halloween 🎃",
            "St.Pattys Day ☘️",
            "Thanksgiving 🦃"
        ];
        return holidays[
            (holidays.findIndex((h: string) => h === currentHoliday) + 1) % 5
        ];
    }
    function nextHolidayByDate(currentHoliday: string) {
        const holidays: string[] = [
            "St.Pattys Day ☘️",
            "Fourth of July 💥",
            "Halloween 🎃",
            "Thanksgiving 🦃",
            "Christmas 🎄"
        ];
        return holidays[
            (holidays.findIndex((h: string) => h === currentHoliday) + 1) % 5
        ];
    }
    return (
        <span>
            <Button
                onClick={() => {
                    setHoliday(nextHolidayByAlphabet(holiday));
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(nextHolidayByDate(holiday));
                }}
            >
                Advance by Year
            </Button>
            <span>Holiday: {holiday} </span>
        </span>
    );
}
