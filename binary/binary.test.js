const binary = require('./binary');

describe('Testing sum function in binary.js', () => {
  it('testing with valid numbers', () => {
    const first = 2;
    const second = 3;
    const result = 5;
    expect(binary(first, second)).toBe(result);
  });
  it('testing with number and undefined', () => {
    const first = 2;
    const second = undefined;
    const result = NaN;
    expect(binary(first, second)).toBe(result);
  });
});
