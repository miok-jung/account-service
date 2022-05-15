import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../img/logo.svg';
import 'css/header.scss';

const Headers = () => {
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
        <section className="nav_end">
          <Link to="/login">로그인</Link>
        </section>
      </nav>
    </header>
  );
};

export default Headers;
