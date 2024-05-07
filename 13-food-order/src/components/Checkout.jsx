import { useContext } from "react";
import { Modal } from "./UI/Modal";
import { CartContext } from "./store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import { Input } from "./UI/Input";
import { UserProgressContext } from "./store/UserProgressContext";
import { Button } from "./UI/Button";
import { sendOrders } from "../utils/http";

export function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    function handleCloseCheckout() {
        userProgressCtx.hideCheckout();
    }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const customerData = Object.fromEntries(formData.entries());

        sendOrders(cartCtx.items, customerData);
    }

    return (
        <Modal open={userProgressCtx.progress === "checkout"} onClose={handleCloseCheckout}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

                <Input id="name" type="text" label="Full Name" />
                <Input id="email" type="email" label="E-mail Address" />
                <Input id="street" type="text" label="Street" />

                <div className="control-row">
                    <Input id="postal-code" type="text" label="Postal Code" />
                    <Input id="city" type="text" label="City" />
                </div>

                <p className="modal-actions">
                    <Button
                        type="button"
                        textOnly
                        onClick={handleCloseCheckout}
                    >
                        Close
                    </Button>
                    <Button>Submit Order</Button>
                </p>
            </form>
        </Modal>
    );
}
