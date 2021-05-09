function isDogeCoin(name) {
  if (name !== 'doge') {
    return false;
  }
  return true;
}

module.exports = {
  isDogeCoin,
}