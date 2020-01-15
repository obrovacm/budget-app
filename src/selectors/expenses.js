import moment from "moment";

// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const createdMoment = moment(expense.createdAt);

      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdMoment, "day")
        : true;

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
      }
      // else if (sortBy === "amount") {
      //   return a.amount < b.amount ? 1 : -1;
      // }

      // this way there's no 'default' return warning
      return a.amount < b.amount ? 1 : -1;
    });
};
