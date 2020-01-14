import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => (
  <div className="expense-list-item">
    <hr />
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <h5>
      ${amount} - {createdAt}
    </h5>
    <p>{note}</p>
  </div>
);

export default ExpenseListItem;
