import React, { useEffect, useState } from "react";
import Headers from "components/Headers";
import "./css/main.scss";
import axios from "axios";

const Main = () => {
  const [MonthIncome, setMonthIncome] = useState(0);
  const [MonthExpense, setMonthExpense] = useState(0);
  const [Total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .get("/api/income/month/total")
      .then((res) => {
        setMonthIncome(res.data.total);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("/api/expense/month/total")
      .then((res) => {
        setMonthExpense(res.data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    setTotal(MonthIncome - MonthExpense);
  }, [MonthIncome, MonthExpense]);

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
            <td className="text_red">
              {MonthIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
            </td>
            <td className="text_blue">
              {MonthExpense.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table_total">
        <thead>
          <tr>
            <th>이달의 잔액</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {Total > 0 ? (
              <td className="text_red">
                {Total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
              </td>
            ) : (
              <td className="text_blue">
                {Total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Main;
