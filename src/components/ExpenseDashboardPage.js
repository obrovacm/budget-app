import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashboardPage = () => (
  <div>
    <hr />
    <h3>Filter Expense List</h3>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);
export default ExpenseDashboardPage;
