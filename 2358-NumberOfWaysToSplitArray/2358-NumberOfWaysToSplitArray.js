// Last updated: 4/29/2026, 10:20:53 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    const sums = [];
    let sum = 0;
    for(const num of nums) {
        sum += num;
        sums.push(sum);
    }
    console.log(nums);
    console.log(sums);
    let count = 0;
    for(let i = 0; i < nums.length - 1; i++) {
        const left = sums[i];
        const right = sums[nums.length - 1] - left;
        if(left >= right) {
            count++;
        }
    }
    return count;
};