import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import expensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = ({ totalAmount, expensesCount }) => {
  const expenseWord = expensesCount === 1 ? "expense" : "expenses";
  const formatedTotalAmount = numeral(totalAmount).format("$0,0.00");

  return (
    <div className="expenses-summary">
      <p>
        {expensesCount === 0
          ? `The list is empty.`
          : `Viewing ${expensesCount} ${expenseWord} totalling ${formatedTotalAmount}`}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  const filteredExpenses = selectExpenses(state.expenses, state.filters);
  return {
    totalAmount: expensesTotal(filteredExpenses),
    expensesCount: filteredExpenses.length
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
