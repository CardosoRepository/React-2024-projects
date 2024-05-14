import { createSlice, configureStore } from "@reduxjs/toolkit";

//************** COUNTER STATE **************
const INITIAL_COUNTER_STATE = { counter: 0, showCounter: true };
const counterSlice = createSlice({
    name: "counter",
    initialState: INITIAL_COUNTER_STATE,
    reducers: {
        increment(state) {
            state.counter++;
        },
        increase(state, action) {
            state.counter += action.payload.amount;
        },
        decrement(state) {
            state.counter--;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});
//----------------------------------------------------------------

//************** AUTH STATE **************
const INITIAL_AUTH_STATE = { isAuthenticated: false };
const authSlice = createSlice({
    name: "authentication",
    initialState: INITIAL_AUTH_STATE,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});
//----------------------------------------------------------------

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export const store = configureStore({ 
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    }
});
