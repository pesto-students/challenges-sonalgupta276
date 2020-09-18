// eslint-disable-next-line no-unused-vars
function cb(...args) {
  let sum = 0;
  for (const arg of args) sum += arg;
  return sum;
}

// eslint-disable-next-line no-shadow
function limitFunctionCallCount(cb, n) {
  let counter = 1;
  // eslint-disable-next-line consistent-return
  return (...args) => {
    if (args.length === 0) return null;
    while (counter <= n) {
      counter += 1;
      const result = cb(...args);
      return result;
    }
  };
}

export {
  limitFunctionCallCount,
};
