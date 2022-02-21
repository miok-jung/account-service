import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Income from "./Income";
import Expense from "Expense";
import Login from "./Login";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <Main />} />
        <Route path="/income" component={() => <Income />} />
        <Route path="/expense" component={() => <Expense />} />
        <Route path="/login" component={() => <Login />} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
