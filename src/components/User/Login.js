import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/user.scss';

const Login = () => {
  let navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [PW, setPW] = useState('');

  const loginFunc = (e) => {
    e.preventDefault();
    if (Email === '' || PW === '') {
      return alert('이메일/비밀번호를 입력해주세요.');
    }
    let body = {
      email: Email,
      password: PW,
    };
    axios
      .post('/api/users/login', body)
      .then((res) => {
        console.log('res: ', res);
      })
      .catch((err) => {
        console.log('err: ', err.response);
      });
  };
  return (
    <>
      <h2>로그인</h2>
      <form>
        <label htmlFor="login_email">이메일</label>
        <input
          id="login_email"
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <label htmlFor="login_pw">비밀번호</label>
        <input
          id="login_pw"
          type="password"
          value={PW}
          onChange={(e) => setPW(e.currentTarget.value)}
        />
        <button
          onClick={(e) => {
            loginFunc(e);
          }}
        >
          로그인
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate('/register');
          }}
        >
          회원가입
        </button>
      </form>
    </>
  );
};
export default Login;
