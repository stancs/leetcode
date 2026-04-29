// Last updated: 4/29/2026, 10:26:39 AM
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let state = 0;
    for(let i = 1; i < arr.length; i++) {
        const prev = arr[i-1];
        const curr = arr[i];
        const diff = curr - prev;
        if(state === 0) {
            if(diff > 0) {
                state = 1;
            } else {
                return false;
            }
        } else if(state == 1) {
            if(diff < 0) {
                state = 2;
            } else if(diff === 0) {
                return false;
            }
        } else if(state == 2) {
            if(diff >= 0) {
                return false;
            }
        }
    }
    return state === 2;
};