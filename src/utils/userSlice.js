import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    username: "مهمان",
  },
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.username = action.payload;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
