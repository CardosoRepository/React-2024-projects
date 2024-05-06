import { CartItem } from "./CartItem";

export function Cart({ items, onChangeItemAmount }) {
    return (
        <div>
            <h2>Your Cart</h2>
            {items?.length === 0 ? (
                <p>Please select an item from the orderbook.</p>
            ) : (
                <ul>
                    {items.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onChangeItemAmount={onChangeItemAmount}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}
