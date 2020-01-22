class Modder {
    isModN(a, b) {
        return (b) => {
            return b % a == 0;
        };
    }
}

class Problem1 {
    constructor(mods) {
        this.f = [];
        const m = new Modder();

        mods.forEach(n => {
            this.f.push(m.isModN(n))
        });
    }

    solve(n) {
        let answer = 0;
        for (let i = 1; i < n; i++) {
            const hit = this.f.some(f => {
                return f(i);
            });
            if (hit) answer += i;
        }
        return answer;
    }
}

module.exports = {
    Modder,
    Problem1
}

