// Last updated: 4/29/2026, 10:25:13 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 3:12s
var decompressRLElist = function(nums) {
    const numRead = nums.length / 2;
    let freq, val;
    const output = [];
    for(let i = 0; i < numRead; i++) {
        freq = nums[2*i];
        val = nums[2*i+1];
        for(let j = 0; j < freq; j++) {
            output.push(val);
        }
    }
    return output;
};