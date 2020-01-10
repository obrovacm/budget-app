import { createStore, combineReducers } from "redux";

const demoState = {
  expenses: [
    {
      id: "as;ldfkj",
      description: "January rent",
      note: "You should pay that...",
      amount: 120,
      created: 0 //date
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
