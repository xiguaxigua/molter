import { createSlice } from "@reduxjs/toolkit";

const codeSlice = createSlice({
  name: "code",
  initialState: {
    html: "",
    css: "",
    js: "",
  },
  reducers: {
    setHtml(state, { payload }) {
      state.html = payload.code;
    },
    setCss(state, { payload }) {
      state.css = payload.code;
    },
    setJs(state, { payload }) {
      state.js = payload.code;
    },
  },
});

const { setHtml, setCss, setJs } = codeSlice.actions;

export { setHtml, setCss, setJs, codeSlice };
