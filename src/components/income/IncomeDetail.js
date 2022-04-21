import axios from "axios";
import Headers from "components/Headers";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../css/detail.scss";

const IncomeDetail = ({ title }) => {
  let params = useParams();
  console.log(params);

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
            <dt>날짜 : </dt>
            <dd>{dayjs(PostInfo.date).format("YYYY 년 MM 월 DD 일")}</dd>
            <dt>내용 : </dt>
            <dd>{PostInfo.content}</dd>
            <dt>가격 : </dt>
            <dd>
              {PostInfo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              원
            </dd>
          </dl>
          <div className="button_wrap">
            <Link to={`/income/edit/${PostInfo.postNum}`}>
              <button className="btn_edit">수정</button>
            </Link>
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
