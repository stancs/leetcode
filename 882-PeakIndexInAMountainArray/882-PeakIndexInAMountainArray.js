// Last updated: 4/29/2026, 10:27:13 AM
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        console.log(`[BEFORE] left: ${left}, mid: ${mid}, right: ${right}`)
        if(arr[mid] < arr[mid+1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
        console.log(`[AFTER ] left: ${left}, mid: ${mid}, right: ${right}`)
    }
    return left;
};