import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <h1>
    404: Page not found! <Link to="/">Go home.</Link>
  </h1>
);

export default NotFoundPage;
