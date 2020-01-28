class Prime {
    sieve(n) {
        // https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
        const candidates = Array(n).fill(true);
        candidates[0] = false;
        candidates[1] = false;

        for (let i = 2, l = Math.sqrt(n); i < l; i++) {
            if (candidates[i]) {
                for (let j = i * i, k = i; j < n; j = i * i + k, k += i) {
                    candidates[j] = false;
                }
            }
        }

        const primes = [];
        candidates.forEach((c, i) => {
            if (c) primes.push(i);
        })
        return primes;
    }

    // returns the UNIQUE prime factors for the given input
    factors(n) {
        // JS array limit fails for n/2 for high values of n
        const limit = n > 1000000 ? parseInt(Math.sqrt(n)) + 1 : parseInt(n / 2) + 1;
        const primes = this.sieve(limit);
        const factors = [];
        primes.forEach(p => {
            if (parseInt(n / p) * p === n) factors.push(p);
        });
        return factors;
    }

    // returns the full factors of n, for example 108 === [2, 2, 3, 3, 3]
    factorise(n) {
        const uniques = this.factors(n);
        const full = [];
        let x = n;
        uniques.forEach(u => {
            while (x % u === 0) {
                full.push(u);
                x = parseInt(x / u);
            }
        });
        return full;
    }

    nth(n) {
        let x = n;
        let primes = [];
        while (primes.length < n) {
            x += n;
            primes = this.sieve(x)
        }
        return primes[n - 1];
    }
}

class Problem3 {
    solve(n) {
        const p = new Prime();
        const factors = p.factors(n);
        return factors.length ? factors.pop() : 0;
    }
}

class Problem7 {
    solve(n) {
        const p = new Prime();
        return p.nth(n);
    }
}

class Problem10 {
    solve(n) {
        const p = new Prime();
        const primes = p.sieve(n);
        return primes.reduce((t, n) => t += n, 0);
    }
}

module.exports = {
    Prime,
    Problem3,
    Problem7,
    Problem10
}