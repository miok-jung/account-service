import axios from 'axios';
import { LOGIN_USER } from './types';

// 디스패치를 이용하여 파라메터를 받은 body값을 dataTosubmit에 넣는 상황
export function loginUser(dataTosubmit) {
  const request = axios
    .post('/api/users/login', dataTosubmit)
    .then((res) => res.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}
