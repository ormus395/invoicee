import axios from "axios";
const baseUrl = "/auth/";

const login = async (credentials) => {
  const response = await axios.post(baseUrl + "login", credentials);
  return response.data;
};

const logout = async () => {};

const getUserToken = () => {
  const userToken = localStorage.getItem("user");
  console.log(userToken);
  return userToken;
};

export default { login, logout, getUserToken };
