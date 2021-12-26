import { configureStore } from "@reduxjs/toolkit";
import { codeSlice } from "./features/code-slice";

const store = configureStore({
  reducer: {
    code: codeSlice.reducer,
  },
});

(window as any).__store__ = store;
type RootState = ReturnType<typeof store.getState>;
export { store };
export type { RootState };
