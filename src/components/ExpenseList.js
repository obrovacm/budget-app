import React from "react";
import { connect } from "react-redux";

import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses"; // Get visible/filtered expenses

// export without default is used for testing
export const ExpenseList = props => (
  <div className="expense-list">
    {props.expenses.length === 0 ? (
      <p>The list is empty.</p>
    ) : (
      props.expenses.map(expense => (
        <ExpenseListItem {...expense} key={expense.id} />
      ))
    )}
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
