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

test('the correct UNIQUE FACTORS of N are returned', () => {
    const p = new Prime();
    let factors = p.factors(13195);
    let factorsExpected = [5, 7, 13, 29];
    expect(factors).toEqual(factorsExpected);

    factors = p.factors(52);
    factorsExpected = [2, 13];
    expect(factors).toEqual(factorsExpected);

    factors = p.factors(1000002);
    factorsExpected = [2, 3];
    expect(factors).toEqual(factorsExpected);
});

test('the correct FULL SET OF FACTORS of N are returned', () => {
    const p = new Prime();
    let factors = p.factorise(108);
    let factorsExpected = [2, 2, 3, 3, 3];
    expect(factors).toEqual(factorsExpected);

    factors = p.factorise(24);
    factorsExpected = [2, 2, 2, 3];
    expect(factors).toEqual(factorsExpected);

});

test('Problem3 should return the LARGEST PRIME FACTOR of N', () => {
    const p3 = new Problem3();
    expect(p3.solve(1)).toBe(0);
    expect(p3.solve(13195)).toBe(29);
});