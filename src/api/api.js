import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com/users'});

export const loginApi = (username, password) => {
  return instance.post('https://fakestoreapi.com/auth/login', { username, password });
};
