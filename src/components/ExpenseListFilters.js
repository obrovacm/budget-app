import React from "react";
import { connect } from "react-redux";

import { setTextFilter, sortBy } from "../actions/filters";

const ExpenseListFilters = props => (
  <div>
    <input
      type="text"
      defaultValue={props.filters.text}
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      defaultValue={props.filters.sortBy}
      onChange={e => {
        props.dispatch(sortBy(e.target.value));
      }}
    >
      {/* options' values has to be defined in ../selectors/expenses.js */}
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

//connect forwards "dispatch()" function with our props (first pair of brackets)
export default connect(mapStateToProps)(ExpenseListFilters);
