import axios from "axios";
const baseUrl = "/auth/";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const login = async (credentials) => {
  const response = await axios.post(baseUrl + "login", credentials);
  return response.data;
};

const logout = async () => {};

const getUser = () => {
  const user = localStorage.getItem("user");

  return user;
};

const getUserToken = () => {
  const userToken = JSON.parse(localStorage.getItem("user")).token;
  console.log(userToken);
  return userToken;
};

export default { login, logout, getUserToken, setToken, getUser };
