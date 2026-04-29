// Last updated: 4/29/2026, 10:31:45 AM
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let writeIdx = 0;
    const n = nums.length;
    for(let i = 0; i < n; i++) {
        console.log(`i: ${i}, writeIdx: ${writeIdx}`)
        const num = nums[i];
        if(num !== 0) {
            nums[writeIdx] = num;
            writeIdx++;
        }
    }
    for(let j = writeIdx; j < n; j++) {
        nums[j] = 0;
    }
};