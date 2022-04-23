import React from "react";
import Headers from "components/Headers";
import Lists from "components/Lists";
import { useLocation } from "react-router-dom";

const Expense = ({ title }) => {
  let { pathname } = useLocation();
  pathname = pathname.substring(1);

  return (
    <>
      <Headers title={title} />
      <Lists title={title} url={pathname} />
    </>
  );
};

export default Expense;
