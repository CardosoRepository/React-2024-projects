import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import { Button } from "./UI/Button";
import { CartContext } from "./store/CartContext";
import { UserProgressContext } from "./store/UserProgressContext";

export function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return item.quantity + totalNumberOfItems;
    }, 0);

    function handleShowCart() {
        userProgressCtx.showCart();
    }

    return (
        <div id="main-header">
            <div id="title">
                <img src={logoImg} alt="logo" />
                <h1>REACTFOOD</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>
                    Card ({totalCartItems})
                </Button>
            </nav>
        </div>
    );
}
