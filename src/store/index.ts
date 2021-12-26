import { configureStore } from "@reduxjs/toolkit";
import { codeSlice } from "./features/code-slice";
import { projectSlice } from "./features/project-slice";
import { syncDb } from "./middleware/sync-db";

const store = configureStore({
  reducer: {
    code: codeSlice.reducer,
    project: projectSlice.reducer,
  },
  middleware: (getMiddleware) => getMiddleware().concat(syncDb),
});

const getState = () => store.getState();

type RootState = ReturnType<typeof store.getState>;

(window as any).__store__ = store;

export { store, getState };
export type { RootState };
