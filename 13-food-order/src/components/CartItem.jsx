export function CartItem({ item, onChangeItemAmount }) {
    return (
        <li className="cart-item">
            <p>{item.name} - {item.amount} x ${item.price}</p>
            <div className="cart-items-actions">
                <button onClick={() => onChangeItemAmount(item.id, -1)}>-</button>
                <span>{item.amount}</span>
                <button onClick={() => onChangeItemAmount(item.id, 1)}>+</button>
            </div>
        </li>
    )
}