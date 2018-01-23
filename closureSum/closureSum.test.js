const closureSum = require('./closureSum');

describe('Testing closure function', () => {
  it('testing with a valid number', () => {
    const testNum = 2;
    const testClosureNum = 3;
    const result = 5;
    expect(closureSum(testNum)(testClosureNum)).toBe(result);
  });
});
