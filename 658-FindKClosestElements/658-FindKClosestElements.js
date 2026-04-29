// Last updated: 4/29/2026, 10:28:56 AM
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    const closest = arr.map((i, idx) => {
        return {
            dist: Math.abs(i - x),
            idx,
            val: i,
        };
    });
    console.log(closest);
    closest.sort((a, b) => {
        if(a.dist === b.dist) {
            return a.val - b.val;
        } else {
            return a.dist - b.dist;
        }
    });
    console.log(closest);
    const res = closest.slice(0, k);
    res.sort((a, b) => a.val - b.val);
    console.log(res);
    return res.map(i => i.val);
};