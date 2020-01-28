// slices numeric string s into individual numbers and returns the product
const sliceProduct = s => s.split('').reduce((total, num) => total *= num, 1);

const largestProduct = (d, n) => {
    let largest = 0;
    // sliding window over d of length n
    for (let i = 0, l = d.length - n + 1; i < l; i++) {
        largest = Math.max(largest, sliceProduct(d.slice(i, n + i)))
    }
    return largest;
};

class ProductChain {
    constructor(d) {
        this.digits = `${d}`;
        this.subDigits = this.digits.split('0').filter(Boolean);
        this.maxLen = 0;
        this.subDigits.forEach(s => this.maxLen = Math.max(this.maxLen, s.length));
    }

    solve(n) {
        if (n > this.maxLen) return 0;

        let largest = 0;
        this.subDigits.forEach(s => {
            if (s.length >= n) largest = Math.max(largest, largestProduct(s, n));
        })
        return largest;
    }
}

class Problem8 {
    solve(d, n) {
        const pc = new ProductChain(d);
        return pc.solve(n);
    }
}

module.exports = {
    ProductChain,
    Problem8
}