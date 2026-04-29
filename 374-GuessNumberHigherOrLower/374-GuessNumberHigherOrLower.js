// Last updated: 4/29/2026, 10:30:43 AM
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    const dfs = (left, right) => {
        // if(left === right) {
        //     return left;
        // }
        console.log(`left: ${left}, right=${right}`)
        const mid = Math.floor((left + right) / 2);
        const res = guess(mid);
        if(res === 0) {
            return mid;
        } else if(res > 0) {
            return dfs(mid + 1, right);
        } else {
            return dfs(left, mid - 1);
        }
    }

    return dfs(1, n);
};