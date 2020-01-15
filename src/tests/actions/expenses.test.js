import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  // .toEqual iterates through object
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", { note: "whatever" });
  // .toEqual iterates through object
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updatedExpense: {
      note: "whatever"
    }
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Lup",
    note: "opala",
    amount: 2,
    createdAt: 132132132
  };
  const action = addExpense(expenseData);

  // since "id" changes each time expnse is generated, special jest function is used
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("should setup add expense action object without provided values", () => {
  const action = addExpense();

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
