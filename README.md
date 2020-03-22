# Project Euler

My solutions to the [Project Euler](https://projecteuler.net/about) problems.

In all instances I am trying to make the solution as extensible as possible. For example, problem 1

```
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
```

In this solution I allow both the upper limit to the input function to be defined, as well as allowing any number of divisors to be passed. This allows me to test the code using the example from the problem description and to use the exact same code to solve the problem just by modifying the inputs.

```JavaScript
test('Problem1 should solve for N for modulo operators in CONSTRUCTOR', () => {
    const p1 = new Problem1([3, 5]);
    expect(p1.solve(10)).toBe(23);
});
```

```JavaScript
const p1 = new problems.Problem1([3, 5]);
console.log(`The solution to Project Euler problem 1 is ${p1.solve(1000)}`);
```

## Tests

Tests are written using the [Jest](https://jestjs.io/) framework and coverage is 100%

```bash
> jest --passWithNoTests --coverage

 PASS  problems/productChain.test.js
 PASS  problems/factors.test.js
 PASS  problems/fibonacci.test.js
 PASS  problems/modder.test.js
 PASS  problems/multiplier.test.js
 PASS  problems/primes.test.js
 PASS  problems/triplet.test.js
 PASS  problems/problem6.test.js
-----------------|----------|----------|----------|----------|-------------------|
File             |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------|----------|----------|----------|----------|-------------------|
All files        |      100 |      100 |      100 |      100 |                   |
 factors.js      |      100 |      100 |      100 |      100 |                   |
 fibonacci.js    |      100 |      100 |      100 |      100 |                   |
 modder.js       |      100 |      100 |      100 |      100 |                   |
 multiplier.js   |      100 |      100 |      100 |      100 |                   |
 prime.js        |      100 |      100 |      100 |      100 |                   |
 problem6.js     |      100 |      100 |      100 |      100 |                   |
 productChain.js |      100 |      100 |      100 |      100 |                   |
 triplet.js      |      100 |      100 |      100 |      100 |                   |
-----------------|----------|----------|----------|----------|-------------------|

Test Suites: 8 passed, 8 total
Tests:       26 passed, 26 total
Snapshots:   0 total
Time:        3.961s
Ran all test suites.
```

---

### Problem 1

[modder.js](./problems/modder.js) contains the class Problem1 which when initialised with the array `[3,5]` and called with `.solve(1000)` returns the solution. `Modder.isModN` returns a curried function `m` which when called with number `n` returns true if `m MOD n` is zero.

---

### Problem 2

[fibonacci.js](./problems/fibonacci.js) solves Problem 2 by implementing a Fibonacci class which can be initialised with any 2 numbers not just 1 and 2 from the classic Fibonacci sequence.

---

### Problem 3

[prime.js](./problems/prime.js) uses the [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) to find all the prime numbers less than the given input `n` before checking to see if each of those primes is a factor of `n`.

---

### Problem 4

[multiplier.js](./problems/multiplier.js) contains the classes Multiplier and Palindrom. Multiplier returns a set of unique products for the two given input maximums. Palindrome has one method which returns a boolean indicating whether the input string is palindromic.

