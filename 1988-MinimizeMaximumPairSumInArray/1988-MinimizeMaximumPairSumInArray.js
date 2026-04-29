// Last updated: 4/29/2026, 10:22:21 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    const sorted = nums.sort((a, b) => a - b);
    console.log(sorted);
    const arr = [];
    const len = sorted.length;
    const mid = len / 2;
    for(let i = 0; i < len / 2; i++) {
        const p1 = sorted[mid - 1 - i];
        const p2 = sorted[mid + i];
        arr.push(p1 + p2);
    }
    console.log(arr);
    return Math.max(...arr);
};