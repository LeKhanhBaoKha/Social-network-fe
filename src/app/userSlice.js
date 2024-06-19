import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import APIAuth from '../api/APIAuth';
import { NotificationManager } from 'react-notifications';

const initialState = {
  isLoading: false,
  errorMessage: '',
  userInfo: null,
};

export const login = createAsyncThunk('user/login', async (data) => {
    try {
        const response = await APIAuth.login(data);
        if (response?.data?.meta?.statusCode === 200) {
            NotificationManager.success(response?.data?.meta?.message);
            return response?.data?.data;
        }
    } catch (error) {
        NotificationManager.error(error?.response?.data?.meta?.message);
        throw new Error(error?.message);
    }
})
// Config slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    // Start login request
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });

    // Request successful
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.userInfo = action.payload;
    });
    // Request error
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload?.message;
    });
  },
});

export const { logout } = userSlice.actions;

export const selectUser = (state) => state.user.userInfo;
export const selectLoading = (state) => state.user.isLoading;
export const selectErrorMessage = (state) => state.user.errorMessage;

const { reducer } = userSlice;
export default reducer;