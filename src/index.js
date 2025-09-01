module.exports = function reverse(n) {
  const tempN = Math.abs(n);
  const reversed = tempN.toString().split('').reverse().join('');
  return reversed;
};
