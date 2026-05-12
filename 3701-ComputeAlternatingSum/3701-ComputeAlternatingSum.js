// Last updated: 5/12/2026, 4:13:47 PM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var alternatingSum = function(nums) {
6    let sum = 0;
7    for(let i = 0; i < nums.length; i++) {
8        const k = i % 2 === 0? 1: -1;
9        sum += k * nums[i];
10    }
11    return sum;
12};