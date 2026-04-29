// Last updated: 4/29/2026, 10:24:30 AM
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
// O(n*log(m))
// O(1)
// 08:34s
var smallestDivisor = function(nums, threshold) {
    const check = divisor => {
        let sum = 0;
        for(const num of nums) {
            sum += Math.ceil(num / divisor);
        }
        return sum <= threshold;
    }
    let left = 1;
    // let right = Math.ceil(Math.max(...nums) / threshold) * nums.length;
    let right = Math.max(...nums);
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if(check(mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};