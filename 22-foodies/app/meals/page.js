import Link from "next/link";

export default function MealsPage() {
    return (
        <main>
            <h1>Meals Page</h1>
            <p>
                <Link href="/meals/share">Share</Link>
            </p>
            <p>
                <Link href="/meals/slug-1">Slug 1</Link>
            </p>
            <p>
                <Link href="/meals/slug-2">Slug 2</Link>
            </p>
        </main>
    )
}