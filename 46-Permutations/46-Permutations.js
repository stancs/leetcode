// Last updated: 4/29/2026, 10:35:59 AM
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const len = nums.length;
    const ans = [];

    const backtrack = arr => {
        if(arr.length === len) {
            ans.push([...arr]);
            return;
        }
        for(const num of nums) {
            if(!arr.includes(num)) {
                arr.push(num);
                backtrack(arr);
                arr.pop();
            }
            
        }
    }
    backtrack([]);
    return ans;
};