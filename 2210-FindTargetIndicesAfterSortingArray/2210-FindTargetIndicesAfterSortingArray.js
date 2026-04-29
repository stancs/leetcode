// Last updated: 4/29/2026, 10:21:36 AM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let res = [];
    nums.sort((a, b) => a - b)
    console.log(nums);
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        console.log(`${left}\t${mid}\t${right}`);
        if(nums[mid] === target) {
            let p1 = mid, p2 = mid;
            while(p1 - 1 >= 0 && nums[p1-1] === target) {
                p1--;
            }
            while(p2 + 1 <= nums.length - 1 && nums[p2+1] === target) {
                p2++;
            }
            for(let i = p1; i <= p2; i++) {
                res.push(i);
            }
            return res;
        } else if(nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return res;
};