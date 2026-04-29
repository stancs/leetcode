// Last updated: 4/29/2026, 10:32:25 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const allProducts = nums.reduce((acc, num) => acc * num, 1);
    console.log(`allProducts: ${allProducts}`)
    const output = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            let val = 1;
            for(let j = 0; j < nums.length; j++) {
                if(j !== i) {
                    val *= nums[j];
                }
            }
            output.push(val);
        } else {
            output.push(allProducts / nums[i]);
        }
    }
    return output;
};