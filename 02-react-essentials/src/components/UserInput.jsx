export function UserInput() {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initialInvestment">Initial Investment</label>
                    <input type="number" id="initialInvestment" required />
                </p>
                <p>
                    <label htmlFor="annualInvestment">Annual Investment</label>
                    <input type="number" id="annualInvestment" required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expectedReturn">Expected Return</label>
                    <input type="number" id="expectedReturn" required />
                </p>
                <p>
                    <label htmlFor="duration">duration</label>
                    <input type="number" id="duration" required />
                </p>
            </div>
        </section>
    )
}