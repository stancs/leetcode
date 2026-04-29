// Last updated: 4/29/2026, 10:26:04 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfDigits = function(nums) {
    const min = Math.min(...nums);
    console.log(`min: ${min}`)
    const digitArr = min.toString().split('').map(ch => parseInt(ch));
    const sum = digitArr.reduce((acc, val) => acc + val, 0);
    if(sum % 2 === 1) {
        return 0;
    } else {
        return 1;
    }
};