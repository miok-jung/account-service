import React, { useState } from "react";
import Headers from "components/Headers";
import { useNavigate } from "react-router-dom";
import "css/input.scss";
import axios from "axios";

const ExpenseUpload = ({ title }) => {
  let navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  const [date, setDate] = useState(0);
  const [content, setContent] = useState("");
  const [price, setPrice] = useState(0);

  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(parseInt(e.target.value));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      date === "" ||
      date === 0 ||
      content === "" ||
      price === "" ||
      price === 0
    ) {
      return alert("모든 항목을 채워주세요.");
    }
    let body = {
      date: date,
      content: content,
      price: price,
    };
    axios
      .post("/api/expense/submit", body)
      .then((res) => {
        if (res.data.success) {
          alert("저장이 완료되었습니다.");
          navigate(-1);
        } else {
          alert("저장에 실패하였습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="wrap_upload">
      <Headers title={title} />
      <h3>입력하기</h3>
      <button onClick={onBack}>뒤로가기</button>
      <form>
        <label htmlFor="inputDate">날짜 선택</label>
        <input id="inputDate" type="date" onChange={handleDate} value={date} />
        <input onChange={handleContent} type="text" />
        <input onChange={handlePrice} type="number" />
        <input type="submit" value="저장하기" onClick={(e) => onSubmit(e)} />
      </form>
    </div>
  );
};

export default ExpenseUpload;
