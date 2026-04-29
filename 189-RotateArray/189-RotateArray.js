// Last updated: 4/29/2026, 10:33:14 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    const inc = k % n;
    const longArr = nums.slice().concat(nums.slice());
    console.log(longArr);
    for(let i = 0; i < n; i++) {
        nums[i] = longArr[n - inc + i];
    }
    console.log(nums);
};