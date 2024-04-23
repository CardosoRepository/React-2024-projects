import { useState } from "react";
import { Header } from "./components/Header";
import { Results } from "./components/Results";
import { UserInput } from "./components/UserInput";

export function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 15000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const inputIsValid = userInput.duration >= 1;

    function handleUserInput(inputIdentifier, newValue) {
        setUserInput((previousValue) => {
            return {
                ...previousValue,
                [inputIdentifier]: +newValue,
            };
        });
    }

    return (
        <>
            <Header />
            <UserInput
                userInput={userInput}
                onChangeUserInput={handleUserInput}
            />
            {inputIsValid ? (
                <Results userInput={userInput} />
            ) : (
                <p className="center">
                    Please enter a duration greater than zero.
                </p>
            )}
        </>
    );
}
