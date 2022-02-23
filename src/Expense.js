import React from "react";
import Headers from "components/Headers";
import Lists from "components/Lists";
import expenseArr from "dummy/expense.json";

const Expense = ({ title }) => {
  return (
    <>
      <Headers title={title} />
      <hr />
      <Lists title={title} arr={expenseArr} />
    </>
  );
};

export default Expense;
