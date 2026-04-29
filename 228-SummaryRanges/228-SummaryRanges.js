// Last updated: 4/29/2026, 10:32:34 AM
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const output = [];
    let left = null;
    let right = null;
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(left === null) {
            left = num;
        } else {
            // some value in left
            if(right === null) {
                if(num === left + 1) {
                    right = num;
                } else {
                    output.push(left.toString());
                    left = num;
                }
            } else {
                // some value in right
                if(num === right + 1) {
                    right = num;
                } else {
                    output.push(`${left}->${right}`);
                    left = num;
                    right = null;
                }
            }
        }
    }
    if(left !== null && right !== null) {
        output.push(`${left}->${right}`);
    } else if(left !== null) {
        output.push(left.toString())
    }
    return output;
};