// Last updated: 4/29/2026, 10:31:06 AM
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const countOnes = num => {
        let i = num;
        let count = 0;
        while(i > 0) {
            if(i % 2 === 1) {
                count++;
                i--;
            }
            i /= 2;
        }
        return count;
    }
    const res = [];
    for(let i = 0; i <= n; i++) {
        res.push(countOnes(i));
    }

    return res;
};