import axios from "axios";
const baseUrl = "/users/";

const register = async (newUser) => {
  const response = await axios.post(`${baseUrl}/register`, newUser);

  return response.data;
};

export default { register };
