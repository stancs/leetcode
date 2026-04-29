// Last updated: 4/29/2026, 10:23:20 AM
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    const map = {};
    for(const num of arr) {
        map[num] = true;
    }
    let count = 0;
    let i = 1;
    while(count !== k) {
        if(!map[i]) {
            count++;
        }
        i++;
    }
    return i-1;
};