import { createSlice, configureStore } from "@reduxjs/toolkit";

const INITIAL_STATE = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: "counter",
    initialState: INITIAL_STATE,
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
export const counterActions = counterSlice.actions;
export const store = configureStore({ reducer: counterSlice.reducer });

// export const store = configureStore({
//     reducer: { 
//         counter: counterSlice.reducer,
//         example: exampleSlice.reducer,
//         // ...
//     },
// });

// const counterReducer = (state = INITIAL_STATE, action) => {
//     if (action.type === "INCREMENT") {
//         // state.counter++ // NEVER MUTATE STATE DIRECTLY (except in slice reduxjs/toolkit)

//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === "INCREASE") {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === "DECREMENT") {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         };
//     }

//     if (action.type === "TOGGLE_COUNTER") {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter,
//         };
//     }

//     return state;
// };
