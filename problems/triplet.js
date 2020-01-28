class Triplet {
    sumTo(n) {
        for (let a = 1; a < n; a++) {
            for (let b = a + 1; b < n - a; b++) {
                const c = n - (a + b);
                if (c <= b) continue;
                if (a * a + b * b === c * c) return { a, b, c };
            }
        }
        return null;
    }
}

class Problem9 {
    solve(n) {
        const t = new Triplet();
        return t.sumTo(n);
    }
}

module.exports = {
    Triplet,
    Problem9
}