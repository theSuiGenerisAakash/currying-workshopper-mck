const currying = require('./currying');

const func = (a, b, c) => a + b + c;
describe('testing currying function', () => {
  const first = 2;
  const second = 3;
  const third = 4;
  it('testing with a function with 3 parameters together', () => {
    expect(currying(func)(first, second, third) === func(first, second, third)).toBe(true);
  });
  it('testing with a curried function(initially with one parameter) with 2 parameters together', () => {
    expect(currying(func)(first)(second, third) === func(first, second, third)).toBe(true);
  });
  it('testing with a curried function with each argument individually', () => {
    expect(currying(func)(first)(second)(third) === func(first, second, third)).toBe(true);
  });
  it('testing with a curried function(initially with one parameter) and then with 2 parameters together', () => {
    expect(currying(func)(first)(second, third) === func(first, second, third)).toBe(true);
  });
});
