import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editExpense, removeExpense, history, wrapper;
let expense1 = expenses[0];

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expense1}
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
    />
  );
});

test("should render EditExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle editExpense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expense1);
  expect(history.push).toHaveBeenCalledWith("/");
  expect(editExpense).toHaveBeenCalledWith(expense1.id, expense1);
});

test("should handle removeExpense", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenCalledWith("/");
  expect(removeExpense).toHaveBeenCalledWith({ id: expense1.id });
});
