export function Header({ meals, openCartModal }) {
    return (
        <div id="main-header">
            <div id="title">
                <img src="logo.jpg" alt="logo" />
                <h1>REACTFOOD</h1>
            </div>
            <button className="text-button" onClick={openCartModal}>Card ({meals.cartItems.length})</button>
        </div>
    );
}
