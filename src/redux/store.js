import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "../redux/contacts/contactsSlice.js";
import { filterReducer } from "../redux/contacts/filtersSlice.js";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
export default store;
