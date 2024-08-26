import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../Redux/operations';

// Obține contactele din localStorage, dacă există
// const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];

// const initialStateContacts = {
//   contacts:
//     savedContacts.length > 0
//       ? savedContacts
//       : [
//           { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
//           { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
//           { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
//           { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
//         ],
// };
const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
  

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
          })
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      }).addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(contact => contact.id !== action.payload.id);
      }).addCase(deleteContact.pending, handlePending)
    .addCase(deleteContact.rejected, handleRejected)
   
  },
});


export const contactsReducer = contactsSlice.reducer;
