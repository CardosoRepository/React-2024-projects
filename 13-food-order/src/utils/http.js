export async function fetchMeals() {
    const response = await fetch("http://localhost:3000/meals");
    const resData = await response.json();

    if (!response.ok) {
        throw new Error("Failed to fetch meals");
    }

    return resData;
}

export async function sendOrders(cartItems, orders) {
    const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            order: {
                items: cartItems,
                customer: orders
            }
        })
    });
    const resData = await response.json();

    if (!response.ok) {
        throw new Error("Failed to fetch meals");
    }

    return resData;
}
