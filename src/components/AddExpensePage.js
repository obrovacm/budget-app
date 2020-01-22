import React from "react";
import { connect } from "react-redux";

import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

export const AddExpensePage = props => {
  function onSubmit(expense) {
    // // dispatching expense outside of the form provides possibility
    // // to reuse component for another purpose, such as editing expenses
    // props.dispatch(addExpense(expense));

    // since the above function is difficult to test, we used mapDispatchToProps property
    props.addExpense(expense);
    // redirects user to home page and also resets the form
    // since it's component will dismount
    props.history.push("/");
    // this property is available only in components that ROUTER fires
  }

  return (
    <div>
      <hr />
      <h3>Add Expense</h3>
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addExpense: expense => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
// mapStateToProps is a first argument in a connect function
// map DispatchToProps is a second argument
