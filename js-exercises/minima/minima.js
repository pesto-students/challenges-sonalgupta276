function minima(...args) {
  const sortedArray = args[1].sort((a, b) => a - b);
  return sortedArray.splice(0, args[0]);
}

export { minima };
