import React from "react";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";

//obrisati
import { addExpense } from "./actions/expenses";

const store = configureStore();

// Subscription       (runs each time state is changed)
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  // test logs
  console.log("store subscription: visibleExpenses:", visibleExpenses);
  console.log("store subscription: state.filters:", state.filters);
});

// ============================= test data
store.dispatch(
  addExpense({
    description: "Water bill",
    note: "wash wash",
    amount: 200,
    createdAt: 1000
  })
);
store.dispatch(
  addExpense({
    description: "Heating bill",
    note: "it's pretty cold out there",
    amount: 1000,
    createdAt: 2000
  })
);
store.dispatch(
  addExpense({
    description: "Rent",
    note: "",
    amount: 32000,
    createdAt: -2000
  })
);
//===============================

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};

export default App;
