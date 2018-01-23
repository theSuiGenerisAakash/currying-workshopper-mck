const callAndApply = {
  caller(object, method, nameArg, ageArg, tShirtSizeArg) {
    // method.call(object, nameArg, ageArg, tShirtSizeArg);
    const objTest = {};
    method.call(objTest, nameArg, ageArg, tShirtSizeArg);
    return objTest;
  },
  applier(object, method, argumentsArr) {
    method.apply(object, argumentsArr);
  },
};
module.exports = callAndApply;
