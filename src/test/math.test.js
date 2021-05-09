const { isLuckNum } = require('../math');

describe('Test', () => {
  it('Work fine', () => {
    expect(
      isLuckNum(1)
    ).toBe(false);
  });
});
