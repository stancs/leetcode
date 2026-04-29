// Last updated: 4/29/2026, 10:36:40 AM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 20:00s
// O(n^2) time | O(1) space
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b);
    let minDiff = Infinity;
    let output;
    for(let i = 0; i < nums.length - 2; i++) {
        let lo = i + 1;
        let hi = nums.length - 1;
        while(lo < hi) {
            const sum = nums[i] + nums[lo] + nums[hi];
            if(Math.abs(target - sum) < minDiff) {
                minDiff = Math.abs(target - sum);
                output = sum;
            }
            if(target - sum > 0) {
                lo++;
            } else if(target - sum < 0) {
                hi--;
            } else {
                return sum;
            }
        }
    }
    return output;
}

// 10:00s
// O(n^3) time | O(1) space
// var threeSumClosest = function(nums, target) {
//     let minDiff = Infinity;
//     let output;
//     for(let i = 0; i < nums.length-2; i++) {
//         for(let j = i+1; j < nums.length-1; j++) {
//             for(let k = j+1; k < nums.length; k++) {
//                const sum = nums[i] + nums[j] + nums[k];
//                 if(Math.abs(target - sum) < minDiff) {
//                     minDiff = Math.abs(target - sum);
//                     output = sum;
//                 }
//             }
//         }
//     }
//     return output;
// };