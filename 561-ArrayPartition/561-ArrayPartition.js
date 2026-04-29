// Last updated: 4/29/2026, 10:29:27 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n*log(n)) time | O(1) space
var arrayPairSum = function(nums) {
    nums.sort((a,b) => a-b);
    console.log(nums);
    let sum = 0;
    for(let i = 0; i < nums.length; i += 2) {
        const num1 = nums[i];
        sum += num1;
    }
    return sum;
};