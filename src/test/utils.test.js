const { isDogeCoin } = require('../test2/utils');

describe('Test', () => {
  it('no dogecoin', () => {
    expect(
      isDogeCoin('eth')
    ).toBe(false);
  });
});
