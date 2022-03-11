import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Income from "./Income";
import Expense from "Expense";
import Login from "./Login";
import Input from "./Input";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <Main />} />
        <Route path="/input" component={() => <Input title={"입력/수정"} />} />
        <Route path="/income" component={() => <Income title={"수입"} />} />
        <Route path="/expense" component={() => <Expense title={"지출"} />} />
        <Route path="/login" component={() => <Login />} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
