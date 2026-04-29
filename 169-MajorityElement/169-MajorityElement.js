// Last updated: 4/29/2026, 10:33:28 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = {};
    const half = Math.floor(nums.length / 2);
    console.log('half:', half);
    const isMajority = n => n > half;
    for(const num of nums) {
        if(map[num] === undefined) {
            map[num] = 0;
        }
        map[num]++;
        if(isMajority(map[num])) {
            return num;
        }
    }
};