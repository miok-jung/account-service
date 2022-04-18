import React from "react";
import Headers from "components/Headers";
import Lists from "components/Lists";

const Income = ({ title }) => {
  return (
    <>
      <Headers title={title} />

      <Lists title={title} />
    </>
  );
};

export default Income;
