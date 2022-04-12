import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Income from "./Income";
import Expense from "Expense";
import Login from "./Login";
import Upload from "./Upload";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/upload" element={<Upload title={"입력/수정"} />} />
      <Route path="/income" element={<Income title={"수입"} />} />
      <Route path="/expense" element={<Expense title={"지출"} />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default App;
