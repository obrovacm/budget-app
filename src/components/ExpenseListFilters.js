import React, { Component } from "react";
import { connect } from "react-redux";

import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortBy,
  setStartDate,
  setEndDate
} from "../actions/filters";

class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({
      calendarFocused
    }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          defaultValue={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          defaultValue={this.props.filters.sortBy}
          onChange={e => {
            this.props.dispatch(sortBy(e.target.value));
          }}
        >
          {/* options' values has to be defined in ../selectors/expenses.js */}
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="starting-date"
          endDate={this.props.filters.endDate}
          endDateId="ending-date"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          firstDayOfWeek={1}
          isOutsideRange={() => false}
          showClearDates={true}
          hideKeyboardShortcutsPanel={true}
          displayFormat={"DD.MM.YYYY."}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

//connect forwards "dispatch()" function with our props (first pair of brackets)
export default connect(mapStateToProps)(ExpenseListFilters);
