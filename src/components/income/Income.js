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
        // NOTE Spread Opertor : 스프레드 연산자, 전개 구문, 펼침 연산자 등으로 불리운다.
        // NOTE 현재 여기서는 객체를 복제하는 방식으로 사용?
        // TODO Spread Operotor에 대해 자세히 알아보기
        setList(...res.data.postList);
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
        <p>Loading...</p>
      )}
    </>
  );
};

export default Income;
