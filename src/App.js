import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Income from "./components/income/Income";
import Expense from "components/expense/Expense";
import Login from "./Login";
import IncomeUpload from "components/income/IncomeUpload";
import ExpenseUpload from "./components/expense/ExpenseUpload";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route
        path="/income"
        element={<Income title={"수입"} pathname={"/income"} />}
      />
      <Route
        path="/income/upload"
        element={<IncomeUpload title={"수입 입력"} />}
      />
      <Route
        path="/expense"
        element={<Expense title={"지출"} pathname={"/expense"} />}
      />
      <Route
        path="/expense/upload"
        element={<ExpenseUpload title={"지출 입력"} />}
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default App;
