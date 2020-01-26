const { HCF, LCM, Problem5 } = require('./factors');

test('the HIGHEST COMMON FACTOR of TWO NUMBERS is calculated', () => {
    const hcf = new HCF();
    expect(hcf.solve(108, 24)).toBe(12);
    expect(hcf.solve(138, 198)).toBe(6);
    expect(hcf.solve(2, 3)).toBe(0);
});

test('the LOWEST COMMON MULTIPLE of TWO NUMBERS is calculated', () => {
    const lcm = new LCM();
    let lowest = lcm.solve(108, 24);
    expect(lowest).toBe(216);

    lowest = lcm.solve(1, 2);
    expect(lowest).toBe(2);

    lowest = lcm.solve(2, 8);
    expect(lowest).toBe(8);

    lowest = lcm.solve(3, 8);
    expect(lowest).toBe(24);

    lowest = lcm.solve(326, 85);
    expect(lowest).toBe(27710);

    lowest = lcm.solve(16, 52);
    expect(lowest).toBe(208);

    lowest = lcm.solve(208, 52);
    expect(lowest).toBe(208);
});

test('Problem5 should return the LOWEST COMMON MULTIPLE for ALL GIVEN INPUTS', () => {
    const p5 = new Problem5();

    expect(p5.solve([1])).toBe(1);
    expect(p5.solve([1, 2])).toBe(2);
    expect(p5.solve([1, 2, 3])).toBe(6);
    expect(p5.solve([1, 2, 3, 4])).toBe(12);
    expect(p5.solve([1, 2, 3, 4, 5])).toBe(60);
    expect(p5.solve([1, 2, 3, 4, 5, 6])).toBe(60);
    expect(p5.solve([1, 2, 3, 4, 5, 6, 7])).toBe(420);
    expect(p5.solve([1, 2, 3, 4, 5, 6, 7, 8])).toBe(840);
    expect(p5.solve([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(2520);
    expect(p5.solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(2520);
});