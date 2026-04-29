// Last updated: 4/29/2026, 10:33:19 AM
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a,b) => {
        const ab = parseInt(a.toString() + b.toString());
        const ba = parseInt(b.toString() + a.toString());
        return ba - ab;
    });
    
    const numStr = nums.reduce((accu, curr) => {
        accu += curr.toString();
        return accu;
    }, '');
    
    if(numStr.startsWith('0')) {
        return '0';
    }
    return numStr;
};