// Last updated: 4/29/2026, 10:21:27 AM
/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
// 2022-12-01
// 05:50s
// O(n)
// O(n)
var divideString = function(s, k, fill) {
   const ans = [];
    let remain = s;
    while(remain.length >= k) {
        const sliced = remain.slice(0, k);
        remain = remain.slice(k);
        ans.push(sliced);
    }
    if(remain.length > 0) {
        const count = k - remain.length;
        for(let i = 0; i < count; i++) {
            remain += fill;
        }
        ans.push(remain);
    }
    return ans;
};