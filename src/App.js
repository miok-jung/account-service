import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from 'hoc/auth';
import LandingPage from './components/LandingPage';
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
  // NOTE Auth(ComponentName, null) : 누구나 접근 가능
  // Auth(ComponentName, true) : 로그인한 유저만 출입가능
  // Auth(ComponentName, false) : 로그인한 유저는 출입불가
  // Auth(ComponentName, true, true) : 로그인한 isAdmin이 true인 사람만 출입가능
  // 즉 어드민 유저만 입장을 원할땐, true, true값을 넣는다.
  return (
    <Routes>
      <Route path="/" exact element={Auth(LandingPage, null)} />
      <Route path="/income" element={Auth(Income, true)} />
      <Route path="/expense" element={Auth(Expense, true)} />
      {/* <Route path="/transfer" element={<Transfer  />} /> */}
      {/* ANCHOR 공통 페이지 */}
      <Route path={`/:url/upload`} element={Auth(Upload, true)} />
      <Route path={`/:url/:postNum`} element={Auth(Detail, true)} />
      <Route path={`/:url/edit/:postNum`} element={Auth(Edit, true)} />
      <Route path="/login" element={Auth(Login, false)} />
      <Route path="/register" element={Auth(Register, false)} />
    </Routes>
  );
};
export default App;
