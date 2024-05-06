export function Mealitem({ meal, description, onSelectMeal }) {
    return (
        <li className="meal-item">
            <img src={`http://localhost:3000/${meal.image}`} alt="meal_img" />
            <h3>{meal.name}</h3>
            <p className="meal-item-price">{meal.price}</p>
            <p className="meal-item-description">{meal.description}</p>
            <div className="meal-item-actions">
                <button
                    className="button"
                    onClick={() =>
                        onSelectMeal({
                            id: meal.id,
                            name: meal.name,
                            price: meal.price,
                        })
                    }
                >
                    Add to Cart
                </button>
            </div>
        </li>
    );
}
