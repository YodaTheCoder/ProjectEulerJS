class Multiplier {
    constructor(x, y) {
        const temp = [];
        for (let dx = 0; dx <= x; dx++) {
            for (let dy = 0; dy <= y; dy++) {
                temp.push(dx * dy);
            }
        }
        this.products = [...new Set(temp)].sort();
    }
}

class Palindrome {
    test(candidate) {
        const c = `${candidate}`.split('');
        const r = [...c].reverse();
        return JSON.stringify(c) === JSON.stringify(r);
    }
}

class Problem4 {
    solve(x, y) {
        const m = new Multiplier(x, y);
        const candidates = m.products;
        const s = candidates.sort((a, b) => parseInt(b) - parseInt(a));
        const p = new Palindrome();
        return s.find(p.test);
    }
}

module.exports = {
    Multiplier,
    Palindrome,
    Problem4
}