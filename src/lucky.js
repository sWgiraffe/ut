module.exports = {
  isLuckNum,
}
function isLuckNum (num) {
  if (num <= 0) {
    return false;
  }
  if (num == 3) {
    return true;
  }
  if (num === 7 || num === 8) {
    return true;
  }
  if (num === 1) {
    return true;
  }
  return false;
}
