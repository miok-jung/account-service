import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Income from "./components/income/Income";
import IncomeEdit from "components/income/IncomeEdit";
import Expense from "components/expense/Expense";
import ExpressEdit from "components/expense/ExpressEdit";
import Upload from "components/Upload";
import Detail from "components/Detail";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
      {/* ANCHOR 수입 */}
      <Route path="/income" element={<Income title={"수입"} />} />
      <Route path={`/:url/upload`} element={<Upload title={"업로드"} />} />
      <Route path={`/:url/:postNum`} element={<Detail title={"더보기"} />} />
      <Route
        path="/income/edit/:postNum"
        element={<IncomeEdit title={"수입 수정하기"} />}
      />
      {/* ANCHOR 지출 */}
      <Route path="/expense" element={<Expense title={"지출"} />} />
      <Route
        path="/expense/edit/:postNum"
        element={<ExpressEdit title={"지출 수정하기"} />}
      />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default App;
