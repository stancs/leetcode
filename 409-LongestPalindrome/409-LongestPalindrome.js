// Last updated: 4/29/2026, 10:30:25 AM
/**
 * @param {string} s
 * @return {number}
 */
// 2022-11-28
// 15:00s
// O(n)
// O(1)
var longestPalindrome = function(s) {
    const map = {};
    for(const ch of s) {
        if(map[ch] === undefined) {
            map[ch] = 1;
        } else {
            map[ch]++;
        }
    }
    console.log(map);
    const keys = Object.keys(map);
    let sumEven = 0;
    let center = 0;
    for(const key of keys) {
        if(map[key] % 2 === 0) {
            sumEven += map[key];
        } else {
            if(center === 0) {
                center = 1;
            }
            sumEven += map[key] - 1;
        }
    }
    return sumEven + center;
};