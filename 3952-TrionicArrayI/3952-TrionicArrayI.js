// Last updated: 4/29/2026, 10:18:55 AM
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {
    let state = 0;
    for(let i = 0; i < nums.length - 1; i++) {
        const p = nums[i];
        const q = nums[i+1];
        if(state === 0) {
            if(p < q) {
                state = 1;
            } else {
                state = -1;
            }
        } else if(state === 1) {
            if(p > q) {
                state = 2;
            } else if(p === q) {
                state = -1;
            }
        } else if(state === 2) {
            if(p < q) {
                state = 3;
            } else if(p === q){
                state = -1;
            }
        } else if(state === 3) {
            if(p >= q) {
                state = -1;
            }
        }
        console.log(`${p}, ${q}: state ${state}`)
    }
    return state === 3;
};