import { createSlice } from "@reduxjs/toolkit";
const intitialFilterState = '';

 const filterSlice = createSlice({
    name: 'filter',
    initialState: intitialFilterState,
    reducers: {
         setFilter: (_, action) => action.payload,
     },
});
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;