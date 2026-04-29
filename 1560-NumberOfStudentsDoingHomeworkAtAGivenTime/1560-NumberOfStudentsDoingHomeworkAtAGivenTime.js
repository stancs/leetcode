// Last updated: 4/29/2026, 10:23:45 AM
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let count = 0;
    for(let i = 0; i < startTime.length; i++) {
        const start = startTime[i];
        const end = endTime[i];
        if(queryTime >= start && queryTime <= end) {
            count++;
        }
    }
    return count;
};