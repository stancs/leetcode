// Last updated: 4/29/2026, 10:35:40 AM
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length === 0) {
        return [newInterval];
    }
    const output = [];
    let curr = newInterval;
    const isOverlapping = (int1, int2) => {
        if(!int2) {
            return false;
        }
        console.log(`compare: ${int1}, ${int2}`)
        if(int1[1] < int2[0] || int2[1] < int1[0]) {
            return false;
        }
        return true;
    }
    const merge = (int1, int2) => {
        const left = Math.min(int1[0], int2[0]);
        const right = Math.max(int1[1], int2[1]);
        return [left, right]; 
    }
    while(intervals.length > 0) {
        const first = intervals.shift();
        if(isOverlapping(first, curr)) {
            console.log('OVERLAP')
            const merged = merge(first, curr);
            console.log(`merged: ${merged}`)
            curr = merged;

        } else {
            // output.push(first);
            if(!curr) {
                output.push(first);
            } else {
                if(first[1] < curr[0]) {
                    output.push(first);
                } else {
                    output.push(curr, first);
                    curr = null;
                }
            }
            
        }
        console.log(`output: ${output}`)
    }
    if(curr) {
        output.push(curr);
    }
    return output;
};