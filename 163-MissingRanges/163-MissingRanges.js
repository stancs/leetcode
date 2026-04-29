// Last updated: 4/29/2026, 10:33:33 AM
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function(nums, lower, upper) {
    const output = [];
    let left = lower, right = lower;
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(right < num) {
            right = num - 1;
            output.push([left, right]);
            left = num + 1;
            right = num + 1;
        } else if(right === num) {
            left = num + 1;
            right = num + 1;
        } else {
            console.log('exception')
        }
    }
    if(right <= upper) {
        right = upper;
        output.push([left, right]);
    }
    console.log(output);
    return output;
};