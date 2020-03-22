# Project Euler

My solutions to the [Project Euler](https://projecteuler.net/about) problems.

In all instances I am trying to make the solution as extensible as possible. For example, Problem 1

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

[multiplier.js](./problems/multiplier.js) contains the classes Multiplier and Palindrome. Multiplier returns a set of unique products for the two given input maximums. Palindrome has one method which returns a boolean indicating whether the input string is palindromic.

---

### Problem 5

[factors.js](./problems/factors.js) has classes for calculating the highest common factor and lowest commom multiples of two inputs. The HCF class makes use of the Prime class from Problem 3 to determine the prime factors of the inputs.

---

### Problem 6

[problem6.js](./problems/problem6.js) requires no helper classes to solve, instead it makes use of the JavaScript [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) object to provide the solution.

---

### Problem 7

[prime.js](./problems/prime.js) is extended to provider a solution for Problem 7, to find the Nth prime number. By calling the prime sieve repeatedly adding N each time until the resultant set of primes was large enough that it had more than R results. I expect there is a more efficient way of solving this but I was more interested in code reuse than learning some new maths.

---

### Problem 8

[productChain.js](./problems/productChain.js) solves Problem 8 for any given input string and for any given number of consecutive digits required. By splitting the input at 0 (which would result in the product being 0) and returning early when the split part length is less than N, the solution is made more efficient that scanning the whole input sequence.

---

### Problem 9

[triplet.js](./problems/triplet.js) accepts any input N and solves according to the requirements of Problem 9, that a &lt; b &lt; c AND a + b + c = N.



