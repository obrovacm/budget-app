import React from "react";
import { connect } from "react-redux";

import selectExpenses from "../selectors/expenses";
import expensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = props => (
  <div className="expenses-summary">
    {props.listLength === 0 ? (
      <p>The list is empty.</p>
    ) : (
      <p>
        Viewing {props.listLength} expense{props.listLength > 1 && "s "}{" "}
        totalling ${props.amount.toFixed(2)}
      </p>
    )}
  </div>
);

const mapStateToProps = state => {
  const filteredExpenses = selectExpenses(state.expenses, state.filters);
  return {
    amount: expensesTotal(filteredExpenses),
    listLength: filteredExpenses.length
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
