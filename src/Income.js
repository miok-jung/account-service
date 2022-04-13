import React, { useEffect, useState } from "react";
import Headers from "components/Headers";
import Lists from "components/Lists";
import axios from "axios";

const Income = ({ title, pathname }) => {
  const [List, setList] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .post("/api/income/list")
      .then((res) => {
        setList(res.data.postList);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <Headers title={title} />
      <hr />
      {Loading ? (
        <Lists title={title} arr={List} pathname={pathname} />
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
};

export default Income;
