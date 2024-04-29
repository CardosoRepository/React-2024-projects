import { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import QUESTIONS from "../questions";

export function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    function handleSelectionAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }

    return (
        <div id="quiz">
            <div id="question">
                {/* <ProgressBar /> */}
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {QUESTIONS[activeQuestionIndex].answers.map((answer) => {
                        return (
                            <li key={answer} className="answer">
                                <button
                                    onClick={() =>
                                        handleSelectionAnswer(answer)
                                    }
                                >
                                    {answer}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
