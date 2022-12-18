import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const addNewUser = async (newUser) => {
  const response = await axios.post(`${BASE_URL}/user/add`, newUser);
  return response;
};

export const getAllUsers = async (users) => {
  const response = await axios.get(`${BASE_URL}/users`, users);
  return response;
};

export const deleteProfile = async (id) => {
  const response = await axios.delete(`${BASE_URL}/users/delete/${id}`);
  return response;
};

export const editProfile = async (id, newUser) => {
  const response = await axios.put(`${BASE_URL}/users/update/${id}`, newUser);
  return response;
};

export const singleUserData = async (id) => {
  const response = await axios.get(`${BASE_URL}/users/${id}`);
  return response;
};
