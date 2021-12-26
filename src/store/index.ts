import { configureStore } from "@reduxjs/toolkit";
import { codeSlice } from "./features/code-slice";

const store = configureStore({
  reducer: {
    code: codeSlice.reducer,
  },
});
type RootState = ReturnType<typeof store.getState>;

(window as any).__store__ = store;

export { store };
export type { RootState };
