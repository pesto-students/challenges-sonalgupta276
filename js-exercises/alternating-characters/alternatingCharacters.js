function alternatingCharactersUtil(s) {
  let result = 0;
  if (s.length >= 1 && s.length <= 100000) {
    let arr = s.split('');
    let past = arr[0];

    arr = arr.filter((item, key) => {
      if (item !== past && key !== 0) {
        past = item;
        return item;
      }
      return false;
    });
    result = s.length - [s.charAt(0), ...arr].length;
  }
  return result;
}

function alternatingCharacters(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(alternatingCharactersUtil(arr[i]));
  }
  return result;
}

export { alternatingCharacters };
