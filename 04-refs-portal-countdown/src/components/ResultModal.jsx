import { forwardRef } from "react";

export const ResultModal = forwardRef(function ResultModal(
    { result, targetTime },
    ref
) {
    return (
        <dialog ref={ref} className="result-modal">
            <h2>You {result}</h2>
            <p>
                The target time was <strong>{targetTime}</strong> second
                {targetTime > 1 ? "s" : ""}.
            </p>
            <p>
                You stopped the timer with <strong>x seconds left.</strong>
            </p>
            <form action="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
});
