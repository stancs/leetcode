// Last updated: 4/29/2026, 10:30:17 AM
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if(!intervals) {
        return 0;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals);
    let count = 0;
    let [currStart, currEnd] = intervals[0];
    for(let i = 1; i < intervals.length; i++) {
        const [nextStart, nextEnd] = intervals[i];
        if(nextStart < currEnd) {
            count++;
            currEnd = Math.min(currEnd, nextEnd);
        } else {
            currEnd = nextEnd;
        }
    }
    return count;
};