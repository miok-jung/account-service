import axios from 'axios';
import Headers from 'components/Headers';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/detail.scss';

const Edit = () => {
  let params = useParams();
  let navigate = useNavigate();

  const [PostInfo, setPostInfo] = useState({});
  const [Flag, setFlag] = useState(false);
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let body = {
      postNum: params.postNum,
    };
    axios
      .post(`/api/${params.url}/detail`, body)
      .then((res) => {
        setPostInfo(res.data.post);
        setFlag(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);

  useEffect(() => {
    setDate(PostInfo.date);
    setContent(PostInfo.content);
    setPrice(PostInfo.price);
  }, [PostInfo, Flag]);

  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(parseInt(e.target.value));
  };

  const onBack = () => {
    navigate(-1);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      date === '' ||
      date === 0 ||
      content === '' ||
      price === '' ||
      price === 0
    ) {
      return alert('모든 항목을 채워주세요.');
    }
    let body = {
      date: date,
      content: content,
      price: price,
      postNum: params.postNum,
    };
    axios
      .post(`/api/${params.url}/edit`, body)
      .then((res) => {
        if (res.data.success) {
          alert('수정이 완료되었습니다.');
          navigate(-1);
        } else {
          alert('수정에 실패하였습니다.');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="wrap_upload">
      <Headers />
      <h3>입력/수정</h3>
      <button className="btn_back" onClick={onBack}>
        뒤로가기
      </button>
      <form>
        <label htmlFor="input_date">날짜 선택</label>
        <input
          id="input_date"
          type="date"
          onChange={handleDate}
          value={date || ''}
        />
        <label htmlFor="input_content">내용 입력</label>
        <input
          id="input_content"
          onChange={handleContent}
          type="text"
          value={content || ''}
        />
        <label htmlFor="input_price">금액 입력</label>
        <input
          id="input_price"
          onChange={handlePrice}
          type="number"
          value={price || ''}
        />
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

export default Edit;
