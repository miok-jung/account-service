import axios from "axios";
import Headers from "components/Headers";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../css/detail.scss";

const IncomeDetail = ({ title }) => {
  let params = useParams();

  const [PostInfo, setPostInfo] = useState({});
  const [Flag, setFlag] = useState(false);

  useEffect(() => {
    let body = {
      postNum: params.postNum,
    };
    axios
      .post("/api/income/detail", body)
      .then((res) => {
        setPostInfo(res.data.income);
        setFlag(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    console.log(PostInfo);
  }, [PostInfo]);

  return (
    <>
      <Headers title={title} />
      {Flag ? (
        <>
          <dl>
            <dt>날 &nbsp;짜 : </dt>
            <dd>{PostInfo.date}</dd>
            <dt>대분류 : </dt>
            <dd>{PostInfo.largeCategory}</dd>
            <dt>소분류 : </dt>
            <dd>{PostInfo.smallCategory}</dd>
            <dt>내 &nbsp;용 : </dt>
            <dd>{PostInfo.content}</dd>
            <dt>가 &nbsp;격 : </dt>
            <dd>{PostInfo.price}</dd>
          </dl>
          <div className="button_wrap">
            <button className="btn_edit">수정</button>
            <button className="btn_delete">삭제</button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default IncomeDetail;
