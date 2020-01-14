import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? props.expense.amount.toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      submitMessage: ""
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({
        createdAt
      }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calendarFocused: focused
    }));
  };

  onSubmit = e => {
    e.preventDefault();
    let message;

    if (!this.state.description || !this.state.amount) {
      message = "Error: Please provide description and amount.";
    } else {
      message = "Expense added.";
      this.props.onSubmit({
        description: this.state.description,
        // converting string to float
        amount: parseFloat(this.state.amount, 10),
        // taking value in milliseconds (so it's possible to compare it)
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }

    this.setState(() => ({
      submitMessage: message
    }));
  };

  render() {
    return (
      <div>
        {!!this.state.submitMessage && <p>{this.state.submitMessage}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            firstDayOfWeek={1}
            isOutsideRange={() => false}
            hideKeyboardShortcutsPanel={true}
            displayFormat={"DD.MM.YYYY."}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button type="submit">Save Expense</button>
        </form>
      </div>
    );
  }
}
