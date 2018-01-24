// const callnapply = require('./callnapply');
//
// const update = function update(name, age, tShirtSize) {
//   this.name = name;
//   this.age = age;
//   this.tShirtSize = tShirtSize;
// };
//
// describe('testing call function', () => {
//   it('testing with {} and Aakash, 22, M', () => {
//     const tee = 'M';
//     const age = 22;
//     const name = 'Aakash';
//     const fn = jest.fn(callnapply.caller);
//     callnapply.caller({}, update, name, age, tee);
//     expect(fn).toHaveBeenCalledWith({}, update, name, age, tee);
//     expect(callnapply.caller({}, update, name, age, tee)).toEqual({ name: 'Aakash', age: 22, tShirtSize: 'M' });
//   });
// });
