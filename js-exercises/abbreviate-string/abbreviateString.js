// import { isString } from "util";

function isString(str) {
  if (typeof str === 'string') {
    return true;
  }
  return false;
}

function abbreviateString(str) {
  if (!isString(str)) {
    throw new Error();
  }
  const arrayOfStrings = str.split(' ');
  const first = arrayOfStrings.shift();
  const last = arrayOfStrings.pop();
  const abbreviatedString = `${first} ${last.charAt(0).toUpperCase()}.`;
  return abbreviatedString;
}

export { abbreviateString };
