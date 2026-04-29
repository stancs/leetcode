// Last updated: 4/29/2026, 10:26:31 AM
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
// 2022-11-13
// 41:13s
// 
var numsSameConsecDiff = function(n, k) {
    const ans = [];
    
    const backtrack = (curr, len) => {
        if(curr.length === n) {
            const num = parseInt(curr.join(''));
            ans.push(num);
            return;
        }
        
        if(len === 0) {
            for(let i = 1; i <= 9; i++) {
                curr.push(i);
                backtrack(curr, len + 1);
                curr.pop();
            }
        } else {
            const lastNum = curr[curr.length - 1];
            const nextNumList = k === 0? [ lastNum ]: [lastNum + k, lastNum - k];
            for(const nextNum of nextNumList) {
                if(nextNum >= 0 && nextNum <= 9) {
                    curr.push(nextNum);
                    backtrack(curr, len + 1);
                    curr.pop();
                }
            }
        }
    }
    
    backtrack([], 0);
    return ans;
};