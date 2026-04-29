// Last updated: 4/29/2026, 10:36:22 AM
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let read = 0;
    let write = 0;
    while(read < nums.length) {
        const readVal = nums[read];
        if(readVal === val) {
            read++;
        } else {
            if(write < read) {
                nums[write] = nums[read];
            }
            write++;
            read++;
        }
    }
    return write;
};