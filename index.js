const { Problem1, Problem2, Problem3, Problem4 } = require('./problems');

const p1 = new Problem1([3, 5]);
console.log(`The solution to Project Euler problem 1 is ${p1.solve(1000)}`);

const p2 = new Problem2(1, 2, 4000000);
console.log(`The solution to Project Euler problem 2 is ${p2.solve()}`);

const p3 = new Problem3();
console.log(`The solution to Project Euler problem 3 is ${p3.solve(600851475143)}`);

const p4 = new Problem4();
console.log(`The solution to Project Euler problem 4 is ${p4.solve(999, 999)}`);
