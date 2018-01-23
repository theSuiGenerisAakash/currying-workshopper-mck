const longDelInvoc = require('./longDelInvoc');

describe('testing persistent closure function', () => {
  it('testing with 3 numbers', () => {
    const testArr = [2, 3, 4];
    const result = 9;
    testArr.forEach(a => longDelInvoc(a));
    expect(longDelInvoc()).toBe(result);
  });
  it('testing with 3 numbers', () => {
    const testArr = [2, 3, 4, undefined];
    const result = 0;
    testArr.forEach(a => longDelInvoc(a));
    expect(longDelInvoc()).toBe(result);
  });
});
