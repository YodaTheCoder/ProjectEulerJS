const { Fibonacci, Problem2 } = require('./fibonacci');

test('the CORRECT SEQUENCE is generated for the start conditions', () => {
    const f = new Fibonacci(1, 2);
    const terms = f.terms(10);

    expect(terms.length).toBe(10);
    // 1,  2,  3,  5,  8, 13, 21, 34, 55, 89
    expect(terms[0]).toBe(1);
    expect(terms[1]).toBe(2);
    expect(terms[2]).toBe(3);
    expect(terms[3]).toBe(5);
    expect(terms[4]).toBe(8);
    expect(terms[5]).toBe(13);
    expect(terms[6]).toBe(21);
    expect(terms[7]).toBe(34);
    expect(terms[8]).toBe(55);
    expect(terms[9]).toBe(89);
});

test('the CORRECT MAXIMUM is observed when creating a sequence', () => {
    const f = new Fibonacci(1, 2);
    const terms = f.termsToMax(89);

    expect(terms.length).toBe(10);
    // 1,  2,  3,  5,  8, 13, 21, 34, 55, 89
    expect(terms[0]).toBe(1);
    expect(terms[1]).toBe(2);
    expect(terms[2]).toBe(3);
    expect(terms[3]).toBe(5);
    expect(terms[4]).toBe(8);
    expect(terms[5]).toBe(13);
    expect(terms[6]).toBe(21);
    expect(terms[7]).toBe(34);
    expect(terms[8]).toBe(55);
    expect(terms[9]).toBe(89);
});

test('Problem2 should solve for N for modulo operators in CONSTRUCTOR', () => {
    const p2 = new Problem2(1, 2, 89);
    // 1,  2,  3,  5,  8, 13, 21, 34, 55, 89
    // 2 + 8 + 34
    expect(p2.solve()).toBe(44);
});
