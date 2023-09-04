import axios from 'axios';

const BASE_URL = 'http://192.168.178.184:5000'; 

export const signUp = async (email, username, password) => {
  try {
    // const response = await axios.post(`${BASE_URL}/signup`, username, email, password);
    const response = await axios.post(`${BASE_URL}/register`, {email,name:  username, password});
    console.log(response);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
