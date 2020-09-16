function duplicateLetters(...args) {
  // eslint-disable-next-line no-param-reassign
  const result = [...args[0]].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a; }, {});
  let max = 1;
  for (const prop in result) {
    if (max < result[prop]) {
      max = result[prop];
    }
  }
  if (max !== 1) return max;
  return false;
}

export {
  duplicateLetters,
};
