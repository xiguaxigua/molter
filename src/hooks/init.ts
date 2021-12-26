import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initCode } from "../store/features/code-slice";
import { cloneDeep } from "../utils/clone";
import { DEFAULT_CODE } from "../utils/constants";
import { dbAdd, dbFind } from "../utils/db";
import { genId } from "../utils/id";
import { parseQuery, silentAddURLQuery } from "../utils/query";

/** 初始化 */
function useInit() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      let { mid = "" } = parseQuery();
      if (!mid) {
        // 未发现 url 中的 mid，走创建流程
        mid = genId();
        silentAddURLQuery({ mid });
        const codeData = cloneDeep<typeof DEFAULT_CODE>(DEFAULT_CODE);
        dispatch(initCode(codeData));
        dbAdd({ mid, code: codeData, options: {} });
      } else {
        // 发现 url 中的 mid，走查询流程
        const data: any = await dbFind(mid);
        if (!data) {
          console.log("数据未找到");
        } else {
          dispatch(initCode(data.code));
        }
      }
    })();
  }, [dispatch]);
}

export { useInit };
