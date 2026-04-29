// Last updated: 4/29/2026, 10:22:11 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const n = nums.length;
    const ans = new Array(n);
    for(let i = 0; i < n; i++) {
        ans[i] = nums[nums[i]];
    }
    console.log(ans);
    return ans;
};