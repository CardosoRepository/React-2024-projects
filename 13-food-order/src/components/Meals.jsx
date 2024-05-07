import { Mealitem } from "./Mealitem";

export function Meals({ meals, isLoading, error }) {
    return (
        <section>
            {error && <p className="text-center">{error.message}</p>}
            {!error && isLoading && (
                <p className="text-center">Fetching meals...</p>
            )}
            {!error && !isLoading && meals.length === 0 && (
                <p>There is no meal available.</p>
            )}
            {!error && !isLoading && meals.length > 0 && (
                <ul id="meals">
                    {meals.map((meal) => (
                        <Mealitem
                            key={meal.id}
                            meal={meal}
                        />
                    ))}
                </ul>
            )}
        </section>
    );
}
