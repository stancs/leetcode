// Last updated: 4/29/2026, 10:36:42 AM
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const sorted = nums.sort((a, b) => a - b);
    console.log(sorted)
    const output = [];
    const hash = {};
    for(let i = 0; i < nums.length - 2; i++) {
        const i1 = nums[i];
        let left = i+1;
        let right = nums.length - 1;
        while(left < right) {
            const i2 = nums[left];
            const i3 = nums[right];
            const sum = i1 + i2 + i3;
            if(sum === 0) {
                const key = `${i1}#${i2}#${i3}`;
                if(hash[key] === undefined) {
                    output.push([i1, i2, i3]);
                    hash[key] = true;
                }
                left++;
                right--;
            } else if(sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return output;
};