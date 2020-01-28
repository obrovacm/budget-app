import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

const ExpenseDashboardPage = () => (
  <div>
    <hr />
    <h3>Filter Expense List</h3>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);
export default ExpenseDashboardPage;
