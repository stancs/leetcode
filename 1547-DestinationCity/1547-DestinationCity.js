// Last updated: 4/29/2026, 10:23:49 AM
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const hash = {};
    for(const path of paths) {
        const [start, end] = path;
        hash[start] = end;
    }
    console.log(hash);
    for(const path of paths) {
        const [ , end] = path;
        if(!hash[end]) {
            return end;
        }
    }
};