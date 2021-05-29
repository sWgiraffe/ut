const { isDogeCoin } = require('../test2/child1/child2/utils');

describe('Test', () => {
  it('no dogecoin', () => {
    expect(
      isDogeCoin('eth')
    ).toBe(false);
  });
});
