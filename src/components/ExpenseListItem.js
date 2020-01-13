import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({
  id,
  description,
  note,
  amount,
  createdAt,
  dispatch
}) => (
  <div className="expense-list-item">
    <hr />
    <h3>{description}</h3>
    <h5>${amount}</h5>
    <h5>date:{createdAt}</h5>
    <p>{note}</p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      remove
    </button>
  </div>
);

export default connect()(ExpenseListItem);
