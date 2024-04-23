import { useState } from "react";

export function UserInput({userInput, onChangeUserInput}) {
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
                            onChangeUserInput(
                                "initialInvestment",
                                event.target.value
                            )
                        }
                        value={userInput.initialInvestment}
                        required
                        min={0}
                    />
                </p>
                <p>
                    <label htmlFor="annualInvestment">Annual Investment</label>
                    <input
                        type="number"
                        id="annualInvestment"
                        onChange={(event) =>
                            onChangeUserInput(
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
                            onChangeUserInput(
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
                            onChangeUserInput("duration", event.target.value)
                        }
                        value={userInput.duration}
                        required
                        min={1}
                    />
                </p>
            </div>
        </section>
    );
}
