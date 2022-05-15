import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import '../css/list.scss';

const Lists = (props) => {
  const [List, setList] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/${props.url}/list`)
      .then((res) => {
        if (res.data.postList.length !== 0) {
          setList(res.data.postList);
        } else {
          setList(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);
  return (
    <>
      {List !== 0 ? (
        <div className="wrap_list">
          <h2>{props.url === 'income' ? '수입' : '지출'} 내역</h2>
          <Link className="btn_upload" to={`/${props.url}/upload`}>
            입력
          </Link>
          <table>
            <thead>
              <tr>
                <th>날짜</th>
                <th>내용</th>
                <th>가격</th>
                <th>수정</th>
              </tr>
            </thead>
            <tbody>
              {List.map((item, index) => {
                return (
                  <tr key={index} className="btn_tr_wrap">
                    <td>{dayjs(item.date).format('YY. MM. DD')}</td>
                    <td>
                      <Link
                        to={`/${props.url}/${item.postNum}`}
                        title={`${item.content} 자세히 보기`}
                      >
                        {item.content}
                      </Link>
                    </td>
                    <td>
                      {item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                      원
                    </td>
                    <td>
                      <Link to={`/${props.url}/edit/${item.postNum}`}>
                        수정
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="wrap_list">
          <p>현재 {props.title} 내역이 없습니다.</p>
          <p>입력버튼을 통해 내역을 추가해주세요.</p>
          <Link className="btn_upload" to={`/${props.url}/upload`}>
            입력
          </Link>
        </div>
      )}
    </>
  );
};
export default Lists;
