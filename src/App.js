import Login from "./Login";
import Main from "./Main";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <Main />} />
        <Route path="/login" component={() => <Login />} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
