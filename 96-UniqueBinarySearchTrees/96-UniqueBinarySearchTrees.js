// Last updated: 4/29/2026, 10:34:50 AM
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const map = { '1': 1};
    return getUniqueBST(n, map);
};

function getUniqueBST(n, map) {
    if(map[n] !== undefined) {
        return map[n];
    }
    if(n <= 1) {
        map[n] = 1;
        return 1;
    }
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum += getUniqueBST(i, map) * getUniqueBST(n-i-1, map); 
    }
    return sum;
}