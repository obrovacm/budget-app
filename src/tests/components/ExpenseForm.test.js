import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test("should render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render error message for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  // prevents typeError of 'e' (now undefined event, whose default
  // behavior of refreshing page we want to prevent)
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("submitMessage")).toMatch(/^Error*/);
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
  const value = "New description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(0) //taking first input in a form (which is the description input)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("description")).toBe(value);
});

test("should set note on text area change", () => {
  const value = "this string changes note";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", {
    target: { value }
  });
  expect(wrapper.state("note")).toBe(value);
});

test("should set amount if valid input", () => {
  const value = "12.51";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("amount")).toBe(value);
});

test("should not set amount if invalid input", () => {
  const value = "12.511"; // only 2 decimal places are allowed
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value }
    });
  expect(wrapper.state("amount")).toBe("");
});

test("should call onSubmit prop for valid form submission", () => {
  const onSubmitSpy = jest.fn(); // testing spy
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("submitMessage")).toBe("Expense added.");
  expect(onSubmitSpy).toHaveBeenCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
  // onSubmitSpy("argument 1");
  // expect(onSubmitSpy).toHaveBeenCalledWith("argument 1");
});

test("should set new date on date change", () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  // wrapper.find("SingleDatePicker").prop("onDateChange")(now);
  // isn't working, console.log(wrapper.find("SingleDatePicker").debug());
  // return empty object, but this works:
  // console.log(wrapper.find("withStyles(SingleDatePicker)").debug());
  // this html tag name can be found by calling wrapper with .debug():
  // console.log(wrapper.debug()); OR checking snapshots
  wrapper.find("withStyles(SingleDatePicker)").prop("onDateChange")(now);
  expect(wrapper.state("createdAt")).toEqual(now);
});

test("should change state.calendarFocused to true when calendar is focused", () => {
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")({
    focused
  });
  expect(wrapper.state("calendarFocused")).toEqual(focused);
});
