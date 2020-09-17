function balancedBraces(...args) {
  const str = args[0];
  if (str.length <= 1) return false;
  let matchingOpeningBracket;
  let ch;
  const stack = [];

  const openingBrackets = ['[', '{', '('];
  const closingBrackets = [']', '}', ')'];

  for (let i = 0; i < str.length; i += 1) {
    ch = str[i];
    if (openingBrackets.includes(ch) || closingBrackets.includes(ch)) {
      if (closingBrackets.indexOf(ch) > -1) {
        matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)];
        if (stack.length === 0 || (stack.pop() !== matchingOpeningBracket)) {
          return false;
        }
      } else {
        stack.push(ch);
      }
    }
  }
  return (stack.length === 0);
}

export {
  balancedBraces,
};
