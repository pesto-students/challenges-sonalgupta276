function flipArgs(args) {
  return args;
}
const flipped = flipArgs((...args) => {
  const output = [];
  while (args.length) {
    output.push(args.pop());
  }
  return output;
});

export {
  flipped,
};
