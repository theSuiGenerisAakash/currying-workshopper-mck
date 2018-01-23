const identity = require('./identity');

describe('testing identity function', () => {
  it('testing with a string', () => {
    const strTest = 'I am Aakash';
    expect(identity(strTest)).toBe('I am Aakash');
  });
  it('testing with undefined', () => {
    expect(identity()).toBe(undefined);
  });
});
