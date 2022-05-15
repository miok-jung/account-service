import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import Headers from 'components/Headers';
import '../css/detail.scss';

const Detail = () => {
  let params = useParams();
  let navigate = useNavigate();

  const [PostInfo, setPostInfo] = useState({});
  const [Flag, setFlag] = useState(false);

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
  }, []);
  useEffect(() => {}, [PostInfo]);

  const DeleteHandler = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      let body = {
        postNum: params.postNum,
      };
      axios
        .post(`/api/${params.url}/delete`, body)
        .then((res) => {
          alert('해당 내용이 삭제되었습니다.');
          navigate(`/${params.url}`);
        })
        .catch((err) => {
          alert('해당 내용이 삭제가 취소되었습니다.', err);
        });
    } else {
      alert('취소');
    }
  };
  return (
    <>
      <Headers />
      {Flag ? (
        <>
          <dl>
            <dt>날짜 : </dt>
            <dd>{dayjs(PostInfo.date).format('YYYY 년 MM 월 DD 일')}</dd>
            <dt>내용 : </dt>
            <dd>{PostInfo.content}</dd>
            <dt>가격 : </dt>
            <dd>
              {PostInfo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
              원
            </dd>
          </dl>
          <div className="button_wrap">
            <Link to={`/${params.url}/edit/${PostInfo.postNum}`}>
              <button className="btn_edit">수정</button>
            </Link>
            <button
              className="btn_delete"
              onClick={() => {
                DeleteHandler();
              }}
            >
              삭제
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Detail;
