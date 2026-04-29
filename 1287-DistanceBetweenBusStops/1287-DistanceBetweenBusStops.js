// Last updated: 4/29/2026, 10:25:04 AM
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
// 11:55s
// O(n) time | O(1) space
var distanceBetweenBusStops = function(distance, start, destination) {
    const min = Math.min(start, destination);
    const max = Math.max(start, destination);
    const dist1 = distance.slice(min, max).reduce((acc, curr) => acc + curr, 0);
    const dist2 = distance.slice(0, min).concat(distance.slice(max)).reduce((acc, curr) => acc + curr, 0);
    return Math.min(dist1, dist2);
};