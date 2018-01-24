const currying = (fn) => {
  const paramLength = fn.length;
  return fr (...args) => (args.length > paramLength ? fn(...args)
    : (...args2) => fr(args.concat(args2)));
};

module.exports = currying;
