const { isLuckNum } = require('../math');

describe('Test', () => {
  it('Work fine', () => {
    expect(
      isLuckNum(1)
    ).toBe(false);
  });
  it('Work fine', () => {
    expect(
      isLuckNum(7)
    ).toBe(true);
  });
});
