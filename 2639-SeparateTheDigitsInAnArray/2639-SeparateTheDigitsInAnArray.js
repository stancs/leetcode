// Last updated: 4/29/2026, 10:19:53 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    const output = [];
    for(const num of nums) {
        if(num > 9) {
            const arr = num.toString().split('').map(ch => parseInt(ch));
            output.push(...arr);
        } else {
            output.push(num);
        }
    }
    return output;
};