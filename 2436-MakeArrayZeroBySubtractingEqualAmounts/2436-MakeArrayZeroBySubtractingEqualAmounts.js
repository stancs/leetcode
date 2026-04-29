// Last updated: 4/29/2026, 10:20:36 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
// TC: O(n*n)
// SC: O(n)
var minimumOperations = function(nums) {
    let min = findMin(nums);
    
    let nOp = 0;
    while(min !== 0) {
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] > 0) {
                nums[i] -= min;
            }
        }
        nOp++;
        // console.log(nums);
        
        min = findMin(nums);
        // console.log(`nOp=${nOp}, min=${min}`);
    }
    return nOp;
};

function findMin(nums) {
    let min = 0;
    for(const num of nums) {
        if(min === 0 && num > min) {
            min = num;
        }
        if(min !== 0 && num !== 0 && num < min) {
            min = num;
        }
        // console.log(`num=${num}, min=${min}`);
    }
    return min;
}