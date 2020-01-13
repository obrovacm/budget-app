import React from "react";
import { connect } from "react-redux";

import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = props => (
  <div>
    <div>
      {props.expenses.map(expense => (
        <ExpenseListItem {...expense} key={expense.id} />
      ))}
    </div>
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
