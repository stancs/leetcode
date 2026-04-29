// Last updated: 4/29/2026, 10:25:05 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
// O(n)
// O(1)
// 30:00s
var sumFourDivisors = function(nums) {
    let sum = 0;
    for(const num of nums) {
        // const set = new Set();
        let tmpSum = 0;
        let count = 0;
        for(let i = 2; i <= Math.floor(num / 2); i++) {
            if(num % i === 0) {
                if(count > 2) {
                    break;
                }
                tmpSum += i;
                count++;
            }
        }
        if(count === 2) {
            tmpSum += 1 + num;
            sum += tmpSum;
        }
    }
    return sum;
};