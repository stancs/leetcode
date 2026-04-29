// Last updated: 4/29/2026, 10:23:26 AM
/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    const sumList = [];
    for(let i = 0; i < n; i++) {
        let sum = nums[i];
        sumList.push(sum);
        for(let j = i+1; j < n; j++) {
            sum += nums[j];
            sumList.push(sum);
        }
        console.log(sumList);
    }
    sumList.sort((a, b) => a - b);
    console.log(sumList);
    const mod = Math.pow(10, 9) + 7;
    let res = 0;
    for(let i = left - 1; i <= right - 1; i++) {
        res = (res + sumList[i]) % mod;
    }
    return res;
};