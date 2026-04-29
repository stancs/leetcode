// Last updated: 4/29/2026, 10:33:23 AM
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    const countFactorTwo = i => {
        if(i % 2 === 1) {
            return 0;
        } else {
            return 1 + countFactorTwo(i / 2);
        }
    }

    const countFactorFive = i => {
        if(i % 5 !== 0) {
            return 0;
        } else {
            return 1 + countFactorFive(i / 5);
        }
    }

    let n2 = 0, n5 = 0;
    for(let i = 1; i <= n; i++) {
        n2 += countFactorTwo(i);
        n5 += countFactorFive(i);
    }
    console.log(n2, n5);
    return Math.min(n2, n5);
};