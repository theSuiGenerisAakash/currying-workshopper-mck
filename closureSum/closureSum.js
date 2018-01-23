module.exports = num => anotherNum => (typeof num === 'number' && typeof anotherNum === 'number' ? num + anotherNum : NaN);
