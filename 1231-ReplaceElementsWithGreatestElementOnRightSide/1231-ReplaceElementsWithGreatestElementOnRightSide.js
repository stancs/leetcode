// Last updated: 4/29/2026, 10:25:23 AM
/**
 * @param {number[]} arr
 * @return {number[]}
 */
// T: 9:38s
// TC: O(n)
// SC: O(n);
var replaceElements = function(arr) {
    const newArr = [];
    let max = -Number.MAX_VALUE;
    for(let i = arr.length - 1; i >= 0; i--) {
        if(i === arr.length - 1) {
            newArr.push(-1);
            max = arr[i];
            continue;
        }
        newArr.unshift(max);
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return newArr;
};