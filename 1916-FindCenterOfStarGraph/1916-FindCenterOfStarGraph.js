// Last updated: 4/29/2026, 10:22:30 AM
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const hash = {};
    for(const [u, v] of edges) {
        if(hash[u] === undefined) {
            hash[u] = 1;
        } else {
            hash[u]++;
        }
        if(hash[v] === undefined) {
            hash[v] = 1;
        } else {
            hash[v]++;
        }
    }
    console.log(hash);
    const len = edges.length;
    const keys = Object.keys(hash);
    for(const key of keys) {
        if(hash[key] === len) {
            return key;
        }
    }
};