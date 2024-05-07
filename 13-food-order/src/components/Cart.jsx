import { useContext } from "react";
import { Button } from "./UI/Button";
import { CartContext } from "./store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import { UserProgressContext } from "./store/UserProgressContext";
import { Modal } from "./UI/Modal";
import { CartItem } from "./CartItem";

export function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }

    function handleOpenCheckout() {
        userProgressCtx.showCheckout();
    }

    return (
        <Modal className="cart" open={userProgressCtx.progress === "cart"} onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}>
            <h2>Your Cart</h2>
            {cartCtx.items?.length === 0 ? (
                <p>Please select an item from the orderbook.</p>
            ) : (
                <>
                    <ul>
                        {cartCtx.items.map((item) => (
                            <CartItem
                                key={item.id}
                                name={item.name}
                                quantity={item.quantity}
                                price={item.price}
                                onIncrease={() => cartCtx.addItem(item)}
                                onDecrease={() => cartCtx.removeItem(item.id)}
                            />
                        ))}
                    </ul>
                    <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
                </>
            )}
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>
                    Close
                </Button>
                {cartCtx.items.length > 0 && (
                    <Button onClick={handleOpenCheckout}>Go to Checkout</Button>
                )}
            </p>
        </Modal>
    );
}
