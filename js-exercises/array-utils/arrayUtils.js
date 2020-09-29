function myForEach(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i], i, array);
  }
}

function myMap(array, callback) {
  const myNewArray = [];
  for (let i = 0; i < array.length; i += 1) {
    const newElememt = callback(array[i], i, array);
    myNewArray.push(newElememt);
  }
  return myNewArray;
}

function myFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    const isMatch = callback(array[i], i, array);
    if (isMatch) {
      result.push(array[i]);
    }
  }
  return result;
}

function myReduce(array, callback, initialValue) {
  for (let i = 0; i < array.length; i += 1) {
    // eslint-disable-next-line no-param-reassign
    initialValue = callback(initialValue, array[i], i, array);
  }
  return initialValue;
}

export {
  myForEach,
  myMap,
  myFilter,
  myReduce,
};
