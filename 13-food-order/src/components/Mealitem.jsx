export function Mealitem() {
    return (
        <li className="meal-item">
            <img src="images/mac-and-cheese.jpg" alt="meal_img" />
            <h3>Mac & Cheese</h3>
            <p className="meal-item-price">$8.99</p>
            <p className="meal-item-description">
                Creamy cheddar cheese mixed with...
            </p>
            <div className="meal-item-actions">
                <button>Add to Cart</button>
            </div>
        </li>
    )
}