const currying = (fn) => {
  const paramLength = fn.length;
  const fnRet = (...args) => (args.length > paramLength ? fn(...args)
    : (...args2) => fnRet(...args.concat(args2)));
  return fnRet;
};

module.exports = currying;
