const currying = (fn) => {
  const paramLength = fn.length;
  return (...args) => (args.length > paramLength ? fn(...args)
    : (...args2) => fn(args.concat(args2)));
};

module.exports = currying;
