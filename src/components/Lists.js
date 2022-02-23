import dayjs from "dayjs";
import React from "react";

const Lists = ({ title, arr }) => {
  return (
    <div>
      <h2>{title} 내역</h2>
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
                <td>{item.large_categories}</td>
                <td>{item.small_categories}</td>
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
