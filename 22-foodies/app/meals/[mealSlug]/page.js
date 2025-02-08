export default function MealsDetailPage({ params }) {
    return (
        <main>
            <h1>Meals Details Page</h1>
            <p>{params.mealSlug}</p>
        </main>
    )
}