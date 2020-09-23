const sumEvenArgs = (...args) => {
  const evenNums = args.filter(num => num % 2 === 0);
  return evenNums.reduce((accumulator, element) => accumulator + element, 0);
};

export { sumEvenArgs };
