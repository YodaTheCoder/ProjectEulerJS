const problems = require('./problems');

const p1 = new problems.Problem1([3, 5]);
console.log(`The solution to Project Euler problem 1 is ${p1.solve(1000)}`);

const p2 = new problems.Problem2(1, 2, 4000000);
console.log(`The solution to Project Euler problem 2 is ${p2.solve()}`);

const p3 = new problems.Problem3();
console.log(`The solution to Project Euler problem 3 is ${p3.solve(600851475143)}`);

const p4 = new problems.Problem4();
console.log(`The solution to Project Euler problem 4 is ${p4.solve(999, 999)}`);

const p5 = new problems.Problem5();
console.log(`The solution to Project Euler problem 5 is ${p5.solve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])}`);

const p6 = new problems.Problem6(100);
console.log(`The solution to Project Euler problem 6 is ${p6.difference}`);

const p7 = new problems.Problem7();
console.log(`The solution to Project Euler problem 7 is ${p7.solve(10001)}`);

const p8 = new problems.Problem8();
console.log(`The solution to Project Euler problem 8 is ${p8.solve('7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450', 13)}`);

const p9 = new problems.Problem9();
console.log(`The solution to Project Euler problem 9 is ${JSON.stringify(p9.solve(1000))}`);
