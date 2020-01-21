import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" }); // @@INIT is just an initial (default setup) value
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sortBy to amount", () => {
  const state = filtersReducer(undefined, {
    type: "SORT_BY",
    sortBy: "amount"
  });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  };
  const action = {
    type: "SORT_BY",
    sortBy: "date"
  };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const text = "something";
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text
  });
  expect(state.text).toBe(text);
});

test("should set startDate filter", () => {
  const date = 2;
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    date
  });
  expect(state.startDate).toBe(date);
});

test("should set endDate filter", () => {
  const date = 3;
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    date
  });
  expect(state.endDate).toBe(date);
});
