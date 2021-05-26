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
  });
});
