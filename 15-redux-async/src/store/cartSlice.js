import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "show-cart",
    initialState: { cartItems: [] },
    reducers: {
        addItemToCart: (state, action) => {
            const newItem = action.payload.item;
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );

            if (!existingItem) {
                state.cartItems.push({
                    ...newItem,
                    quantity: 1,
                    total: newItem.price,
                });
                return;
            }

            existingItem.quantity++;
            existingItem.total = existingItem.price * existingItem.quantity;
        },
        removeItemFromCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.item.id
            );

            if (itemIndex === -1) {
                return;
            }

            const existingItem = state.cartItems[itemIndex];
            if (existingItem.quantity === 1) {
                state.cartItems.splice(itemIndex, 1);
                return;
            }

            existingItem.quantity--;
            existingItem.total = existingItem.price * existingItem.quantity;
        },
    },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
