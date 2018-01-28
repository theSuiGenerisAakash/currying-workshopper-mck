const callAndApply = {
  caller(object, method, nameArg, ageArg, tShirtSizeArg) {
    return method.call(object, nameArg, ageArg, tShirtSizeArg);
  },
  applier(object, method, argumentsArr) {
    method.apply(object, argumentsArr);
  },
};
module.exports = callAndApply;
