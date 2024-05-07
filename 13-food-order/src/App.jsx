import { Header } from "./components/Header";
import { Meals } from "./components/Meals";
import { useFetch } from "./hooks/useFetch";
import { fetchMeals } from "./utils/http";
import { CartContextProvider } from "./components/store/CartContext";
import { UserProgressContextProvider } from "./components/store/UserProgressContext";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";

export function App() {
    const {
        fetchedData: meals,
        isFetching: isFetchingMeals,
        error,
    } = useFetch(fetchMeals, []);

    return (
        <CartContextProvider>
            <UserProgressContextProvider>
                <Header />
                <Meals meals={meals} isLoading={isFetchingMeals} error={error} />
                <Cart />
                <Checkout />
            </UserProgressContextProvider>
        </CartContextProvider>
    );
}
