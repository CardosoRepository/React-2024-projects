import logoImg from "../assets/logo.jpg"
export function Header({ meals, openCartModal }) {
    return (
        <div id="main-header">
            <div id="title">
                <img src={logoImg} alt="logo" />
                <h1>REACTFOOD</h1>
            </div>
            <nav>
                <button className="text-button" onClick={openCartModal}>Card ({meals.cartItems.length})</button>
            </nav>
        </div>
    );
}
