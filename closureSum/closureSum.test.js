const closureSum = require('./closureSum');

describe('Testing closure function', () => {
  it('testing with valid numbers', () => {
    const testNum = 2;
    const testClosureNum = 3;
    const result = 5;
    expect(closureSum(testNum)(testClosureNum)).toBe(result);
  });
  it('testing with a valid number and undefined', () => {
    const testNum = 2;
    const testClosureNum = undefined;
    const result = NaN;
    expect(closureSum(testNum)(testClosureNum)).toBe(result);
  });
  it('testing with a null and undefined', () => {
    const testNum = null;
    const testClosureNum = undefined;
    const result = NaN;
    expect(closureSum(testNum)(testClosureNum)).toBe(result);
  });
  it('testing with a {} and {}', () => {
    const testNum = {};
    const testClosureNum = {};
    const result = NaN;
    expect(closureSum(testNum)(testClosureNum)).toBe(result);
  });
});
