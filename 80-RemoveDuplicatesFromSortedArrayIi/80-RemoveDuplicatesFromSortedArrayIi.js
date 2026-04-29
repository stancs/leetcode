// Last updated: 4/29/2026, 10:35:05 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const map = {};
    let read = 0, write = 0;
    while(read < nums.length) {
        const val = nums[read];
        if(map[val] === undefined) {
            map[val] = 1
        } else {
            map[val]++;
        }
        
        if(map[val] <= 2) {
            if(write < read) {
                nums[write] = val;
            }
            write++;
        }
        read++;
    }
    return write;
};