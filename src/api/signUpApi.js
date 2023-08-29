import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/users'; 

export const signUp = async (username, email, password) => {
  try {
    // const response = await axios.post(`${BASE_URL}/signup`, username, email, password);
    const response = await axios.get(BASE_URL);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
