function decodeString(str, i) {
  let ascii = str.charCodeAt(i) - 13;
  if (ascii < 65) {
    const diff = 65 - ascii;
    ascii = 90 - diff + 1;
  }
  return String.fromCharCode(ascii);
}

function isUpperCase(char) {
  const regexp = /^[A-Z]/;
  return regexp.test(char);
}

function rot13(str) {
  let decodedString = '';
  for (let i = 0; i < str.length; i += 1) {
    if (isUpperCase(str[i])) {
      decodedString += decodeString(str, i);
    } else {
      decodedString += str[i];
    }
  }
  return decodedString;
}

export {
  rot13,
};
