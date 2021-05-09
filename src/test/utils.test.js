const { isDogeCoin } = require('../utils');

describe('Test', () => {
  it('no dogecoin', () => {
    expect(
      isDogeCoin('eth')
    ).toBe(false);
  });
});
