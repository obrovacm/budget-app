import React, { Component } from "react";
import { connect } from "react-redux";

import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortBy,
  setStartDate,
  setEndDate
} from "../actions/filters";

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({
      calendarFocused
    }));
  };

  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = e => {
    this.props.sortBy(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="search"
          defaultValue={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select
          defaultValue={this.props.filters.sortBy}
          onChange={this.onSortChange}
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

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: value => dispatch(setTextFilter(value)),
  sortBy: value => dispatch(sortBy(value)),
  setStartDate: value => dispatch(setStartDate(value)),
  setEndDate: value => dispatch(setEndDate(value))
});

//connect forwards "dispatch()" function with our props (first pair of brackets)
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
