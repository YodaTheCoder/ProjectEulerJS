const { Triplet, Problem9 } = require('./triplet');

test('the CORRECT TRIPLET is returned for the desired SUM', () => {
    const t = new Triplet();
    let answer = t.sumTo(12);
    expect(answer).toBeDefined();
    expect(answer.a).toBe(3);
    expect(answer.b).toBe(4);
    expect(answer.c).toBe(5);

    const p = new Problem9();
    answer = p.solve(12);
    expect(answer).toBeDefined();
    expect(answer.a).toBe(3);
    expect(answer.b).toBe(4);
    expect(answer.c).toBe(5);
});

test('the NULL is returned if the desired SUM CAN NOT BE FOUND', () => {
    const t = new Triplet();
    const answer = t.sumTo(20);
    expect(answer).toBeNull();
});

