// Last updated: 4/29/2026, 10:20:28 AM
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    const sorted = nums.sort((a, b) => a - b);
    console.log(sorted);
    const sums = [];
    let sum = 0;
    for(let i = 0; i < sorted.length; i++) {
        sum += sorted[i];
        sums[i] = sum;
    }
    console.log(sums);
    const insertIdx = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;
        while(left <= right) {
            const mid = Math.floor((left + right) / 2);
            if(arr[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }
    
    return queries.map(target => insertIdx(sums, target));
};