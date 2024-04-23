import { useState } from "react";

export function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    function handleUserInput(inputIdentifier, newValue) {
        setUserInput((previousValue) => {
            return {
                ...previousValue,
                [inputIdentifier]: newValue,
            };
        });
        console.log(userInput);
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initialInvestment">
                        Initial Investment
                    </label>
                    <input
                        type="number"
                        id="initialInvestment"
                        onChange={(event) =>
                            handleUserInput(
                                "initialInvestment",
                                event.target.value
                            )
                        }
                        value={userInput.initialInvestment}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="annualInvestment">Annual Investment</label>
                    <input
                        type="number"
                        id="annualInvestment"
                        onChange={(event) =>
                            handleUserInput(
                                "annualInvestment",
                                event.target.value
                            )
                        }
                        value={userInput.annualInvestment}
                        required
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expectedReturn">Expected Return</label>
                    <input
                        type="number"
                        id="expectedReturn"
                        onChange={(event) =>
                            handleUserInput(
                                "expectedReturn",
                                event.target.value
                            )
                        }
                        value={userInput.expectedReturn}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="duration">duration</label>
                    <input
                        type="number"
                        id="duration"
                        onChange={(event) =>
                            handleUserInput("duration", event.target.value)
                        }
                        value={userInput.duration}
                        required
                    />
                </p>
            </div>
        </section>
    );
}
