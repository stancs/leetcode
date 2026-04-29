// Last updated: 4/29/2026, 10:35:43 AM
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const len = nums.length;
    const visited = new Array(len).fill(false);
    const jump = i => {
        // console.log(`Jump: ${i}`)
        visited[i] = true;
        if(i === nums.length - 1) {
            return true;
        }
        const maxLen = nums[i];
        // console.log(`maxLen: ${maxLen}`)
        for(let p = i - maxLen; p <= i + maxLen; p++) {
            if(p >= 0 && p < nums.length && !visited[p]) {
                // console.log(`Test: ${p}`)
                if(jump(p)) {
                    return true;
                }
            }
        }
    }
    if(jump(0)) {
        return true;
    }
    return false;
};