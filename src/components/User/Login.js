import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../../css/user.scss';
import { loginUser } from '_actions/user_action';

const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [PW, setPW] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (Email === '' || PW === '') {
      return alert('이메일/비밀번호를 입력해주세요.');
    }
    let body = {
      email: Email,
      password: PW,
    };
    // action: loginUser
    dispatch(loginUser(body))
      .then((res) => {
        alert(`${res.payload.nickname}님 환영합니다.`);
        navigate('/');
      })
      .catch((err) => {
        if (err.response.status === 400) {
          return alert(`${err.response.data.message}`);
        }
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
          className="btn_login"
          onClick={(e) => {
            onSubmitHandler(e);
          }}
        >
          로그인
        </button>
        <button
          className="btn_register"
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
