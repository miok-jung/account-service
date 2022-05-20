import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import LOGO from '../img/logo.svg';
import 'css/header.scss';
import axios from 'axios';

const Headers = () => {
  const [Token, setToken, removeToken] = useCookies('x_auth');

  const logOut = () => {
    axios
      .get('/api/users/logout')
      .then((res) => {
        alert('로그아웃을 완료하였습니다.');
        removeToken('x_auth');
        window.location.reload();
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  return (
    <header>
      <nav>
        <section className="nav_start">
          <img className="nav_logo" src={LOGO} />
          <Link to="/">JN Account-Service</Link>
        </section>
        <section className="nav_center">
          <Link to="/income">수입</Link>
          <Link to="/expense">지출</Link>
          {/* <Link to="/transfer">이체</Link> */}
        </section>
        {!Token.x_auth ? (
          <section className="nav_end">
            <Link to="/login">로그인</Link>
          </section>
        ) : (
          <section className="nav_end">
            <button onClick={() => logOut()}>로그아웃</button>
          </section>
        )}
      </nav>
    </header>
  );
};

export default Headers;
