// Last updated: 4/29/2026, 10:22:35 AM
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 7:31s
// Time O(n)
// Space O(n)
var check = function(nums) {
    let prev;
    let idx;
    for(let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        if(prev) {
            if(prev > curr) {
                idx = i;        
            }
        }
        prev = curr;
    }
    let newArr;
    if(idx !== undefined) {
        newArr = [...nums.slice(idx), ...nums.slice(0, idx)];
    } else {
        newArr = nums;
    }
    console.log(newArr);
    prev = null;
    for(let i = 0; i < newArr.length; i++) {
        const curr = newArr[i];
        if(prev) {
            if(prev > curr) {
                return false;
            }
        }
        prev = curr;
    }
    return true;
};