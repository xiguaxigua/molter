import { configureStore } from "@reduxjs/toolkit";
import { codeSlice } from "./features/code-slice";
import { projectSlice } from "./features/project-slice";

const store = configureStore({
  reducer: {
    code: codeSlice.reducer,
    project: projectSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

(window as any).__store__ = store;

export { store };
export type { RootState };
