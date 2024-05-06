import { CartItem } from "./CartItem";

export function Cart({ items }) {
    return (
        <div>
            <h2>Your Cart</h2>
            <ul>
                <CartItem item={1}/>
                <CartItem item={2}/>
                <CartItem item={3}/>
                <CartItem item={4}/>
            </ul>
        </div>
    )
}