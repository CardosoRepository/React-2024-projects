import logoImg from "../assets/logo.jpg"
import { Button } from "./UI/Button";
export function Header({ meals, openCartModal }) {
    return (
        <div id="main-header">
            <div id="title">
                <img src={logoImg} alt="logo" />
                <h1>REACTFOOD</h1>
            </div>
            <nav>
                <Button textOnly onClick={openCartModal}>Card ({meals.cartItems.length})</Button>
            </nav>
        </div>
    );
}
