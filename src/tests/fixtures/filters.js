import moment from "moment";

const filters = {
  text: "",
  sortBy: "date",
  sortDate: undefined,
  endDate: undefined
};

const altFilters = {
  text: "ALTernative filters' text",
  sortBy: "amount",
  startDate: moment(0),
  endDate: moment(0).add(3, "days")
};

export { filters, altFilters };
