// Last updated: 4/29/2026, 10:20:57 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let min = Number.MAX_VALUE;
    let val;
    for(const num of nums) {
        const abs = Math.abs(num);
        // console.log(abs);
        if(abs < min) {
            min = abs;
            val = num;
        } else if(abs === min) {
            val = Math.max(val, num);
        }
    }
    return val;
};