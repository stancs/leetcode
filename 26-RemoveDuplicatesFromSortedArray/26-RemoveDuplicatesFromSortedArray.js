// Last updated: 4/29/2026, 10:36:24 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const map = {};
    let read = 0;
    let write = 0;
    while(read < nums.length) {
        const val = nums[read];
        if(map[val] === undefined) {
            map[val] = true;
            if(write < read) {
                nums[write] = val;    
            }
            write++;
        }
        read++;
    }
    return write;
};