import { createStore } from "redux";

// Reducer rules:
// 1. Reducers must be pure functions (their return depends solely on the input values,
//    and they must not change any outside values)
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
  // next line is not necessary, since we're checking for values in action functions
  // const value = typeof action.value === "number" ? action.value : 1;
  const { type, value } = action;

  switch (type) {
    case "INCREMENT":
      return {
        count: state.count + value
      };
    case "DECREMENT":
      return {
        count: state.count - value
      };
    case "SET":
      return {
        count: value
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};
// Redux base function
const store = createStore(countReducer);

// store change listener
store.subscribe(() => {
  console.log(store.getState());
});

// ACTION - object that gets sent to the store
store.dispatch({
  type: "INCREMENT",
  value: 4
});
// dispatch - otpremi

// ACTION GENERATOR - function that return action object. They are used
// so we get a reff error when we misspell it's name + autocompletion

const incrementCount = (value = 1) => {
  store.dispatch({
    type: "INCREMENT",
    value
  });
};
incrementCount(9);

// Tutorial EXAMPLE (passing an object)
// const incrementCount = ({ value = 1 } = {}) => ({
//   type: "INCREMENT",
//   value
// });
// store.dispatch(incrementCount({ value: 9 }));

const decrementCount = (value = 1) => {
  store.dispatch({
    type: "DECREMENT",
    value
  });
};
const resetCount = () => {
  store.dispatch({
    type: "RESET",
    value: 0
  });
};
const setCount = (value = 1) => {
  store.dispatch({
    type: "SET",
    value
  });
};

decrementCount(7);
resetCount();
incrementCount();
setCount(7);
