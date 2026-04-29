// Last updated: 4/29/2026, 10:22:58 AM
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const n = code.length;
    const next = (i, k) => {
        if(k > 0) {
            return (i + 1) % n;    
        }
        return (i - 1 + n) % n;
    }
    const res = [];
    for(let i = 0; i < n; i++) {
        let sum = 0;
        let currIdx = i;
        for(let j = 0; j < Math.abs(k); j++) {
            currIdx = next(currIdx, k);
            sum += code[currIdx];
        }
        res.push(sum);
    }
    return res;
};