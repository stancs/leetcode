// Last updated: 4/29/2026, 10:25:14 AM
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const map = {};
    const dp = i => {
        if(map[i] !== undefined) {
            return map[i];
        }
        if(i === 0) {
            return 0;
        } else if(i <= 2) {
            return 1;
        }
        map[i] = dp(i-1) + dp(i-2) + dp(i-3);
        return map[i];
    }
    return dp(n);
};