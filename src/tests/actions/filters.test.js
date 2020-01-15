import moment from "moment";
import {
  setStartDate,
  setEndDate,
  sortBy,
  setTextFilter
} from "../../actions/filters";

test("should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    date: moment(0)
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    date: moment(0)
  });
});

test("should generate 'sort by' action object", () => {
  const action = sortBy("date");
  expect(action).toEqual({
    type: "SORT_BY",
    sortBy: "date"
  });
});

test("should generate 'set text filter' action object with text value", () => {
  const text = "something";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});

test("should generate 'set text filter' action object without text value", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});
