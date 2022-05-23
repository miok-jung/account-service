import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '_actions/user_action';
import '../../css/user.scss';

const Register = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [Nickname, setNickname] = useState('');
  const [Email, setEmail] = useState('');
  const [PW, setPW] = useState('');
  const [PWCheck, setPWCheck] = useState('');

  const registerFunc = (e) => {
    e.preventDefault();
    if (Nickname === '' || Email === '' || PW === '' || PWCheck === '') {
      return alert('값을 모두 입력해주세요.');
    }
    if (PW !== PWCheck) {
      return alert('비밀번호가 다릅니다.');
    }
    let body = {
      nickname: Nickname,
      email: Email,
      password: PW,
    };
    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        alert('회원가입에 성공하였습니다. 로그인 페이지로 이동합니다.');
        navigate('/login');
      } else {
        return alert('이메일이 중복됩니다. 다른 이메일로 입력해주세요.');
      }
    });
  };
  return (
    <>
      <h2>회원가입</h2>
      <form>
        <label htmlFor="reg_nickname">닉네임</label>
        <input
          id="reg_nickname"
          type="text"
          value={Nickname}
          onChange={(e) => setNickname(e.currentTarget.value)}
        />
        <label htmlFor="reg_email">이메일</label>
        <input
          id="reg_email"
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <label htmlFor="reg_pw">비밀번호</label>
        <input
          id="reg_pw"
          type="password"
          value={PW}
          onChange={(e) => setPW(e.currentTarget.value)}
        />
        <label htmlFor="reg_confirm_pw">비밀번호 확인</label>
        <input
          id="reg_confirm_pw"
          type="password"
          value={PWCheck}
          onChange={(e) => setPWCheck(e.currentTarget.value)}
        />
        <button onClick={(e) => registerFunc(e)}>회원가입</button>
        <button
          onClick={() => {
            navigate('/login');
          }}
        >
          로그인 화면으로 이동
        </button>
      </form>
    </>
  );
};

export default Register;
