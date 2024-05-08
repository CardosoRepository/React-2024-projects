import { Header } from "./components/Header";
import { Meals } from "./components/Meals";
import { CartContextProvider } from "./components/store/CartContext";
import { UserProgressContextProvider } from "./components/store/UserProgressContext";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";

export function App() {
    return (
        <CartContextProvider>
            <UserProgressContextProvider>
                <Header />
                <Meals />
                <Cart />
                <Checkout />
            </UserProgressContextProvider>
        </CartContextProvider>
    );
}
