// Last updated: 4/29/2026, 10:30:12 AM
/**
 * @param {number} n
 * @return {number}
 */
/*
1
2 = 1+2=3
3 = 1+2+3=6
4 = 10
5: 15

n : sum = n*(n+1)/2

*/
var arrangeCoins = function(n) {
    let row = 1;
    const calc = i => {
        const total = i * (i + 1) / 2;
        return total;    
    }
    while(calc(row) <= n) {
        row = row + 1;
    }
    return row - 1;
};