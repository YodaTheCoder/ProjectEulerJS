const { Problem1, Problem2 } = require('./problems');

const p1 = new Problem1([3, 5]);
console.log(`The solution to Project Euler problem 1 is ${p1.solve(1000)}`);

const p2 = new Problem2(1, 2, 4000000);
console.log(`The solution to Project Euler problem 2 is ${p2.solve()}`);
