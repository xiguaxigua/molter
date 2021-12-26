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
    initCode(state, { payload }) {
      state.html = payload.html;
      state.css = payload.css;
      state.js = payload.js;
    },
  },
});

const { setHtml, setCss, setJs, initCode } = codeSlice.actions;

export { setHtml, setCss, setJs, initCode, codeSlice };
