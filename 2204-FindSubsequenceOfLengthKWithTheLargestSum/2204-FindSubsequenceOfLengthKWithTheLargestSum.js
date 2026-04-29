// Last updated: 4/29/2026, 10:21:40 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    const nums2 = nums.map((element, index) => [element, index]).sort((a, b) => b[0]-a[0]);
    console.log(nums2);
    const ret = [];
    for(let i = 0; i < k; i++) {
        ret.push(nums2[i]);
    }
    ret.sort((a, b) => a[1] - b[1]);
    return ret.map(item => item[0]);
};