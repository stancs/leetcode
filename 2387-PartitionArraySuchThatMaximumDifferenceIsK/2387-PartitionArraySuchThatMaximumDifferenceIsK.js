// Last updated: 4/29/2026, 10:20:49 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    const list = [];
    let sub = [];
    let min;
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(i === 0) {
            min = num;
        }
        if(num - min > k) {
            list.push(sub);
            sub = [ num ];
            min = num;
        } else {
            sub.push(num);
        }
    }
    list.push(sub);
    console.log(list);
    return list.length;
};