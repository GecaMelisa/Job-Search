import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import appAxios from "../services/appAxios";
import { RegisterFormData } from "../pages/Registration";
import { LoginFormData } from "../pages/Login";
import { toast } from "react-toastify";

// Initialize userToken from local storage
const userToken = localStorage.getItem("userToken") || null;

const initialState = {
  loading: false,
  userInfo: null, // for user the object
  userToken, // for storing the JWT
  error: null as string | null, // adjust the type to string | null
  success: false, // for monitoring the registration process.
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: RegisterFormData, { rejectWithValue }) => {
    try {
      await appAxios.post("/auth/register", data);
    } catch (error: any) {
      // Return custom error message from the backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (body: LoginFormData, { rejectWithValue }) => {
    try {
      const { data } = await appAxios.post("/auth/login", body);
      localStorage.setItem("userToken", data.jwt);
      return data;
    } catch (error: any) {
      // Return custom error message from the backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken"); // Deletes token from storage
      toast.success("User logged out!");
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
      window.location.pathname = "/";
    },
  },
  extraReducers: (builder) => {
    // Login user
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.userToken = action.payload.jwt;
    });
    builder.addCase(login.rejected, (state, action) => {
      if (action.payload) {
        // Handle the case where there is a payload (error message)
        state.loading = false;
        state.error = action.payload as string; // Explicitly cast payload as string
      } else {
        // Handle the case where there is no payload (default error message)
        state.loading = false;
        state.error = "Login failed";
      }
    });
    // Register user
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.loading = false;
      state.success = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      if (action.payload) {
        // Handle the case where there is a payload (error message)
        state.loading = false;
        state.error = action.payload as string; // Explicitly cast payload as string
      } else {
        // Handle the case where there is no payload (default error message)
        state.loading = false;
        state.error = "Registration failed";
      }
    });
  },
});

// Export actions
export const { logout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
