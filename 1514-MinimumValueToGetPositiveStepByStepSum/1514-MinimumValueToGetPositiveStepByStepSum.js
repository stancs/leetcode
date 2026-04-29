// Last updated: 4/29/2026, 10:23:58 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
// 2022-11-14
// 06:29s
// O(n)
// O(1)
var minStartValue = function(nums) {
    const sums = [];
    let sum = 0;
    for(const num of nums) {
        sum += num;
        sums.push(sum);
    }
    console.log(nums);
    console.log(sums);
    const min = Math.min(...sums);
    if(min >= 1) {
        return 1;
    } else {
        return 1 - min;
    }
};