// Last updated: 4/29/2026, 10:22:15 AM
/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let count = 0;
    for(let i = 1; i <= n - 2; i++) {
        for(j = i + 1; j <= n - 1; j++) {
            for(k = j + 1; k <= n; k++) {
                // console.log(`(${i},${j},${k})`);
                if(i*i + j*j === k*k) {
                    // console.log('Count!!')
                    count += 2;
                }
            }
        }
    }
    return count;
};