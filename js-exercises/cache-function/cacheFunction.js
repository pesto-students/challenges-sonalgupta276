// eslint-disable-next-line no-unused-vars
function cb(num) {
  return num * num;
}

// eslint-disable-next-line no-shadow
function cacheFunction(cb) {
  const memory = new Map();
  return (arg) => {
    if (memory.has(arg)) {
      return memory.get(arg);
    }
    const result = cb(arg);
    memory.set(arg, result);
    return result;
  };
}

export {
  cacheFunction,
};
