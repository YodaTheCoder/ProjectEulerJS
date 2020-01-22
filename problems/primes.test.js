const { Prime, Problem3 } = require('./prime');

test('the correct SEQUENCE OF PRIMES is generated', () => {
    const p = new Prime();
    const primes = p.sieve(100);
    const primesUnder100 = [
        2, 3, 5, 7, 11, 13, 17, 19, 23,
        29, 31, 37, 41, 43, 47, 53, 59,
        61, 67, 71, 73, 79, 83, 89, 97
    ];
    expect(primes).toEqual(primesUnder100);
});

test('the correct FACTORS of N is returned', () => {
    const p = new Prime();
    const factors = p.factors(13195);
    const factorsExpected = [5, 7, 13, 29];
    expect(factors).toEqual(factorsExpected);
});

test('Problem3 should return the LARGEST PRIME FACTOR of N', () => {
    const p3 = new Problem3();
    expect(p3.solve(1)).toBe(0);
    expect(p3.solve(13195)).toBe(29);
});