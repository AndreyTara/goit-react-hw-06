import { createSlice } from "@reduxjs/toolkit";
import { fetchTodosThunk, deleteTodosThunk, addTodosThunk } from "./operations";

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact(state, action) {},
    deleteContact(state, action) {},
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
