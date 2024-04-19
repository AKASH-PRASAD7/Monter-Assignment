"use client";

import { createSlice } from "@reduxjs/toolkit";
import data from "@/data/data";

const initialState = {
  data,
  page: 1,
  rowsPerPage: 10,
  total: data.length,
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    nextPage: (state) => {
      if (state.page * state.rowsPerPage < state.total) {
        state.page += 1;
      }
    },
    prevPage: (state) => {
      if (state.page > 1) {
        state.page -= 1;
      }
    },

    setPage: (state, action) => {
      state.page = action.payload;
    },

    setRowsPerPage: (state, action) => {
      state.rowsPerPage = action.payload;
      state.page = 1;
    },
  },
});

export const { nextPage, prevPage, setPage, setRowsPerPage } =
  tableSlice.actions;

export default tableSlice.reducer;
