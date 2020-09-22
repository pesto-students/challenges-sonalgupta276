function add(str1, str2) {
  if (str1.length > str2.length) {
    // eslint-disable-next-line no-param-reassign
    [str2, str1] = [str1, str2];
  }
  const n1 = str1.length;
  const n2 = str2.length;
  const diff = n2 - n1;
  let str = '';
  let carry = 0;
  let sum;

  for (let i = n1 - 1; i >= 0; i -= 1) {
    sum = parseInt(str1[i], 10) + parseInt(str2[i + diff], 10) + carry;
    str += parseInt(sum % 10, 10);
    carry = sum / 10;
  }
  for (let i = n2 - n1 - 1; i >= 0; i -= 1) {
    sum = parseInt(str2[i], 10) + carry;
    str += parseInt(sum % 10, 10);
    carry = sum / 10;
  }
  if (carry) {
    str += parseInt(carry, 10);
  }
  str = str.split('').reverse().join('');
  return str.replace(/^0+/, '');
}
function addBigIntegers(intString) {
  const array = intString.split('\n');
  let sum = array[0];
  for (let i = 1; i < array.length; i += 1) {
    sum = add(sum, array[i]);
  }
  return sum;
}

export { addBigIntegers };
