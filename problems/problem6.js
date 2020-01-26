class Problem6 {
    constructor(n) {
        this.squareSum = 0;
        this.sumSquare = 0;
        let sumTotal = 0;

        for (let i = 1; i <= n; i++) {
            this.sumSquare += i * i;
            sumTotal += i
        }

        this.squareSum = sumTotal * sumTotal
        this.difference = Math.max(this.squareSum, this.sumSquare) - Math.min(this.squareSum, this.sumSquare);
    }
}

module.exports = {
    Problem6
}