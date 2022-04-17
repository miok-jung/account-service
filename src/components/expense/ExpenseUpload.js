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
  const [largeCategory, setLargeCategory] = useState(0);
  const [smallCategory, setSmallCategory] = useState(0);
  const [content, setContent] = useState("");
  const [price, setPrice] = useState(0);

  const largeOptions = ["현금", "계좌", "증권", "체크", "신용"];
  const smallOptions = [
    ["현금"],
    [
      "국민",
      "기업",
      "농협",
      "수협",
      "우리",
      "우체국",
      "카카오",
      "토스",
      "하나",
      "계좌10",
    ],
    ["증권1", "증권2", "증권3", "증권4", "증권5"],
    ["체크1", "체크2", "체크3", "체크4", "체크5"],
    ["카드1", "카드2", "카드3", "카드4", "카드5"],
  ];

  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleSelect = (e) => {
    setLargeCategory(parseInt(e.target.value));
  };
  const handleSelectSecond = (e) => {
    setSmallCategory(parseInt(e.target.value));
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
      largeCategory === "" ||
      smallCategory === "" ||
      content === "" ||
      price === ""
    ) {
      return alert("모든 항목을 채워주세요.");
    }
    let body = {
      date: date,
      largeCategory: largeCategory,
      smallCategory: smallCategory,
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
    <div className="input-wrap">
      <Headers title={title} />
      <h3>입력하기</h3>
      <button onClick={onBack}>뒤로가기</button>
      <form>
        <label htmlFor="inputDate">날짜 선택</label>
        <input id="inputDate" type="date" onChange={handleDate} value={date} />
        <select onChange={handleSelect} value={largeCategory}>
          <option>대그룹 선택</option>
          {largeOptions.map((item, index) => (
            <option key={index} value={index}>
              {item}
            </option>
          ))}
        </select>
        <select onChange={handleSelectSecond}>
          <option>소그룹 선택</option>
          {smallOptions[largeCategory].map((list, index) => (
            <option key={index} value={index}>
              {list}
            </option>
          ))}
        </select>

        <input onChange={handleContent} type="text" />
        <input onChange={handlePrice} type="number" />
        <input type="submit" value="저장하기" onClick={(e) => onSubmit(e)} />
      </form>
    </div>
  );
};

export default ExpenseUpload;
