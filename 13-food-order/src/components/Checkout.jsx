export function Checkout({ sumAll }) {
    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount: ${sumAll.toFixed(2)}</p>
            <div className="control-row">
                <div className="control">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" name="fullName" required />
                </div>
            </div>

            <div className="control-row">
                <div className="control">
                    <label htmlFor="email">E-mail Address</label>
                    <input type="email" id="email" name="email" required />
                </div>
            </div>

            <div className="control-row">
                <div className="control">
                    <label htmlFor="fullName">Street</label>
                    <input type="text" id="fullName" name="fullName" required />
                </div>
            </div>

            <div className="control-row">
                <div className="control">
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                        type="number"
                        id="postalCode"
                        name="postalCode"
                        required
                    />
                </div>
                <div className="control">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" required />
                </div>
            </div>
        </form>
    );
}
