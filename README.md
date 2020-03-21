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

