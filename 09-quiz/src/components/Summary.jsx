import quizCompleteImg from "../assets/quiz-complete.png";

export function Summary() {
    return (
        <div id="summary">
            <img src={quizCompleteImg} alt="quiz_complete.png" />
            <h1>QUIZ COMPLETED!</h1>
        </div>
    )
}