import dayjs from "dayjs";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Lists = ({ title, arr, pathname }) => {
  let navigate = useNavigate();

  return (
    <div>
      <h2>{title} 내역</h2>
      <Link to={`${pathname}/upload`}>입력</Link>
      <table>
        <thead>
          <tr>
            <th>날짜</th>
            <th>대분류</th>
            <th>소분류</th>
            <th>내용</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((item, index) => {
            return (
              <tr key={index}>
                <td>{dayjs(item.date).format("YY. MM. DD")}</td>
                <td>{item.largeCategory}</td>
                <td>{item.smallCategory}</td>
                <td>{item.content}</td>
                <td>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  원
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Lists;
