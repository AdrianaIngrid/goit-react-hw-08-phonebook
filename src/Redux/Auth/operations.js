import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = 'https://connections-api.goit.global/';
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem('token', token); // Salvează tokenul în localStorage
};
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
//   localStorage.removeItem('token'); // Șterge tokenul din localStorage
// };
export const register = createAsyncThunk(
    'auth/register', async (user, thunkApi) => {
        try {
            const response = await axios.post('/users/signup', user);
            // cu sethAuthHeader - asociem tokenul in header
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
        
    }
);
export const login = createAsyncThunk('auth/login', async (user, thunkApi) => {
    try {
        const response = await axios.post('/users/login', user);
        setAuthHeader(response.data.token);
        return response.data;

    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
}); 
export const logout = createAsyncThunk('auth/logout', async (user, thunkApi) => {
    try {
        await axios.post('auth/logout');
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})
    
