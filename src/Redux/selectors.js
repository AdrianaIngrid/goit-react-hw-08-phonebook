// export const getContacts = (state) => {
//     // console.log('State in getContacts:', state.contacts.contacts);
//     return state.contacts.items || []
// }; // returneaza lista de contacte Am pus de doua ori contacts deoarece accesez prima data obiectul si apoi arrayul contacts
import { createSelector } from "@reduxjs/toolkit";

 export const getFilter = (state) => state.filter; // returneaza valoarea filtrului din starea aplicatiei


// export const getFilteredContacts = state => {
//   const filter = getFilter(state)?.toLowerCase() || '';

//   const lowerCaseFilter = filter ? filter.toLowerCase() : '';

//   return getContacts(state).filter(
//     contact => contact.name?.toLowerCase().includes(lowerCaseFilter) || ''
//   );
// };
export const getContacts = state => state.contacts.items;
export const getContactsError = state => state.contactsSlice.error;
export const getContactsLoading = state => state.contactsSlice.isLoading; 
export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
  
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);