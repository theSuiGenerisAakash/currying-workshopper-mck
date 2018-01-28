const callnapply = require('./callnapply');

describe('testing call function', () => {
  it('testing function for return type', () => {
    const func = jest.fn();
    expect(typeof callnapply.caller(this, func)).toBe('undefined');
  });
  it('testing Function.prototype.call as mock function', () => {
    const outer = function () {};
    outer.call = jest.fn();
    const name = 'Aakash';
    const age = 22;
    const tee = 'M';
    callnapply.caller(this, outer, name, age, tee);
    expect(outer.call).toHaveBeenCalledWith(this, name, age, tee);
  });
  it('testing Function.prototype.call as mock function', () => {
    const outer = function () {};
    outer.call = jest.fn();
    // const name = 'Aakash';
    // const age = 22;
    // const tee = 'M';
    callnapply.caller(this, outer);
    expect(outer.call).toHaveBeenCalledWith(this, undefined, undefined, undefined);
  });
});
