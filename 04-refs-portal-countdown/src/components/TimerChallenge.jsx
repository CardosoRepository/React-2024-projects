import { useRef, useState } from "react";
import { ResultModal } from "./ResultModal";

export function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const timer = useRef()
    const dialog = useRef();

    function handleStart() {
        setTimerStarted(true);
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.open();
        }, targetTime * 1000);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }

    return (
        <>
            <ResultModal ref={dialog} result="lost" targetTime={1} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} seconds{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timerStarted ? "active" : undefined}>
                    {timerStarted ? "Time is running" : "Timer inactive"}
                </p>
            </section>
        </>
    );
}
