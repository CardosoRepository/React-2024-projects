import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "show-cart",
    initialState: { showCart: true, cartItems: [] },
    reducers: {
        handleShowCart: (state) => {
            state.showCart = !state.showCart;
        },
        addItemToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.item.id
            );

            if (itemIndex === -1) {
                const newItem = {
                    ...action.payload.item,
                    quantity: 1,
                    total: action.payload.item.price,
                };
                state.cartItems.push(newItem);
                return;
            }

            state.cartItems[itemIndex].quantity += 1;
            state.cartItems[itemIndex].total =
                state.cartItems[itemIndex].price *
                state.cartItems[itemIndex].quantity;
        },
        removeItemFromCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.item.id
            );

            if (itemIndex === -1) {
                return;
            }

            if (state.cartItems[itemIndex].quantity === 1) {
                state.cartItems.splice(itemIndex, 1);
                return;
            }

            state.cartItems[itemIndex].quantity -= 1;
            state.cartItems[itemIndex].total =
                state.cartItems[itemIndex].price *
                state.cartItems[itemIndex].quantity;
        },
    },
});

export const { handleShowCart, addItemToCart, removeItemFromCart } =
    cartSlice.actions;
export default cartSlice.reducer;
