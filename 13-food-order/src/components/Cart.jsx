import { CartItem } from "./CartItem";

export function Cart({ items, onChangeItemAmount }) {
    return (
        <div>
            <h2>Your Cart</h2>
            {items.cartItems?.length === 0 ? (
                <p>Please select an item from the orderbook.</p>
            ) : (
                <ul>
                    {items.cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onChangeItemAmount={onChangeItemAmount}
                        />
                    ))}
                </ul>
            )}
            {items.sumAll > 0 && (
                <span className="cart-total">${items.sumAll.toFixed(2)}</span>
            )}
        </div>
    );
}
