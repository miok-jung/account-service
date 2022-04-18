import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import "../css/list.scss";

const Lists = ({ title }) => {
  let { pathname } = useLocation(); // pathname은 슬래시(/)가 추가되서 표시가됨

  const [List, setList] = useState([]);

  useEffect(() => {
    axios
      .post(`/api${pathname}/list`)
      .then((res) => {
        if (res.data.postList.length !== 0) {
          setList(res.data.postList);
        } else {
          setList(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {List !== 0 ? (
        <div className="wrap_list">
          <h2>{title} 내역</h2>
          <Link className="btn_upload" to={`${pathname}/upload`}>
            입력
          </Link>
          <table>
            <thead>
              <tr>
                <th>날짜</th>
                <th>대분류</th>
                <th>소분류</th>
                <th>내용</th>
                <th>가격</th>
                <th>수정</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {List.map((item, index) => {
                return (
                  <tr key={index} className="btn_tr_wrap">
                    <td>{dayjs(item.date).format("YY. MM. DD")}</td>
                    <td>{item.largeCategory}</td>
                    <td>{item.smallCategory}</td>
                    <td>
                      <Link
                        to={`${pathname}/${item.postNum}`}
                        title={`${item.content} 자세히 보기`}
                      >
                        {item.content}
                      </Link>
                    </td>
                    <td>
                      {item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      원
                    </td>
                    <td>
                      <Link to={`${pathname}/${item.postNum}`}>수정</Link>
                    </td>
                    <td className="btn_delete">삭제</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="wrap_list">
          <p>현재 {title} 내역이 없습니다.</p>
          <p>입력버튼을 통해 내역을 추가해주세요.</p>
          <Link className="btn_upload" to={`${pathname}/upload`}>
            입력
          </Link>
        </div>
      )}
    </>
  );
};
export default Lists;
