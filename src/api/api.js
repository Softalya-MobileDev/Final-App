import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.178.184:5000'});

export const loginApi = (username, password) => {
  return instance.post(`${baseURL}/login`, { email: username, password });
};
