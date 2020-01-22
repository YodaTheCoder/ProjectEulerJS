const getSumEven = (total, num) => num % 2 === 0 ? total + num : total;

class Fibonacci {
    constructor(f, s) {
        this.sequence = [f, s];
    }

    terms(n) {
        const nTerms = this.sequence.slice();
        for (let i = nTerms.length; i < n; i++) {
            nTerms.push(nTerms[nTerms.length - 1] + nTerms[nTerms.length - 2])
        }
        return nTerms;
    }

    termsToMax(max) {
        const nTerms = this.sequence.slice();
        while (nTerms[nTerms.length - 1] < max) {
            nTerms.push(nTerms[nTerms.length - 1] + nTerms[nTerms.length - 2])
        }
        return nTerms;
    }
}

class Problem2 {
    constructor(f, s, max) {
        this.fibonacci = new Fibonacci(f, s);
        this.terms = this.fibonacci.termsToMax(max)
    }

    solve() {
        return this.terms.reduce(getSumEven, 0);
    }
}

module.exports = {
    Fibonacci,
    Problem2
}