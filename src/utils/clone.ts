function cloneDeep<T>(v: any): T {
  return JSON.parse(JSON.stringify(v));
}

export { cloneDeep };
