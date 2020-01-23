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

    factors(n) {
        const primes = this.sieve(parseInt(Math.sqrt(n)) + 1);
        const factors = [];
        primes.forEach(p => {
            if (parseInt(n / p) * p === n) factors.push(p);
        });
        return factors;
    }
}

class Problem3 {
    solve(n) {
        const p = new Prime();
        const factors = p.factors(n);
        return factors.length ? factors.pop() : 0;
    }
}

module.exports = {
    Prime,
    Problem3
}