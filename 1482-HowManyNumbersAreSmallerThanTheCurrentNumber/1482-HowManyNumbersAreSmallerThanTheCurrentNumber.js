// Last updated: 4/29/2026, 10:24:04 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const sorted = nums.slice().sort((a,b) => a-b);
    const hash = {};
    for(let i = 0; i < sorted.length; i++) {
        if(hash[sorted[i]] === undefined) {
            hash[sorted[i]] = i;
        }
    }
    console.log(hash);
    return nums.map(num => hash[num]);
};