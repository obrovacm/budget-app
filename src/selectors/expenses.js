// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= startDate;
      const textMatchNote =
        typeof text !== "string" ||
        expense.note.toLowerCase().includes(text.toLowerCase());
      const textMatchDescription =
        typeof text !== "string" ||
        expense.description.toLowerCase().includes(text.toLowerCase());

      return (
        startDateMatch &&
        endDateMatch &&
        (textMatchNote || textMatchDescription)
      );
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
