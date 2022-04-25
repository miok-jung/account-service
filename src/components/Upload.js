import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Headers from "components/Headers";
import "css/upload.scss";

const Upload = ({ title }) => {
  let navigate = useNavigate();
  let params = useParams();

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
      .post(`/api/${params.url}/submit`, body)
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
      <button className="btn_back" onClick={onBack}>
        뒤로가기
      </button>
      <form>
        <label htmlFor="input_date">날짜 선택</label>
        <input
          id="input_date"
          type="date"
          onChange={handleDate}
          value={date || ""}
        />
        <label htmlFor="input_content">내용 입력</label>
        <input id="input_content" onChange={handleContent} type="text" />
        <label htmlFor="input_price">금액 입력</label>
        <input id="input_price" onChange={handlePrice} type="number" />
        <input
          className="btn_save"
          type="submit"
          value="저장하기"
          onClick={(e) => onSubmit(e)}
        />
      </form>
    </div>
  );
};

export default Upload;
