import React, { useState } from "react";
import Headers from "components/Headers";
import { useHistory } from "react-router-dom";

const Input = ({ title }) => {
  let history = useHistory();
  const onHistoryBack = () => {
    history.goBack();
  };
  const [selected, setSelected] = useState(0);
  const [selectedSecond, setSelectedSecond] = useState(0);

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
  const handleSelect = (e) => {
    setSelected(parseInt(e.target.value));
  };
  const handleSelectSecond = (e) => {
    setSelectedSecond(parseInt(e.target.value));
  };
  return (
    <>
      <Headers title={title} />
      <hr />
      <h3>입력하기</h3>
      <button onClick={onHistoryBack}>뒤로가기</button>
      <select onChange={handleSelect} value={selected}>
        <option>대그룹 선택</option>
        {largeOptions.map((item, index) => (
          <option key={index} value={index}>
            {item}
          </option>
        ))}
      </select>
      <select onChange={handleSelectSecond}>
        <option>소그룹 선택</option>
        {smallOptions[selected].map((list, index) => (
          <option key={index} value={index}>
            {list}
          </option>
        ))}
      </select>
    </>
  );
};

export default Input;
