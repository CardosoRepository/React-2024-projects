import { ProgressBar } from "./ProgressBar";

export function Quiz() {
    return (
        <div id="quiz">
            <ProgressBar />
            <h1>Question</h1>
            <ul>
                <li>Opção A</li>
                <li>Opção B</li>
                <li>Opção C</li>
                <li>Opção D</li>
            </ul>
        </div>
    )
}