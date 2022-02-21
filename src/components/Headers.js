import React from "react";
import "css/header.css";
import { Link } from "react-router-dom";

const Headers = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <Link to="/">메인</Link>
        <Link to="/income">수입</Link>
      </nav>
    </header>
  );
};

export default Headers;
