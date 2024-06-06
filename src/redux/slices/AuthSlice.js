import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../helpers/axiosInstance";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "User",
  data: localStorage.getItem("data") || {},
};

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
  try {
    console.log(data);
    const res = axiosInstance.post("/user/register", data);
    console.log(res);
    toast.promise(res, {
      loading: "Wait! creating your account",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to create account",
    });

    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const loginAccount = createAsyncThunk("/auth/login", async (data) => {
  try {
    const email = data.get("email");
    const password = data.get("password");
    console.log(email); // Outputs the email value
    console.log(password); // Outputs the password value
    const res = axiosInstance.post("/user/login", data);
    console.log(res);
    toast.promise(res, {
      loading: "Wait! Trying to login in your account",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to login in your account",
    });

    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const logout = createAsyncThunk("/auth/logout", async () => {
  try {
    const res = axiosInstance.get("/user/logout");
    toast.promise(res, {
      loading: "Wait! Trying to logout from your account",
      success: (data) => {
        return data?.data?.message;
      },
      error: "Failed to logout",
    });

    return (await res).data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAccount.fulfilled, (state, action) => {
      localStorage.setItem("data", JSON.stringify(action?.payload?.user));
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("role", action?.payload?.user?.role);
      state.isLoggedIn = true;
      state.data = action?.payload?.user;
      state.role = action?.payload?.user?.role;
    });
    builder.addCase(createAccount.fulfilled, (state, action) => {
      localStorage.setItem("data", JSON.stringify(action?.payload?.user));
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("role", action?.payload?.user?.role);
      state.isLoggedIn = true;
      state.data = action?.payload?.user;
      state.role = action?.payload?.user?.role;
    });

    builder.addCase(logout.fulfilled, (state, action) => {
        localStorage.clear();
        state.isLoggedIn = false;
        state.data = {};
        state.role = "";
      });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
