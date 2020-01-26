const { Prime } = require('./prime');

class HCF {
    common(a, b) {
        const p = new Prime();
        const aPrime = p.factorise(a);
        const bPrime = p.factorise(b);

        const cPrime = [];
        aPrime.forEach(p => {
            const pIndex = bPrime.indexOf(p);
            if (pIndex > -1) {
                cPrime.push(p);
                bPrime.splice(pIndex, 1);
            }
        });

        return cPrime;
    }

    solve(a, b) {
        const common = this.common(a, b);

        if (common.length === 0) return 0;
        return common.reduce((t, n) => t *= n, 1);
    }
}

class LCM {
    solve(x, y) {
        const p = new Prime();
        const hcf = new HCF();
        const [a, b] = [Math.min(x, y), Math.max(x, y)];
        const aPrime = p.factorise(a);
        const bPrime = p.factorise(b);
        const cPrime = hcf.common(a, b);

        // if one or both numbers are prime
        // TODO: refactor (I think b%a can't ever be true if bPrime.length === 0)
        if (aPrime.length === 0 || bPrime.length === 0) {
            // is b the LCM
            if (b % a === 0) return b
        }

        // no common factors, one or both are prime
        // TODO: might not need this, final concat+reduce does the same
        if (cPrime.length === 0) return a * b;

        // remove the common factors from the factors of a and b
        cPrime.forEach(p => {
            aPrime.splice(aPrime.indexOf(p), 1);
            bPrime.splice(bPrime.indexOf(p), 1);
        });

        // combine the common factors with the remaining non-common factors of a and b
        const all = cPrime.concat(aPrime).concat(bPrime);
        return all.reduce((t, n) => t *= n, 1);
    }
}

class Problem5 {
    solve(arr) {
        const lcm = new LCM();

        const l = arr.length;
        if (l === 1) return arr[0];

        let lowest = lcm.solve(arr[0], arr[1]);
        if (l === 2) return lowest;

        for (let i = 2; i < l; i++) {
            lowest = lcm.solve(lowest, arr[i]);
        }
        return lowest;
    }
}

module.exports = {
    HCF,
    LCM,
    Problem5
}