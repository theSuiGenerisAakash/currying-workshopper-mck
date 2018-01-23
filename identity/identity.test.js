const identity = require('./identity');

describe('testing identity function', () => {
  it('testing with a string', () => {
    const strTest = 'I am Aakash';
    expect(identity(strTest)).toBe('I am Aakash');
  });
  it('testing with undefined', () => {
    expect(identity()).toBe(undefined);
  });
  it('testing with null', () => {
    expect(identity(null)).toBe(null);
  });
  it('testing with a number', () => {
    expect(identity(32)).toBe(32);
  });
  it('testing with an object', () => {
    expect(identity({})).toEqual({});
  });
});
