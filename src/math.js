module.exports = {
  isLuckNum,
}
function isLuckNum (num) {
  if (num <= 0) {
    return false;
  }
  if (num === 7) {
    return true;
  }
  return false;
}
