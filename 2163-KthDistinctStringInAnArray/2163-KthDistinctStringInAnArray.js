// Last updated: 4/29/2026, 10:21:47 AM
/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const map = {};
    for(const ch of arr) {
        if(map[ch] === undefined) {
            map[ch] = 1;
        } else {
            map[ch]++;
        }
    }
    let i = 0;
    for(const ch of arr) {
        if(map[ch] === 1) {
            i++;
            if(k === i) {
                return ch;
            }
        }
    }

    return "";
};