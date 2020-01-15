import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  // .toEqual iterates through object
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    it: "123"
  });
});

// test("should setup edit expense action object", () => {
//   const action = removeExpense({ id: "123abc" });
//   // .toEqual iterates through object
//   expect(action).toEqual({
//     type: "REMOVE_EXPENSE",
//     it: "123"
//   });
// });
