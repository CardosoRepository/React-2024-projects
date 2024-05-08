import { useContext } from "react";
import { Modal } from "./UI/Modal";
import { CartContext } from "./store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import { Input } from "./UI/Input";
import { UserProgressContext } from "./store/UserProgressContext";
import { Button } from "./UI/Button";
import { useHttp } from "../hooks/useHttp";
import { Error } from "./Error";
import { SuccessModalContent } from "./SuccessModalContent";

const requestConfig = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
};
export function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    const { data, isLoading, error, sendRequest, clearData } = useHttp(
        "http://localhost:3000/orders",
        requestConfig
    );

    function handleCloseCheckout() {
        userProgressCtx.hideCheckout();
    }
    function handleFinishCheckout() {
        userProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
    }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const customerData = Object.fromEntries(formData.entries());

        sendRequest(
            JSON.stringify({
                order: {
                    items: cartCtx.items,
                    customer: customerData,
                },
            })
        );
    }

    if (data && !error) {
        return (
            <Modal
                open={userProgressCtx.progress === "checkout"}
                onClose={handleFinishCheckout}
            >
                <SuccessModalContent handleClose={handleFinishCheckout} />
            </Modal>
        );
    }

    return (
        <Modal
            open={userProgressCtx.progress === "checkout"}
            onClose={handleCloseCheckout}
        >
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

                {error && (
                    <Error title="Failed to submit order" message={error} />
                )}

                <p className="modal-actions">
                    {isLoading ? (
                        <span>Sending order data...</span>
                    ) : (
                        <>
                            <Button
                                type="button"
                                textOnly
                                onClick={handleCloseCheckout}
                            >
                                Close
                            </Button>
                            <Button>Submit Order</Button>
                        </>
                    )}
                </p>
            </form>
        </Modal>
    );
}
