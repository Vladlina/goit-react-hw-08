// redux/auth/operations.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Додайте базову URL для запитів
axios.defaults.baseURL = "https://your-api-url.com";

// Збереження токена в заголовки
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Видалення токена з заголовків
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

// Реєстрація користувача
export const register = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    const { data } = await axios.post("/users/signup", credentials);
    setAuthHeader(data.token);
    return data;
  }
);

// Логін користувача
export const login = createAsyncThunk("auth/login", async (credentials) => {
  const { data } = await axios.post("/users/login", credentials);
  setAuthHeader(data.token);
  return data;
});

// Логаут користувача
export const logout = createAsyncThunk("auth/logout", async () => {
  await axios.post("/users/logout");
  clearAuthHeader();
});

// Оновлення користувача за токеном
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("No token found");
    }

    setAuthHeader(persistedToken);
    const { data } = await axios.get("/users/current");
    return data;
  }
);
