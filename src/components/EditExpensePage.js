import React from "react";
import { connect } from "react-redux";

import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

export const EditExpensePage = props => {
  function onSubmit(editedExpense) {
    props.editExpense(props.expense.id, editedExpense);
    props.history.push("/");
  }

  function onRemove() {
    props.removeExpense({ id: props.expense.id });
    props.history.push("/");
  }

  return (
    <div>
      <hr />
      <h3>Edit Expense</h3>
      <ExpenseForm expense={props.expense} onSubmit={onSubmit} />
      <button onClick={onRemove}>Remove Expense</button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});
const mapDispatchToProps = dispatch => ({
  editExpense: (id, editedExpense) => dispatch(editExpense(id, editedExpense)),
  removeExpense: id => dispatch(removeExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
