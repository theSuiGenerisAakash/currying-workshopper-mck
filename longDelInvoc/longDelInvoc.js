let total = 0;
const longDelInvoc = num =>
  (num === undefined ? (temp = total, total = 0, temp) : (total += num, longDelInvoc));
module.exports = longDelInvoc;
