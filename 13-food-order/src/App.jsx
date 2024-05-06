import { useCallback, useMemo, useState } from "react";
import { Header } from "./components/Header";
import { Meals } from "./components/Meals";
import { useFetch } from "./hooks/useFetch";
import { fetchMeals } from "./utils/http";
import { Modal } from "./components/Modal";
import { SuccessModalContent } from "./components/SuccessModalContent";
import { Cart } from "./components/Cart";

const initialModalState = {
    success: false,
    cart: false,
    checkout: false,
};

export function App() {
    const [cartItems, setCartItems] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(initialModalState);
    const {
        fetchedData: meals,
        isFetching: isFetchingMeals,
        error,
    } = useFetch(fetchMeals, []);

    function handleSelectMeal(selectedMeal) {
        setCartItems((prevCartItems) => {
            const cartIndex = prevCartItems.findIndex(
                (cartItem) => cartItem.id === selectedMeal.id
            );

            if (cartIndex !== -1) {
                prevCartItems[cartIndex].amount += 1;
                return prevCartItems;
            }

            const newCartItem = {
                ...selectedMeal,
                amount: 1,
            };

            return [newCartItem, ...prevCartItems];
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
            const updatedCart = [...prevState];
            const itemIndex = prevState.findIndex((item) => item.id === itemId);

            if (itemIndex === -1) {
                return prevState;
            }

            updatedCart[itemIndex].amount += amount;

            if (updatedCart[itemIndex].amount <= 0) {
                updatedCart.splice(itemIndex, 1);
            }

            return updatedCart;
        });
    }

    return (
        <>
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
                <p>Form content</p>
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
