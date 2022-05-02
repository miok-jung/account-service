import React, { useEffect, useState } from "react";
import Headers from "components/Headers";
import "./css/main.scss";
import axios from "axios";

const Main = () => {
  const [monthIncome, setMonthIncome] = useState(0);
  useEffect(() => {
    axios
      .get("/api/income/total")
      .then((res) => {
        setMonthIncome(res.data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Headers title={"메인"} />
      <h2>이달의 사용내역</h2>
      <table className="table_income_expense">
        <thead>
          <tr>
            <th>수입</th>
            <th>지출</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {monthIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
            </td>
            <td>원</td>
          </tr>
        </tbody>
      </table>
      <table className="table_total">
        <thead>
          <tr>
            <th>총 잔액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 원</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Main;
