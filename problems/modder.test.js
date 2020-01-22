const { Modder, Problem1 } = require('./modder');

const m = new Modder();

test('isModN(3) returns a function that solves MODULO 3', () => {
    const isMod3 = m.isModN(3);

    expect(isMod3(3)).toBe(true);
    expect(isMod3(4)).toBe(false);
    expect(isMod3(5)).toBe(false);
    expect(isMod3(6)).toBe(true);
});

test('isModN(5) returns a function that solves MODULO 5', () => {
    const isMod5 = m.isModN(5);

    expect(isMod5(3)).toBe(false);
    expect(isMod5(4)).toBe(false);
    expect(isMod5(5)).toBe(true);
    expect(isMod5(6)).toBe(false);
    expect(isMod5(10)).toBe(true);
});

test('Problem1 should solve for N for modulo operators in CONSTRUCTOR', () => {
    const p1 = new Problem1([3, 5]);
    expect(p1.solve(10)).toBe(23);
});