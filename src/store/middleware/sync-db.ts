import { getState } from "..";
import { dbSlowPut } from "../../utils/db";

const syncDb = (storeAPI: any) => (next: any) => (action: any) => {
  if (["code/setHtml", "code/setCss", "code/setJs"].includes(action.type)) {
    setTimeout(() => {
      const {
        project: { id },
        code,
      } = getState();
      dbSlowPut({ mid: id, code, options: {} });
    }, 100);
  }
  return next(action);
};

export { syncDb };
