// Last updated: 4/29/2026, 10:22:41 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    const map = {};
    let count = 0;
    for(const num of nums) {
        if(map[k - num] !== undefined) {
            if(map[k-num] > 1) {
                map[k-num]--;
            } else {
                delete map[k-num];
            }
            count++;
        } else {
            if(map[num] === undefined) {
                map[num] = 1;
            } else {
                map[num]++;
            }
        }
    }
    return count;
};