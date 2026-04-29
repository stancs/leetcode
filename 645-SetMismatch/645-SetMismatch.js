// Last updated: 4/29/2026, 10:29:04 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const hash = {};
    let duplicated;
    let sum = 0;
    for(const num of nums) {
        if(hash[num] === undefined) {
            hash[num] = true;
        } else {
            duplicated = num;
        }
        sum += num;
    }
    const n = nums.length;
    const expectedSum = (n * (n+1)) / 2;
    const diff = expectedSum - sum;
    const lost = duplicated + diff;
    return [duplicated, lost];
};