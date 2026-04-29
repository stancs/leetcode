// Last updated: 4/29/2026, 10:36:03 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const len = nums.length;
    const visited = new Array(len).fill(false);
    let minCount = Infinity;
    const jumpHelper = (i, count) => {
        // console.log(`i: ${i}, count=${count}`)
        if(i === len - 1) {
            if(count < minCount) {
                minCount = count;
            }
            return;
        }
        const num = nums[i];
        // console.log(`num: ${num}`)
        for(let p = i + 1; p <= i + num; p++) {
            if(p < len && !visited[p]) {
                jumpHelper(p, count + 1);
            }
        }
    }
    jumpHelper(0, 0);
    return minCount;
};

var jump = function(nums) {
    const n = nums.length;
    if(n === 1) {
        return 0;
    }
    const visited = new Array(n).fill(false);
    let queue = [0];
    let count = 0;
    while(queue.length !== 0) {
        const nextQueue = [];
        count++;
        for(const i of queue) {
            for(let j = 0; j <= nums[i]; j++) {
                if(i + j < n && !visited[i + j]) {
                    if(i + j === n - 1) {
                        return count;
                    }
                    visited[i + j] = true;
                    nextQueue.push(i+j);
                }
            }
        }
        queue = nextQueue;
    }
    return -1;
};
