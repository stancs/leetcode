// Last updated: 4/29/2026, 10:35:41 AM
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const sorted = intervals.sort((a, b) => a[0] - b[0]);
    // console.log(sorted);
    const res = [];
    while(intervals.length >= 2) {
        const [a, b] = intervals.shift();
        const [c, d] = intervals.shift();
        if(b >= d) {
            intervals.unshift([a, b]);
        } else {
            if(b < c) {
                res.push([a, b]);
                intervals.unshift([c, d]);
            } else if(b >= c) {
                intervals.unshift([a, d]);
            }
        }
    }
    res.push(...intervals);
    return res;
};