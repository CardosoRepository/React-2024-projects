import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import uiReducer from "./ui-slice";

export default configureStore({
    reducer: {
        cart: cartReducer,
        ui: uiReducer
    },
});
