import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import DashboardPage from "../components/ExpenseDashboardPage";
import CreatePage from "../components/CreatePage";
import EditPage from "../components/EditPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/create" component={CreatePage} />
        <Route path="/edit/:id" component={EditPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
