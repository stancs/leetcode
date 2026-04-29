// Last updated: 4/29/2026, 10:26:29 AM
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const dist = points.map(point => {
        const [x, y] = point;
        const distSquare = x*x + y*y;
        return [x, y, distSquare];
    });
    dist.sort((a, b) => {
        const [, , dist1] = a;
        const [, , dist2] = b;
        return dist1 - dist2;
    })
    console.log(dist);
    return dist.slice(0, k).map(a => [a[0], a[1]]);
}