import React from "react";
import Headers from "components/Headers";
import Lists from "components/Lists";
import incomeArr from "dummy/income.json";

const Income = ({ title }) => {
  return (
    <>
      <Headers title={title} />
      <hr />
      <Lists title={title} arr={incomeArr} />
    </>
  );
};

export default Income;
