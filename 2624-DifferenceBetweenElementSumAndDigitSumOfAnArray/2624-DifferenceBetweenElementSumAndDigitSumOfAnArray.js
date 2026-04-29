// Last updated: 4/29/2026, 10:20:00 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    const elSum = nums.reduce((acc, val) => acc + val, 0);
    let digitSum = 0;
    for(const num of nums) {
        let curr = num;
        while(curr > 0) {
            const digit = curr % 10;
            digitSum += digit;
            curr = Math.floor(curr / 10);
        }
    }
    return Math.abs(digitSum - elSum);
};