// Last updated: 4/29/2026, 10:19:03 AM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    const sorted = nums.sort((a, b) => a - b);
    console.log(sorted);
    const res = [];
    let currArr = [];
    let count = 0;
    let base;
    for(let i = 0; i < sorted.length; i++) {
        const currNum = sorted[i];
        if(base === undefined) {
            base = currNum;
        }
        if(currNum - base <= k) {
            currArr.push(currNum);
            count++;
            if(count === 3) {
                res.push(currArr);
                currArr = [];
                base = undefined;
                count = 0;
            }
        } else {
            return [];
        }       
    }
    return res;
};