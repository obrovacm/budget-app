import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const a = () => <h1>pocetana strana</h1>;
const a2 = () => <h1>create strana</h1>;
const a3 = () => <h1>edit strana</h1>;
const a4 = () => <h1>help strana</h1>;

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" component={a} exact={true} />
          <Route path="/create" component={a2} />
          <Route path="/edit" component={a3} />
          <Route path="/help" component={a4} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
