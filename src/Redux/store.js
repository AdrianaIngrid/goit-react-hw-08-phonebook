import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from './contactsSlice';
import { filterReducer } from "./filterSlice";
import { authReducer } from "./Auth/slice";
export const store = configureStore({
  reducer: {
    authSlice: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },

});

