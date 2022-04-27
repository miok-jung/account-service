import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Income from "./components/income/Income";
import Expense from "components/expense/Expense";
// import Transfer from "components/transfer/Transfer";
import Upload from "components/Upload";
import Detail from "components/Detail";
import Edit from "components/Edit";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/income" element={<Income title={"수입"} />} />
      <Route path="/expense" element={<Expense title={"지출"} />} />
      {/* <Route path="/transfer" element={<Transfer title={"이체"} />} /> */}
      {/* ANCHOR 공통 페이지 */}
      <Route path={`/:url/upload`} element={<Upload title={"업로드"} />} />
      <Route path={`/:url/:postNum`} element={<Detail title={"더보기"} />} />
      <Route
        path={`/:url/edit/:postNum`}
        element={<Edit title={"수정하기"} />}
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default App;
