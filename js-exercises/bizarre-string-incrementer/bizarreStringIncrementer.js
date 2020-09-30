function bizarreStringIncrementer(string) {
  if (Number.isNaN(parseInt(string[string.length - 1], 10))) {
    return `${string}1`;
  }
  return string.replace(/(0*)([0-9]+$)/, (match, s1, s2) => {
    const addedVal = parseInt(s2, 10) + 1;
    return addedVal.toString().length > s2.length ? s1.slice(0, -1) + addedVal : s1 + addedVal;
  });
}

export {
  bizarreStringIncrementer,
};
