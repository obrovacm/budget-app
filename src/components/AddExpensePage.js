import React from "react";
import { connect } from "react-redux";

import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

const AddExpensePage = props => (
  <div>
    <hr />
    <h3>Add Expense</h3>
    <ExpenseForm
      onSubmit={expense => {
        // dispatching expense outside of the form provides possibility
        // to reuse component for another function, such as editing expenses
        props.dispatch(addExpense(expense));
        // redirects user to home page and also resets the form
        // since it's component will dismount
        props.history.push("/");
        // this property is available only in components that ROUTER fires
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
