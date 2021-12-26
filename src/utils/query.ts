/** URL 参数 */
interface Query {
  /** 唯一标识 */
  mid: string;
}

/**
 * 获取 URL 中的参数
 *
 * @param queryStr - querystring，默认为 location.search
 * @returns 参数对象
 */
function parseQuery<K extends keyof Query>(queryStr?: string): Partial<Query> {
  // 格式化 query string
  if (!queryStr) {
    queryStr = window.location.search;
  }
  if (queryStr.startsWith("?")) {
    queryStr = queryStr.slice(1);
  }

  return queryStr.split("&").reduce<Partial<Query>>((acc, cur) => {
    const parts = cur.split("=");
    const name = parts[0] as K;
    const value = parts[1] as unknown as Query[K];
    acc[name] = value;
    return acc;
  }, {});
}

/**
 * 修改url params (包含同名替换), params 值如果为 undefined, 将认为是删掉这个 param
 *
 * @param params - 参数
 * @param url - url
 * @returns 处理好的 url
 */
function addQuery(params: Partial<Query>, url = window.location.href): string {
  const searchIndex = url.indexOf("?");
  const prefix = searchIndex === -1 ? url : url.substring(0, searchIndex);
  const searchStr =
    searchIndex === -1 ? undefined : url.substring(searchIndex, url.length);
  const search = new URLSearchParams(searchStr);
  Object.keys(params).forEach((key) => {
    if (params[key as keyof Query] == null) {
      search.delete(key);
    } else {
      search.set(key, String(params[key as keyof Query]));
    }
  });
  return `${prefix}?${search.toString()}`;
}

/**
 * 在 url 上静默添加 querystring
 *
 * @param params - 参数
 * @param url - url
 */
function silentAddURLQuery(params: Partial<Query>) {
  const newUrl = addQuery(params);
  window.history.replaceState({}, "", newUrl);
}

export { parseQuery, addQuery, silentAddURLQuery };
