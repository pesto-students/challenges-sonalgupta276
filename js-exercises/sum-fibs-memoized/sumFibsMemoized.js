function sumFibs(num) {
  let fib1 = 1;
  let fib2 = 1;
  let sum = fib1 + fib2;
  let fib3 = 0;
  while (fib3 <= num) {
    fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
    if (fib3 > num) {
      break;
    }
    if (fib3 % 2 !== 0) {
      sum += fib3;
    }
  }
  return sum;
}

// eslint-disable-next-line no-shadow
function cacheFunction(sumFibs) {
  const memory = new Map();
  return (arg) => {
    if (memory.has(arg)) {
      return memory.get(arg);
    }
    const result = sumFibs(arg);
    memory.set(arg, result);
    return result;
  };
}

export { sumFibs, cacheFunction };
