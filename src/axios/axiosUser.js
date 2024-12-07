// Bibliotecas externas
import axios from "axios";

const BASE_URL = "https://nucbaz-api.vercel.app";

export const createUser = async (nombre, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, {
      nombre,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return alert(error.response?.data?.errors?.[0]?.msg || "Error desconocido");
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    const user = response.data;
    localStorage.setItem("currentUser", JSON.stringify(user));
    return user;
  } catch (error) {
    console.log(error);
    return alert(error.response.data.msg);
  }
};
