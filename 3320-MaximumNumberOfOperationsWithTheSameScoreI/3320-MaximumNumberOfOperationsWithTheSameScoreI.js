// Last updated: 4/29/2026, 10:18:58 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
  let sum = null;
  let count = 0;
  while(nums.length >= 2) {
    const n1 = nums.shift();
    const n2 = nums.shift();
    if(sum === null) {
        sum = n1 + n2;
        count = 1;
    } else {
        if(sum === n1 + n2) {
            count++;
        } else {
            return count;
        }
    }
  }
  return count;
};