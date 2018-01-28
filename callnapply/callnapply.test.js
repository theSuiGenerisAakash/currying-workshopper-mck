const callnapply = require('./callnapply');

describe('testing caller function', () => {
  it('testing Function.prototype.call as mock function', () => {
    const outer = function () {};
    outer.call = jest.fn();
    const name = 'Aakash';
    const age = 22;
    const tee = 'M';
    callnapply.caller(this, outer, name, age, tee);
    expect(outer.call).toHaveBeenCalledWith(this, name, age, tee);
  });
  it('testing Function.prototype.call as mock function with undefined', () => {
    const outer = function () {};
    outer.call = jest.fn();
    // const name = 'Aakash';
    // const age = 22;
    // const tee = 'M';
    callnapply.caller(this, outer);
    expect(outer.call).toHaveBeenCalledWith(this, undefined, undefined, undefined);
  });
  it('testing Function.prototype.call as mock function with one of the args as null', () => {
    const outer = function () { return 'Yes'; };
    outer.call = jest.fn();
    const name = 'Aakash';
    // const age = 22;
    const tee = 'M';
    callnapply.caller(this, outer, name, null, tee);
    expect(outer.call).toHaveBeenCalledWith(this, name, null, tee);
  });
  it('testing if passed method actually runs', () => {
    const outer = jest.fn(() => 'Yes');
    const name = 'Aakash';
    const age = 22;
    const tee = 'M';
    expect(callnapply.caller(this, outer, name, age, tee)).toBe('Yes');
  });
});

describe('testing applier function', () => {
  it('testing Function.prototype.apply as mock function', () => {
    const outer = function () {};
    outer.apply = jest.fn();
    const args = ['Aakash', 22, 'M'];
    callnapply.applier(this, outer, args);
    expect(outer.apply).toHaveBeenCalledWith(this, args);
  });
  it('testing Function.prototype.apply as mock function with empty array', () => {
    const outer = function () {};
    outer.apply = jest.fn();
    const args = [];
    callnapply.applier(this, outer, args);
    expect(outer.apply).toHaveBeenCalledWith(this, args);
  });
  it('testing Function.prototype.apply as mock function with an array of 2 undefined', () => {
    const outer = function () {};
    outer.apply = jest.fn();
    const args = [undefined, undefined];
    callnapply.applier(this, outer, args);
    expect(outer.apply).toHaveBeenCalledWith(this, args);
  });
});
