function genId() {
  return `${Date.now().toString(36)}${Number(
    (Math.random() * 1e6).toFixed(0)
  ).toString(36)}`;
}

export { genId };
