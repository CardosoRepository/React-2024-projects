import { createStore } from "redux";

const INITIAL_STATE = { counter: 0, showCounter: true };

const counterReducer = (state = INITIAL_STATE, action) => {
    if (action.type === "INCREMENT") {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        };
    }

    if (action.type === "INCREASE") {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        };
    }

    if (action.type === "DECREMENT") {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        };
    }

    if (action.type === "TOGGLE_COUNTER") {
        return {
            showCounter: !state.showCounter,
            counter: state.counter,
        };
    }

    return state;
};

export const store = createStore(counterReducer);
