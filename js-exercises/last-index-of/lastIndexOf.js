function lastIndexOf(...args) {
  const item = args[0];
  const arr = args[1];
  let max = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === item) {
      max = i;
    }
  }
  return max;
}

export {
  lastIndexOf,
};
