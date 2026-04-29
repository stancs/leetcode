// Last updated: 4/29/2026, 10:18:56 AM
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    const group1 = nums.filter(i => i < 10);
    const group2 = nums.filter(i => i >= 10);

    const sum1 = group1.reduce((acc, val) => acc + val, 0);
    const sum2 = group2.reduce((acc, val) => acc + val, 0);
    console.log(`sum1=${sum1}`)
    console.log(`sum2=${sum2}`)
    return sum1 !== sum2;
};