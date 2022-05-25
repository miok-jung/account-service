import { LOGIN_USER, REGISTER_USER, AUTH_USER } from '_actions/types';

// state는 전 스테이트 값, action 현재 액션
export default function (state = {}, action) {
  switch (action.type) {
    // ...state : 스프레드오퍼레이트로 state를 그대로 가져온다.
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;
    case REGISTER_USER:
      return { ...state, registerSuccess: action.payload };
      break;
    case AUTH_USER:
      return { ...state, userData: action.payload };
      break;
    default:
      return state;
  }
}
