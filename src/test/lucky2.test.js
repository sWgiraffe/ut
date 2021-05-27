const { isLuckNum } = require('../test2/lucky');

describe('Test', () => {
  // it('Work fine', () => {
  //   expect(
  //     isLuckNum(1)
  //   ).toBe(false);
  // });
  it('Work fine', () => {
    expect(
      isLuckNum(-1)
    ).toBe(false);
    expect(
      isLuckNum(7)
    ).toBe(true);
    expect(
      isLuckNum(8)
    ).toBe(true);
    expect(
      isLuckNum(10)
    ).toBe(false);
  });
});
