import moment from "moment";
import selectExpenses from "../../selectors/expenses";

const expenses = [
  {
    id: "1",
    description: "first",
    note: "",
    amount: 999999999,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  }, // 4 days before
  {
    id: "2",
    description: "second",
    note: "",
    amount: 200,
    createdAt: moment(0)
  },
  {
    id: "3",
    description: "third",
    note: "",
    amount: 4545,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  } // 4 days after
];

test("should filter by text value", () => {
  const filters = {
    text: "t",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  // expenses' positions are important, as sorting (by date) is applied
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test("should filter by endDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0)
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0]]);
});

test("should filter only by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});

test("should filter only by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[2], expenses[1]]);
});
