import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    id: "",
  },
  reducers: {
    setId(state, { payload }) {
      state.id = payload.id;
    },
  },
});

const { setId } = projectSlice.actions;

export { setId, projectSlice };
