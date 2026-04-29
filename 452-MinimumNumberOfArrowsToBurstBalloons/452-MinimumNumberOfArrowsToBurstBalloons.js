// Last updated: 4/29/2026, 10:30:04 AM
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if(!points) {
        return 0;
    }
    points.sort((a, b) => {
        const diff = a[0]-b[0];
        if(diff !== 0) {
            return diff;
        } else {
            return a[1] - b[1];
        }
    });
    console.log(points);
    let [currStart, currEnd] = points[0];
    let count = 1;
    for(let i = 1; i < points.length; i++) {
        const [nextStart, nextEnd] = points[i];
        console.log(`next: [${nextStart}, ${nextEnd}]`)
        if(currEnd >= nextStart) {
             currStart = nextStart;
             currEnd = Math.min(currEnd, nextEnd);
        } else {
            count++;
            currStart = nextStart;
            currEnd = nextEnd;
        }
        console.log(`curr: [${currStart}, ${currEnd}]`)
        console.log(`count: ${count}`)
    }
    return count;
};