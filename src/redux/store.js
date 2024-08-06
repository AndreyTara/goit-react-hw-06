import { configureStore } from "@reduxjs/toolkit";

// const initialValue = {
//   contacts: {
//     items: [],
//   },
//   filters: {
//     name: "",
//   },
// };

export default configureStore({
  reducer: {
    // contacts: contactsReducer,
    // filter: filterReducer,
  },
});
