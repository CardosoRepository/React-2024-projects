import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { handleShowNotification } from "./store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import { Notification } from "./components/UI/Notification";

let isInitial = true;

function App() {
    const showCart = useSelector((state) => state.ui.showCart);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.ui.notification);

    useEffect(() => {
        async function sendCartData() {
            dispatch(
                handleShowNotification({
                    status: "pending",
                    title: "Sending...",
                    message: "Sending cart data!",
                })
            );
            const response = await fetch(
                "https://redux-cart-918a9-default-rtdb.firebaseio.com/cart.json",
                { method: "PUT", body: JSON.stringify(cart) }
            );

            if (!response.ok) {
                throw new Error("Sending cart data failed");
            }

            dispatch(
                handleShowNotification({
                    status: "success",
                    title: "Success!",
                    message: "Sent cart data successfully!",
                })
            );
        }

        if (isInitial) {
            isInitial = false;
            return;
        }

        sendCartData().catch((error) => {
            dispatch(
                handleShowNotification({
                    status: "error",
                    title: "Error!",
                    message: "Sending cart data failed!",
                })
            );
        });
    }, [cart, dispatch]);

    return (
        <>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export default App;
