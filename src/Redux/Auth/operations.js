
import { createAsyncThunk } from "@reduxjs/toolkit";

import { userApi, setAuthHeader } from "../../api/api";




export const register = createAsyncThunk(
    'auth/register', async (user, thunkApi) => {
        try {
            const response = await userApi.signup(user);
          
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
        
    }
);
export const login = createAsyncThunk('auth/login', async (user, thunkApi) => {
    try {
        const response = await userApi.login(user);
       
        return response.data;

    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
}); 
export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
    try {
        await userApi.logout();
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})
    export const refreshUser = createAsyncThunk(
      'auth/refresh',
      async (_ , thunkAPI) => {
        const token = localStorage.getItem('authToken');

        if (!token) {
          return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
           setAuthHeader(token);
          const user = await userApi.currentUser();
          return user;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
      }
    );

