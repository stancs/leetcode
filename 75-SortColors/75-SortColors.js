// Last updated: 4/29/2026, 10:35:11 AM
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 2022-11-22
// 05:00s
// O(n)
// O(1)
var sortColors = function(nums) {
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;
    for(const num of nums) {
        if(num === 0) {
            count0++;
        } else if(num === 1) {
            count1++;
        } else {
            count2++;
        }
    }
    for(let i = 0; i < count0; i++) {
        nums[i] = 0;
    }
    for(let i = count0; i < count0 + count1; i++) {
        nums[i] = 1;
    }
    for(let i = count0 + count1; i < count0 + count1 + count2; i++) {
        nums[i] = 2;
    }
};