const { Multiplier, Palindrome, Problem4 } = require('./multiplier');

test('all of the PRODUCTS of the INPUTS are calculated correctly', () => {
    const m = new Multiplier(3, 3);
    const products = [0, 1, 2, 3, 4, 6, 9];
    expect(m.products).toEqual(products);
});

test('PALINDROMES can be identified', () => {
    const p = new Palindrome();
    expect(p.test('foo')).toBe(false);
    expect(p.test('foof')).toBe(true);
});

test('the LARGEST PALINDROME is found from the list of PRODUCTS', () => {
    const p = new Problem4();
    const largest = p.solve(8, 11);
    expect(largest).toBe(88);
});
