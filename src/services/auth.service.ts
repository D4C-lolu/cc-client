import axios from "axios";

const API_URL = "http://localhost:4000/";

type LoginType = {
  user_name: string;
  password: string;
};

const getUser = async () => {
  let user = JSON.parse(localStorage.getItem("user") || "{}");
  if (!user) {
    user = axios
      .get(API_URL + "/users", {
        withCredentials: true,
      })
      .then((res) => res.data)
      .catch(() => {
        return null;
      });
  }
  return user;
};

const logIn = ({ user_name, password }: LoginType) => {
  return axios
    .post(
      API_URL + "/users",
      {
        user_name,
        password,
      },
      { withCredentials: true }
    )
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logOut = () => {
  localStorage.removeItem("user");
};

const AuthService = { logIn, logOut, getUser };

export default AuthService;
