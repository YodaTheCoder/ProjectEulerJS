const { Problem6 } = require('./problem6');

test('the correct DIFFERENCE between SUM OF SQUARES and SQUARE SUM is returned', () => {
    const p = new Problem6(10);
    expect(p.squareSum).toBe(3025);
    expect(p.sumSquare).toBe(385);
    expect(p.difference).toBe(2640);
});