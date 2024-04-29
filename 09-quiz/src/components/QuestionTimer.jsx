import { useEffect } from "react";
import { useState } from "react";

const SETTED_INTERVAL = 10;

export function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(
                (prevRemainingTime) => prevRemainingTime - SETTED_INTERVAL
            );
        }, SETTED_INTERVAL);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <progress id="question-time" max={timeout} value={remainingTime} className={mode} />;
}
