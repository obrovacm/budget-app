import React from "react";
import { connect } from "react-redux";

import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses"; // Get visible/filtered expenses

const ExpenseList = props => (
  <div className="expense-list">
    {props.expenses.map(expense => (
      <ExpenseListItem {...expense} key={expense.id} />
    ))}
  </div>
);
// {...expense} spreads an object as props

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

//higher order component
export default connect(mapStateToProps)(ExpenseList);
