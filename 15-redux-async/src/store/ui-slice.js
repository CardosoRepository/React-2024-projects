import { createSlice } from "@reduxjs/toolkit";

export const ui = createSlice({
    name: "ui",
    initialState: { showCart: true },
    reducers: {
        handleShowCart: (state) => {
            state.showCart = !state.showCart;
        },
    },
});

export const { handleShowCart } = ui.actions;
export default ui.reducer;
