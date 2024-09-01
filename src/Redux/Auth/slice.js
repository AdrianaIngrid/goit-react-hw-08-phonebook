import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register, refreshUser }  from '../Auth/operations';
function handlePending(state) {
    state.isLoading = true;
    state.isLoggedIn = false;
    state.error = null;
    state.token = null;
    state.user = { name: null, email: null };
    
}
function handleRejected(state, action) {
    state.isLoading = false;
    state.isLoggedIn = false;
    state.error = action.payload;
    state.token = null;
    state.user = { name: null, email: null };
    
}
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        error: null,
        isLoading: false,
    },
    extraReducers: builder => {
        builder
          .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = null;
            state.isLoggedIn = true;
            state.isLoading = false;
          })
          .addCase(register.pending, handlePending)
          .addCase(register.rejected, handleRejected)
          .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = null;
            state.isLoggedIn = true;
            state.isLoading = false;
          })
          .addCase(login.pending, handlePending)
          .addCase(login.rejected, handleRejected)
          .addCase(logout.fulfilled, state => {
            state.isLoading = false;
            state.error = null;
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
          })
          .addCase(logout.pending, handlePending)
        .addCase(logout.rejected, handleRejected)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
          state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
         state.isLoading = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoading = false;
      });
        
    },
});
export const authReducer = authSlice.reducer;
