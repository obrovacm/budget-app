import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = {
    id: "-1",
    description: "",
    note: "",
    amount: 999,
    createdAt: 1
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
  const updatedDescription = "first updated";
  const updatedExpense = {
    description: updatedDescription
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updatedExpense
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe(updatedDescription);
});

test("should not edit if id doesn't exist", () => {
  const updatedExpense = {
    description: "updated"
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updatedExpense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
