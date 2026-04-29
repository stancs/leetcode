// Last updated: 4/29/2026, 10:32:13 AM
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort((int1, int2) => {
        const [start1, end1] = int1;
        const [start2, end2] = int2;
        
        return start1 - start2;
    })
    console.log(intervals);
    for(let i = 0; i < intervals.length - 1; i++) {
        const int1 = intervals[i];
        const int2 = intervals[i+1];
        
        const [start1, end1] = int1;
        const [start2, end2] = int2;
        
        if(start1 === start2 || end1 > start2) {
            return false;
        }
    }
    return true;
};