function diffArray(array1, array2) {
  const difference1 = array1.filter(num => array2.indexOf(num) === -1);
  const difference2 = array2.filter(num => array1.indexOf(num) === -1);
  return difference1.concat(difference2);
}

export {
  diffArray,
};
