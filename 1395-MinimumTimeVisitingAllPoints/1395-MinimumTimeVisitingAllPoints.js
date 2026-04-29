// Last updated: 4/29/2026, 10:24:35 AM
/**
 * @param {number[][]} points
 * @return {number}
 */
// 3:24s
// O(n) time | O(1) space
var minTimeToVisitAllPoints = function(points) {
    let time = 0;
    for(let i = 0; i < points.length - 1; i++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[i+1];
        time += Math.max(Math.abs(x1-x2), Math.abs(y1-y2));
    }
    return time;
};