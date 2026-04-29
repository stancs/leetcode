// Last updated: 4/29/2026, 10:35:09 AM
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const output = [];
    const backtrack = (cb) => {
        // console.log(`cb:`, cb);
        if(cb.length === k) {
            // output.push(cb);
            output.push([...cb]);
            return;
        }
        let min = 0;
        if(cb.length > 0) {
            min = cb[cb.length - 1];
        }
        for(let i = min+1; i <= n; i++) {
            if(!cb.includes(i)) {
                cb.push(i);
                backtrack(cb);
                cb.pop();
            }
        }
    }
    backtrack([]);
    return output;
};