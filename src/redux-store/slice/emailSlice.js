import { createSlice } from "@reduxjs/toolkit";
import { getEmailBody, getEmails } from "./emailServices";

const initialState = {
  status: "idle",
  emails: [],
  readedMails: [],
  email: null,
  favEmails: [],
  selectedEmail: null,
  emailBody: "",
};

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setReadedMail: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.readedMails = [...action.payload];
      } else {
        state.readedMails = [...state.readedMails, action.payload];
      }
    },
    setMails: (state, action) => {
      state.emails = action.payload;
    },
    setSelectedEmail: (state, action) => {
      state.selectedEmail = action.payload;
    },
    setFavMails: (state, action) => {
      state.favEmails = [...state.favEmails, action.payload];
    },
  },
  extraReducers: {
    [getEmails.pending]: (state) => {
      state.status = "pending";
    },
    [getEmails.fulfilled]: (state, { payload }) => {
      state.emails = payload;
    },
    [getEmails.rejected]: (_, action) => {
      console.error(action.payload);
    },
    [getEmailBody.pending]: (state) => {
      state.status = "pending";
    },
    [getEmailBody.fulfilled]: (state, { payload }) => {
      state.emailBody = payload;
    },
    [getEmailBody.rejected]: (_, action) => {
      console.error(action.payload);
    },
  },
});

export const {
  setEmail,
  setReadedMail,
  setMails,
  setSelectedEmail,
  setFavMails,
} = emailSlice.actions;

export default emailSlice.reducer;
