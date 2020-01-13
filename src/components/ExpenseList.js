import React from "react";
import { connect } from "react-redux";

const ExpenseList = props => (
  <div>
    <h3>Expense List</h3>
    <p>{props.expenses.length}</p>
    <p>{props.filters.text}</p>
  </div>
);

const mapStateProps = state => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

//higher order component
export default connect(mapStateProps)(ExpenseList);
