import moment from "moment";

// test data
export default [
  {
    id: "1",
    description: "first",
    note: "",
    amount: 999999999,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  }, // 4 days before
  {
    id: "2",
    description: "second",
    note: "",
    amount: 200,
    createdAt: moment(0)
  },
  {
    id: "3",
    description: "third",
    note: "",
    amount: 4545,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  } // 4 days after
];
