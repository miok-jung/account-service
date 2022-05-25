import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null) {
  // option에서는 크게 3가지의 값을 가진다.
  // null은 누구나 출입 가능, true는 로그인 한 유저만 출입가능, false 로그인한 유저는 출입불가
  // null => 아무나 출입이 가능한 페이지
  // true => 로그인한 유저만 출입이 가능한 페이지
  // false => 로그인한 유저는 출입 불가능한 페이지

  const navigate = useNavigate();

  function AuthenticationCheck(props) {
    // 로그인한 유저인지 아닌지를 확인한다.
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((res) => {
        if (!res.payload.isAuth) {
          // 로그인 하지 않은 상태일 경우
          if (option) {
            alert('로그인이 필요한 페이지 입니다. 로그인 화면으로 이동합니다.');
            navigate('/login');
          }
        } else {
          // 로그인을 한 경우
          if (adminRoute && !res.payload.isAdmin) {
            alert('접근할 수 없는 페이지 입니다. 메인 화면으로 이동합니다.');
            navigate('/');
          } else {
            if (option === false) {
              // 로그인한 유저가 출입 불가능한 경우 : 로그인페이지, 회원가입 페이지 등
              alert(
                '이미 로그인한 상태입니다. 로그아웃을 한 후 이용해주시기 바랍니다.',
              );
              navigate(-1);
            }
          }
        }
      });
    }, []);

    return <SpecificComponent />;
  }
  return <AuthenticationCheck />;
}
