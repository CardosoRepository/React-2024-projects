import { useCallback, useMemo, useState } from "react";
import { Header } from "./components/Header";
import { Meals } from "./components/Meals";
import { useFetch } from "./hooks/useFetch";
import { fetchMeals } from "./utils/http";
import { Modal } from "./components/Modal";
import { SuccessModalContent } from "./components/SuccessModalContent";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";

const initialModalState = {
    success: false,
    cart: false,
    checkout: false,
};

export function App() {
    const [cartItems, setCartItems] = useState({ cartItems: [], sumAll: 0 });
    const [modalIsOpen, setModalIsOpen] = useState(initialModalState);
    const {
        fetchedData: meals,
        isFetching: isFetchingMeals,
        error,
    } = useFetch(fetchMeals, []);

    function handleSelectMeal(selectedMeal) {
        setCartItems((prevCartItems) => {
            const cartIndex = prevCartItems.cartItems.findIndex(
                (cartItem) => cartItem.id === selectedMeal.id
            );

            if (cartIndex !== -1) {
                const updatedCartItems = [...prevCartItems.cartItems];

                updatedCartItems[cartIndex] = {
                    ...updatedCartItems[cartIndex],
                    amount: updatedCartItems[cartIndex].amount + 1,
                };

                return { ...prevCartItems, cartItems: updatedCartItems };
            }

            const newCartItem = {
                ...selectedMeal,
                amount: 1,
            };

            return {
                sumAll: [...prevCartItems.cartItems, newCartItem].reduce(
                    (acc, crtValue) => acc + crtValue.price * crtValue.amount,
                    0
                ),
                cartItems: [...prevCartItems.cartItems, newCartItem],
            };
        });
    }

    function handleModalOpen(identifier, state) {
        setModalIsOpen(initialModalState);

        state &&
            setModalIsOpen((prevState) => {
                return {
                    ...prevState,
                    [identifier]: true,
                };
            });
    }

    function handleChangeItemAmount(itemId, amount) {
        setCartItems((prevState) => {
            const updatedCart = [...prevState.cartItems];
            const itemIndex = prevState.cartItems.findIndex((item) => item.id === itemId);

            if (itemIndex === -1) {
                return prevState;
            }

            updatedCart[itemIndex].amount += amount;

            if (updatedCart[itemIndex].amount <= 0) {
                updatedCart.splice(itemIndex, 1);
            }

            const sumAll = updatedCart?.reduce(
                (acc, crtValue) => acc + crtValue.price * crtValue.amount,
                0
            );

            return { cartItems: [...updatedCart], sumAll };
        });
    }

    return (
        <>
            <button onClick={() => console.log(cartItems)}>Show</button>
            <Modal
                open={modalIsOpen.cart}
                onClose={() => handleModalOpen("cart", false)}
                onSubmit={() => handleModalOpen("checkout", true)}
                onSubmitText="Go to Checkout"
            >
                <Cart
                    items={cartItems}
                    onChangeItemAmount={handleChangeItemAmount}
                />
            </Modal>
            <Modal
                open={modalIsOpen.checkout}
                onClose={() => handleModalOpen("checkout", false)}
                onSubmit={() => handleModalOpen("success", true)}
                onSubmitText="Submit Order"
            >
                <Checkout sumAll={cartItems.sumAll}/>
            </Modal>
            <Modal
                open={modalIsOpen.success}
                onClose={() => handleModalOpen("success", false)}
            >
                <SuccessModalContent />
            </Modal>
            <Header
                meals={cartItems}
                openCartModal={() => handleModalOpen("cart", true)}
            />
            <main>
                <Meals
                    meals={meals}
                    isLoading={isFetchingMeals}
                    error={error}
                    onSelectMeal={handleSelectMeal}
                />
            </main>
        </>
    );
}
