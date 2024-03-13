import { configureStore, createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    logged: false,
    id: -1,
    email: null,
    details: {},
  },
  reducers: {
    login(state, action) {
      state.logged = true;
    },
    logout(state, action) {
      state.logged = false;
    },
    setId(state, action) {
      state.id = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
  },
});

export const { login, logout, setEmail, setId } = userDetailsSlice.actions;

const store = configureStore({
  reducer: userDetailsSlice.reducer,
});
export default store;