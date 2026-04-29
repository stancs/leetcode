// Last updated: 4/29/2026, 10:28:25 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = 0;
    for(const num of nums) {
        sum += num;
    }
    console.log(`sum: ${sum}`)
    let left = 0;
    let right = sum;
    for(let i = 0; i < nums.length; i++) {
        console.log(`i: ${i}, left=${left}, right=${right}`)
        left += i-1 >= 0? nums[i-1]: 0;
        right -= nums[i];
        if(left === right) {
            return i;
        }
    }
    return -1;
};