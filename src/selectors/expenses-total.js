export default expenses => {
  if (expenses.length === 0) {
    return 0;
  } else {
    return expenses.reduce((sum, expense) => (sum += expense.amount), 0);
  }
};
