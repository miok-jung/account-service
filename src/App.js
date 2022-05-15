import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
// NOTE USER
import Login from './components/User/Login';
import Register from 'components/User/Register';
// NOTE PAGES
import Income from './components/income/Income';
import Expense from 'components/expense/Expense';
// import Transfer from "components/transfer/Transfer";
import Upload from 'components/Upload';
import Detail from 'components/Detail';
import Edit from 'components/Edit';

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/income" element={<Income />} />
      <Route path="/expense" element={<Expense />} />
      {/* <Route path="/transfer" element={<Transfer  />} /> */}
      {/* ANCHOR 공통 페이지 */}
      <Route path={`/:url/upload`} element={<Upload />} />
      <Route path={`/:url/:postNum`} element={<Detail />} />
      <Route path={`/:url/edit/:postNum`} element={<Edit />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
export default App;
