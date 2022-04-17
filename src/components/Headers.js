import React from "react";
import { Link } from "react-router-dom";
import "css/header.scss";

const Headers = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <Link to="/">메인</Link>
        <Link to="/income">수입</Link>
        <Link to="/expense">지출</Link>
        <Link to="/transfer">이체</Link>
      </nav>
    </header>
  );
};

export default Headers;
